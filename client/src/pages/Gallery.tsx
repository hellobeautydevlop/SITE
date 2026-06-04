import { useState } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface Transformation {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
  stylist: string;
}

const galleryData: Record<string, Transformation[]> = {
  "hair-coloring": [
    {
      id: "color-1",
      before: "/manus-storage/IMG_8230_Original_1ca1da2d.JPG",
      after: "/manus-storage/IMG_8232_Original_dc440cbb.JPG",
      title: "Vibrant Balayage Transformation",
      description: "Hand-painted balayage with dimensional highlights for a sun-kissed look",
      stylist: "Melissa Mitchell",
    },
    {
      id: "color-2",
      before: "/manus-storage/IMG_8234_Original_df4d5616.JPG",
      after: "/manus-storage/IMG_8235_Original_fe729bf1.JPG",
      title: "Rich Brunette to Warm Copper",
      description: "Complete color transformation with custom toning and shine treatment",
      stylist: "Noon K",
    },
    {
      id: "color-3",
      before: "/manus-storage/IMG_8237_Original_a6f35ae9.JPG",
      after: "/manus-storage/IMG_8238_Original_8c952588.JPG",
      title: "Blonde Highlights with Dimension",
      description: "Full head highlights with multi-tonal blonde for depth and movement",
      stylist: "Melissa Mitchell",
    },
  ],
  "hair-extensions": [
    {
      id: "ext-1",
      before: "/manus-storage/IMG_8239_Original_973e1fe7.JPG",
      after: "/manus-storage/IMG_8241_Original_1efe6bb8.JPG",
      title: "Length & Volume Extensions",
      description: "Hand-tied extensions for luxurious length and fullness",
      stylist: "Melissa Mitchell",
    },
    {
      id: "ext-2",
      before: "/manus-storage/IMG_8242_Original_e7f17834.JPG",
      after: "/manus-storage/IMG_8243_Original_09b63f29.JPG",
      title: "Dramatic Length Transformation",
      description: "Premium extensions with seamless blending for natural appearance",
      stylist: "Noon K",
    },
    {
      id: "ext-3",
      before: "/manus-storage/IMG_8244_Original_09996cb4.JPG",
      after: "/manus-storage/IMG_8245_Original_0440e169.JPG",
      title: "Volume & Texture Enhancement",
      description: "Extensions styled with waves for glamorous, full-bodied hair",
      stylist: "Melissa Mitchell",
    },
  ],
  "cuts-styling": [
    {
      id: "cut-1",
      before: "/manus-storage/IMG_8246_Original_5c8e3d4c.JPG",
      after: "/manus-storage/IMG_8247_Original_eb0b7d53.JPG",
      title: "Modern Textured Cut",
      description: "Precision cut with layers for movement and style",
      stylist: "Tiara Black",
    },
    {
      id: "cut-2",
      before: "/manus-storage/IMG_8248_Original_85164eab.JPG",
      after: "/manus-storage/IMG_8249_Original_bf5d75ec.JPG",
      title: "Sleek & Polished Styling",
      description: "Professional styling with smooth finish and shine",
      stylist: "Tiara Black",
    },
    {
      id: "cut-3",
      before: "/manus-storage/IMG_8261_Original_420d4d0c.JPG",
      after: "/manus-storage/IMG_8262_Original_f895ba21.JPG",
      title: "Elegant Updo Styling",
      description: "Special occasion styling with sophisticated details",
      stylist: "Melissa Mitchell",
    },
  ],
};

const serviceCategories = [
  { id: "hair-coloring", label: "Hair Coloring", icon: "🎨" },
  { id: "hair-extensions", label: "Hair Extensions", icon: "✨" },
  { id: "cuts-styling", label: "Cuts & Styling", icon: "✂️" },
];

export default function Gallery() {
  const [, navigate] = useLocation();
  const [activeCategory, setActiveCategory] = useState("hair-coloring");

  const transformations = galleryData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-background pb-24">
      <SEO 
        title="Hair Transformation Gallery | Hello Beauty Lounge Red Deer"
        description="See real before and after hair transformations by our master stylists. Custom dimensional color, balayage, and premium hand-tied extensions."
        keywords="hair transformations, before and after hair, balayage gallery, hair extensions Red Deer, salon transformations Alberta"
        canonicalUrl="https://hellobeautylounge.com/gallery"
      />
      {/* Header */}
      <div className="sticky top-0 z-40 glassmorphism border-b border-border/50">
        <div className="container py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 mb-6 hover:-translate-x-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Transformation <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            See the stunning results our stylists create every day
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container py-8">
        <div className="flex flex-wrap gap-3 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg scale-[1.02]"
                  : "bg-white text-foreground hover:bg-secondary border border-border"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation) => (
            <div
              key={transformation.id}
              className="group bg-white rounded-2xl overflow-hidden luxury-card transition-all duration-300 flex flex-col h-full"
            >
              {/* Interactive Before & After Slider */}
              <div className="relative h-96 overflow-hidden">
                <BeforeAfterSlider
                  beforeImage={transformation.before}
                  afterImage={transformation.after}
                  title={transformation.title}
                  heightClass="h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {transformation.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-6 flex-grow leading-relaxed">
                  {transformation.description}
                </p>
                <div className="flex justify-between items-center border-t border-border/50 pt-4 mt-auto">
                  <span className="text-xs text-foreground/50">STYLIST</span>
                  <span className="text-sm font-semibold text-primary">
                    {transformation.stylist}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-white p-12 md:p-16 rounded-3xl shadow-sm border border-border max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready for Your <span className="text-gold">Transformation?</span>
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our expert stylists are ready to create your perfect look. Book your appointment today
            and join our gallery of beautiful transformations.
          </p>
          <a href="https://www.vagaro.com/hellobeautylounge/staff" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              Book Your Appointment
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
