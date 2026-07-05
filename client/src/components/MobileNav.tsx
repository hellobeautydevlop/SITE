import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onBookClick: () => void;
}

export default function MobileNav({ onBookClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Weddings", href: "/services/bridal-hair" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
    { label: "Kevin Murphy", href: "/kevin-murphy" },
    { label: "FAQ", href: "/faq" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border md:hidden">
      <div className="container py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
          HELLO BEAUTY LOUNGE
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 hover:bg-primary/10 rounded-lg transition-colors active:scale-95 duration-150 touch-manipulation"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white border-t border-border animate-in fade-in slide-in-from-top-2 overflow-y-auto max-h-[calc(100vh-60px)]">
          <div className="container py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5 active:bg-primary/10 text-base font-medium touch-manipulation"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border/50">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white active:scale-95 duration-150 touch-manipulation h-12 text-base font-semibold"
                onClick={() => {
                  handleLinkClick();
                  onBookClick();
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
