import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Search } from "lucide-react";
import { useLocation } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Maintain Your Hair Color Between Appointments",
    excerpt: "Learn expert tips to keep your salon color vibrant and fresh for longer.",
    content: `Hair color is an investment, and maintaining it between appointments is crucial for keeping that fresh-from-the-salon look. At Hello Beauty Lounge in Red Deer, our stylists recommend several key practices to extend the life of your color.

**Use Color-Safe Products**
The most important step is switching to color-safe shampoo and conditioner. Regular shampoos contain harsh sulfates that strip color molecules from your hair. Color-safe products are specifically formulated to be gentler and help seal the hair cuticle, keeping your color locked in.

**Limit Heat Styling**
Excessive heat can fade color faster and damage your hair. When you do use heat tools, always apply a heat protectant spray first. Try air-drying or using lower heat settings when possible.

**Rinse with Cool Water**
After shampooing, do a final rinse with cool water. This helps close the hair cuticle and seal in moisture and color.

**Protect from Sun**
UV rays can fade hair color, especially lighter shades. Wear a hat when spending time outdoors, or use products with UV protection.

**Deep Condition Weekly**
Colored hair needs extra moisture. Use a deep conditioning treatment once a week to keep your hair healthy and color vibrant.

**Schedule Touch-ups Strategically**
Most hair color lasts 4-6 weeks. Schedule your touch-ups before the color fades significantly. Our stylists at Hello Beauty Lounge can recommend the perfect touch-up schedule based on your hair type and color.

By following these tips, you'll keep your beautiful color looking salon-fresh between appointments!`,
    category: "Hair Care",
    date: "June 2, 2026",
    readTime: "5 min read",
    author: "Melissa Mitchell",
  },
  {
    id: "2",
    title: "The Ultimate Guide to Hair Extensions in Red Deer",
    excerpt: "Everything you need to know about choosing, installing, and caring for hair extensions.",
    content: `Hair extensions are a fantastic way to add length, volume, and dimension to your hair. Whether you're looking for a dramatic transformation or subtle enhancement, Hello Beauty Lounge has the perfect solution for you.

**Types of Hair Extensions**

Hand-tied extensions are the premium option, offering the most natural look and lasting 6-12 months with proper care. Tape-in extensions are quicker to apply and last 6-8 weeks, making them perfect for those who like to change their look frequently. Clip-in extensions offer the most flexibility with no commitment required.

**The Installation Process**

During your consultation, our stylists assess your hair type, discuss your goals, and recommend the best extension type for you. The installation process typically takes 3-4 hours depending on the method. We use only 100% human hair for the most natural appearance and styling versatility.

**Caring for Your Extensions**

Proper care is essential for maintaining your extensions and protecting your natural hair. Use sulfate-free products, brush gently from ends to roots, sleep in a braid, and avoid excessive heat. We provide detailed aftercare instructions at your appointment.

**Maintenance Appointments**

Most extensions require touch-ups every 6-8 weeks to maintain their appearance. During these appointments, we reposition, tighten, and assess the condition of your extensions.

**Cost Considerations**

While extensions are an investment, they offer incredible value by transforming your look without damaging your natural hair when applied and maintained properly. At Hello Beauty Lounge, we believe in quality over quantity.

Ready to transform your hair? Book a consultation with our extension specialists today!`,
    category: "Extensions",
    date: "May 28, 2026",
    readTime: "7 min read",
    author: "Noon K",
  },
  {
    id: "3",
    title: "Best Haircuts for Your Face Shape",
    excerpt: "Discover the perfect haircut that flatters your unique facial features.",
    content: `Finding the right haircut can completely transform your appearance and boost your confidence. At Hello Beauty Lounge in Red Deer, our stylists use face shape analysis to recommend cuts that enhance your natural beauty.

**Oval Face Shape**
Oval faces are versatile and can pull off almost any style. Try bobs, layers, or longer styles. Avoid styles that are too short or too long, as they can make the face appear unbalanced.

**Round Face Shape**
Round faces benefit from styles that add height and length. Longer layers, side-swept bangs, and styles with volume at the crown create a more elongated appearance. Avoid blunt cuts at chin length.

**Square Face Shape**
Soften angular features with rounded, layered cuts. Side-parted styles and longer lengths work well. Avoid blunt, straight-across cuts that emphasize the jawline.

**Heart Face Shape**
Heart-shaped faces are wider at the forehead and narrower at the chin. Try styles with volume at the bottom, like layers or waves. Side-swept bangs can help balance the forehead.

**Oblong Face Shape**
Add width to an elongated face with styles that have volume on the sides. Bobs, shoulder-length cuts, and side-parted styles work beautifully. Avoid long, straight styles that emphasize length.

**Diamond Face Shape**
Diamond faces are narrow at the forehead and jawline but wide at the cheekbones. Try styles with bangs and volume at the sides. Avoid styles that expose the cheekbones.

**Professional Consultation**
During your appointment at Hello Beauty Lounge, our stylists will analyze your face shape and recommend cuts that enhance your features. We'll also discuss your lifestyle and styling preferences to ensure your cut is both beautiful and practical.

Book your consultation with our master stylists today!`,
    category: "Styling Tips",
    date: "May 20, 2026",
    readTime: "6 min read",
    author: "Tiara Black",
  },
  {
    id: "4",
    title: "Top 5 Hair Color Trends for Summer 2026",
    excerpt: "Discover the hottest hair color trends that are dominating this summer.",
    content: `Summer is the perfect time to refresh your look with a new hair color. At Hello Beauty Lounge, we're seeing some amazing trends that are perfect for the season. Here are our top 5 picks:

**1. Warm Honey Blonde**
Warm, golden blonde tones are everywhere this summer. This shade works beautifully on all skin tones and gives a sun-kissed, effortless vibe. It's perfect for those looking to go lighter without going platinum.

**2. Rich Chocolate Brown**
Deep, rich browns are having a major moment. This versatile shade is flattering on most skin tones and provides a sophisticated, polished look. Add some subtle highlights for dimension.

**3. Copper and Rose Gold**
Warm copper and rose gold tones are perfect for adding warmth and dimension to your hair. These shades are especially stunning on medium to darker hair and create a beautiful, multidimensional effect.

**4. Balayage and Babylights**
Hand-painted highlights like balayage and babylights continue to be popular. These techniques create a natural, sun-kissed look that's low-maintenance and grows out beautifully.

**5. Bold Statement Colors**
For the adventurous, bold jewel tones like emerald, sapphire, and amethyst are making a statement. These colors are perfect for adding an unexpected pop of personality to your look.

**Choosing Your Color**
When selecting a new hair color, consider your skin tone, natural hair color, and lifestyle. Our color specialists at Hello Beauty Lounge will help you choose the perfect shade that complements your features and fits your style.

Ready for a color refresh? Book your consultation today!`,
    category: "Trends",
    date: "May 15, 2026",
    readTime: "5 min read",
    author: "Melissa Mitchell",
  },
  {
    id: "5",
    title: "DIY Hair Care Treatments You Can Do at Home",
    excerpt: "Simple, affordable treatments to keep your hair healthy between salon visits.",
    content: `Professional salon treatments are amazing, but you can also maintain healthy, beautiful hair at home with these simple DIY treatments. Here are our favorite budget-friendly options:

**Coconut Oil Deep Conditioning Mask**
Coconut oil is a natural moisturizer that works wonders on dry, damaged hair. Apply warm coconut oil to your hair, focusing on the ends, and leave it on for 15-30 minutes. Shampoo thoroughly to remove the oil. Your hair will feel incredibly soft and nourished.

**Avocado and Honey Hair Mask**
Blend one ripe avocado with two tablespoons of honey to create a nourishing mask. Apply to damp hair, leave for 20 minutes, then rinse. This treatment is perfect for adding shine and moisture to your hair.

**Apple Cider Vinegar Rinse**
Mix one part apple cider vinegar with three parts water to create a rinse. After shampooing, pour this mixture over your hair to remove product buildup and add shine. Your hair will feel incredibly clean and look shiny.

**Egg Protein Treatment**
Eggs are rich in protein, which strengthens hair. Beat two eggs and apply to your hair, focusing on the mid-lengths and ends. Leave for 15-20 minutes, then rinse with cool water. This treatment is especially great for damaged or weak hair.

**Olive Oil Scalp Massage**
Warm olive oil and massage it into your scalp for 5-10 minutes. This improves circulation and nourishes your scalp, promoting healthy hair growth. Wrap your head in a warm towel and leave for 15-30 minutes before shampooing.

**Banana Hair Mask**
Blend one ripe banana with a tablespoon of honey and apply to your hair. Leave for 15-20 minutes, then rinse. This treatment adds moisture and shine to your hair.

**Pro Tips**
- Always do a patch test before applying any DIY treatment to ensure you don't have an allergic reaction
- Use room temperature or warm (not hot) water when rinsing to avoid damaging your hair
- For best results, use these treatments once a week

While DIY treatments are great for maintenance, professional treatments at Hello Beauty Lounge provide deeper nourishment and specialized care. Book your appointment today for professional pampering!`,
    category: "Hair Care",
    date: "May 8, 2026",
    readTime: "6 min read",
    author: "Noon K",
  },
];

export default function Blog() {
  const [, navigate] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-4xl font-display font-bold text-foreground">
            Beauty Tips & Hair Care Guide
          </h1>
          <p className="text-muted-foreground mt-2">
            Expert advice from Hello Beauty Lounge stylists in Red Deer
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container py-8">
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <p className="text-sm text-muted-foreground">By {post.author}</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      // In a full implementation, this would navigate to a detailed post page
                      alert(`Full article: ${post.title}\n\n${post.content}`);
                    }}
                    className="mt-4 md:mt-0 whitespace-nowrap"
                  >
                    Read More
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert stylists at Hello Beauty Lounge in Red Deer are ready to help you achieve
            your hair goals. Book your appointment today!
          </p>
          <a href="https://www.vagaro.com/hellobeautylounge/staff" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Your Appointment
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
