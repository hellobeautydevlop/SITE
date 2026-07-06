import { ArrowLeft, Calendar, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useLocation } from "wouter";
import { useState } from "react";

export default function BlogExtensionMaintenance() {
  const [, setLocation] = useLocation();
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Hair Extension Maintenance Guide | Care Tips | Hello Beauty Lounge"
        description="Complete guide to maintaining hand-tied hair extensions. Learn professional care tips to keep extensions looking beautiful and lasting longer."
        keywords="extension maintenance, how to care for extensions, hair extension care tips, keep extensions fresh, extension longevity"
        canonicalUrl="https://hellobeautylounge.com/blog/extension-maintenance"
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
                Complete Hair Extension Maintenance Guide
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Professional tips to keep your hand-tied extensions looking beautiful, healthy, and lasting longer.
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
              Hand-tied hair extensions are a significant investment in your appearance. To ensure they look beautiful and last as long as possible, proper maintenance is essential. Here's a comprehensive guide from our extension specialists at Hello Beauty Lounge on how to care for your extensions and keep them looking salon-fresh.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Daily Extension Care
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Gentle Brushing</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Brush your extensions gently every day, starting from the ends and working your way up to the roots. Use a wide-tooth comb or a brush specifically designed for extensions. Never brush your extensions when they're wet, as wet hair is more fragile and prone to breakage. Always brush from the ends upward to avoid putting stress on the bonds.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Sleeping Position</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Sleep on a silk or satin pillowcase to reduce friction and prevent tangling. Regular cotton pillowcases can cause friction that leads to matting and tangling. If you prefer, you can also braid your extensions loosely before bed to keep them protected while you sleep.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Avoid Excessive Heat</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              While hand-tied extensions can handle some heat styling, excessive heat can damage the hair and weaken the bonds. Limit heat styling and always use a heat protectant spray before using blow dryers, flat irons, or curling irons. Keep heat tools on medium settings rather than high.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Washing Your Extensions
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Use Sulfate-Free Products</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Always use sulfate-free shampoo and conditioner on your extensions. Sulfates are harsh detergents that can strip moisture from the extension hair and damage the bonds. We recommend Kevin Murphy products, which are gentle and specifically formulated for treated hair.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Washing Technique</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Wash your extensions in lukewarm water, not hot water. Hot water can weaken the bonds and cause frizz. When shampooing, focus on the scalp and roots, and gently work the shampoo down through the extensions. Avoid rubbing or scrubbing the extensions vigorously. Rinse thoroughly with cool water to seal the hair cuticle.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Conditioning</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Apply conditioner to the mid-lengths and ends of your extensions, avoiding the roots and bonds. Leave the conditioner on for 2-3 minutes before rinsing thoroughly. Deep conditioning once a week will keep your extensions hydrated and healthy.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Drying</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Gently squeeze excess water from your extensions with a soft towel. Never wring or twist your extensions. You can air-dry your extensions, or use a blow dryer on a low setting. If using a blow dryer, always use a heat protectant spray first.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Professional Maintenance
            </h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Regular Tightening Appointments</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Schedule a tightening appointment every 6-8 weeks. As your natural hair grows, the bonds will gradually move down, and tightening appointments will reposition them closer to the scalp. This maintains the seamless appearance of your extensions and keeps them secure.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Professional Treatments</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Get a professional deep conditioning treatment during your tightening appointments. Our stylists can apply intensive treatments that restore moisture and keep your extensions looking shiny and healthy.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Trim Your Extensions</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Just like your natural hair, extensions benefit from regular trims to remove split ends and keep them looking polished. Ask your stylist to trim your extensions during your maintenance appointments.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              What to Avoid
            </h2>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Chlorine:</strong> Avoid swimming in chlorinated pools without protection. Chlorine can damage extension hair and cause discoloration. If you must swim, wet your hair with fresh water first and apply a leave-in conditioner to create a barrier.
            </p>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Salt Water:</strong> Salt water from the ocean can also damage extensions. Protect your extensions by wetting them with fresh water and applying a leave-in conditioner before swimming in the ocean.
            </p>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Excessive Tension:</strong> Avoid tight hairstyles that put tension on the bonds. Tight ponytails, buns, and braids can stress the bonds and cause them to weaken or break. Wear your extensions down or in loose styles whenever possible.
            </p>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Sleeping with Wet Hair:</strong> Never go to bed with wet extensions. Wet hair is more fragile and prone to tangling and matting. Always dry your extensions completely before sleeping.
            </p>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              <strong>Harsh Products:</strong> Avoid products containing silicones, sulfates, and alcohol, as these can damage extension hair and weaken the bonds.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Extension Lifespan
            </h2>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              With proper care and maintenance, hand-tied extensions can last 6-8 months or even longer. The lifespan depends on how well you care for them, how often you wear them, and your natural hair growth rate. Regular maintenance appointments will help extend the life of your extensions and keep them looking beautiful.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              When to Replace Your Extensions
            </h2>

            <p className="text-foreground/80 mb-6 leading-relaxed">
              Eventually, even with perfect care, your extensions will need to be replaced. Signs that it's time for new extensions include:
            </p>

            <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
              <li>Significant tangling or matting that can't be brushed out</li>
              <li>Visible damage or breakage of the extension hair</li>
              <li>Bonds that are loose or breaking</li>
              <li>Hair that feels dry and brittle despite conditioning</li>
              <li>Visible wear after 8+ months of wear</li>
            </ul>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready for Your Extension Maintenance?
              </h3>
              <p className="text-foreground/80 mb-6">
                Schedule your tightening or maintenance appointment with one of our extension specialists. We'll keep your extensions looking beautiful and lasting longer.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 font-semibold"
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
              >
                Book Your Extension Maintenance
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
