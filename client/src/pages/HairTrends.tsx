import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { ChevronLeft, ArrowRight, Sparkles } from "lucide-react";
import { useLocation } from "wouter";
import LazyImage from "@/components/LazyImage";
import Footer from "@/components/Footer";

interface HairTrend {
  id: string;
  name: string;
  description: string;
  image: string;
  bestFor: string[];
  maintenance: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  specialist: string;
  price: string;
}

const hairTrends: HairTrend[] = [
  {
    id: "soft-sculpted-lob",
    name: "The Soft Sculpted Lob",
    description: "A modern take on the classic lob with soft, dimensional blonde tones and seamless blending. Perfect for those wanting length with movement and texture.",
    image: "/manus-storage/hbl-the-soft-sculpted-lob_539b2d22.png",
    bestFor: ["Shoulder-length lovers", "Low-maintenance seekers", "Blonde enthusiasts", "Texture lovers"],
    maintenance: "6-8 weeks for color touch-ups, regular trims every 8 weeks",
    difficulty: "Medium",
    specialist: "Keltie Cummins",
    price: "$180-220"
  },
  {
    id: "sculpted-power-bob",
    name: "The Sculpted Power Bob",
    description: "A bold, structured bob with dimensional brunette and copper undertones. This cut commands attention with its precision and modern edge.",
    image: "/manus-storage/hbl-sculpted-power-bob_b2c1e761.png",
    bestFor: ["Confidence builders", "Professional look seekers", "Bold personalities", "Texture enthusiasts"],
    maintenance: "6-8 weeks for color, 4-6 weeks for cut maintenance",
    difficulty: "Advanced",
    specialist: "Melissa Mitchell",
    price: "$200-250"
  },
  {
    id: "modern-shag",
    name: "The Modern Shag",
    description: "Textured layers with movement and dimension. This trend brings back the shag with a contemporary twist - perfect for those wanting effortless, lived-in style.",
    image: "/manus-storage/hbl-the-modern-shag_dc3d9cb4.png",
    bestFor: ["Effortless style lovers", "Texture seekers", "Trend-forward clients", "Versatile look wanters"],
    maintenance: "6-8 weeks for color, 6-8 weeks for cut",
    difficulty: "Medium",
    specialist: "Melissa Mitchell",
    price: "$160-200"
  },
  {
    id: "platinum-waves",
    name: "Platinum Waves with Extensions",
    description: "Ultimate volume and length with platinum blonde waves. Perfect for clients wanting glamorous, red-carpet-ready hair with extensions for fullness.",
    image: "/manus-storage/FE736752-034A-4478-BBAA-EF155C2F778F_d283bd41.webp",
    bestFor: ["Volume seekers", "Length lovers", "Special occasion ready", "Glamour enthusiasts"],
    maintenance: "Monthly extension maintenance, 6-8 weeks for color",
    difficulty: "Advanced",
    specialist: "Keltie Cummins",
    price: "$300-400 (includes extensions)"
  },
  {
    id: "lived-in-blonde",
    name: "Lived-In Blonde Waves",
    description: "Dimensional blonde with soft waves and a natural, effortless appearance. This trend is all about low-maintenance beauty with high-impact results.",
    image: "/manus-storage/4819AC72-F1D2-40D6-80DE-A21053BE178F_6d209ecc.JPG",
    bestFor: ["Busy professionals", "Natural beauty lovers", "Blonde enthusiasts", "Low-maintenance seekers"],
    maintenance: "8-10 weeks for color, minimal styling needed",
    difficulty: "Easy",
    specialist: "Keltie Cummins",
    price: "$150-190"
  },
  {
    id: "bold-fashion-color",
    name: "Bold Fashion Color",
    description: "Vibrant blues, burgundies, and creative colors that make a statement. Perfect for those ready to express their bold, creative side.",
    image: "/manus-storage/073B094B-8B04-4CF8-AEE5-D0B38EEC5196_f3814890.JPG",
    bestFor: ["Bold personalities", "Creative types", "Trend-setters", "Self-expression seekers"],
    maintenance: "4-6 weeks for color vibrancy, color-safe products essential",
    difficulty: "Advanced",
    specialist: "Tiara Black",
    price: "$180-250"
  }
];

interface StyleMatch {
  faceShape: string;
  recommendations: string[];
  avoidance: string[];
}

