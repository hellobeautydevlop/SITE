import { useState, useEffect } from "react";
import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface VideoTestimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  videoUrl: string;
  thumbnail: string;
  quote: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    service: "Hair Coloring",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/UQM3r5DVsis",
    thumbnail: "/manus-storage/video-testimonial-1.jpg",
    quote: "Stunning transformation with the most beautiful balayage!",
  },
  {
    id: "2",
    name: "Emily Rodriguez",
    service: "Hair Extensions",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/-aEDPeOVs70",
    thumbnail: "/manus-storage/video-testimonial-2.jpg",
    quote: "Amazing extension work! My hair looks so full and healthy.",
  },
  {
    id: "3",
    name: "Jessica Chen",
    service: "Cuts & Styling",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/roX4GI32DRY",
    thumbnail: "/manus-storage/video-testimonial-3.jpg",
    quote: "Perfect cut that flatters my face shape. Highly recommend!",
  },
  {
    id: "4",
    name: "Amanda Foster",
    service: "Hair Coloring",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/cwGiNcS9d-4",
    thumbnail: "/manus-storage/video-testimonial-4.jpg",
    quote: "Best salon in Red Deer! Professional, friendly, and amazing results.",
  },
];

export default function VideoCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = Autoplay({
    delay: 6000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 to-accent/20">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            Client Stories
          </span>
          <h2
            className="text-4xl md:text-5xl mb-6 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hear from Our Clients
          </h2>
          <p className="text-lg text-foreground/70">
            Watch real testimonials from clients who've experienced the Hello Beauty Lounge difference.
          </p>
        </div>

        {/* Video Carousel */}
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[plugin]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="gap-4">
            {videoTestimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full flex flex-col">
                  {/* Video Container */}
                  <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group mb-4">
                    {/* Video Embed */}
                    <iframe
                      src={testimonial.videoUrl}
                      title={`${testimonial.name} testimonial`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Testimonial Info Card */}
                  <div className="flex-1 bg-white border border-border/50 rounded-2xl p-6 luxury-card flex flex-col justify-between">
                    {/* Rating & Quote */}
                    <div>
                      <div className="flex gap-0.5 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-gold text-gold"
                          />
                        ))}
                      </div>
                      <p className="text-foreground/80 italic text-sm leading-relaxed mb-4">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="pt-4 border-t border-border/40">
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static translate-y-0 left-0 right-0 top-0 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300" />
            <CarouselNext className="relative static translate-y-0 left-0 right-0 top-0 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300" />
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {selectedIndex + 1} / {videoTestimonials.length}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
