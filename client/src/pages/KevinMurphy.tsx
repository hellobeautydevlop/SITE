import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Sparkles, Shield, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import { useLocation } from "wouter";
import KevinMurphyCatalog from "@/components/KevinMurphyCatalog";

export default function KevinMurphy() {
  const [, setLocation] = useLocation();

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
      <SEO 
        title="Kevin Murphy Products | Hello Beauty Lounge Red Deer"
        description="Discover our premium Kevin Murphy hair care range. Environmentally conscious, sulfate-free, and paraben-free products for professional results."
        keywords="Kevin Murphy products Red Deer, sulfate free hair care Alberta, premium salon shampoo, eco friendly hair treatments"
        canonicalUrl="https://hellobeautylounge.com/kevin-murphy"
      />
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
            Kevin Murphy Products
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
              Premium Salon Partner
            </span>
            <h2 className="text-4xl md:text-6xl mb-6 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Skincare for <span className="text-gold">Your Hair</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
              At Hello Beauty Lounge, we're proud to use Kevin Murphy professional hair care products. Our commitment to premium, environmentally conscious, and weightless formulations ensures every client receives salon-quality results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                onClick={() => window.open("https://kevinmurphy.com.au/us/en/", "_blank")}
              >
                Explore Kevin Murphy <ArrowRight className="w-4 h-4 ml-2" />
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

      {/* Why Kevin Murphy Section */}
      <section className="py-16 bg-white border-y border-border/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why We Choose Kevin Murphy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 border border-accent/20 text-accent">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Product Range Catalog */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Product Range
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Explore the premium selection of Kevin Murphy products we use and recommend at our salon.
            </p>
          </div>
          
          <KevinMurphyCatalog />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container">
          <div className="bg-white rounded-3xl p-12 md:p-16 text-center border border-border/50 shadow-sm max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Experience Kevin Murphy Excellence
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book your appointment today and discover the difference premium hair care products make. Our stylists are trained to maximize the benefits of Kevin Murphy formulations for your unique hair needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                onClick={() => window.open("https://www.vagaro.com/hellobeautylounge/staff", "_blank")}
              >
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary/30 rounded-full px-8 py-6"
                onClick={() => window.open("https://kevinmurphy.com.au/us/en/", "_blank")}
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
