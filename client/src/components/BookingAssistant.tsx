import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, X, Phone, MapPin, Clock, MessageSquare, Sparkles } from "lucide-react";

export default function BookingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the widget after 3 seconds for a subtle entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Booking Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 flex items-center gap-2 group ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
      >
        <Calendar className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap text-sm">
          Book Appointment
        </span>
      </button>

      {/* Assistant Card Panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl border border-border/50 flex flex-col transition-all duration-500 ease-out origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary p-6 text-white relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                HBL Assistant
              </h4>
              <p className="text-xs text-white/80 mt-0.5">Let's elevate your beauty today</p>
            </div>
          </div>
        </div>

        {/* Quick Info / Links */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-foreground/70 leading-relaxed">
            Welcome to **Hello Beauty Lounge**! We specialize in luxury custom color, hand-tied extensions, and bridal hair.
          </p>

          <div className="border-t border-border/50 my-4 pt-4 space-y-3 text-sm text-foreground/80">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
              <span>4919 59 St Unit 120, Red Deer, AB</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="tel:+15872731668" className="hover:text-primary transition-colors">
                +1 (587) 273-1668
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Open Tue - Sat (Closed Mon & Sun)</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="space-y-3 pt-2">
            <Button
              onClick={() => {
                window.open("https://www.vagaro.com/hellobeautylounge", "_blank");
                setIsOpen(false);
              }}
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-full py-6 font-semibold shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Calendar className="w-5 h-5" />
              Book Online via Vagaro
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                window.open("tel:+15872731668");
                setIsOpen(false);
              }}
              className="w-full border-border text-foreground/70 hover:bg-secondary/30 rounded-full py-6 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </Button>
          </div>
        </div>

        {/* Footer Brand Banner */}
        <div className="bg-secondary/30 px-6 py-3 border-t border-border/50 text-center text-[10px] text-foreground/50 tracking-wider uppercase font-medium">
          Hello Beauty Lounge · Red Deer
        </div>
      </div>
    </>
  );
}
