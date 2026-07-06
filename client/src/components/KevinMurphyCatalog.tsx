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
    name: "BODY.BUILDER",
    category: "Styling & Finish",
    tagline: "Weightless volumizing spray for texture and hold",
    description: "A volumizing spray that delivers weightless texture and flexible hold without flaking or buildup. Perfect for creating voluminous styles with touchable movement.",
    benefits: ["Weightless texture", "Flexible hold without buildup", "Adds instant volume"],
    bestFor: "All hair types seeking volume and texture",
    rating: 4.9,
    reviews: 156,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwf6d2af65/images/large/BODY-BUILDER_350ML.png",
  },
  {
    id: "km-2",
    name: "BLOW.DRY WASH",
    category: "Wash & Rinse",
    tagline: "Dry shampoo that cleanses between washes",
    description: "A dry shampoo that cleanses hair between washes, absorbing excess oil and adding texture. Extends the life of your style while keeping hair fresh and voluminous.",
    benefits: ["Absorbs excess oil", "Extends style longevity", "Adds natural texture"],
    bestFor: "All hair types between wash days",
    rating: 4.8,
    reviews: 142,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw034b9586/images/large/online-BLOW.DRY WASH 250ml.png",
  },
  {
    id: "km-3",
    name: "LEAVE-IN REPAIR",
    category: "Treatment",
    tagline: "Repairing leave-in conditioner for damaged hair",
    description: "A lightweight leave-in treatment that repairs and protects damaged, over-processed, or color-treated hair. Provides moisture and shine without weighing hair down.",
    benefits: ["Repairs damaged bonds", "Protects color vibrancy", "Adds moisture and shine"],
    bestFor: "Damaged, over-processed, or color-treated hair",
    rating: 4.9,
    reviews: 168,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw00dd98cf/images/large/2024-LEAVE-IN-REPAIR_200ML.png",
  },
  {
    id: "km-4",
    name: "YOUNG.AGAIN.WASH",
    category: "Wash & Rinse",
    tagline: "Rejuvenating shampoo for mature and thinning hair",
    description: "A rejuvenating shampoo that gently cleanses while adding volume and shine to mature or thinning hair. Packed with antioxidants to restore youthful vitality.",
    benefits: ["Adds volume to fine hair", "Antioxidant-rich formula", "Restores shine and vitality"],
    bestFor: "Mature, thinning, or fine hair",
    rating: 4.9,
    reviews: 134,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwf69bd586/images/large/2024-YOUNG-AGAIN-WASH_250ML.png",
  },
  {
    id: "km-5",
    name: "TOUCHABLE",
    category: "Styling & Finish",
    tagline: "Flexible hold hairspray with natural movement",
    description: "A lightweight hairspray that provides flexible hold and touchable texture. Delivers strong hold without stiffness, perfect for styles that move naturally.",
    benefits: ["Flexible hold", "Touchable texture", "No flaking or stiffness"],
    bestFor: "All hair types seeking flexible hold",
    rating: 5.0,
    reviews: 189,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwd710f2e1/images/large/TOUCHABLE_250ML.png",
  },
  {
    id: "km-6",
    name: "DOO-OVER",
    category: "Wash & Rinse",
    tagline: "Clarifying dry shampoo and texture spray",
    description: "A dual-purpose dry shampoo and texturizer that cleanses hair while adding grip and texture. Perfect for refreshing styles and adding volume between washes.",
    benefits: ["Clarifies and cleanses", "Adds texture and grip", "Extends style life"],
    bestFor: "All hair types needing texture and cleansing",
    rating: 4.8,
    reviews: 127,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw3c0ec209/images/large/DOO-OVER_250ML.png",
  },
  {
    id: "km-7",
    name: "MOTION.LOTION",
    category: "Styling & Finish",
    tagline: "Lightweight styling lotion for flexible hold",
    description: "A lightweight styling lotion that provides flexible hold and natural movement. Perfect for creating soft, moveable styles without crunchiness or buildup.",
    benefits: ["Flexible hold", "Natural movement", "Lightweight formula"],
    bestFor: "All hair types seeking soft, moveable styles",
    rating: 4.9,
    reviews: 145,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwf0958b43/images/large/MOTION-LOTION_150ML.png",
  },
  {
    id: "km-8",
    name: "HAIR.RESORT",
    category: "Treatment",
    tagline: "Restorative treatment mask for damaged hair",
    description: "A luxurious treatment mask that deeply repairs and restores damaged, dry, or over-processed hair. Infused with nourishing ingredients for intense hydration and shine.",
    benefits: ["Deep repair and restoration", "Intense hydration", "Adds brilliant shine"],
    bestFor: "Damaged, dry, or over-processed hair",
    rating: 4.9,
    reviews: 152,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwdeec5336/images/large/HAIR-RESORT_150ML.png",
  },
  {
    id: "km-9",
    name: "REPAIR-ME.WASH",
    category: "Wash & Rinse",
    tagline: "Repairing shampoo for damaged and broken hair",
    description: "A gentle repairing shampoo that cleanses while strengthening damaged, broken, or fragile hair. Helps restore hair structure and prevent further damage.",
    benefits: ["Strengthens broken hair", "Repairs hair structure", "Prevents further damage"],
    bestFor: "Damaged, broken, or fragile hair",
    rating: 4.8,
    reviews: 138,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw417da1b3/images/large/2024-REPAIR-ME-WASH_250ML.png",
  },
  {
    id: "km-10",
    name: "THICK.AGAIN",
    category: "Styling & Finish",
    tagline: "Volumizing powder for instant thickness",
    description: "A volumizing powder that instantly adds thickness and texture to fine or thinning hair. Provides lightweight volume without heaviness or buildup.",
    benefits: ["Instant volume", "Adds thickness", "Lightweight formula"],
    bestFor: "Fine, thin, or limp hair",
    rating: 4.9,
    reviews: 161,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dwb60fd682/images/large/2024-THICK-AGAIN_100ML.png",
  },
  {
    id: "km-11",
    name: "NIGHT.SHIFT",
    category: "Treatment",
    tagline: "Overnight repair treatment for intensive care",
    description: "An intensive overnight treatment that repairs and restores hair while you sleep. Provides deep nourishment and repair for maximum results by morning.",
    benefits: ["Intensive overnight repair", "Deep nourishment", "Restores shine and softness"],
    bestFor: "Damaged or dry hair needing intensive care",
    rating: 4.9,
    reviews: 119,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw37259a4a/images/large/NIGHT-SHIFT_100ML.png",
  },
  {
    id: "km-12",
    name: "BODY.MASS",
    category: "Styling & Finish",
    tagline: "Volumizing mousse for lightweight fullness",
    description: "A lightweight volumizing mousse that adds body and fullness without weighing hair down. Perfect for creating voluminous styles with natural movement.",
    benefits: ["Adds lightweight volume", "Creates fullness", "Natural movement"],
    bestFor: "Fine, thin, or limp hair",
    rating: 4.8,
    reviews: 133,
    image: "https://pro.kevinmurphy.com.au/on/demandware.static/-/Sites-Salesforce_Catalogue_Master/default/dw6ab1c96c/images/large/2024-BODY-MASS_100ML.png",
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
            {/* Product Image */}
            <div className="relative w-full h-64 bg-secondary/20 overflow-hidden flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

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
