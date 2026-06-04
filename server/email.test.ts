import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the email module
vi.mock("./email", () => ({
  sendEmail: vi.fn(),
}));

import { sendEmail } from "./email";
const mockSendEmail = vi.mocked(sendEmail);

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("email.sendContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sends an email successfully with valid input", async () => {
    mockSendEmail.mockResolvedValue({ success: true, id: "test-email-id" });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.email.sendContactForm({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "+1 587-273-1668",
      subject: "Appointment Inquiry",
      message: "I'd like to book a balayage appointment.",
    });

    expect(result).toEqual({ success: true });
    expect(mockSendEmail).toHaveBeenCalledOnce();
    expect(mockSendEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: "[Hello Beauty Lounge] Appointment Inquiry",
        replyTo: "jane@example.com",
      })
    );
  });

  it("returns success: false when email sending fails", async () => {
    mockSendEmail.mockResolvedValue({ success: false, error: "Rate limit exceeded" });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.email.sendContactForm({
      name: "John Smith",
      email: "john@example.com",
      subject: "Question",
      message: "Do you offer bridal packages?",
    });

    expect(result).toEqual({ success: false });
  });

  it("rejects invalid email address", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.email.sendContactForm({
        name: "Test",
        email: "not-an-email",
        subject: "Test",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("rejects empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.email.sendContactForm({
        name: "",
        email: "valid@example.com",
        subject: "Test",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("rejects empty message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.email.sendContactForm({
        name: "Test",
        email: "valid@example.com",
        subject: "Test",
        message: "",
      })
    ).rejects.toThrow();
  });
});
