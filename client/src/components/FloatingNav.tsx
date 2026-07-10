import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setLocation(path);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Floating Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg shadow-xl border-b border-border/50' 
          : 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Text (Magazine Style) */}
            <button 
              onClick={() => handleNavigation('/')}
              className="text-sm font-semibold tracking-widest text-foreground hover:text-accent transition-colors uppercase"
            >
              Hello Beauty
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors text-sm font-medium">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <button 
                    onClick={() => handleNavigation('/services/hair-coloring')}
                    className="w-full text-left px-4 py-2 hover:bg-accent/10 text-foreground"
                  >
                    Hair Coloring & Balayage
                  </button>
                  <button 
                    onClick={() => handleNavigation('/services/hair-extensions')}
                    className="w-full text-left px-4 py-2 hover:bg-accent/10 text-foreground"
                  >
                    Hair Extensions
                  </button>
                  <button 
                    onClick={() => handleNavigation('/services/cuts-and-styling')}
                    className="w-full text-left px-4 py-2 hover:bg-accent/10 text-foreground"
                  >
                    Cuts & Styling
                  </button>
                  <button 
                    onClick={() => handleNavigation('/services/bridal-hair')}
                    className="w-full text-left px-4 py-2 hover:bg-accent/10 text-foreground"
                  >
                    Bridal Hair
                  </button>
                </div>
              </div>
              
              <button onClick={() => handleNavigation('/gallery')} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Gallery
              </button>
              <button onClick={() => handleNavigation('/blog')} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Blog
              </button>
              <button onClick={() => handleNavigation('/reviews')} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Reviews
              </button>
              <button onClick={() => handleNavigation('/weddings')} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Weddings
              </button>
              <button onClick={() => handleNavigation('/kevin-murphy')} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Kevin Murphy
              </button>
              <button onClick={() => handleNavigation('/faq')} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                FAQ
              </button>
              <button onClick={() => handleNavigation('/contact')} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                Contact
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
                className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-6 py-2 btn-hover-lift"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              <div className="space-y-2 pt-4">
                <div>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg flex items-center justify-between font-medium"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-2">
                      <button 
                        onClick={() => handleNavigation('/services/hair-coloring')}
                        className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg text-sm"
                      >
                        Hair Coloring & Balayage
                      </button>
                      <button 
                        onClick={() => handleNavigation('/services/hair-extensions')}
                        className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg text-sm"
                      >
                        Hair Extensions
                      </button>
                      <button 
                        onClick={() => handleNavigation('/services/cuts-and-styling')}
                        className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg text-sm"
                      >
                        Cuts & Styling
                      </button>
                      <button 
                        onClick={() => handleNavigation('/services/bridal-hair')}
                        className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg text-sm"
                      >
                        Bridal Hair
                      </button>
                    </div>
                  )}
                </div>
                
                <button onClick={() => handleNavigation('/gallery')} className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg font-medium">
                  Gallery
                </button>
                <button onClick={() => handleNavigation('/blog')} className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg font-medium">
                  Blog
                </button>
                <button onClick={() => handleNavigation('/reviews')} className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg font-medium">
                  Reviews
                </button>
                <button onClick={() => handleNavigation('/weddings')} className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg font-medium">
                  Weddings
                </button>
                <button onClick={() => handleNavigation('/kevin-murphy')} className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg font-medium">
                  Kevin Murphy
                </button>
                <button onClick={() => handleNavigation('/faq')} className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg font-medium">
                  FAQ
                </button>
                <button onClick={() => handleNavigation('/contact')} className="w-full text-left px-4 py-2 hover:bg-accent/10 rounded-lg font-medium">
                  Contact
                </button>
                <Button 
                  onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold rounded-full mt-4"
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
}
