import { useRoute, useLocation } from "wouter";
import { ChevronLeft, Calendar, Clock, User, Sparkles, BookOpen, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { blogPosts } from "@/const/blogData";
import { stylistSpotlights } from "@/const/stylistSpotlightData";

export default function BlogPostDetail() {
  const [, navigate] = useLocation();
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  // Search in both regular blog posts and stylist spotlights
  const post = blogPosts.find((p) => p.slug === slug) || stylistSpotlights.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <SEO 
          title="Article Not Found | Hello Beauty Lounge"
          description="The requested blog article could not be found."
        />
        <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Article Not Found</h2>
        <Button onClick={() => navigate("/blog")} className="rounded-full">Back to Blog</Button>
      </div>
    );
  }

  // Format content to render paragraphs, bold text, lists, and headings properly
  const formatContent = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => {
      const trimmed = paragraph.trim();

      // Handle Headings (###)
      if (trimmed.startsWith("###")) {
        return (
          <h3
            key={index}
            className="text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border/30 pb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {trimmed.replace("###", "").trim()}
          </h3>
        );
      }

      // Handle Headings (####)
      if (trimmed.startsWith("####")) {
        return (
          <h4
            key={index}
            className="text-xl font-semibold text-primary mt-6 mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {trimmed.replace("####", "").trim()}
          </h4>
        );
      }

      // Handle Bullet Lists (-)
      if (trimmed.startsWith("-")) {
        const items = trimmed
          .split("\n")
          .map((item) => item.replace("-", "").trim());
        return (
          <ul key={index} className="list-disc pl-6 space-y-2.5 my-4 text-foreground/80">
            {items.map((item, i) => {
              // Parse bold text inside list items
              const boldRegex = /\*\*(.*?)\*\*/g;
              const parts = item.split(boldRegex);
              return (
                <li key={i} className="leading-relaxed">
                  {parts.map((part, indexPart) =>
                    indexPart % 2 === 1 ? (
                      <strong key={indexPart} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              );
            })}
          </ul>
        );
      }

      // Handle Numbered Lists (1., 2., etc.)
      if (/^\d+\./.test(trimmed)) {
        const items = trimmed.split("\n");
        return (
          <ol key={index} className="list-decimal pl-6 space-y-3.5 my-4 text-foreground/80">
            {items.map((item, i) => {
              const cleanedItem = item.replace(/^\d+\.\s*/, "").trim();
              const boldRegex = /\*\*(.*?)\*\*/g;
              const parts = cleanedItem.split(boldRegex);
              return (
                <li key={i} className="leading-relaxed">
                  {parts.map((part, indexPart) =>
                    indexPart % 2 === 1 ? (
                      <strong key={indexPart} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              );
            })}
          </ol>
        );
      }

      // Default Paragraph
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = trimmed.split(boldRegex);
      return (
        <p key={index} className="text-foreground/80 leading-relaxed mb-4 text-base md:text-lg">
          {parts.map((part, indexPart) =>
            indexPart % 2 === 1 ? (
              <strong key={indexPart} className="font-semibold text-foreground">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <SEO 
        title={`${post.title} | Hello Beauty Lounge Red Deer`}
        description={post.excerpt}
        keywords={`hair blog, ${post.category.toLowerCase()}, ${post.title.toLowerCase()}, Red Deer hair salon`}
        canonicalUrl={`https://hellobeautylounge.com/blog/${post.slug}`}
      />

      {/* Header */}
      <div className="sticky top-0 z-40 glassmorphism border-b border-border/50">
        <div className="container py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Breadcrumb Navigation */}
          <Breadcrumb>
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
                <BreadcrumbLink 
                  onClick={() => navigate("/blog")} 
                  className="cursor-pointer text-xs font-medium"
                >
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs font-medium text-accent max-w-[200px] truncate">
                  {post.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-lg font-bold text-primary self-start md:self-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hello <span className="text-accent font-medium">Beauty Lounge</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="container py-12 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 mb-6 text-xs">
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

        <h1 
          className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-8 leading-tight" 
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {post.title}
        </h1>

        <div className="flex items-center gap-2.5 text-sm text-foreground/50 border-b border-border/50 pb-6 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
            <User className="w-4 h-4" />
          </div>
          <span>By <strong className="font-semibold text-foreground/70">{post.author}</strong></span>
        </div>

        {/* Formatted Content */}
        <div className="prose max-w-none prose-neutral">
          {formatContent(post.content)}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border">
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Want Personalized Advice?
          </h2>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Book a session with <strong className="text-primary font-semibold">{post.author}</strong> or any of our master stylists to get a customized hair plan tailored just for you.
          </p>
          <a href="https://www.vagaro.com/hellobeautylounge" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              Book Your Appointment
            </Button>
          </a>
        </div>
      </article>
    </div>
  );
}
