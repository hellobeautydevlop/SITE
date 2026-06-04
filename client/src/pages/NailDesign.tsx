import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { ArrowLeft, Check, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function NailDesign() {
  const [, setLocation] = useLocation();

  const services = [
    {
      name: "Brow Tinting",
      description: "Professional brow tinting for defined, polished look",
      price: "$21.50 avg",
      duration: "15-30 minutes",
      details: [
        "Professional tinting",
        "Color customization",
        "Long-lasting results",
        "Quick service",
      ],
    },
    {
      name: "Waxing - Brow Shaping",
      description: "Expert brow shaping and waxing",
      price: "$19.17 avg",
      duration: "15-30 minutes",
      details: [
        "Professional shaping",
        "Precise waxing",
        "Custom arch",
        "Smooth finish",
      ],
    },
    {
      name: "Custom Haircut",
      description: "Personalized nail design services",
      price: "$36.20 avg",
      duration: "1-1.5 hours",
      details: [
        "Custom design",
        "Professional finish",
        "Premium products",
        "Long-lasting",
      ],
    },
    {
      name: "Makeup - Application",
      description: "Professional makeup application for any occasion",
      price: "$123.33 avg",
      duration: "45 minutes - 1 hour",
      details: [
        "Professional makeup artist",
        "Custom colors",
        "Long-lasting formula",
        "Perfect for events",
      ],
    },
    {
      name: "Blowout",
      description: "Professional blowout styling",
      price: "$54.17 avg",
      duration: "45 minutes - 1 hour",
      details: [
        "Professional styling",
        "Volume enhancement",
        "Shine-enhancing",
        "Quick service",
      ],
    },
    {
      name: "Add-On: Toner Gloss",
      description: "Enhance your nails with professional toner gloss",
      price: "$65.00 avg",
      duration: "15-30 minutes",
      details: [
        "Shine enhancement",
        "Color refresh",
        "Professional finish",
        "Quick add-on",
      ],
    },
  ];

  const specialists = [
    {
      name: "Tiara Black",
      specialty: "Beauty Services",
      reviews: 6,
      rating: 5.0,
    },
    {
      name: "Melissa Mitchell",
      specialty: "Beauty Specialist",
      reviews: 11,
      rating: 5.0,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Brow Tinting, Waxing & Beauty Services | Red Deer"
        description="Enhance your natural beauty with expert brow tinting, brow shaping, waxing, and custom beauty services in Red Deer, AB. Professional care and clean, precise techniques."
        keywords="brow tinting Red Deer, brow waxing Alberta, professional facial waxing, beauty services Red Deer, brow shaping salon"
        canonicalUrl="https://hellobeautylounge.com/services/nail-design"
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
            Nail Design
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
              Professional Nail Design
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Express your style with our professional nail design services. From classic manicures to custom nail art, our talented nail artists create beautiful, durable nails that complete your look and boost your confidence.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
              >
                Book Your Nails
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
            Our Nail Services
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

      {/* Nail Types Comparison */}
      <section className="py-24 bg-accent/5">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nail Types Explained
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h4 className="text-2xl mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Gel Polish
              </h4>
              <p className="text-foreground/70 mb-4">Modern, long-lasting option with a glossy finish. Perfect for those wanting durability without commitment.</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Lasts 3-4 weeks</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Chip-resistant</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Easy removal</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Many colors available</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h4 className="text-2xl mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Acrylic
              </h4>
              <p className="text-foreground/70 mb-4">Durable, sculptured nails for maximum length and strength. Great for custom designs and special occasions.</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Lasts 4-6 weeks</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Very durable</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Custom shapes</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Design options</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h4 className="text-2xl mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Natural Polish
              </h4>
              <p className="text-foreground/70 mb-4">Classic manicure with regular polish. Perfect for a natural look and frequent color changes.</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Lasts 1-2 weeks</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Easy color change</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Natural look</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Budget-friendly</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Nail Services */}
      <section className="py-24">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Our Nail Services
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expert Nail Artists</h4>
                  <p className="text-foreground/70">Our talented artists have years of experience creating beautiful, custom nail designs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Premium Products</h4>
                  <p className="text-foreground/70">We use only high-quality, professional-grade nail products for lasting results.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sanitation First</h4>
                  <p className="text-foreground/70">We follow strict sanitation protocols to ensure your safety and health.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Custom Designs</h4>
                  <p className="text-foreground/70">From classic to creative, we bring your nail design vision to life.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Relaxing Atmosphere</h4>
                  <p className="text-foreground/70">Enjoy a calm, luxurious environment while we pamper your nails.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Affordable Luxury</h4>
                  <p className="text-foreground/70">Premium nail services at competitive prices that fit your budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="py-24 bg-accent/5">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Nail Artists
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
      <section className="py-24">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">How long do gel nails last?</h4>
              <p className="text-foreground/70">Gel nails typically last 3-4 weeks before needing a fill-in or removal. Regular maintenance keeps them looking fresh.</p>
            </div>
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Are acrylic nails damaging?</h4>
              <p className="text-foreground/70">When applied and removed properly, acrylics don't damage your nails. We use gentle techniques and provide aftercare advice to keep your natural nails healthy.</p>
            </div>
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Can I get custom nail art?</h4>
              <p className="text-foreground/70">Absolutely! Our nail artists can create custom designs for any occasion. Bring inspiration photos or describe your vision.</p>
            </div>
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">How do I care for my nails?</h4>
              <p className="text-foreground/70">Avoid harsh chemicals, use cuticle oil regularly, wear gloves when cleaning, and schedule regular maintenance appointments to keep your nails healthy and beautiful.</p>
            </div>
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Do you offer walk-ins?</h4>
              <p className="text-foreground/70">We accept walk-ins based on availability, but we recommend booking in advance to ensure your preferred time and artist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/5">
        <div className="container text-center">
          <h3 className="text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Pamper Your Nails?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Book your nail appointment today and experience beautiful, professional nail design.
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
