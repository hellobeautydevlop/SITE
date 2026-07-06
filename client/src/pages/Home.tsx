import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Phone, MapPin, Clock, Scissors, Sparkles, Palette, Star, Instagram } from "lucide-react";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import MobileNav from "@/components/MobileNav";
import InstagramFeed from "@/components/InstagramFeed";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";


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
      title: "Custom Dimensional Color",
      description: "Expert balayage and dimensional color using Kevin Murphy products for stunning, natural-looking results.",
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
      title: "Premium Hand-Tied Extensions",
      description: "Luxury hand-tied extensions for seamless length and volume transformation with professional installation.",
      link: "/services/hair-extensions",
    },
    {
      icon: Sparkles,
      title: "Bridal & Wedding Hair",
      description: "Specialized bridal packages including consultations, trials, and on-the-day styling for your perfect wedding day.",
      link: "/services/bridal-hair",
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
      instagram: "https://www.instagram.com/nkhamkhay?igsh=MTZiN2Roc2JnM3Uzbw==",
    },
    {
      name: "Melissa Mitchell",
      role: "Hair Specialist",
      specialty: "Balayage, Extensions & Color",
      bio: "With over a decade of experience, Melissa specializes in balayage, foilayage, color corrections, hand-tied extensions, updos, and makeup. She's passionate about enhancing natural beauty with affordable luxury.",
      rating: 5.0,
      reviews: 11,
      image: "/manus-storage/IMG_3887_Original_057626f3.JPG",
      instagram: "https://www.instagram.com/hairbymelyssam?igsh=MWRzZmVwbzh3eGc5NQ==",
    },
    {
      name: "Tiara Black",
      role: "Hair Stylist",
      specialty: "Precision Cuts & Styling",
      bio: "With an eye for detail and a knack for making clients feel comfortable and chic, Tiara creates beautiful styles that are sure to turn heads. Your go-to for gorgeous hair at Hello Beauty Lounge.",
      rating: 5.0,
      reviews: 6,
      image: "/manus-storage/IMG_0253_Original_76cd13e1.JPG",
      instagram: "https://www.instagram.com/holysnips_bytiara?igsh=bnBhOG84cnA5ZG4z",
    },
    {
      name: "Keltie Cummins",
      role: "Hair Specialist",
      specialty: "Lived-In Blondes, Dimensional Colour & Extensions",
      bio: "Keltie specializes in lived-in blondes, dimensional colour, and extensions. With a focus on healthy hair and personalized results, she strives to help every guest feel confident and at home in her chair!",
      rating: 5.0,
      reviews: 8,
      image: "/manus-storage/keltie-cummins_dd27bc42.png",
      instagram: "https://www.instagram.com/hairbykelt?igsh=MWk1MWM5eDlibTdyMA==",
    },
  ];

  const businessHours = [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "10:00 AM - 7:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
    { day: "Friday", hours: "10:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const brands = [
    { name: "Kevin Murphy", description: "Premium, environmentally conscious hair care" },
    { name: "Living Proof", description: "Advanced hair science products" },
    { name: "K18", description: "Professional hair repair technology" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Hello Beauty Lounge | Hair Salon Red Deer"
        description="Luxury hair salon in Red Deer, AB. Expert stylists, custom color, extensions & bridal services."
        keywords="hair salon Red Deer, balayage Red Deer, hair extensions Red Deer, bridal hair Red Deer, Kevin Murphy salon, luxury hair salon Alberta"
        canonicalUrl="https://hellobeautylounge.com/"
      />
      {/* Sticky Header */}
      <MobileNav onBookClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')} />

      {/* Desktop Navigation */}
      <nav className="sticky top-0 z-50 glassmorphism border-b border-border/50 hidden md:block transition-all duration-300">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-primary hover:scale-[1.02] transition-transform" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hello <span className="text-accent font-medium">Beauty Lounge</span>
          </div>
          <div className="flex gap-8 items-center font-medium text-sm tracking-wide uppercase">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Services
            </a>
            <a href="/gallery" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Gallery
            </a>
            <a href="/blog" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Blog
            </a>
            <a href="/reviews" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Reviews
            </a>
            <a href="/services/bridal-hair" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Weddings
            </a>
            <a href="/kevin-murphy" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Kevin Murphy
            </a>
            <a href="/faq" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              FAQ
            </a>
            <a href="/model-application" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Model
            </a>
            <a href="#team" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Team
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300">
              Contact
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium shadow-sm rounded-full px-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]" onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}>
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/manus-storage/IMG_0069_Original_a9f0a198.JPG')", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="container relative z-10 max-w-3xl">
          <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            Welcome to Luxury Haircare
          </span>
          <h1 className="text-4xl md:text-7xl text-white mb-4 md:mb-6 font-semibold leading-[1.15]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Elevate Your <br className="hidden md:inline" />
            <span className="text-gold">Beauty Journey</span>
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-xl">
            Experience luxury hair and beauty services in Red Deer using premium Kevin Murphy products. Specializing in custom dimensional color, hand-tied extensions, and bridal packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300" onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}>
              <Phone className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 backdrop-blur-md font-semibold rounded-full px-8 py-6 text-base transition-all duration-300" onClick={() => window.open('tel:+15872731668')}>
              <Phone className="w-5 h-5 mr-2" />
              Call Salon
            </Button>
          </div>
        </div>
      </section>

      {/* Kevin Murphy Partnership Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-accent/10 to-primary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Proud Kevin Murphy Salon Partner
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              We use premium, environmentally conscious, and weightless hair care products for all our salon services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <article key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-primary mb-2">{brand.name}</h3>
                <p className="text-foreground/70">{brand.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Services
            </h2>
            <p className="text-base md:text-lg text-foreground/70">
              We offer comprehensive beauty services designed to transform and enhance your natural beauty with expert care and premium products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
              <BeforeAfterSlider
                beforeImage="/manus-storage/IMG_8230_Original_1ca1da2d.JPG"
                afterImage="/manus-storage/IMG_8232_Original_dc440cbb.JPG"
                title="Teaser Transformation"
                heightClass="h-[400px] md:h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-5xl mb-12 md:mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet Our Master Stylists
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {team.map((member, index) => (
              <article key={index} className="bg-background rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-80 md:h-96 overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Hello Beauty Lounge`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    loading="lazy"
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
                  
                  <div className="flex gap-3 mb-4">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-accent hover:bg-accent/90 text-white"
                      onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
                    >
                      Book
                    </Button>
                    {member.instagram && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="px-3 hover:bg-accent/10"
                        onClick={() => window.open(member.instagram, '_blank')}
                        title={`Follow ${member.name} on Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-background p-12 rounded-lg">
            <h2 className="text-2xl mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Team
            </h2>
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
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl mb-6 md:mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
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

            <div className="bg-white p-12 rounded-lg text-center">
              <h3 className="text-2xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Transform Your Look?
              </h3>
              <p className="text-gray-600 mb-8">Book your appointment directly with our expert stylists on Vagaro.</p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white py-3 px-8 text-lg"
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}
              >
                Book Your Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

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
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/hello.beauty.lounge" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Instagram</a>
                <a href="https://www.facebook.com/RedDeerHelloBeauty" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Facebook</a>
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
