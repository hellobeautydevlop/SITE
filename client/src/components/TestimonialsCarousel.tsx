import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials, testimonialStats } from "@/data/testimonialsData";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-semibold text-accent">
              TRUSTED BY CLIENTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Hello Beauty Lounge for
            their hair transformation. See why our stylists are Red Deer's
            premier choice.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div>
              <div className="text-2xl font-bold text-accent">
                {testimonialStats.averageRating}
              </div>
              <div className="flex gap-1 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/60 mt-1">Average Rating</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">
                {testimonialStats.totalReviews}
              </div>
              <p className="text-sm text-foreground/60 mt-1">Reviews</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">
                {testimonialStats.recommendationRate}%
              </div>
              <p className="text-sm text-foreground/60 mt-1">Recommend Us</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            {/* Client Image */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent/20 flex-shrink-0">
                <img
                  src={currentTestimonial.imageUrl}
                  alt={currentTestimonial.clientName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-foreground text-center mb-6 text-lg leading-relaxed">
              "{currentTestimonial.review}"
            </p>

            {/* Client Info */}
            <div className="text-center border-t border-border pt-6">
              <h3 className="font-bold text-lg text-foreground">
                {currentTestimonial.clientName}
              </h3>
              <p className="text-sm text-foreground/60 mb-2">
                {currentTestimonial.service}
              </p>
              <p className="text-xs text-foreground/50">
                {currentTestimonial.date}
                {currentTestimonial.verified && (
                  <span className="ml-2 inline-block px-2 py-1 bg-accent/10 text-accent rounded text-xs font-semibold">
                    ✓ Verified
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-2 hover:bg-accent/10 rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-accent" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 p-2 hover:bg-accent/10 rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-accent" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-accent/30 w-2 hover:bg-accent/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6 text-sm text-foreground/50">
            {isAutoPlay ? (
              <span>Auto-rotating • Click to pause</span>
            ) : (
              <button
                onClick={() => setIsAutoPlay(true)}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Resume auto-play
              </button>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">
            Ready to join our happy clients?
          </p>
          <button
            onClick={() =>
              window.open("https://www.vagaro.com/hellobeautylounge", "_blank")
            }
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 active:scale-95"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
