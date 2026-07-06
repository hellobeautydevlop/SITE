import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Resend transporter
const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 465,
  secure: true,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY || "",
  },
});

async function startServer() {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Routes
  app.post("/api/trpc/email.sendContactForm", async (req, res) => {
    try {
      const { input } = req.body;
      const { name, email, phone, subject, message } = input;

      if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Send email to salon
      await transporter.sendMail({
        from: "onboarding@resend.dev",
        to: process.env.OWNER_EMAIL || "onboarding@resend.dev",
        subject: `${subject} from ${name}`,
        html: `
          <h2>${subject}</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr />
          <div style="white-space: pre-wrap; font-family: Arial, sans-serif;">
            ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>")}
          </div>
        `,
        replyTo: email,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
