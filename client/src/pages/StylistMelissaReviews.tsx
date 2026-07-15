import { Star, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/teamPortfolioData";
import { testimonials } from "@/data/testimonialsData";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function StylistMelissaReviews() {
  const melissa = teamMembers.find(member => member.id === "melissa-mitchell");
  
  // Filter testimonials that mention Melissa
  const melissaTestimonials = testimonials.filter(t => 
    t.clientName === "Jessica Chen" || t.clientName === "Lauren Brooks"
  );

  if (!melissa) return null;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${melissa.name} - Master Stylist | Hello Beauty Lounge`}
        description={`Meet ${melissa.name}, a master stylist specializing in ${melissa.specialties.join(", ")}. Read client reviews and book your appointment.`}
        keywords={`${melissa.name}, master stylist, precision cuts, balayage specialist, Red Deer hairstylist`}
        canonicalUrl={`https://hellobeautylounge.com/stylists/${melissa.id}`}
      />

      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('${melissa.image}')`, 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
      </div>

      <div className="container relative z-10 -mt-32 mb-16">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-3 gap-8">
          {/* Profile Image & Info */}
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-accent shadow-lg">
              <img src={melissa.image} alt={melissa.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {melissa.name}
            </h1>
            <p className="text-lg text-accent font-semibold mb-4">{melissa.title}</p>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">({melissa.reviews} reviews)</span>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">Specialties</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {melissa.specialties.map((specialty, idx) => (
                  <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                Book Appointment
              </Button>
              <Button variant="outline" className="w-full">
                Follow on Instagram
              </Button>
            </div>
          </div>

          {/* Bio & Info */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              {melissa.bio}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border/30">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent mb-1">{melissa.reviews}+</p>
                <p className="text-sm text-foreground/60">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent mb-1">{melissa.rating}</p>
                <p className="text-sm text-foreground/60">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent mb-1">10+</p>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
            </div>

            {/* Instagram Handle */}
            <div className="mt-6 pt-6 border-t border-border/30">
              <p className="text-sm text-foreground/60 mb-2">Follow Melissa's work</p>
              <a 
                href={melissa.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:text-accent/80 transition-colors"
              >
                @{melissa.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Client Reviews Section */}
      <div className="container py-16 md:py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Client <span className="text-accent">Reviews</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Discover what clients love about working with Melissa. Her precision cuts, expert styling, and personalized approach have earned her outstanding reviews.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {melissaTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border border-border/30"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Service Badge */}
              <div className="inline-flex items-center gap-2 mb-4 bg-accent/10 px-3 py-1 rounded-full">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">{testimonial.service}</span>
              </div>

              {/* Review Text */}
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="pt-6 border-t border-border/30 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{testimonial.clientName}</p>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 fill-accent text-white" />
                    )}
                  </div>
                  <p className="text-sm text-foreground/50">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Reviews CTA */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Experience Melissa's Expertise?</h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Melissa for their hair transformations. Book your consultation today.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg">
            Book Your Appointment
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
