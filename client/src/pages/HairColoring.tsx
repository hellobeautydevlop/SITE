import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function HairColoring() {
  const [, setLocation] = useLocation();

  const services = [
    {
      name: "Balayage & Foilayage",
      description: "Hand-painted or foil highlights for natural, dimensional color",
      price: "$257.76 avg",
      duration: "2.5-3.5 hours",
      details: [
        "Custom color placement",
        "Blended highlights",
        "Toner application",
        "Deep conditioning treatment",
      ],
    },
    {
      name: "The Partial Highlight",
      description: "Precision partial highlights for subtle dimension",
      price: "$178.14 avg",
      duration: "2-3 hours",
      details: [
        "Strategic placement",
        "Blended tones",
        "Shine-enhancing gloss",
        "Color protection",
      ],
    },
    {
      name: "The Full Highlight",
      description: "Complete head of dimensional highlights",
      price: "$271.93 avg",
      duration: "2.5-3.5 hours",
      details: [
        "Full head coverage",
        "Multiple color tones",
        "Toner application",
        "Conditioning treatment",
      ],
    },
    {
      name: "Color Retouch",
      description: "Refresh your existing color with precision",
      price: "$127.14 avg",
      duration: "1.5-2 hours",
      details: [
        "Root color matching",
        "Precise application",
        "Gloss included",
        "Quick turnaround",
      ],
    },
    {
      name: "The Color Correction",
      description: "Expert correction of previous color mishaps",
      price: "$316.67 avg",
      duration: "3-4 hours",
      details: [
        "Damage assessment",
        "Custom correction plan",
        "Professional-grade products",
        "Intensive conditioning",
      ],
    },
    {
      name: "Solid Color",
      description: "Complete hair color transformation",
      price: "$153.33 avg",
      duration: "2-3 hours",
      details: [
        "Professional consultation",
        "Premium color products",
        "Strand test included",
        "Color protection treatment",
      ],
    },
  ];

  const specialists = [
    {
      name: "Melissa Mitchell",
      specialty: "Balayage & Color Corrections",
      reviews: 11,
      rating: 5.0,
    },
    {
      name: "Noon K",
      specialty: "Master Colorist",
      reviews: 12,
      rating: 5.0,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
            Hair Coloring & Balayage
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
              Hair Coloring & Balayage
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Transform your look with our expert hair coloring services. From vibrant full color to natural balayage highlights, our master colorists use premium products and techniques to deliver stunning results that enhance your natural beauty.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
              >
                Book Your Color Service
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
            Our Color Services
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

      {/* Why Choose Our Color Services */}
      <section className="py-24 bg-accent/5">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Our Color Services
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Premium Products</h4>
                  <p className="text-foreground/70">We use only the highest quality color products to ensure vibrant, long-lasting results.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expert Consultation</h4>
                  <p className="text-foreground/70">Our colorists provide personalized consultations to find the perfect shade for your skin tone.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Damage Protection</h4>
                  <p className="text-foreground/70">All services include protective treatments to keep your hair healthy and vibrant.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Color Correction Experts</h4>
                  <p className="text-foreground/70">Specialized in fixing color mishaps and achieving your dream shade safely.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Maintenance Plans</h4>
                  <p className="text-foreground/70">We provide aftercare advice to keep your color looking fresh between appointments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Strand Test Included</h4>
                  <p className="text-foreground/70">We always perform a strand test to ensure the perfect result for your hair type.</p>
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
            Our Color Specialists
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
              <h4 className="font-semibold mb-3 text-lg">How long does hair color last?</h4>
              <p className="text-foreground/70">Most hair color lasts 4-6 weeks depending on the type of color and your hair care routine. We recommend touch-ups every 4-8 weeks to maintain vibrancy.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Is a strand test necessary?</h4>
              <p className="text-foreground/70">Yes! We always perform a strand test 24-48 hours before coloring to ensure the perfect result and minimize any potential damage to your hair.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Can you fix color damage?</h4>
              <p className="text-foreground/70">Absolutely. Our color correction specialists are experts at fixing previous color mistakes. We'll assess your hair and create a safe plan to achieve your desired result.</p>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">What's the difference between balayage and foilayage?</h4>
              <p className="text-foreground/70">Balayage is hand-painted for a natural, blended look, while foilayage uses foils for more precise, dimensional highlights. Both create beautiful results—it depends on your preference!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center">
          <h3 className="text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Transform Your Hair?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Book your hair coloring appointment today and experience the Hello Beauty Lounge difference.
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
