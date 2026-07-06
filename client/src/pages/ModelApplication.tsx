import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ArrowLeft, Upload, Star, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

export default function ModelApplication() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    hairType: "",
    hairLength: "",
    experience: "",
    skills: "",
    portfolio: "",
    availability: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError("Please fill in all required fields");
      setTimeout(() => setError(""), 5000);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Format model application data as email content
      const emailMessage = `
Hair Model Application Submission

PERSONAL INFORMATION
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.age ? `Age: ${formData.age}` : ""}

HAIR INFORMATION
${formData.hairType ? `Hair Type: ${formData.hairType}` : ""}
${formData.hairLength ? `Hair Length: ${formData.hairLength}` : ""}

EXPERIENCE & SKILLS
${formData.experience ? `Modeling Experience: ${formData.experience}` : ""}
${formData.skills ? `Skills & Talents:\n${formData.skills}` : ""}

PORTFOLIO & AVAILABILITY
${formData.portfolio ? `Portfolio/Social Media: ${formData.portfolio}` : ""}
${formData.availability ? `Availability: ${formData.availability}` : ""}

${formData.message ? `ADDITIONAL MESSAGE:\n${formData.message}` : ""}
      `.trim();

      // Use existing contact form endpoint
      const response = await fetch("/api/trpc/email.sendContactForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            subject: "Hair Model Application",
            message: emailMessage,
          },
        }),
        credentials: "include",
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          age: "",
          hairType: "",
          hairLength: "",
          experience: "",
          skills: "",
          portfolio: "",
          availability: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (err: any) {
      setError(err.message || "Failed to submit application. Please try again.");
      setTimeout(() => setError(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Hair Model Application | Hello Beauty Lounge"
        description="Apply to be a hair model at Hello Beauty Lounge. Showcase your hair and talents in our professional salon transformations."
        keywords="hair model, model application, salon model, hair transformation"
        canonicalUrl="https://hellobeautylounge.com/model-application"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Model Application
          </h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold tracking-widest uppercase text-sm">
              Join Our Team
            </span>
          </div>
          <h2 className="text-5xl mb-6 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Become a Hair <span className="text-gold">Model</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            Are you passionate about hair transformation? We're looking for talented models to showcase our latest styles, colors, and techniques. Whether you're a first-time model or experienced, we'd love to feature your hair in our portfolio and transformations.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border border-border">
              <Star className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">Professional Styling</h3>
              <p className="text-sm text-foreground/70">
                Experience expert styling from our master stylists
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <Upload className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">Portfolio Building</h3>
              <p className="text-sm text-foreground/70">
                Get professional photos for your portfolio
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <Sparkles className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">Showcase Your Hair</h3>
              <p className="text-sm text-foreground/70">
                Feature your transformation on our website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24">
        <div className="container max-w-2xl">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-border">
            <h3 className="text-3xl mb-8 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Application Form
            </h3>

            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  ✓ Application submitted successfully! We'll review your application and contact you soon.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                    required
                  />
                </div>
              </div>

              {/* Hair Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Your age"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Hair Type</label>
                  <select
                    name="hairType"
                    value={formData.hairType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="">Select hair type</option>
                    <option value="straight">Straight</option>
                    <option value="wavy">Wavy</option>
                    <option value="curly">Curly</option>
                    <option value="coily">Coily</option>
                    <option value="mixed">Mixed Texture</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Hair Length</label>
                <select
                  name="hairLength"
                  value={formData.hairLength}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  <option value="">Select hair length</option>
                  <option value="short">Short (above shoulders)</option>
                  <option value="medium">Medium (shoulders to bra strap)</option>
                  <option value="long">Long (below bra strap)</option>
                  <option value="very-long">Very Long (mid-back or longer)</option>
                </select>
              </div>

              {/* Experience & Skills */}
              <div>
                <label className="block text-sm font-semibold mb-2">Modeling Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  <option value="">Select experience level</option>
                  <option value="no-experience">No modeling experience</option>
                  <option value="some-experience">Some experience</option>
                  <option value="experienced">Experienced model</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Skills & Talents</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Tell us about your skills, talents, and why you'd be a great hair model (e.g., photography experience, social media presence, specific interests)"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              {/* Portfolio & Availability */}
              <div>
                <label className="block text-sm font-semibold mb-2">Portfolio / Social Media Links</label>
                <input
                  type="text"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="Instagram, portfolio website, or other links (optional)"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Availability</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  <option value="">Select availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-semibold mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us anything else you'd like us to know about you"
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>

            <p className="text-sm text-foreground/60 text-center mt-8">
              We'll review your application and contact you within 3-5 business days.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-2xl">
          <h3 className="text-3xl mb-12 text-center font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Model Application FAQ
          </h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-border">
              <h4 className="font-semibold mb-2">Do I need modeling experience?</h4>
              <p className="text-foreground/70">
                No! We welcome models of all experience levels. Whether this is your first time or you're an experienced model, we'd love to hear from you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h4 className="font-semibold mb-2">What hair types do you work with?</h4>
              <p className="text-foreground/70">
                We work with all hair types and textures! From straight to coily, we celebrate every hair type and create transformations that showcase your unique beauty.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h4 className="font-semibold mb-2">Will I get photos for my portfolio?</h4>
              <p className="text-foreground/70">
                Yes! Professional photos are included as part of the modeling experience. You'll receive high-quality images perfect for your portfolio and social media.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h4 className="font-semibold mb-2">How long does a session take?</h4>
              <p className="text-foreground/70">
                Typical sessions range from 2-4 hours depending on the service. We'll discuss timing details after your application is approved.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h4 className="font-semibold mb-2">Is there a cost?</h4>
              <p className="text-foreground/70">
                Most model sessions are complimentary or discounted in exchange for portfolio photos and potential feature on our website and social media.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