const styleMatches: StyleMatch[] = [
  {
    faceShape: "Oval Face",
    recommendations: ["Soft Sculpted Lob", "Modern Shag", "Lived-In Blonde Waves"],
    avoidance: ["Overly blunt cuts"]
  },
  {
    faceShape: "Round Face",
    recommendations: ["Sculpted Power Bob", "Modern Shag", "Platinum Waves"],
    avoidance: ["Blunt bangs", "Chin-length cuts"]
  },
  {
    faceShape: "Square Face",
    recommendations: ["Soft Sculpted Lob", "Lived-In Blonde Waves", "Bold Fashion Color"],
    avoidance: ["Blunt bobs", "Heavy layers"]
  },
  {
    faceShape: "Heart Face",
    recommendations: ["Soft Sculpted Lob", "Platinum Waves", "Modern Shag"],
    avoidance: ["Too much volume on top"]
  },
  {
    faceShape: "Long Face",
    recommendations: ["Sculpted Power Bob", "Bold Fashion Color", "Lived-In Blonde Waves"],
    avoidance: ["Long, straight styles", "Center parts"]
  }
];

export default function HairTrends() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Hair Trends & Style Guide | Hello Beauty Lounge"
        description="Explore the latest hair trends and find your perfect style. Get expert recommendations from our stylists."
      />

      {/* Sticky Header */}
      <div className="sticky top-0 z-40 glassmorphism border-b border-border/50">
        <div className="container py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 mb-6 hover:-translate-x-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hair Trends & <span className="text-accent">Style Guide</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Discover trending styles and find your perfect look
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/manus-storage/IMG_1156_862a96c0.PNG')", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2"><Sparkles className="w-4 h-4" /> Trending Now</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              2026 Hair Trends
            </h2>
            <p className="text-lg text-foreground/70">
              Explore the hottest hair trends and discover which style matches your personality and face shape.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        {/* Trending Styles Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Trending Hair Styles
          </h2>
          <p className="text-foreground/70 mb-12 max-w-2xl">
            Our expert stylists have curated the top hair trends for 2026. Each style is achievable, beautiful, and tailored to different preferences and lifestyles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairTrends.map((trend) => (
              <Card key={trend.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-80 overflow-hidden bg-muted">
                  <LazyImage
                    src={trend.image}
                    alt={trend.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {trend.difficulty}
                  </div>
                </div>

                <CardHeader className="flex-grow">
                  <CardTitle style={{ fontFamily: "'Playfair Display', serif" }}>{trend.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{trend.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-accent uppercase mb-2">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {trend.bestFor.map((item) => (
                        <span key={item} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-4 space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-foreground/70">Maintenance</p>
                      <p className="text-sm text-foreground/60">{trend.maintenance}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground/70">Specialist</p>
                      <p className="text-sm text-primary font-medium">{trend.specialist}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground/70">Price Range</p>
                      <p className="text-sm font-semibold text-foreground">{trend.price}</p>
                    </div>
                  </div>

                  <a href="https://www.vagaro.com/hellobeautylounge" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-2">
                      Book This Style
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Style Matching Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Find Your Perfect Style
          </h2>
          <p className="text-foreground/70 mb-12 max-w-2xl">
            Not sure which style suits you? Use our face shape guide to discover which trends will look best on you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {styleMatches.map((match) => (
              <Card key={match.faceShape} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle style={{ fontFamily: "'Playfair Display', serif" }}>
                    {match.faceShape}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      Recommended Styles
                    </h4>
                    <ul className="space-y-2">
                      {match.recommendations.map((rec) => (
                        <li key={rec} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-accent mt-1">✓</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                      Styles to Avoid
                    </h4>
                    <ul className="space-y-2">
                      {match.avoidance.map((avoid) => (
                        <li key={avoid} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-muted-foreground">✗</span>
                          {avoid}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-primary/5 to-accent/5 p-12 md:p-16 rounded-2xl border border-accent/20">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Ready to Transform?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Book Your Consultation
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Our expert stylists are ready to help you find your perfect look. Whether you're interested in one of our trending styles or want a custom design, we'll create something beautiful just for you.
            </p>
            <a href="https://www.vagaro.com/hellobeautylounge" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <span>Book Your Appointment</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <LazyImage
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/color-transformation-22prrc3bAWznuYQqxW2WHT.webp"
              alt="Style Transformation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
