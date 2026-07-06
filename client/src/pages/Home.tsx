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
      <SEO 
        title="Hello Beauty Lounge | Best Hair Salon in Red Deer, AB"
        description="Best hair salon in Red Deer, AB. Expert stylists specializing in custom color, balayage, hair extensions, bridal hair, and premium Kevin Murphy products."
        keywords="hair salon Red Deer, best hair salon Red Deer, balayage Red Deer, hair extensions Red Deer, bridal hair Red Deer, hair color Red Deer, salon Red Deer, best salon Alberta, Kevin Murphy salon, luxury hair salon, hair styling, hair care, professional hair salon"
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full" onClick={() => setLocation('/kevin-murphy')}>
                Explore Kevin Murphy Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Magazine Grid */}
      <section id="services" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="mb-16">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              We offer comprehensive beauty services designed to transform and enhance your natural beauty with expert care and premium products.
            </p>
          </div>

          {/* Magazine-style service grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => setLocation(service.link)}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 inline-block p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section - Magazine Layout */}
      <section id="team" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/manus-storage/IMG_1154_20fbf7cb.PNG"
                alt="Hello Beauty Lounge Team - Professional Hair Stylists in Red Deer, AB"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Meet Our Experts</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Team
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                Meet the talented stylists behind Hello Beauty Lounge's exceptional transformations. Our team of expert hair professionals is dedicated to delivering the best salon experience in Red Deer, Alberta.
              </p>
              <p className="text-lg text-foreground/70">
                From custom color and balayage to hair extensions and bridal styling, our stylists bring years of experience and passion to every service.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <article key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-accent/10 to-primary/10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-semibold mb-2 uppercase tracking-wide">{member.role}</p>
                <p className="text-xs text-foreground/60 mb-3">{member.specialty}</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                  <span className="text-xs text-foreground/60 ml-1">({member.reviews})</span>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Transformations</span>
              <h2 className="text-4xl md:text-5xl mb-6 font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                See the Transformation
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our expert stylists specialize in creating stunning transformations. From vibrant color to luxurious length, we bring your beauty vision to life using premium Kevin Murphy products.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full" onClick={() => setLocation('/gallery')}>
                View Gallery
              </Button>
            </div>
            <div className="relative">
              <BeforeAfterSlider
                beforeImage="/manus-storage/IMG_8230_Original_1ca1da2d.JPG"
                afterImage="/manus-storage/IMG_8232_Original_dc440cbb.JPG"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Follow Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              @HelloBeautyLounge
            </h2>
            <p className="text-lg text-foreground/70">
              See our latest transformations and salon moments
            </p>
          </div>
          <InstagramFeed />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Client Love</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Clients Say
            </h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Google Reviews
            </h2>
            <p className="text-foreground/70">
              Trusted by clients across Red Deer
            </p>
          </div>
          <GoogleReviewsWidget />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Visit Hello Beauty Lounge
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Location</h3>
                    <p className="text-foreground/70">Red Deer, AB, Canada</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a href="tel:+15872731668" className="text-foreground/70 hover:text-accent transition-colors">
                      +1 (587) 273-1668
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Hours</h3>
                    <div className="space-y-1 text-sm text-foreground/70">
                      {businessHours.map((item, index) => (
                        <div key={index} className="flex justify-between gap-8">
                          <span>{item.day}</span>
                          <span className="font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full mt-8 w-full" onClick={() => window.open('https://www.vagaro.com/hellobeautylounge', '_blank')}>
                <Phone className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663383571117/TThwFCb8x995AqmZMjehqw/salon-team-stylists-9wxGqSBMtWzpcdCXrKnsvz.webp"
                alt="Hello Beauty Lounge Team"
                className="w-full h-full object-cover"
              />
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
              <p className="text-white/70">
                Premium hair salon in Red Deer, specializing in custom color, extensions, and bridal services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/kevin-murphy" className="hover:text-white transition-colors">Kevin Murphy</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/hellobeautylounge.ca/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 Hello Beauty Lounge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
