import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Clock, Calendar, User, Sparkles } from 'lucide-react';
import { useLocation } from 'wouter';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

interface BlogPostRendererProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
  };
  relatedPosts?: Array<{
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
  }>;
}

/**
 * Converts markdown content to HTML with support for:
 * - Headings (# ## ###)
 * - Bold (**text**)
 * - Italic (*text*)
 * - Lists (- item)
 * - Line breaks
 */
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Escape HTML special characters first
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Headings (must be at start of line)
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Line breaks (double newline = paragraph)
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>\s*<h/g, '<h');
  html = html.replace(/<\/h\d>\s*<\/p>/g, '</h>');

  return html;
}

export default function BlogPostRenderer({ post, relatedPosts = [] }: BlogPostRendererProps) {
  const [, navigate] = useLocation();

  // Parse content into sections for better rendering
  const sections = post.content.split('\n\n').filter(s => s.trim());

  return (
    <div className="min-h-screen bg-background pb-24">
      <SEO
        title={`${post.title} | Hello Beauty Lounge Blog`}
        description={post.excerpt}
        keywords={`${post.category}, hair care, salon, Red Deer, ${post.author}`}
        canonicalUrl={`https://hellobeautylounge.com/blog/${post.slug}`}
      />

      {/* Header */}
      <div className="sticky top-0 z-40 glassmorphism border-b border-border/50">
        <div className="container py-6">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => navigate('/')}
                  className="cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => navigate('/blog')}
                  className="cursor-pointer text-xs font-medium"
                >
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs font-medium text-accent">{post.category}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs mb-4 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                {post.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-foreground/60">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              By <strong className="text-foreground/80">{post.author}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm">
              {sections.map((section, idx) => {
                // Check if section is a heading
                if (section.startsWith('#')) {
                  const level = section.match(/^#+/)?.[0].length || 1;
                  const text = section.replace(/^#+\s*/, '');

                  if (level === 1) {
                    return (
                      <h1
                        key={idx}
                        className="text-4xl font-display font-semibold text-foreground mt-12 mb-6 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {text}
                      </h1>
                    );
                  } else if (level === 2) {
                    return (
                      <h2
                        key={idx}
                        className="text-2xl font-display font-semibold text-foreground mt-10 mb-5 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {text}
                      </h2>
                    );
                  } else {
                    return (
                      <h3
                        key={idx}
                        className="text-xl font-semibold text-foreground mt-8 mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {text}
                      </h3>
                    );
                  }
                }

                // Check if section is a list
                if (section.startsWith('-')) {
                  const items = section.split('\n').filter(line => line.trim().startsWith('-'));
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-3 my-6 text-foreground/80 leading-relaxed">
                      {items.map((item, i) => (
                        <li key={i} className="ml-4">
                          {item.replace(/^-\s*/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Regular paragraph
                return (
                  <p
                    key={idx}
                    className="text-foreground/80 leading-relaxed mb-6 text-base"
                  >
                    {section}
                  </p>
                );
              })}
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl border border-border/50 shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Transform Your Hair?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Our expert stylists are ready to help you achieve your hair goals. Book your appointment with one of our specialists today!
            </p>
            <a href="https://www.vagaro.com/hellobeautylounge" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                Book Your Appointment
              </Button>
            </a>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                More from the Journal
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                    className="bg-white rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <span className="inline-block text-accent font-semibold text-xs mb-3 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-semibold text-foreground mb-2 leading-snug hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {relatedPost.title}
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-border text-foreground/70 hover:bg-secondary/30"
                    >
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              onClick={() => navigate('/blog')}
              className="rounded-full border-border text-foreground/70 hover:bg-secondary/30"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
