import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Sparkles, Shield } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modern Luxury Minimalism
 * - Warm taupe (#8B7355) + rose-gold (#D4A574) accents
 * - Playfair Display (headlines) + Lato (body)
 * - Premium positioning for Kevin Murphy partnership
 */

export default function KevinMurphy() {
  const [, setLocation] = useLocation();

  const products = [
    {
      name: "Color Care",
      description: "Specialized formulations to protect and enhance color-treated hair, maintaining vibrancy and shine.",
      benefits: ["Color protection", "Enhanced shine", "Long-lasting results"],
      icon: Sparkles,
    },
    {
      name: "Styling Products",
      description: "Lightweight styling solutions that provide hold without weighing hair down, perfect for all hair types.",
      benefits: ["Weightless hold", "Flexible styling", "Natural finish"],
      icon: Leaf,
    },
    {
      name: "Treatment & Care",
      description: "Advanced treatment formulas that repair, nourish, and strengthen hair from root to tip.",
      benefits: ["Hair repair", "Deep nourishment", "Strengthening"],
      icon: Shield,
    },
  ];

  const features = [
    {
      title: "Environmentally Conscious",
      description: "Kevin Murphy is committed to sustainable practices and eco-friendly formulations.",
    },
    {
      title: "Premium Quality",
      description: "Professional-grade products used by salons worldwide for exceptional results.",
    },
    {
      title: "Weightless Formulas",
      description: "Advanced technology delivers results without heaviness or buildup.",
    },
    {
      title: "Professional Results",
      description: "Trusted by stylists and colorists for consistent, beautiful transformations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border hidden md:block">
        <div className="container py-4 flex justify-between items-center">
          <button
            onClick={() => setLocation("/")}
            className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hello Beauty Lounge
          </button>
          <div className="flex gap-8 items-center">
            <button onClick={() => setLocation("/")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => setLocation("/#services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => setLocation("/gallery")} className="text-foreground hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => setLocation("/#contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kevin Murphy
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              At Hello Beauty Lounge, we're proud to use Kevin Murphy professional hair care products. Our commitment to premium, environmentally conscious, and weightless formulations ensures every client receives salon-quality results.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.open("https://kevinmurphy.com.au/us/en/", "_blank")}
            >
              Explore Kevin Murphy <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Kevin Murphy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why We Choose Kevin Murphy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Product Range
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="p-8 border-border hover:shadow-lg transition-all duration-300">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {product.name}
                  </h3>
                  <p className="text-foreground/70 mb-6">{product.description}</p>
                  <div className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-sm text-foreground/70">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Experience Kevin Murphy Excellence
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Book your appointment today and discover the difference premium hair care products make. Our stylists are trained to maximize the benefits of Kevin Murphy formulations for your unique hair needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.open("https://www.vagaro.com/hellobeautylounge/staff", "_blank")}
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://kevinmurphy.com.au/us/en/", "_blank")}
              >
                Learn More About Kevin Murphy <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => setLocation("/")} className="block text-foreground/70 hover:text-primary transition-colors">
                  Home
                </button>
                <button onClick={() => setLocation("/#services")} className="block text-foreground/70 hover:text-primary transition-colors">
                  Services
                </button>
                <button onClick={() => setLocation("/gallery")} className="block text-foreground/70 hover:text-primary transition-colors">
                  Gallery
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Contact</h3>
              <div className="space-y-2 text-foreground/70">
                <p>+1 (587) 273-1668</p>
                <p>4919 59 Street Unit 120</p>
                <p>Red Deer, AB T4N 6C9</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-4">Partners</h3>
              <button
                onClick={() => window.open("https://kevinmurphy.com.au/us/en/", "_blank")}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                Kevin Murphy Official Site
              </button>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-foreground/60">
            <p>&copy; 2026 Hello Beauty Lounge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
