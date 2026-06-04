import { Resend } from "resend";
import { TRPCError } from "@trpc/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";

/**
 * Lazily initialized Resend client.
 * Throws a TRPCError if the API key is not configured.
 */
function getResendClient(): Resend {
  if (!RESEND_API_KEY) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Email service is not configured. RESEND_API_KEY is missing.",
    });
  }
  return new Resend(RESEND_API_KEY);
}

export interface SendEmailParams {
  /** Recipient email address */
  to: string | string[];
  /** Email subject line */
  subject: string;
  /** Plain-text body (optional if html is provided) */
  text?: string;
  /** HTML body (optional if text is provided) */
  html?: string;
  /** Sender address — defaults to onboarding@resend.dev for testing */
  from?: string;
  /** Reply-to address */
  replyTo?: string;
}

export interface SendEmailResult {
  success: boolean;
  id?: string;
  error?: string;
}

/**
 * Send an email using Resend.
 *
 * @returns Object with `success` flag and either `id` (on success) or `error` (on failure).
 */
export async function sendEmail(params: SendEmailParams): Promise<SendEmailResult> {
  const resend = getResendClient();

  const from = params.from || "Hello Beauty Lounge <onboarding@resend.dev>";

  try {
    const emailPayload: any = {
      from,
      to: Array.isArray(params.to) ? params.to : [params.to],
      subject: params.subject,
    };
    if (params.html) emailPayload.html = params.html;
    if (params.text) emailPayload.text = params.text;
    if (params.replyTo) emailPayload.replyTo = params.replyTo;

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error("[Email] Resend API error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err: any) {
    console.error("[Email] Unexpected error:", err);
    return { success: false, error: err?.message ?? "Unknown email error" };
  }
}
