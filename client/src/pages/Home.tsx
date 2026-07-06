import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Phone, MapPin, Clock, Scissors, Sparkles, Palette, Star, Instagram, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import MobileNav from "@/components/MobileNav";
import InstagramFeed from "@/components/InstagramFeed";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PromotionalBanner from "@/components/PromoticBanner";

/**
 * Design Philosophy: Editorial Magazine Luxury
 * - Warm taupe (#8B7355) + rose-gold (#D4A574) accents
 * - Playfair Display (headlines) + Lato (body)
 * - Multi-column grids, asymmetric layouts
 * - Professional photography with editorial typography
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
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-color-service-6tebwYZCegTwyQL73eTdiv.webp",
    },
    {
      icon: Scissors,
      title: "Professional Cuts & Styling",
      description: "Precision cuts tailored to your face shape and lifestyle, with expert styling for every occasion.",
      link: "/services/cuts-and-styling",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-styling-session-kvQ4Pdu2ZntNcsU5y2tcXx.webp",
    },
    {
      icon: Sparkles,
      title: "Premium Hand-Tied Extensions",
      description: "Luxury hand-tied extensions for seamless length and volume transformation with professional installation.",
      link: "/services/hair-extensions",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/hair-extensions-application-aqjorffUXWPN3dfFAnbwRg.webp",
    },
    {
      icon: Sparkles,
      title: "Bridal & Wedding Hair",
      description: "Specialized bridal packages including consultations, trials, and on-the-day styling for your perfect wedding day.",
      link: "/services/bridal-hair",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/salon-hero-luxury-RsaUTEvBovsCDPH6gANBN9.webp",
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
      image: "/manus-storage/noon-k-profile_001c7146.png",
      instagram: "https://www.instagram.com/nkhamkhay?igsh=MTZiN2Roc2JnM3Uzbw==",
    },
    {
      name: "Melissa Mitchell",
      role: "Hair Specialist",
      specialty: "Balayage, Extensions & Color",
      bio: "With over a decade of experience, Melissa specializes in balayage, foilayage, color corrections, hand-tied extensions, updos, and makeup. She's passionate about enhancing natural beauty with affordable luxury.",
      rating: 5.0,
      reviews: 11,
      image: "/manus-storage/melissa-mitchell-profile_c4e9b4c9.png",
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
    { name: "Kevin Murphy", description: "Premium, environmentally conscious hair care", logo: "🌿" },
    { name: "Living Proof", description: "Advanced hair science products", logo: "🔬" },
    { name: "K18", description: "Professional hair repair technology", logo: "✨" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PromotionalBanner />
      <SEO 
        title="Hello Beauty Lounge | Best Hair Salon Red Deer | Balayage"
        description="Premium hair salon in Red Deer specializing in balayage, hand-tied extensions, and bridal hair. Kevin Murphy certified. Book your appointment today."
        keywords="hair salon Red Deer, balayage Red Deer, hair extensions Red Deer, bridal hair, Kevin Murphy salon, best hair salon, hair color, professional salon"
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

      {/* Magazine Hero Section */}
      <section className="relative h-[60vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/manus-storage/IMG_1156_862a96c0.PNG')", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="container relative z-10 max-w-3xl">
          <span className="inline-block text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            Premium Salon Partner
          </span>
          <h1 className="text-4xl md:text-7xl text-white mb-4 md:mb-6 font-semibold leading-[1.15]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Best Hair Salon <br className="hidden md:inline" />
            <span className="text-gold">in Red Deer</span>
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-xl">
            Hello Beauty Lounge is Red Deer's premier hair salon. Expert stylists specializing in custom color, balayage, hair extensions, and bridal hair services using premium Kevin Murphy products.
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

      {/* Kevin Murphy Partnership - Magazine Style */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 items-start mb-16">
            <div className="md:col-span-1">
              <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Our Brands</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Premium Partners
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                We partner with the world's leading professional hair care brands to deliver exceptional results.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {brands.map((brand, index) => (
                  <article key={index} className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-8 border border-accent/10 hover:border-accent/30 transition-all group">
                    <div className="text-4xl mb-4">{brand.logo}</div>
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{brand.name}</h3>
                    <p className="text-foreground/70 text-sm">{brand.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Kevin Murphy Certification Badge */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-xl p-8 md:p-12 border border-accent/20">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="/manus-storage/IMG_1157_d2683ebc.PNG"
                alt="Kevin Murphy Certified Salon - Hello Beauty Lounge"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                <img 
                  src="https://www.kevinmurphy.com.au/on/demandware.static/-/Sites-KM-Library/default/dw4f8f8c8e/images/KM-Logo-Black.png"
                  alt="Kevin Murphy Logo"
                  className="h-16 object-contain"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Certified Kevin Murphy Salon
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                We are proud to be an official Kevin Murphy salon partner, using only their premium, environmentally conscious, and weightless formulations across all our services. Our stylists are trained in Kevin Murphy techniques to deliver exceptional results.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300" onClick={() => setLocation('/kevin-murphy')}>
                Explore Kevin Murphy Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Signature Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                  <Button variant="link" className="text-accent hover:text-primary p-0 h-auto" onClick={() => setLocation(service.link)}>
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Transformations
          </h2>
          <BeforeAfterSlider 
            beforeImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/before-after-1-before-d760207f.webp"
            afterImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/before-after-1-after-8316279f.webp"
            altText="Hair Transformation Before and After"
          />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet Our Talented Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-foreground/70 text-sm mb-4">{member.specialty}</p>
                  <div className="flex justify-center items-center gap-2 text-yellow-500 mb-4">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{member.rating} ({member.reviews} reviews)</span>
                  </div>
                  <Button variant="link" className="text-accent hover:text-primary p-0 h-auto" onClick={() => window.open(member.instagram, '_blank')}>
                    Instagram <Instagram className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Clients Say
          </h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our 5-Star Reputation
          </h2>
          <GoogleReviewsWidget />
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            #HelloBeautyLounge
          </h2>
          <InstagramFeed />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hello Beauty Lounge
              </h3>
              <p className="text-foreground/70 text-lg">
                <MapPin className="inline-block w-5 h-5 mr-2 text-accent" />
                4919 59 St Unit 120, Red Deer, AB T4N 6C9
              </p>
              <p className="text-foreground/70 text-lg">
                <Phone className="inline-block w-5 h-5 mr-2 text-accent" />
                <a href="tel:+15872731668" className="hover:text-primary transition-colors">+1 (587) 273-1668</a>
              </p>
              <p className="text-foreground/70 text-lg">
                <Clock className="inline-block w-5 h-5 mr-2 text-accent" />
                <span className="font-semibold">Hours:</span>
              </p>
              <ul className="space-y-2 text-foreground/70 text-lg">
                {businessHours.map((item, index) => (
                  <li key={index} className="flex justify-center md:justify-start items-center">
                    <span className="w-24 text-left">{item.day}:</span>
                    <span className="font-medium">{item.hours}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Hello+Beauty+Lounge+Red+Deer', '_blank')}>
                Get Directions
              </Button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.309314013459!2d-113.8123086230008!3d52.26673165780764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537454224b17671b%3A0x736d8c4c7b2e2b2a!2sHello%20Beauty%20Lounge!5e0!3m2!1sen!2sca!4w!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hello Beauty Lounge Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hello Beauty Lounge. All rights reserved.</p>
          <p className="mt-2">Designed with passion in Red Deer, Alberta.</p>
        </div>
      </footer>
    </div>
  );
}
