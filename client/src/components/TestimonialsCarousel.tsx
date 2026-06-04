import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    service: "Hair Coloring",
    rating: 5,
    text: "Noon transformed my hair with the most beautiful balayage! The color is exactly what I wanted and it looks so natural. I'm obsessed!",
    avatar: "SJ",
  },
  {
    id: "2",
    name: "Emily Rodriguez",
    service: "Hair Extensions",
    rating: 5,
    text: "Melissa is an extension expert! My hair looks so full and healthy. The installation was seamless and the aftercare advice was super helpful.",
    avatar: "ER",
  },
  {
    id: "3",
    name: "Jessica Chen",
    service: "Cuts & Styling",
    rating: 5,
    text: "Tiara gave me the perfect cut that flatters my face shape. I feel so confident and the style is easy to maintain. Highly recommend!",
    avatar: "JC",
  },
  {
    id: "4",
    name: "Amanda Foster",
    service: "Hair Coloring",
    rating: 5,
    text: "I've been going to Hello Beauty Lounge for 2 years now. The team is professional, friendly, and always delivers amazing results. Best salon in Red Deer!",
    avatar: "AF",
  },
  {
    id: "5",
    name: "Michelle Davis",
    service: "Hair Extensions",
    rating: 5,
    text: "The quality of the extensions and the installation process was exceptional. My hair looks incredible and feels so natural. Worth every penny!",
    avatar: "MD",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const testimonial = testimonials[current];

  return (
    <div className="w-full bg-gradient-to-br from-secondary/50 to-accent/30 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-primary text-primary"
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-lg md:text-xl font-medium text-foreground mb-8 leading-relaxed">
          "{testimonial.text}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.service}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setIsAutoPlay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-sm text-muted-foreground">
            {current + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </div>
  );
}
