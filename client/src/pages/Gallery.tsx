import { useState } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

import LazyImage from "@/components/LazyImage";
import Footer from "@/components/Footer";

interface Transformation {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
  stylist: string;
  category: string;
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
      category: "hair-coloring",
    },
    {
      id: "color-2",
      before: "/manus-storage/IMG_8234_Original_df4d5616.JPG",
      after: "/manus-storage/IMG_8235_Original_fe729bf1.JPG",
      title: "Rich Brunette to Warm Copper",
      description: "Complete color transformation with custom toning and shine treatment",
      stylist: "Noon K",
      category: "hair-coloring",
    },
    {
      id: "color-3",
      before: "/manus-storage/IMG_8237_Original_a6f35ae9.JPG",
      after: "/manus-storage/IMG_8238_Original_8c952588.JPG",
      title: "Blonde Highlights with Dimension",
      description: "Full head highlights with multi-tonal blonde for depth and movement",
      stylist: "Melissa Mitchell",
      category: "hair-coloring",
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
      category: "hair-extensions",
    },
    {
      id: "ext-2",
      before: "/manus-storage/IMG_8242_Original_e7f17834.JPG",
      after: "/manus-storage/IMG_8243_Original_09b63f29.JPG",
      title: "Dramatic Length Transformation",
      description: "Premium extensions with seamless blending for natural appearance",
      stylist: "Noon K",
      category: "hair-extensions",
    },
    {
      id: "ext-3",
      before: "/manus-storage/IMG_8244_Original_09996cb4.JPG",
      after: "/manus-storage/IMG_8245_Original_0440e169.JPG",
      title: "Volume & Texture Enhancement",
      description: "Extensions styled with waves for glamorous, full-bodied hair",
      stylist: "Melissa Mitchell",
      category: "hair-extensions",
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
      category: "cuts-styling",
    },
    {
      id: "cut-2",
      before: "/manus-storage/IMG_8248_Original_85164eab.JPG",
      after: "/manus-storage/IMG_8249_Original_bf5d75ec.JPG",
      title: "Sleek & Polished Styling",
      description: "Professional styling with smooth finish and shine",
      stylist: "Tiara Black",
      category: "cuts-styling",
    },
    {
      id: "cut-3",
      before: "/manus-storage/IMG_8261_Original_420d4d0c.JPG",
      after: "/manus-storage/IMG_8262_Original_f895ba21.JPG",
      title: "Elegant Updo Styling",
      description: "Special occasion styling with sophisticated details",
      stylist: "Melissa Mitchell",
      category: "cuts-styling",
    },
  ],
};

const serviceCategories = [
  { id: "hair-coloring", label: "Hair Coloring", icon: "🎨", description: "Custom dimensional color and balayage" },
  { id: "hair-extensions", label: "Hair Extensions", icon: "✨", description: "Premium hand-tied extensions" },
  { id: "cuts-styling", label: "Cuts & Styling", icon: "✂️", description: "Precision cuts and styling" },
];

export default function Gallery() {
  const [, navigate] = useLocation();
  const [activeCategory, setActiveCategory] = useState("hair-coloring");

  const transformations = galleryData[activeCategory] || [];
  const activeInfo = serviceCategories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-24">
      <SEO 
        title="Transformation Gallery | Hello Beauty Lounge"
        description="See real before and after hair transformations by our master stylists. Custom dimensional color, balayage, and premium hand-tied extensions."
        keywords="hair transformations, before and after hair, balayage gallery, hair extensions Red Deer, salon transformations Alberta"
        canonicalUrl="https://hellobeautylounge.com/gallery"
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
            Transformation <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            See the stunning results our stylists create every day
          </p>
        </div>
      </div>

      {/* Magazine-Style Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/manus-storage/IMG_1156_862a96c0.PNG')", backgroundAttachment: "scroll", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Real Transformations
            </h2>
            <p className="text-lg text-foreground/70">
              Explore our portfolio of stunning hair transformations created by our expert stylists using premium Kevin Murphy products.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        {/* Category Filter - Magazine Style */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-lg text-left transition-all duration-300 group ${
                  activeCategory === category.id
                    ? "bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent shadow-lg"
                    : "bg-white border border-border hover:border-accent/50 hover:shadow-md"
                }`}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  activeCategory === category.id ? "text-primary" : "text-foreground"
                }`} style={{ fontFamily: "'Playfair Display', serif" }}>
                  {category.label}
                </h3>
                <p className="text-sm text-foreground/70">{category.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Info */}
        <div className="mb-12 pb-12 border-b border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {activeInfo?.label}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            {activeInfo?.description}. Each transformation showcases our commitment to excellence and the power of professional hair care.
          </p>
        </div>

        {/* Gallery Grid - Magazine Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {transformations.map((transformation, index) => (
            <div
              key={transformation.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Interactive Before & After Slider */}
              <div className={`relative overflow-hidden bg-muted ${
                index === 0 ? "h-96 md:h-full" : "h-72 md:h-80"
              }`}>
                <img
                  src={transformation.after}
                  alt={transformation.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-accent font-semibold uppercase tracking-wide mb-2">
                  {activeInfo?.label}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {transformation.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-6 flex-grow leading-relaxed">
                  {transformation.description}
                </p>
                <div className="flex justify-between items-center border-t border-border/50 pt-4 mt-auto">
                  <span className="text-xs text-foreground/50 uppercase font-semibold">Stylist</span>
                  <span className="text-sm font-semibold text-primary">
                    {transformation.stylist}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Magazine Style */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-primary/5 to-accent/5 p-12 md:p-16 rounded-2xl border border-accent/20">
          <div>
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Ready for Change?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Transformation Awaits
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Our expert stylists are ready to create your perfect look. Book your appointment today and join our gallery of beautiful transformations.
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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-color-service-6tebwYZCegTwyQL73eTdiv.webp"
              alt="Transformation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
