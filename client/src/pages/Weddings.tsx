import { useState } from "react";
import { Link } from "wouter";
import { Heart, Calendar, MapPin, Clock, Phone, Mail, Sparkles, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function Weddings() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Weddings" },
  ];

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    guestCount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = `
Wedding Inquiry Details:
------------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Wedding Date: ${formData.weddingDate}
Guest Count: ${formData.guestCount}

Message:
${formData.message}

---
This inquiry was submitted from the Hello Beauty Lounge website.
      `.trim();

      const mailtoLink = `mailto:info@hellobeautylounge.com?subject=Wedding Inquiry from ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setSuccessMessage("Thank you! Your wedding inquiry has been sent. We'll be in touch within 24 hours.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        weddingDate: "",
        guestCount: "",
        message: "",
      });

      setTimeout(() => setSuccessMessage(null), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: "Bridal Hair",
      description: "Custom bridal updos and styles designed to complement your wedding dress and vision.",
      icon: "👰",
    },
    {
      title: "Bridesmaid Styling",
      description: "Coordinated hairstyles for your entire bridal party with professional finishing touches.",
      icon: "✨",
    },
    {
      title: "Hair Extensions",
      description: "Add volume, length, and glamour to your wedding day look with premium extensions.",
      icon: "💇",
    },
    {
      title: "Hair Coloring",
      description: "Refresh your color before the big day with our expert balayage and color services.",
      icon: "🎨",
    },
    {
      title: "Trial Sessions",
      description: "Schedule a pre-wedding trial to perfect your look and ensure complete satisfaction.",
      icon: "📋",
    },
    {
      title: "On-Site Services",
      description: "We offer traveling services to your venue for ultimate convenience on your special day.",
      icon: "🚗",
    },
  ];

  return (
    <>
      <SEO
        title="Wedding Hair Services | Hello Beauty Lounge"
        description="Expert bridal hair and wedding styling services in Red Deer. Custom updos, bridesmaid styling, and on-site services for your perfect day."
        keywords="bridal hair, wedding hair, bridesmaid styling, Red Deer weddings"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="order-2 md:order-1">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/bridal-hero-Se8u4U5JcKKyCB6ZUtjf8h.webp" 
                alt="Luxury Bridal Hair - Hello Beauty Lounge"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          
            <div className="order-1 md:order-2 max-w-2xl">
              <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
                <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                  Your Perfect Day
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wedding Hair Excellence
              </h1>
              
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Let us create the perfect hairstyle for your wedding day. From bridal updos to bridesmaid styling, we specialize in making you feel absolutely beautiful.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full"
                >
                  Book Your Consultation
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3 rounded-full"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Complete Wedding Solutions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From initial consultation to your big day, we provide comprehensive hair services designed specifically for weddings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 luxury-card"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Vision, Our Expertise
              </h2>
              
              <div className="space-y-4">
                {[
                  "Expert stylists with years of bridal experience",
                  "Custom designs tailored to your unique style",
                  "Premium products for long-lasting hold",
                  "Trial sessions to perfect your look",
                  "On-site services available for your venue",
                  "Professional, stress-free experience",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground/80 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-border/50 luxury-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Quick Facts
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Booking Timeline</span>
                  </div>
                  <p className="text-foreground/70">We recommend booking 3-6 months in advance for wedding dates.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Styling Time</span>
                  </div>
                  <p className="text-foreground/70">Bridal styling typically takes 45-60 minutes per person.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">Service Locations</span>
                  </div>
                  <p className="text-foreground/70">In-salon or on-site services available throughout Red Deer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-background">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Plan Your Wedding Hair
            </h2>
            <p className="text-lg text-foreground/70">
              Fill out the form below and we'll contact you to discuss your wedding hair vision.
            </p>
          </div>

          {successMessage && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
              <p className="text-green-800 font-semibold">{successMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white border border-border/50 rounded-2xl p-8 luxury-card space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="rounded-lg border-border/50"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="rounded-lg border-border/50"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="rounded-lg border-border/50"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="rounded-lg border-border/50"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleInputChange}
                required
                className="rounded-lg border-border/50"
              />
              <Input
                type="number"
                name="guestCount"
                placeholder="Number of People (Bride + Party)"
                value={formData.guestCount}
                onChange={handleInputChange}
                required
                className="rounded-lg border-border/50"
              />
            </div>

            <Textarea
              name="message"
              placeholder="Tell us about your wedding vision, style preferences, and any special requests..."
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="rounded-lg border-border/50"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-4">
              Prefer to call us directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15872731668"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-semibold"
              >
                <Phone className="w-5 h-5" />
                +1 (587) 273-1668
              </a>
              <a
                href="mailto:info@hellobeautylounge.com"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-semibold"
              >
                <Mail className="w-5 h-5" />
                info@hellobeautylounge.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
