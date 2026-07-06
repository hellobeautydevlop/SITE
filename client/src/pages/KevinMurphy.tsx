import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Sparkles, Shield, ArrowLeft, Droplets, Wind, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import { useLocation } from "wouter";
import KevinMurphyCatalog from "@/components/KevinMurphyCatalog";

export default function KevinMurphy() {
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: Leaf,
      title: "Environmentally Conscious",
      description: "Kevin Murphy is committed to sustainable practices and eco-friendly formulations.",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Professional-grade products used by salons worldwide for exceptional results.",
    },
    {
      icon: Wind,
      title: "Weightless Formulas",
      description: "Advanced technology delivers results without heaviness or buildup.",
    },
    {
      icon: Zap,
      title: "Professional Results",
      description: "Trusted by stylists and colorists for consistent, beautiful transformations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Kevin Murphy Salon Red Deer | Certified Partner | Hello Beauty"
        description="Certified Kevin Murphy salon in Red Deer. Premium, eco-conscious hair products. Expert stylists trained in Kevin Murphy techniques. Shop products online."
        keywords="Kevin Murphy salon Red Deer, Kevin Murphy products, certified salon, eco-conscious hair care, premium shampoo, professional products"
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
            onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Magazine Hero Section */}
      <section className="relative h-96 md:h-[550px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/salon-hero-luxury-RsaUTEvBovsCDPH6gANBN9.webp"
            alt="Kevin Murphy Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs mb-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              Premium Salon Partner
            </span>
            <h2 className="text-4xl md:text-6xl mb-6 font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Skincare for <br className="hidden md:inline" />
              <span className="text-gold">Your Hair</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              At Hello Beauty Lounge, we're proud to use Kevin Murphy professional hair care products. Our commitment to premium, environmentally conscious, and weightless formulations ensures every client receives salon-quality results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 py-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                onClick={() => window.open("https://kevinmurphy.com.au/us/en/", "_blank")}
              >
                Explore Kevin Murphy <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 backdrop-blur-md font-semibold rounded-full px-8 py-6 transition-all"
                onClick={() => setLocation("/#contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kevin Murphy Section - Magazine Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why We Choose Kevin Murphy
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Kevin Murphy represents the pinnacle of professional hair care innovation, combining sustainability with exceptional performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article key={index} className="group bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-8 border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 inline-block p-3 bg-white rounded-lg group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kevin Murphy Certification Badge */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container">
          <div className="bg-white rounded-2xl p-12 md:p-16 text-center border border-accent/20 shadow-sm max-w-3xl mx-auto">
            <div className="text-6xl mb-6">🏆</div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Certified Kevin Murphy Salon
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              We are proud to be an official Kevin Murphy salon partner. Every product we use is carefully selected to deliver professional results while maintaining the highest standards of sustainability and quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <span className="px-4 py-2 bg-accent/10 rounded-full text-accent">✓ Sulfate-Free</span>
              <span className="px-4 py-2 bg-accent/10 rounded-full text-accent">✓ Paraben-Free</span>
              <span className="px-4 py-2 bg-accent/10 rounded-full text-accent">✓ Eco-Friendly</span>
              <span className="px-4 py-2 bg-accent/10 rounded-full text-accent">✓ Professional Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Product Range Catalog */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Product Collection</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Product Range
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Explore the premium selection of Kevin Murphy products we use and recommend at our salon. Each product is carefully chosen to deliver exceptional results for your unique hair needs.
            </p>
          </div>
          
          <KevinMurphyCatalog />
        </div>
      </section>

      {/* Two-Column CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Ready to Transform</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Experience Kevin Murphy Excellence
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Book your appointment today and discover the difference premium hair care products make. Our stylists are trained to maximize the benefits of Kevin Murphy formulations for your unique hair needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                  onClick={() => window.open("https://www.vagaro.com/hellobeautylounge", "_blank")}
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
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-extensions-application-aqjorffUXWPN3dfFAnbwRg.webp"
                alt="Kevin Murphy Results"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
