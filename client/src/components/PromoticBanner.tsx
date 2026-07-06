import { X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-accent to-primary text-white shadow-lg animate-slide-down">
      <div className="container py-3 md:py-4 flex items-center justify-between gap-4">
        {/* Left: Icon + Message */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 animate-pulse" />
          <div className="min-w-0">
            <p className="text-xs md:text-sm font-semibold leading-tight">
              ✨ NEW CLIENT SPECIAL: 20% OFF Your First Service!
            </p>
            <p className="text-[10px] md:text-xs opacity-90 hidden sm:block">
              Use code: HELLO20 at checkout
            </p>
          </div>
        </div>

        {/* Right: CTA Button + Close */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="https://www.vagaro.com/hellobeautylounge"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold hover:bg-opacity-90 transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-md"
          >
            Book Now
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors duration-300"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
