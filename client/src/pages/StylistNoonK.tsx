import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Star, ArrowLeft, Check } from "lucide-react";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";

export default function StylistNoonK() {
  const [, setLocation] = useLocation();

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      text: "Noon is absolutely amazing! I came in with damaged hair from a previous color mishap, and she completely transformed it. Her color correction skills are incredible. I'm so happy with my new balayage!",
      service: "Color Correction & Balayage"
    },
    {
      id: 2,
      name: "Jessica L.",
      rating: 5,
      date: "1 month ago",
      text: "Best balayage I've ever had! Noon listened to exactly what I wanted and delivered perfectly. She's so knowledgeable about color theory and made me feel so comfortable.",
      service: "Balayage"
    },
    {
      id: 3,
      name: "Amanda K.",
      rating: 5,
      date: "6 weeks ago",
      text: "I've been seeing Noon for over a year now and she never disappoints. Her attention to detail is unmatched. Highly recommend!",
      service: "Full Color Service"
    },
    {
      id: 4,
      name: "Michelle T.",
      rating: 5,
      date: "2 months ago",
      text: "Noon transformed my hair from dark brown to a beautiful blonde. The color is so vibrant and healthy-looking. She's a true artist!",
      service: "Color Transformation"
    }
  ];

  const portfolio = [
    { id: 1, title: "Dimensional Balayage", category: "Balayage" },
    { id: 2, title: "Blonde Transformation", category: "Full Color" },
    { id: 3, title: "Color Correction", category: "Correction" },
    { id: 4, title: "Rooted Blonde", category: "Balayage" },
    { id: 5, title: "Bronde Highlights", category: "Highlights" },
    { id: 6, title: "Copper Tones", category: "Full Color" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Noon K. - Color Specialist | Hello Beauty Lounge Red Deer"
        description="Meet Noon K., expert color specialist at Hello Beauty Lounge. Specializing in balayage, highlights, and color correction in Red Deer, AB."
        keywords="color specialist Red Deer, balayage expert, hair color correction"
      />

      {/* Hero Section with Image */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/manus-storage/noon-k-profile_001c7146.png')", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="container relative z-10 max-w-3xl px-4 md:px-8">
          <button 
            onClick={() => setLocation("/services")}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </button>
          <h1 className="text-4xl md:text-6xl text-white mb-4 font-bold leading-[1.15]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Noon K.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4">Color Specialist</p>
          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-white/90">(4.9 · 127 reviews)</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => window.open("https://vagaro.com", "_blank")}
              className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 py-6"
            >
              Book with Noon
            </Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 font-semibold rounded-full px-8 py-6">
              Call: +1 (587) 273-1668
            </Button>
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
                Balayage & Highlights
              </h3>
              <p className="text-foreground/70 mb-4">
                Hand-painted or foil highlights for natural, dimensional color. Noon creates custom placements that enhance your features and complement your style.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Custom color placement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Blended dimensional tones
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Shine-enhancing gloss
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Color Correction
              </h3>
              <p className="text-foreground/70 mb-4">
                Expert color correction for previous color mishaps. Noon uses advanced techniques to restore your hair to the color you want safely.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Damage assessment & care
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Safe color lifting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Multi-session planning
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Full Color Services
              </h3>
              <p className="text-foreground/70 mb-4">
                Complete color transformations from root to tip. Whether you want a subtle change or dramatic transformation, Noon delivers.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Consultation & color selection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Precision application
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Toning & gloss
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-accent" />
                Toning & Gloss
              </h3>
              <p className="text-foreground/70 mb-4">
                Perfect your color with professional toning and gloss services. Enhance shine, neutralize unwanted tones, and maintain color vibrancy.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Tone neutralization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Shine enhancement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Color maintenance
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Color Transformation?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free consultation with Noon to discuss your color goals and create your perfect look.
          </p>
          <Button 
            onClick={() => window.open("https://vagaro.com", "_blank")}
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
          >
            Book with Noon
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
