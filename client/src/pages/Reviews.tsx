import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import { useLocation } from "wouter";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";

/**
 * Design Philosophy: Modern Luxury Minimalism
 * - Warm taupe (#8B7355) + rose-gold (#D4A574) accents
 * - Playfair Display (headlines) + Lato (body)
 * - Generous whitespace, asymmetric layouts
 * - Restrained motion, purposeful interactions
 */

export default function Reviews() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Client Reviews | Hello Beauty Lounge"
        description="Read verified 5-star reviews from clients of Hello Beauty Lounge in Red Deer, Alberta. See why we are the top-rated luxury hair salon."
        keywords="salon reviews Red Deer, hair salon ratings Alberta, customer testimonials, top rated hair stylist"
        canonicalUrl="https://hellobeautylounge.com/reviews"
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hello Beauty Lounge
          </div>
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-6xl mb-6 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Client Reviews & Testimonials
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Discover what our satisfied clients say about their experiences at Hello Beauty Lounge. Read authentic reviews from real customers who've experienced our luxury hair and beauty services.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Widget Section */}
      <section className="py-24">
        <div className="container">
          <GoogleReviewsWidget />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">5.0</div>
              <p className="text-white/80">Average Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">29+</div>
              <p className="text-white/80">Total Reviews</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-white/80">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-6 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Clients Choose Us
            </h2>
            <p className="text-lg text-foreground/70">
              Our commitment to excellence, professional expertise, and personalized service sets us apart as Red Deer's premier beauty destination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Expert Stylists
              </h3>
              <p className="text-foreground/70">
                Our master stylists bring years of professional experience and artistic vision to every service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Premium Products
              </h3>
              <p className="text-foreground/70">
                We use only the highest quality products to ensure beautiful, long-lasting results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Personalized Care
              </h3>
              <p className="text-foreground/70">
                Every client receives customized attention and tailored solutions for their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2
            className="text-4xl md:text-5xl mb-6 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Experience the Hello Beauty Lounge difference. Book your appointment today and discover why our clients love us.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Book on Vagaro
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hello Beauty Lounge
              </h3>
              <p className="text-white/80">Luxury hair and beauty services in Red Deer, Alberta.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/reviews" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white/80 mb-2">+1 (587) 273-1668</p>
              <p className="text-white/80">4919 59 Street Unit 120<br />Red Deer, AB T4N 6C9</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2026 Hello Beauty Lounge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
