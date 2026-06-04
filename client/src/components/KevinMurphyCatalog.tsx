import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Heart, Info, Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  benefits: string[];
  bestFor: string;
  rating: number;
  reviews: number;
  image: string;
}

const kmProducts: Product[] = [
  {
    id: "km-1",
    name: "HYDRATE-ME.WASH",
    category: "Wash & Rinse",
    tagline: "Moisture-delivering shampoo for normal to dry hair",
    description: "A super-smoothing and hydrating wash that will nourish dry, parched locks. Packed with antioxidant goodness to restore a healthy glow.",
    benefits: ["Kakadu Plum antioxidant-rich", "Vitamin C locks in moisture", "Instant hydration and shine"],
    bestFor: "Dry, parched, or damaged hair",
    rating: 4.9,
    reviews: 148,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-transformation-LsCxWNw4JuV82YSRKYyjfN.webp", // Fallback to transform image or similar placeholder
  },
  {
    id: "km-2",
    name: "ANGEL.WASH",
    category: "Wash & Rinse",
    tagline: "Restorative shampoo for fine, colored hair",
    description: "A delicate recovery shampoo for fine, fragile or broken hair that is colored or damaged. Gently cleanses while maximizing color retention.",
    benefits: ["Volumizes fine hair", "Protects hair color vibrancy", "Reduces hair breakage"],
    bestFor: "Fine, color-treated, or fragile hair",
    rating: 4.8,
    reviews: 112,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-transformation-LsCxWNw4JuV82YSRKYyjfN.webp",
  },
  {
    id: "km-3",
    name: "BEDROOM.HAIR",
    category: "Styling & Finish",
    tagline: "Flexible texturizing hairspray",
    description: "Lightweight styling spray that delivers flexible hold and touchable texture for that sexy, messy, bedroom hair look.",
    benefits: ["Touchable texture", "Flexible weightless hold", "Adds natural movement"],
    bestFor: "All hair types seeking messy-chic texture",
    rating: 4.9,
    reviews: 95,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-transformation-LsCxWNw4JuV82YSRKYyjfN.webp",
  },
  {
    id: "km-4",
    name: "SHIMMER.SHINE",
    category: "Styling & Finish",
    tagline: "Repairing shine mist with gold flecks",
    description: "A lightweight finishing mist with light-reflective technology and gold flecks that adds brilliant, high-gloss shine with no greasy residue.",
    benefits: ["Vitamins C and E nourish", "Adds instant radiant shine", "Revives dull, dry hair"],
    bestFor: "Dull, dry, or color-treated hair",
    rating: 5.0,
    reviews: 84,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-transformation-LsCxWNw4JuV82YSRKYyjfN.webp",
  },
  {
    id: "km-5",
    name: "RE.STORE",
    category: "Treatment",
    tagline: "Cleansing conditioning treatment",
    description: "A powerful, deep-cleansing treatment that repairs, rebuilds, and restores dry, damaged, or over-processed hair in one step.",
    benefits: ["Papaya & Green Pea enzymes", "Deeply rebuilds hair bonds", "Locks in moisture & shine"],
    bestFor: "Over-processed, damaged, or weak hair",
    rating: 4.9,
    reviews: 130,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-transformation-LsCxWNw4JuV82YSRKYyjfN.webp",
  },
];

const categories = ["All", "Wash & Rinse", "Styling & Finish", "Treatment"];

export default function KevinMurphyCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredProducts =
    activeCategory === "All"
      ? kmProducts
      : kmProducts.filter((product) => product.category === activeCategory);

  return (
    <div className="py-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-sm ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg scale-[1.02]"
                : "bg-white text-foreground hover:bg-secondary border border-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden luxury-card transition-all duration-300 flex flex-col justify-between h-full border border-border/50 group"
          >
            <div className="p-6">
              {/* Product Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  {product.category}
                </span>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="w-8 h-8 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-foreground/40"
                    }`}
                  />
                </button>
              </div>

              {/* Product Info */}
              <h4 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                {product.name}
              </h4>
              <p className="text-xs text-foreground/50 italic mb-4">{product.tagline}</p>

              {/* Ratings */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-foreground/60">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed mb-6">{product.description}</p>

              {/* Benefits checklist */}
              <div className="space-y-2 border-t border-border/50 pt-4 mb-6">
                <p className="text-[10px] font-bold tracking-wider text-foreground/40 uppercase">Key Benefits:</p>
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-xs text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 bg-secondary/20 border-t border-border/50 mt-auto flex flex-col gap-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-foreground/50 uppercase font-semibold">Best For</span>
                <span className="font-bold text-primary">{product.bestFor}</span>
              </div>
              <Button
                onClick={() => window.open("https://kevinmurphy.com.au/us/en/", "_blank")}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-5 text-xs font-semibold flex items-center justify-center gap-2 mt-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
