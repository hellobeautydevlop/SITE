import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "#120 - 4919 59 Street, Red Deer, AB T4N 6C9",
      link: "https://maps.google.com/?q=4919+59+Street+Unit+120+Red+Deer+AB",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(587) 273-1668",
      link: "tel:+15872731668",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@hellobeautylounge.com",
      link: "mailto:info@hellobeautylounge.com",
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

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us | Hello Beauty Lounge"
        description="Get in touch with Hello Beauty Lounge in Red Deer. Visit us at #120 - 4919 59 Street or call (587) 273-1668 for appointments and inquiries."
        keywords="contact hello beauty lounge, hair salon red deer contact, salon phone number, salon location"
        canonicalUrl="https://hellobeautylounge.com/contact"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container max-w-4xl">
          <h1 className="text-5xl mb-6 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Have questions about our services? Want to book an appointment or inquire about our model program? We'd love to hear from you. Reach out using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-8 rounded-lg border border-border hover:border-accent transition-colors group"
                >
                  <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  <p className="text-foreground/70 group-hover:text-accent transition-colors">
                    {info.content}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Map and Hours */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-96">
              <iframe
                title="Hello Beauty Lounge Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2854.8894268649577!2d-113.19836!3d52.19722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a1d8f8f8f8f8f9%3A0x1234567890abcdef!2s4919%2059%20St%20%23120%2C%20Red%20Deer%2C%20AB%20T4N%206C9!5e0!3m2!1sen!2sca!4v1234567890"
                onLoad={() => setIsMapLoaded(true)}
              />
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hours of Operation
              </h3>
              <div className="space-y-3">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-border/30 last:border-b-0">
                    <span className="font-medium text-foreground/80">{item.day}</span>
                    <span className={`${item.hours === "Closed" ? "text-red-600 font-semibold" : "text-accent font-semibold"}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-8">
                <Button
                  onClick={() => window.open("https://www.vagaro.com/hellobeautylounge", "_blank")}
                  className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Book Appointment
                </Button>
                <Button
                  onClick={() => window.open("https://maps.google.com/?q=4919+59+Street+Unit+120+Red+Deer+AB", "_blank")}
                  className="flex-1 bg-white hover:bg-accent/10 text-accent border-2 border-accent font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-semibold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Follow Us on Social Media
          </h2>
          <p className="text-foreground/70 mb-8">
            Stay updated with our latest transformations, tips, and special offers
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/hello.beauty.lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full border border-border hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
            >
              <Instagram className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/hellobeautylounge"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full border border-border hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
            >
              <Facebook className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-semibold mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2 text-lg">How do I book an appointment?</h3>
              <p className="text-foreground/70">
                You can book directly through our Vagaro page at www.vagaro.com/hellobeautylounge or call us at (587) 273-1668 during business hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2 text-lg">Do you offer consultations?</h3>
              <p className="text-foreground/70">
                Yes! We offer free consultations for major services like color corrections, extensions, and bridal packages. Contact us to schedule yours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2 text-lg">What is your cancellation policy?</h3>
              <p className="text-foreground/70">
                We require 24 hours notice for cancellations. Cancellations made less than 24 hours before your appointment may incur a fee.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2 text-lg">Do you have parking?</h3>
              <p className="text-foreground/70">
                Yes, we have convenient parking available at our location at #120 - 4919 59 Street, Red Deer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
