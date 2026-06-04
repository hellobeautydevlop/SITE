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

export default function GoogleReviewsWidget() {
  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  const totalReviews = "29+";

  return (
    <div className="w-full">
      {/* Header with Rating Summary */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">
                {averageRating}
              </span>
            </div>
            <p className="text-muted-foreground">
              Based on {totalReviews} reviews on Vagaro
            </p>
          </div>
        </div>
        <a
          href="https://www.vagaro.com/hellobeautylounge/staff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Reviews on Vagaro
          </Button>
        </a>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-foreground mb-4 leading-relaxed">
              "{review.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {review.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {review.service} • {review.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-display font-bold text-foreground mb-3">
          Join Our Happy Clients
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Experience the Hello Beauty Lounge difference. Our expert stylists are dedicated to creating beautiful transformations and exceptional service.
        </p>
        <a
          href="https://www.vagaro.com/hellobeautylounge/staff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Book Your Appointment Today
          </Button>
        </a>
      </div>
    </div>
  );
}
