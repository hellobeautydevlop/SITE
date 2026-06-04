import { useState } from "react";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendContactForm = trpc.email.sendContactForm.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        setFormState("success");
        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setFormState("error");
        setErrorMessage("Failed to send message. Please try again.");
      }
    },
    onError: (err) => {
      setFormState("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    sendContactForm.mutate({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      subject: subject.trim(),
      message: message.trim(),
    });
  };

  const handleReset = () => {
    setFormState("idle");
    setErrorMessage("");
  };

  // Success state
  if (formState === "success") {
    return (
      <div className="bg-white p-8 md:p-12 rounded-lg text-center animate-in fade-in duration-300">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse blur-md" />
            <div className="relative bg-green-50 rounded-full p-4">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
        </div>
        <h3
          className="text-2xl mb-3 text-primary"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Message Sent!
        </h3>
        <p className="text-foreground/70 mb-6 leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We'll get back to you as soon as possible,
          typically within 24 hours.
        </p>
        <Button
          variant="outline"
          className="border-accent text-accent hover:bg-accent/10 rounded-full px-6"
          onClick={handleReset}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-12 rounded-lg space-y-5"
    >
      <h3
        className="text-2xl mb-2 text-center"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Send Us a Message
      </h3>
      <p className="text-center text-foreground/60 text-sm mb-6">
        Have a question? We'd love to hear from you.
      </p>

      {/* Error banner */}
      {formState === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
            Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            maxLength={100}
            disabled={formState === "submitting"}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={200}
            disabled={formState === "submitting"}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
            Phone <span className="text-foreground/40">(optional)</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={30}
            disabled={formState === "submitting"}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="+1 (587) 000-0000"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            maxLength={200}
            disabled={formState === "submitting"}
            className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="How can we help?"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
          Message *
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={5000}
          rows={4}
          disabled={formState === "submitting"}
          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      <Button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full bg-accent hover:bg-accent/90 text-white py-3 text-base font-semibold rounded-lg transition-all duration-200 hover:shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}
