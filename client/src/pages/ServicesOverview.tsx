import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Scissors, Palette, Sparkles, ArrowRight, Check, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function ServicesOverview() {
  const [, setLocation] = useLocation();

  const services = [
    {
      id: 1,
      name: "Hair Coloring & Balayage",
      icon: Palette,
      description: "Expert color services including balayage, ombre, highlights, and full color transformations using premium Kevin Murphy products.",
      features: [
        "Custom color consultation",
        "Balayage & highlights",
        "Full color services",
        "Color correction",
        "Toning & gloss services"
      ],
      priceRange: "$80 - $250+",
      link: "/services/hair-coloring"
    },
    {
      id: 2,
      name: "Hair Extensions",
      icon: Sparkles,
      description: "Premium hand-tied hair extensions for length, volume, and transformation. Professional installation and maintenance guidance included.",
      features: [
        "Hand-tied extensions",
        "Seamless installation",
        "Volume enhancement",
        "Length extension",
        "Maintenance & styling"
      ],
      priceRange: "$200 - $600+",
      link: "/services/hair-extensions"
    },
    {
      id: 3,
      name: "Cuts & Styling",
      icon: Scissors,
      description: "Precision cuts, blowouts, and styling services tailored to your hair type and personal style. Expert techniques for all hair lengths.",
      features: [
        "Precision haircuts",
        "Blowout services",
        "Styling & updo",
        "Texture services",
        "Personalized styling"
      ],
      priceRange: "$45 - $120",
      link: "/services/cuts-and-styling"
    },
    {
      id: 4,
      name: "Bridal Hair Services",
      icon: Sparkles,
      description: "Complete bridal packages including trial sessions, wedding day styling, and updo designs. Perfect for your special day.",
      features: [
        "Bridal consultation",
        "Trial session",
        "Wedding day styling",
        "Updo designs",
        "Bridesmaids styling"
      ],
      priceRange: "$150 - $300+",
      link: "/services/bridal-hair"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Hair Services in Red Deer | Hello Beauty Lounge"
        description="Professional hair services including balayage, extensions, cuts, and bridal styling. Expert stylists using premium Kevin Murphy products in Red Deer, AB."
        keywords="hair services Red Deer, balayage, hair extensions, bridal hair, hair salon services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Expert hair services tailored to your needs. From custom color to premium extensions, we deliver transformations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                      <p className="text-accent font-semibold">{service.priceRange}</p>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => setLocation(service.link)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary/5 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Hello Beauty Lounge</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Expert Stylists</h3>
              <p className="text-foreground/70">
                Our team specializes in custom color, extensions, and bridal services with years of professional experience.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Premium Products</h3>
              <p className="text-foreground/70">
                We exclusively use Kevin Murphy products for superior results and healthier hair outcomes.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
              <p className="text-foreground/70">
                Every client receives a customized consultation to ensure perfect results tailored to your goals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Expert Stylists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">💇‍♀️</div>
              <h3 className="text-xl font-bold mb-2">Noon K.</h3>
              <p className="text-accent font-semibold mb-3">Color Specialist</p>
              <p className="text-foreground/70 mb-4">
                Expert in custom color, balayage, and color correction. Specializes in creating dimensional, natural-looking tones.
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Book with Noon
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">💇‍♀️</div>
              <h3 className="text-xl font-bold mb-2">Melissa Mitchell</h3>
              <p className="text-accent font-semibold mb-3">Extensions Specialist</p>
              <p className="text-foreground/70 mb-4">
                Certified in hand-tied extensions. Creates seamless, natural-looking length and volume transformations.
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Book with Melissa
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4">💇‍♀️</div>
              <h3 className="text-xl font-bold mb-2">Keltie Cummins</h3>
              <p className="text-accent font-semibold mb-3">Bridal & Styling Expert</p>
              <p className="text-foreground/70 mb-4">
                Specializes in bridal hair, updo designs, and personalized styling for all occasions.
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Book with Keltie
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hair?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free consultation with one of our expert stylists to discuss your hair goals and find the perfect service for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
              Book Free Consultation
            </Button>
            <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
              Call Us: +1 (587) 273-1668
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">How long does a consultation take?</h3>
              <p className="text-foreground/70">
                Consultations typically take 15-30 minutes. We discuss your hair goals, assess your current hair condition, and recommend the best service options for you.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">Do you offer color correction services?</h3>
              <p className="text-foreground/70">
                Yes! We specialize in color correction. If you've had a color mishap elsewhere, we can help restore your hair to the color you want.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">How long do hair extensions last?</h3>
              <p className="text-foreground/70">
                With proper care and maintenance, hand-tied extensions can last 4-6 months. We provide detailed care instructions and offer maintenance appointments.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">Can I book multiple services on the same day?</h3>
              <p className="text-foreground/70">
                Absolutely! Many clients combine services like a cut with color or extensions with styling. We'll work with you to schedule accordingly.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">What is your cancellation policy?</h3>
              <p className="text-foreground/70">
                We require 24-hour notice for cancellations. Cancellations made within 24 hours may incur a cancellation fee.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
