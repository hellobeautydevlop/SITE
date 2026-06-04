import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Sarah Johnson",
    rating: 5,
    text: "Noon transformed my hair with the most beautiful balayage! The color is exactly what I wanted and it looks so natural. I'm obsessed!",
    date: "2 weeks ago",
    service: "Hair Coloring",
  },
  {
    id: "2",
    author: "Emily Rodriguez",
    rating: 5,
    text: "Melissa is an extension expert! My hair looks so full and healthy. The installation was seamless and the aftercare advice was super helpful.",
    date: "1 month ago",
    service: "Hair Extensions",
  },
  {
    id: "3",
    author: "Jessica Chen",
    rating: 5,
    text: "Tiara gave me the perfect cut that flatters my face shape. I feel so confident and the style is easy to maintain. Highly recommend!",
    date: "3 weeks ago",
    service: "Cuts & Styling",
  },
  {
    id: "4",
    author: "Amanda Foster",
    rating: 5,
    text: "I've been going to Hello Beauty Lounge for 2 years now. The team is professional, friendly, and always delivers amazing results. Best salon in Red Deer!",
    date: "1 week ago",
    service: "Hair Coloring",
  },
  {
    id: "5",
    author: "Michelle Davis",
    rating: 5,
    text: "The quality of the extensions and the installation process was exceptional. My hair looks incredible and feels so natural. Worth every penny!",
    date: "3 days ago",
    service: "Hair Extensions",
  },
];

import { useState } from "react";

export default function GoogleReviewsWidget() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  const totalReviews = "29+";
  const services = Array.from(new Set(reviews.map((r) => r.service)));

  const filteredReviews = selectedService
    ? reviews.filter((r) => r.service === selectedService)
    : reviews;

  return (
    <div className="w-full">
      {/* Header with Rating Summary & Filter Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-border/50">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gold text-gold"
                />
              ))}
            </div>
            <span className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              {averageRating}
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            Based on <strong className="text-foreground font-semibold">{totalReviews} verified reviews</strong> on Vagaro & Google Business
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedService(null)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
              selectedService === null
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-white text-foreground hover:bg-secondary border-border"
            }`}
          >
            All Reviews
          </button>
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                selectedService === service
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-white text-foreground hover:bg-secondary border-border"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        <a
          href="https://www.vagaro.com/hellobeautylounge/staff"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start lg:self-auto"
        >
          <Button variant="outline" className="rounded-full border-border hover:bg-secondary/30 text-xs font-medium">
            <ExternalLink className="w-3.5 h-3.5 mr-2 text-accent" />
            View All Reviews on Vagaro
          </Button>
        </a>
      </div>

      {/* Reviews Grid with Entrance Animations */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((review, index) => (
          <div
            key={review.id}
            className="bg-white border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between luxury-card animate-fade-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div>
              {/* Rating Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed text-sm italic">
                "{review.text}"
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between pt-4 border-t border-border/40">
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {review.author}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Verified Client • {review.date}
                </p>
              </div>
              <span className="text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                {review.service}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Luxury CTA */}
      <div className="mt-12 bg-white border border-border/50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto luxury-card">
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to Experience the <span className="text-gold">Difference?</span>
        </h3>
        <p className="text-foreground/70 mb-8 max-w-xl mx-auto leading-relaxed text-sm">
          Join our growing community of happy clients in Red Deer. Our expert stylists are dedicated to bringing your unique hair goals to life.
        </p>
        <a
          href="https://www.vagaro.com/hellobeautylounge/staff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            Book Your Consultation
          </Button>
        </a>
      </div>
    </div>
  );
}
