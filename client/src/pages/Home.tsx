import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, Scissors, Sparkles, Palette, Star } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";

/**
 * Design Philosophy: Modern Luxury Minimalism
 * - Warm taupe (#8B7355) + rose-gold (#D4A574) accents
 * - Playfair Display (headlines) + Lato (body)
 * - Generous whitespace, asymmetric layouts
 * - Restrained motion, purposeful interactions
 */

export default function Home() {
  const [, setLocation] = useLocation();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Palette,
      title: "Hair Coloring & Balayage",
      description: "Expert color techniques including balayage, highlights, and custom color matching to enhance your natural beauty.",
      link: "/services/hair-coloring",
    },
    {
      icon: Scissors,
      title: "Professional Cuts & Styling",
      description: "Precision cuts tailored to your face shape and lifestyle, with expert styling for every occasion.",
      link: "/services/cuts-and-styling",
    },
    {
      icon: Sparkles,
      title: "Premium Hair Extensions",
      description: "High-quality hair extensions and professional installation for length, volume, and transformation.",
      link: "/services/hair-extensions",
    },
    {
      icon: Sparkles,
      title: "Nail Design",
      description: "Professional nail art and design services using premium products and techniques.",
      link: "/services/nail-design",
    },
  ];

  const team = [
    {
      name: "Noon K",
      role: "Master Stylist & Founder",
      specialty: "Hair Transformation & Artistry",
      bio: "The visionary founder and master stylist at Hello Beauty Lounge. With an artistic eye and a passion for perfection, Noon transforms hair into a masterpiece, ensuring every client leaves feeling fabulous and confident.",
      rating: 5.0,
      reviews: 12,
      image: "/manus-storage/IMG_4067_Original_13c5ff7d.JPG",
    },
    {
      name: "Melissa Mitchell",
      role: "Hair Specialist",
      specialty: "Balayage, Extensions & Color",
      bio: "With over a decade of experience, Melissa specializes in balayage, foilayage, color corrections, hand-tied extensions, updos, and makeup. She's passionate about enhancing natural beauty with affordable luxury.",
      rating: 5.0,
      reviews: 11,
      image: "/manus-storage/IMG_3887_Original_057626f3.JPG",
    },
    {
      name: "Tiara Black",
      role: "Hair Stylist",
      specialty: "Precision Cuts & Styling",
      bio: "With an eye for detail and a knack for making clients feel comfortable and chic, Tiara creates beautiful styles that are sure to turn heads. Your go-to for gorgeous hair at Hello Beauty Lounge.",
      rating: 5.0,
      reviews: 6,
      image: "/manus-storage/IMG_0253_Original_76cd13e1.JPG",
    },
  ];

  const businessHours = [
    { day: "Monday", hours: "Appointment Only" },
    { day: "Tuesday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Wednesday - Thursday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Appointment Only" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hello Beauty Lounge
          </div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/reviews" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white" onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}>
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/IMG_0069_Original_a9f0a198.JPG"
            alt="Luxury salon interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Elevate Your Beauty Journey
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Experience luxury hair and beauty services in Red Deer. Our master stylists specialize in color, cuts, extensions, and nail design.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}>
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('tel:+15872731668')}>
              Call: (587) 273-1668
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Services
            </h2>
            <p className="text-lg text-foreground/70">
              We offer comprehensive beauty services designed to transform and enhance your natural beauty with expert care and premium products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-8 border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setLocation(service.link)}
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                See the Transformation
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our expert stylists specialize in creating stunning transformations. From vibrant color to luxurious length, we bring your beauty vision to life.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" onClick={() => setLocation('/gallery')}>
                View Gallery
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-transformation-LsCxWNw4JuV82YSRKYyjfN.webp"
                alt="Hair transformation before and after"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet Our Master Stylists
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-foreground/60 mb-4">{member.specialty}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-sm text-foreground/70">({member.reviews} reviews)</span>
                  </div>
                  
                  <p className="text-foreground/70 leading-relaxed text-sm mb-4">{member.bio}</p>
                  
                  <Button 
                    size="sm" 
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
                  >
                    Book with {member.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-background p-12 rounded-lg">
            <h3 className="text-2xl mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Team
            </h3>
            <p className="text-center text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              With over a decade of professional experience, our stylists are passionate about creating beautiful transformations. We specialize in luxury hair color, expert cuts, premium extensions, and professional nail design. Each team member brings unique expertise and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Clients Say
            </h2>
            <p className="text-lg text-foreground/70 text-center">
              Real testimonials from clients who've experienced our transformations
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Verified Client Reviews
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              See what our satisfied clients are saying about their experiences at Hello Beauty Lounge on Vagaro.
            </p>
          </div>
          <GoogleReviewsWidget />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Visit Us
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-foreground/70">
                      4919 59 Street Unit 120<br />
                      Red Deer, AB T4N 6C9<br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-foreground/70">+1 (587) 273-1668</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2 text-foreground/70">
                      {businessHours.map((item, index) => (
                        <div key={index} className="flex justify-between gap-4">
                          <span>{item.day}</span>
                          <span className="font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-lg">
              <h3 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Book Your Appointment
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Service</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>Select a service</option>
                    <option>Hair Coloring & Balayage</option>
                    <option>Professional Cuts & Styling</option>
                    <option>Premium Hair Extensions</option>
                    <option>Nail Design</option>
                  </select>
                </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white py-3"
              onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
            >
              Book on Vagaro
            </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hello Beauty Lounge
              </h3>
              <p className="text-white/80">Luxury hair and beauty services in Red Deer, Alberta.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/reviews" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>&copy; 2026 Hello Beauty Lounge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
