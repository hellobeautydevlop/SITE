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
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
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
          HBL
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
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
        <div className="bg-white border-t border-border animate-in fade-in slide-in-from-top-2">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-foreground hover:text-primary transition-colors py-2 px-2 rounded hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
              onClick={() => {
                handleLinkClick();
                onBookClick();
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
