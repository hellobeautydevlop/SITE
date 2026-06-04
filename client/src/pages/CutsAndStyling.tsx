import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { ArrowLeft, Check, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function CutsAndStyling() {
  const [, setLocation] = useLocation();

  const services = [
    {
      name: "Adult Haircut - Long",
      description: "Custom cut tailored to your face shape and hair type",
      price: "$64.87 avg",
      duration: "1-1.5 hours",
      details: [
        "Face shape analysis",
        "Personalized style consultation",
        "Precision cutting technique",
        "Styling included",
      ],
    },
    {
      name: "Adult Haircut - Short",
      description: "Sharp, clean cuts with expert precision",
      price: "$53.95 avg",
      duration: "45 minutes - 1 hour",
      details: [
        "Precision cutting",
        "Line-up and detailing",
        "Shape maintenance",
        "Quick turnaround",
      ],
    },
    {
      name: "Men's Haircut",
      description: "Professional cuts with expert fading and styling",
      price: "$35.01 avg",
      duration: "30-45 minutes",
      details: [
        "Fade and blend options",
        "Line-up and detailing",
        "Product styling",
        "Quick service",
      ],
    },
    {
      name: "Child Haircut Medium",
      description: "Gentle, professional cuts for children",
      price: "$57.93 avg",
      duration: "30-45 minutes",
      details: [
        "Child-friendly approach",
        "Custom styling",
        "Quick service",
        "Fun experience",
      ],
    },
    {
      name: "Wash and Style",
      description: "Professional styling for any occasion",
      price: "$45.13 avg",
      duration: "1-1.5 hours",
      details: [
        "Blow-dry styling",
        "Volume enhancement",
        "Texture creation",
        "Styling product included",
      ],
    },
    {
      name: "Custom Haircut",
      description: "Personalized cut for your unique style",
      price: "$36.20 avg",
      duration: "1-1.5 hours",
      details: [
        "Custom design consultation",
        "Expert styling",
        "Long-lasting shape",
        "Maintenance tips included",
      ],
    },
  ];

  const specialists = [
    {
      name: "Tiara Black",
      specialty: "Precision Cuts & Styling",
      reviews: 6,
      rating: 5.0,
    },
    {
      name: "Melissa Mitchell",
      specialty: "Master Stylist",
      reviews: 11,
      rating: 5.0,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Professional Hair Cuts & Styling | Hello Beauty Lounge Red Deer"
        description="Expert hair cuts and styling in Red Deer, AB. Precision cuts tailored to your face shape, lifestyle, and hair type. Book your consultation today."
        keywords="haircuts Red Deer, professional hair styling Alberta, long haircuts, short hair cuts, salon blowout Red Deer"
        canonicalUrl="https://hellobeautylounge.com/services/cuts-and-styling"
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
            Cuts & Styling
          </h1>
          <Button
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Professional Cuts & Styling
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              From precision cuts to stunning styles, our expert stylists create looks that complement your features and express your personality. Whether it's a everyday cut or special occasion styling, we deliver results that make you feel confident and beautiful.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
              >
                Book Your Cut & Style
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/#contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Styling Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.name}
                </h4>
                <p className="text-accent font-semibold mb-2">{service.price}</p>
                <p className="text-sm text-foreground/60 mb-4">{service.duration}</p>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{detail}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
                >
                  Book {service.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Styling */}
      <section className="py-24 bg-accent/5">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Our Styling Services
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expert Consultation</h4>
                  <p className="text-foreground/70">We analyze your face shape, hair texture, and lifestyle to recommend the perfect cut and style.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Precision Cutting</h4>
                  <p className="text-foreground/70">Our stylists use advanced cutting techniques to create clean, sharp lines and perfect proportions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Styling Expertise</h4>
                  <p className="text-foreground/70">From everyday looks to special occasion styles, we create looks that make you feel confident.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Maintenance Tips</h4>
                  <p className="text-foreground/70">We provide personalized care instructions to help you maintain your style between appointments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Trendy & Timeless</h4>
                  <p className="text-foreground/70">We stay updated on current trends while offering classic styles that never go out of fashion.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Products</h4>
                  <p className="text-foreground/70">We use premium styling products to ensure your style lasts and looks its best.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="py-24">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Master Stylists
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {specialists.map((specialist, index) => (
              <Card key={index} className="p-8 text-center">
                <h4 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {specialist.name}
                </h4>
                <p className="text-accent font-semibold mb-4">{specialist.specialty}</p>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/70 mb-6">({specialist.reviews} reviews)</p>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
                >
                  Book with {specialist.name.split(' ')[0]}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-accent/5">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">How often should I get a haircut?</h4>
              <p className="text-foreground/70">We recommend getting a cut every 4-8 weeks to maintain your style and keep your hair healthy. This depends on your hair type and the style you're maintaining.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Can you work with my hair type?</h4>
              <p className="text-foreground/70">Absolutely! Our stylists are experienced with all hair types—straight, curly, wavy, and textured. We customize every cut and style to work with your natural hair.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Do you offer bridal styling?</h4>
              <p className="text-foreground/70">Yes! We specialize in bridal and special occasion styling. Book a consultation to discuss your vision and ensure your big day is perfect.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">What should I bring to my appointment?</h4>
              <p className="text-foreground/70">Bring inspiration photos of styles you love! This helps us understand your vision and create the perfect look for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center">
          <h3 className="text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Your Perfect Cut & Style?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience expert styling from our master stylists.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
          >
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}
