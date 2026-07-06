import { ArrowLeft, Calendar, User, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useLocation } from "wouter";
import { useState } from "react";

export default function BlogMaintainBalayage() {
  const [, setLocation] = useLocation();
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How to Maintain Your Balayage | Hair Care Tips | Hello Beauty Lounge"
        description="Expert guide on maintaining your balayage between appointments. Learn professional tips to keep your dimensional color vibrant and healthy."
        keywords="balayage maintenance, how to maintain balayage, balayage care tips, keep balayage fresh, hair color maintenance"
        canonicalUrl="https://hellobeautylounge.com/blog/maintain-balayage"
      />

      {/* Header */}
      <header className="sticky top-0 z-40 glassmorphism border-b border-border/50">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/blog")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-all duration-300 hover:-translate-x-1"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Blog
          </h1>
          <div className="w-12" />
        </div>
      </header>

      {/* Article Container */}
      <article className="py-16">
        <div className="container max-w-3xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs mb-4 bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
                Hair Care Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                How to Maintain Your Balayage Between Appointments
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Professional tips to keep your dimensional color vibrant, healthy, and beautiful between salon visits.
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-foreground/60 border-t border-b border-border/50 py-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>July 6, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Hello Beauty Lounge</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setLiked(!liked)}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Heart className={`w-4 h-4 ${liked ? "fill-accent text-accent" : ""}`} />
                  <span>{liked ? "Liked" : "Like"}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              Your beautiful balayage is an investment in your appearance. To keep those dimensional highlights looking fresh and vibrant between appointments, proper maintenance is essential. Here are professional tips from our expert colorists at Hello Beauty Lounge to help you maintain your balayage and extend the time between color services.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              1. Use Sulfate-Free Shampoo & Conditioner
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              The most important step in maintaining your balayage is using sulfate-free hair products. Sulfates are harsh detergents that strip color from your hair and cause fading. We recommend using premium Kevin Murphy products, which are specifically formulated to protect color-treated hair while keeping it healthy and vibrant.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Pro Tip:</strong> Wash your hair in lukewarm or cool water instead of hot water. Hot water opens the hair cuticle and allows color molecules to escape, causing faster fading.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              2. Limit Heat Styling
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Excessive heat styling can damage color-treated hair and cause your balayage to look dull and brassy. When you do use heat tools like blow dryers, flat irons, or curling irons, always use a heat protectant spray first. This creates a barrier between your hair and the heat, protecting both your color and your hair's health.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Pro Tip:</strong> Air-dry your hair when possible. Not only does this protect your color, but it also reduces damage and keeps your balayage looking more natural and dimensional.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              3. Deep Condition Weekly
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Color-treated hair needs extra moisture and nourishment. Use a deep conditioning treatment or hair mask once a week to keep your balayage looking shiny and healthy. Leave the treatment on for at least 10-15 minutes (or follow the product instructions) to allow it to penetrate and repair your hair.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Pro Tip:</strong> Apply the deep conditioning treatment to the mid-lengths and ends of your hair, avoiding the roots. This prevents your hair from looking greasy while still providing the moisture your color-treated ends need.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              4. Protect Your Hair from the Sun
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              UV rays from the sun can fade your balayage and cause brassy tones to develop. When spending time outdoors, wear a hat or use hair products with UV protection. Many leave-in conditioners and styling products now include UV filters to protect your color.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Pro Tip:</strong> If you're planning a beach vacation or extended time in the sun, consider scheduling a color refresh appointment before you go to ensure your balayage looks its best.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              5. Get Regular Trims
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Regular trims every 6-8 weeks remove damaged, split ends that can make your balayage look dull and unhealthy. Trimming also helps maintain the shape of your cut and keeps your hair looking polished and fresh. Plus, healthy hair showcases your balayage color much better than damaged hair.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Pro Tip:</strong> Ask your stylist for a "dusting" trim between major trims. This removes just the damaged ends without significantly changing your length.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              6. Minimize Chlorine Exposure
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Chlorine from swimming pools can turn blonde highlights green and cause color fading. If you're a frequent swimmer, wet your hair with fresh water and apply a leave-in conditioner before swimming. This helps prevent your hair from absorbing as much chlorine. After swimming, rinse your hair thoroughly with fresh water and use a clarifying shampoo once a week to remove chlorine buildup.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Pro Tip:</strong> Wear a swim cap to protect your balayage from chlorine exposure entirely.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              7. Schedule Color Refresher Appointments
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Even with perfect maintenance, your balayage will naturally fade over time. Schedule a color refresher appointment every 8-12 weeks to keep your dimensional color looking vibrant and fresh. A quick refresh is much less expensive and time-consuming than a full color service and will keep your balayage looking salon-fresh.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Pro Tip:</strong> Talk to your colorist about scheduling your next appointment before you leave the salon. This ensures you don't go too long between services and helps you maintain your color investment.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              8. Use Color-Safe Products
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Beyond shampoo and conditioner, use color-safe styling products, heat protectants, and leave-in conditioners. These products are formulated to protect your color while providing the styling and nourishment your hair needs. Avoid generic drugstore products that can strip color and damage your hair.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Pro Tip:</strong> Ask your stylist to recommend specific products for your hair type and color. At Hello Beauty Lounge, we recommend Kevin Murphy products, which are specifically designed for color-treated hair and deliver professional results.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Bottom Line
            </h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Maintaining your balayage is an investment in your appearance and your hair's health. By following these professional tips, you can keep your dimensional color looking vibrant and beautiful between salon appointments. Remember, your balayage is a collaboration between you and your stylist—we create the perfect color, and you maintain it at home.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              If you have questions about maintaining your balayage or need a color refresh, don't hesitate to contact Hello Beauty Lounge. Our expert colorists are always happy to help you keep your hair looking its best.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready for Your Balayage Refresh?
              </h3>
              <p className="text-foreground/80 mb-6">
                Schedule your color consultation with one of our expert colorists today. We'll create a custom balayage that's perfect for your skin tone and lifestyle.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 font-semibold"
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
              >
                Book Your Balayage Appointment
              </Button>
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t border-border/50 pt-8 mt-12">
            <div className="flex items-center justify-between">
              <span className="text-foreground/60">Share this article:</span>
              <div className="flex gap-4">
                <button className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
                  <Share2 className="w-5 h-5 text-accent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
