import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  onBookClick: () => void;
}

export default function MobileNav({ onBookClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
    { label: "Weddings", href: "/services/bridal-hair" },
    { label: "Kevin Murphy", href: "/kevin-murphy" },
    { label: "FAQ", href: "/faq" },
    { label: "Model", href: "/model-application" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Hair Coloring & Balayage", href: "/services/hair-coloring" },
    { label: "Hair Extensions", href: "/services/hair-extensions" },
    { label: "Cuts & Styling", href: "/services/cuts-and-styling" },
    { label: "Bridal Hair", href: "/services/bridal-hair" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
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
            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5 active:bg-primary/10 text-base font-medium touch-manipulation flex items-center justify-between"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="bg-primary/5 rounded-lg mt-1 overflow-hidden">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block px-6 py-2 text-foreground/80 hover:text-primary transition-colors text-sm font-medium border-b border-border/30 last:border-b-0"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

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
