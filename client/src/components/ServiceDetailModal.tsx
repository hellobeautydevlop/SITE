import { Button } from "@/components/ui/button";
import { Check, X, Clock, DollarSign, Sparkles, Calendar } from "lucide-react";

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    description: string;
    price: string;
    duration: string;
    details: string[];
    additionalInfo?: string;
  } | null;
}

export default function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col max-h-[90vh] animate-scale-in">
        {/* Header Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/50 hover:text-foreground bg-secondary/50 hover:bg-secondary p-2 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Area */}
        <div className="p-8 overflow-y-auto flex-grow">
          <div className="flex items-center gap-2 text-accent text-xs font-bold tracking-widest uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            Premium Service Detail
          </div>
          
          <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {service.name}
          </h3>

          <p className="text-foreground/70 text-base leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-secondary/30 p-4 rounded-2xl border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-foreground/50 uppercase tracking-wider">Estimated Price</p>
                <p className="font-bold text-primary text-base">{service.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-foreground/50 uppercase tracking-wider">Average Duration</p>
                <p className="font-bold text-primary text-base">{service.duration}</p>
              </div>
            </div>
          </div>

          {/* Service Details Checklist */}
          <div className="mb-8">
            <h4 className="font-bold text-foreground text-sm mb-4 uppercase tracking-wider">What's included in this service:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.details.map((detail, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-sm text-foreground/80 leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Guidance */}
          {service.additionalInfo && (
            <div className="mb-8 bg-accent/5 p-4 rounded-2xl border border-accent/10 text-xs text-foreground/70 leading-relaxed">
              <strong>Please Note:</strong> {service.additionalInfo}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => {
                window.open("https://www.vagaro.com/hellobeautylounge", "_blank");
                onClose();
              }}
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-md flex-grow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="border-border text-foreground/70 hover:bg-secondary/30 rounded-full py-6 px-6"
            >
              Close Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
