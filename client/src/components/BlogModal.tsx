import { Button } from "@/components/ui/button";
import { X, Calendar, User, Clock, Sparkles, BookOpen } from "lucide-react";

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

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

export default function BlogModal({ isOpen, onClose, post }: BlogModalProps) {
  if (!isOpen || !post) return null;

  // Format content with paragraphs and lists nicely
  const formatContent = (text: string) => {
    return text.split("\n\n").map((paragraph, idx) => {
      // Check if it's a heading
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <h4
            key={idx}
            className="text-xl font-bold text-foreground mt-8 mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {paragraph.replace(/\*\*/g, "")}
          </h4>
        );
      }
      // Check if it's a numbered list item
      if (paragraph.startsWith("**1.") || paragraph.startsWith("**2.") || paragraph.startsWith("**3.") || paragraph.startsWith("**4.") || paragraph.startsWith("**5.")) {
        const parts = paragraph.split("\n");
        return (
          <div key={idx} className="my-6">
            <h5 className="font-bold text-lg text-primary mb-2">
              {parts[0].replace(/\*\*/g, "")}
            </h5>
            {parts.slice(1).map((subPart, subIdx) => (
              <p key={subIdx} className="text-foreground/70 text-sm leading-relaxed mb-2">
                {subPart}
              </p>
            ))}
          </div>
        );
      }
      
      // Default paragraph
      return (
        <p key={idx} className="text-foreground/70 text-base leading-relaxed mb-6">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col max-h-[90vh] animate-scale-in">
        {/* Header Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/50 hover:text-foreground bg-secondary/50 hover:bg-secondary p-2 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Area */}
        <div className="p-8 overflow-y-auto flex-grow">
          {/* Metadata Tag */}
          <div className="flex items-center gap-2 text-accent text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            {post.category}
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {post.title}
          </h3>

          {/* Author, Date, Read Time Bar */}
          <div className="flex flex-wrap gap-4 items-center border-y border-border/50 py-4 mb-8 text-xs text-foreground/60">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-accent" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Formatted Content */}
          <div className="prose max-w-none">
            {formatContent(post.content)}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-12 border-t border-border/50 pt-8">
            <Button
              onClick={() => {
                window.open("https://www.vagaro.com/hellobeautylounge/staff", "_blank");
                onClose();
              }}
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-md flex-grow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <BookOpen className="w-5 h-5" />
              Book Appointment with {post.author.split(' ')[0]}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="border-border text-foreground/70 hover:bg-secondary/30 rounded-full py-6 px-6"
            >
              Close Article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
