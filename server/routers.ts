import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { sendEmail } from "./email";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  email: router({
    /**
     * Public contact form endpoint.
     * Sends an email to the salon owner with the visitor's message.
     */
    sendContactForm: publicProcedure
      .input(
        z.object({
          name: z.string().min(1).max(100),
          email: z.string().email().max(200),
          phone: z.string().max(30).optional(),
          subject: z.string().min(1).max(200),
          message: z.string().min(1).max(5000),
        })
      )
      .mutation(async ({ input }) => {
        const ownerEmail = process.env.OWNER_EMAIL || "onboarding@resend.dev";

        const htmlBody = `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${input.name} (${input.email})</p>
          ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ""}
          <p><strong>Subject:</strong> ${input.subject}</p>
          <hr />
          <p>${input.message.replace(/\n/g, "<br />")}</p>
        `;

        const result = await sendEmail({
          to: ownerEmail,
          subject: `[Hello Beauty Lounge] ${input.subject}`,
          html: htmlBody,
          replyTo: input.email,
        });

        if (!result.success) {
          console.error("[Contact Form] Failed to send email:", result.error);
        }

        return { success: result.success } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
