import { useState } from "react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { ChevronLeft, Search, Clock, Calendar, User, Sparkles, BookOpen, Home } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useLocation } from "wouter";
import { blogPosts } from "@/const/blogData";

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
    <div className="min-h-screen bg-background pb-24">
      <SEO 
        title="Hair Care Blog & Tips | Hello Beauty Lounge"
        description="Read professional hair care tips, balayage maintenance guides, extension styling advice, and wedding hair trends from our master stylists in Red Deer."
        keywords="hair care blog Red Deer, salon tips Alberta, balayage maintenance, extension styling guide, bridal hair trends"
        canonicalUrl="https://hellobeautylounge.com/blog"
      />
      {/* Header */}
      <div className="sticky top-0 z-40 glassmorphism border-b border-border/50">
        <div className="container py-6">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => navigate("/")} 
                  className="cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                >
                  <Home className="w-3.5 h-3.5" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs font-medium text-accent">Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Beauty <span className="text-gold">Journal</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Expert hair care tips, trends, and tutorials from the stylists at Hello Beauty Lounge
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg scale-[1.02]"
                  : "bg-white text-foreground hover:bg-secondary border border-border"
              }`}
            >
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg scale-[1.02]"
                    : "bg-white text-foreground hover:bg-secondary border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8 max-w-4xl">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer luxury-card"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                      <span className="font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                        {post.category}
                      </span>
                      <span className="text-foreground/40 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="text-foreground/30">•</span>
                      <span className="text-foreground/40 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground mb-3 leading-snug hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {post.title}
                    </h2>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-foreground/50 border-t border-border/50 pt-4">
                      <User className="w-3.5 h-3.5 text-accent" />
                      <span>By <strong className="font-semibold text-foreground/70">{post.author}</strong></span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blog/${post.slug}`);
                    }}
                    className="mt-6 md:mt-0 whitespace-nowrap rounded-full border-border text-foreground/70 hover:bg-secondary/30"
                  >
                    Read Full Article
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-border/50 shadow-sm">
              <p className="text-foreground/50">No articles found matching your search.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center bg-white p-12 md:p-16 rounded-3xl shadow-sm border border-border max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Transform Your <span className="text-gold">Hair?</span>
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our expert stylists at Hello Beauty Lounge in Red Deer are ready to help you achieve
            your hair goals. Book your appointment today!
          </p>
          <a href="https://www.vagaro.com/hellobeautylounge" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              Book Your Appointment
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
