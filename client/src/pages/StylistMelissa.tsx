import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Star, ArrowLeft, Check } from "lucide-react";
import { useLocation } from "wouter";

export default function StylistMelissa() {
  const [, setLocation] = useLocation();

  const reviews = [
    {
      id: 1,
      name: "Emily R.",
      rating: 5,
      date: "3 weeks ago",
      text: "Melissa gave me the most beautiful extensions! They look so natural and blend perfectly with my hair. She was so patient and answered all my questions about maintenance.",
      service: "Hand-Tied Extensions"
    },
    {
      id: 2,
      name: "Brittany S.",
      rating: 5,
      date: "1 month ago",
      text: "I've had extensions before but Melissa's work is on another level. The installation was seamless and they feel so comfortable. Already booked my next appointment!",
      service: "Extensions Installation"
    },
    {
      id: 3,
      name: "Lauren T.",
      rating: 5,
      date: "6 weeks ago",
      text: "Melissa transformed my thin, short hair into long, voluminous locks. The extensions are undetectable and I get compliments constantly. Worth every penny!",
      service: "Volume & Length Extensions"
    },
    {
      id: 4,
      name: "Nicole M.",
      rating: 5,
      date: "2 months ago",
      text: "Best decision ever! Melissa is so knowledgeable about extensions and helped me choose the perfect length and color. My maintenance appointments are quick and painless.",
      service: "Extensions Maintenance"
    }
  ];

  const portfolio = [
    { id: 1, title: "Blonde Length Extensions", category: "Hand-Tied" },
    { id: 2, title: "Volume Enhancement", category: "Volume" },
    { id: 3, title: "Brunette Transformation", category: "Hand-Tied" },
    { id: 4, title: "Seamless Blend", category: "Installation" },
    { id: 5, title: "Luxury Length", category: "Hand-Tied" },
    { id: 6, title: "Maintenance & Styling", category: "Maintenance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Melissa Mitchell - Extensions Specialist | Hello Beauty Lounge Red Deer"
        description="Meet Melissa Mitchell, certified hand-tied extensions specialist at Hello Beauty Lounge. Expert in seamless installations and maintenance in Red Deer, AB."
        keywords="hair extensions Red Deer, hand-tied extensions, extensions specialist"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-20">
        <div className="container">
          <button 
            onClick={() => setLocation("/services")}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Melissa Mitchell</h1>
              <p className="text-xl mb-4 opacity-90">Extensions Specialist</p>
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="ml-2 text-lg">(4.9 · 98 reviews)</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg opacity-90">
                  Melissa is a certified hand-tied extensions specialist with 6+ years of experience creating seamless, natural-looking length and volume transformations.
                </p>
                <p className="text-lg opacity-90">
                  She specializes in custom color matching, precise installation, and comprehensive aftercare guidance to ensure your extensions look beautiful and last as long as possible.
                </p>
              </div>

              <Button 
                onClick={() => window.open("https://vagaro.com", "_blank")}
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 mr-4"
              >
                Book with Melissa
              </Button>
              <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                Call: +1 (587) 273-1668
              </Button>
            </div>

            <Card className="p-6 text-center">
              <div className="text-7xl mb-4">💇‍♀️</div>
              <h3 className="text-2xl font-bold mb-2">Melissa Mitchell</h3>
              <p className="text-accent font-semibold mb-4">Extensions Specialist</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Experience</p>
                  <p className="text-foreground/70">6+ years</p>
                </div>
                <div>
                  <p className="font-semibold">Specialties</p>
                  <p className="text-foreground/70">Hand-Tied Extensions, Installation, Maintenance</p>
                </div>
                <div>
                  <p className="font-semibold">Certification</p>
                  <p className="text-foreground/70">Hand-Tied Extensions Certified</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Specializations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Hand-Tied Extensions
              </h3>
              <p className="text-foreground/70 mb-4">
                Premium hand-tied extensions for seamless, natural-looking length and volume. Custom color matching and precise installation for perfect blending.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Custom color matching
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Seamless installation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Undetectable blending
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Volume Enhancement
              </h3>
              <p className="text-foreground/70 mb-4">
                Add instant volume and thickness to thin or fine hair. Melissa creates natural-looking volume that enhances your overall style.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Strategic placement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Density customization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Natural movement
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Length Extensions
              </h3>
              <p className="text-foreground/70 mb-4">
                Achieve long, luxurious hair without waiting years for growth. Premium extensions that feel and look like your natural hair.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Custom length options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Healthy hair care
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Styling guidance
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Maintenance & Care
              </h3>
              <p className="text-foreground/70 mb-4">
                Keep your extensions looking beautiful with regular maintenance appointments. Melissa provides expert care and styling tips.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Regular maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Aftercare education
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Extension longevity
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-secondary/5 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">✨</div>
                    <p className="text-sm font-semibold text-accent">{item.category}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Client Reviews</h2>
          
          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-foreground/60">{review.service}</p>
                  </div>
                  <span className="text-sm text-foreground/60">{review.date}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-foreground/70">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Length & Volume Transformation?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free consultation with Melissa to discuss your extension goals and create your perfect look.
          </p>
          <Button 
            onClick={() => window.open("https://vagaro.com", "_blank")}
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
          >
            Book with Melissa
          </Button>
        </div>
      </section>
    </div>
  );
}
