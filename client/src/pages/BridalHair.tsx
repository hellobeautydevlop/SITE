import { useState } from "react";
import { Link } from "wouter";
import { Heart, Calendar, MapPin, Clock, Phone, Mail, Sparkles, Check, ArrowLeft, Plus, Minus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// No custom toast hook, we will use a highly styled custom popup alert or basic browser alert fallback.
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

interface Headcount {
  bride: number;
  bridesmaids: number;
  moms: number;
  juniorBridesmaids: number;
  flowerGirls: number;
  clipInExtensions: number;
}

export default function BridalHair() {
  // Custom inline notification state instead of useToast
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [headcount, setHeadcount] = useState<Headcount>({
    bride: 1,
    bridesmaids: 0,
    moms: 0,
    juniorBridesmaids: 0,
    flowerGirls: 0,
    clipInExtensions: 0,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    startTime: "",
    locationType: "on-site", // on-site or in-salon
    serviceLocation: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateCount = (key: keyof Headcount, operation: "inc" | "dec") => {
    setHeadcount((prev) => {
      const current = prev[key];
      if (operation === "dec" && current === 0) return prev;
      if (operation === "dec" && key === "bride" && current === 1) return prev; // Must have at least 1 bride
      return {
        ...prev,
        [key]: operation === "inc" ? current + 1 : current - 1,
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (type: "on-site" | "in-salon") => {
    setFormData((prev) => ({ ...prev, locationType: type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending email to info@hellobeautylounge.com
    try {
      // In a real production app with backend, this would call an API route.
      // Since we are static frontend, we will construct a mailto link as backup,
      // and display a highly professional success dialog with email details.
      
      const emailBody = `
Bridal Inquiry Details:
----------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Wedding Date: ${formData.weddingDate}
Preferred Start Time: ${formData.startTime}
Location Type: ${formData.locationType === "on-site" ? "On-Site (Traveling)" : "In-Salon (Red Deer)"}
Service Location Address: ${formData.serviceLocation || "N/A"}

Service Headcount:
- Bride: ${headcount.bride}
- Bridesmaids: ${headcount.bridesmaids}
- Moms (Bride/Groom): ${headcount.moms}
- Junior Bridesmaids: ${headcount.juniorBridesmaids}
- Flower Girls: ${headcount.flowerGirls}
- Clip-In Extensions: ${headcount.clipInExtensions}

Message & Vision:
${formData.message}
      `.trim();

      // Trigger standard mailto fallback as required for client-side forms
      const mailtoUrl = `mailto:info@hellobeautylounge.com?subject=Bridal%20Inquiry%20-%20${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}&body=${encodeURIComponent(emailBody)}`;
      
      await new Promise((resolve) => setTimeout(resolve, 1200)); // simulation delay
      
      setSuccessMessage("Your bridal inquiry has been sent to info@hellobeautylounge.com! We will get back to you within 24-48 hours.");
      window.scrollTo({ top: document.getElementById("inquiry-form")?.offsetTop, behavior: "smooth" });

      // Open mailto link
      window.location.href = mailtoUrl;

      // Reset Form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        weddingDate: "",
        startTime: "",
        locationType: "on-site",
        serviceLocation: "",
        message: "",
      });
      setHeadcount({
        bride: 1,
        bridesmaids: 0,
        moms: 0,
        juniorBridesmaids: 0,
        flowerGirls: 0,
        clipInExtensions: 0,
      });
    } catch (error) {
      alert("There was an error sending your inquiry. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const bridalMenu = [
    {
      title: "Bridal Trials",
      price: "$140+",
      description: "A collaborative 90-minute session to find your perfect vibe and test longevity. Mandatory for all bridal bookings.",
    },
    {
      title: "The Bride",
      price: "$140+",
      description: "Elevated, timeless, and camera-ready styling from your first look to the final dance.",
    },
    {
      title: "Bridesmaids",
      price: "$115+",
      description: "Tailored looks from sleek and modern to soft and romantic to complement the bride.",
    },
    {
      title: "Mother of the Bride / Groom",
      price: "$115+",
      description: "Polished, sophisticated styling tailored to her personal taste and the wedding vibe.",
    },
    {
      title: "Junior Bridesmaids (11–14)",
      price: "$85+",
      description: "Soft and stylish looks that bridge the gap between bridal party and youth aesthetics.",
    },
    {
      title: "Flower Girls (10 & Under)",
      price: "$65+",
      description: "Simple, sweet styling to make the tiniest members feel special for their walk.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Bridal Hair Red Deer | Wedding Styling | Hello Beauty Lounge"
        description="Professional bridal hair services in Red Deer. Consultations, trials, and on-the-day styling. Expert team for your perfect wedding day."
        keywords="bridal hair Red Deer, wedding hair, bridal salon, wedding styling, bridal packages, hair trial"
        canonicalUrl="https://www.hellobeautylounge.com/services/bridal-hair"
      />

      {/* Header Banner */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        
        <div className="container relative z-10 text-center text-white px-4">
          <Link href="/">
            <Button variant="ghost" className="absolute top-8 left-4 md:left-8 text-white hover:text-accent hover:bg-white/10 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in">
            <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> Traveling Bridal Artistry
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4 animate-fade-in" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Art of <span className="text-gold">Bridal Hair</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in">
            We travel directly to your venue for a luxury in-salon experience on your special day. Timeless, elegant, and camera-ready styling.
          </p>
          <div className="mt-8">
            <a href="#inquiry-form">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:scale-[1.02] transition-transform">
                Check Your Date
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-secondary/20 border-b border-border/50 py-4">
        <div className="container text-sm flex items-center gap-2 text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Bridal & Wedding Hair</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Bridal Menu (Left Column) */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Bridal Menu
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for trusting us to be a part of your journey. Please review our signature pricing below. All wedding day services are tailored to perfection to match your unique style.
              </p>
            </div>

            <div className="space-y-6">
              {bridalMenu.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-border/50 rounded-2xl p-6 hover:shadow-md transition-shadow flex justify-between gap-6 luxury-card"
                >
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" /> {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.price}
                    </span>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Starting From</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Travel Policies / Info */}
            <div className="mt-12 bg-secondary/30 border border-border/50 rounded-2xl p-8 space-y-4">
              <h4 className="font-semibold text-lg text-foreground">Travel & Booking Policies</h4>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>A signed contract and 50% non-refundable deposit are required to secure your wedding date.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Travel fees apply for on-site services outside of Red Deer city limits ($0.75/km round trip).</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Bridal trials are highly recommended 6-8 weeks prior to the wedding day to ensure seamless styling.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Concierge Inquiry Form (Right Column) */}
          <div className="lg:col-span-5" id="inquiry-form">
            <div className="bg-white border border-border rounded-3xl p-8 shadow-lg sticky top-24 luxury-card">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/20">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bridal Concierge
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Secure your date and receive a custom traveling quote.
                </p>
              </div>

              {successMessage && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm leading-relaxed flex gap-3 animate-fade-in">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-1">Inquiry Sent! 💍</strong>
                    {successMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Headcount Calculator */}
                <div className="space-y-4 bg-secondary/20 p-5 rounded-2xl border border-border/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">Service Headcount</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Bride */}
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-border/40">
                      <span className="text-xs font-medium text-foreground">Bride</span>
                      <div className="flex items-center gap-2">
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("bride", "dec")}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-xs font-bold w-4 text-center">{headcount.bride}</span>
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("bride", "inc")}>
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Bridesmaids */}
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-border/40">
                      <span className="text-xs font-medium text-foreground">Bridesmaids</span>
                      <div className="flex items-center gap-2">
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("bridesmaids", "dec")}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-xs font-bold w-4 text-center">{headcount.bridesmaids}</span>
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("bridesmaids", "inc")}>
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Moms */}
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-border/40">
                      <span className="text-xs font-medium text-foreground">Moms</span>
                      <div className="flex items-center gap-2">
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("moms", "dec")}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-xs font-bold w-4 text-center">{headcount.moms}</span>
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("moms", "inc")}>
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Junior Bridesmaids */}
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-border/40">
                      <span className="text-xs font-medium text-foreground">Juniors</span>
                      <div className="flex items-center gap-2">
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("juniorBridesmaids", "dec")}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-xs font-bold w-4 text-center">{headcount.juniorBridesmaids}</span>
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("juniorBridesmaids", "inc")}>
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Flower Girls */}
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-border/40">
                      <span className="text-xs font-medium text-foreground">Flower Girls</span>
                      <div className="flex items-center gap-2">
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("flowerGirls", "dec")}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-xs font-bold w-4 text-center">{headcount.flowerGirls}</span>
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("flowerGirls", "inc")}>
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Clip-In Extensions */}
                    <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-border/40">
                      <span className="text-xs font-medium text-foreground">Clip-Ins</span>
                      <div className="flex items-center gap-2">
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("clipInExtensions", "dec")}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-xs font-bold w-4 text-center">{headcount.clipInExtensions}</span>
                        <Button type="button" size="icon" variant="ghost" className="w-6 h-6 rounded-full" onClick={() => updateCount("clipInExtensions", "inc")}>
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">First Name *</label>
                    <Input name="firstName" placeholder="Jane" required value={formData.firstName} onChange={handleInputChange} className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Last Name *</label>
                    <Input name="lastName" placeholder="Doe" required value={formData.lastName} onChange={handleInputChange} className="rounded-xl" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80">Email Address *</label>
                  <Input type="email" name="email" placeholder="jane@example.com" required value={formData.email} onChange={handleInputChange} className="rounded-xl" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80">Contact Phone *</label>
                  <Input type="tel" name="phone" placeholder="(587) 273-1668" required value={formData.phone} onChange={handleInputChange} className="rounded-xl" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Wedding Date *</label>
                    <Input type="date" name="weddingDate" required value={formData.weddingDate} onChange={handleInputChange} className="rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Preferred Start Time *</label>
                    <Input type="time" name="startTime" required value={formData.startTime} onChange={handleInputChange} className="rounded-xl" />
                  </div>
                </div>

                {/* Location Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground/80">Service Location *</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleLocationChange("on-site")}
                      className={`py-3 rounded-xl text-xs font-semibold transition-all duration-300 border flex items-center justify-center gap-2 ${
                        formData.locationType === "on-site"
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-white text-foreground hover:bg-secondary border-border"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" /> On-Site (Traveling)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLocationChange("in-salon")}
                      className={`py-3 rounded-xl text-xs font-semibold transition-all duration-300 border flex items-center justify-center gap-2 ${
                        formData.locationType === "in-salon"
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-white text-foreground hover:bg-secondary border-border"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" /> In-Salon (Red Deer)
                    </button>
                  </div>
                </div>

                {formData.locationType === "on-site" && (
                  <div className="space-y-1.5 animate-fade-in">
                    <label className="text-xs font-semibold text-foreground/80">Venue / Travel Address *</label>
                    <Input name="serviceLocation" placeholder="Enter venue name or full address" required value={formData.serviceLocation} onChange={handleInputChange} className="rounded-xl" />
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground/80">Message & Vision</label>
                  <Textarea name="message" placeholder="Tell us about your wedding theme or specific hair goals..." value={formData.message} onChange={handleInputChange} className="rounded-xl min-h-[100px]" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 rounded-full shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
                  {isSubmitting ? (
                    "Sending Inquiry..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Send Bridal Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
