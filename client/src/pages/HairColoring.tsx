import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Sparkles, Info } from "lucide-react";
import { useLocation } from "wouter";
import ServiceDetailModal from "@/components/ServiceDetailModal";

interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  details: string[];
  additionalInfo?: string;
}

export default function HairColoring() {
  const [, setLocation] = useLocation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
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
      additionalInfo: "Price may vary based on hair length, density, and additional product required.",
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
      additionalInfo: "Ideal for maintaining existing highlights or adding subtle brightness around the face.",
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
      additionalInfo: "Recommended for maximum blonde impact or global dimensional changes.",
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
      additionalInfo: "Best for covering grey hair or matching regrowth with mid-lengths and ends.",
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
      additionalInfo: "Requires a detailed prior consultation. Charged hourly for complex transformations.",
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
      additionalInfo: "Perfect for rich, single-tone brunettes, vibrant reds, or deep coppers.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 glassmorphism border-b border-border/50">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-all duration-300 hover:-translate-x-1"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hair Coloring & Balayage
          </h1>
          <Button
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 shadow-sm hover:shadow-md transition-all"
            onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs mb-4 bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
              Artistic Color & Balayage
            </span>
            <h2 className="text-4xl md:text-6xl mb-6 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hair Coloring & <span className="text-gold">Balayage</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Transform your look with our expert hair coloring services. From vibrant full color to natural balayage highlights, our master colorists use premium products and techniques to deliver stunning results that enhance your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
              >
                Book Your Color Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/30 rounded-full px-8 py-6"
                onClick={() => setLocation("/#contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Color Menu
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Click any service card to view detailed specifications, inclusions, and custom guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 luxury-card cursor-pointer flex flex-col justify-between h-full"
                onClick={() => setSelectedService(service)}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-semibold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.name}
                    </h4>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground/40 hover:text-accent transition-colors">
                      <Info className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-accent font-semibold text-lg mb-1">{service.price}</p>
                  <p className="text-xs text-foreground/50 mb-4 uppercase tracking-wider">{service.duration}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8 border-t border-border/50 pt-4">
                    {service.details.slice(0, 3).map((detail, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">{detail}</span>
                      </div>
                    ))}
                    {service.details.length > 3 && (
                      <p className="text-xs text-accent font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        + {service.details.length - 3} more detail inclusions
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-5 text-sm font-semibold mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank');
                  }}
                >
                  Book {service.name.split(' ')[0]}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Detail Modal */}
      <ServiceDetailModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
