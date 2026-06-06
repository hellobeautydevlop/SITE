import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { ArrowLeft, Check, Sparkles, Star } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useLocation } from "wouter";

export default function HairExtensions() {
  const [, setLocation] = useLocation();

  const services = [
    {
      name: "Extensions - Install",
      description: "Professional installation of premium hair extensions",
      price: "$211.87 avg",
      duration: "3-4 hours",
      details: [
        "100% human hair",
        "Expert installation",
        "Seamless blending",
        "Long-lasting results",
      ],
    },
    {
      name: "Extensions - Touch-up",
      description: "Maintenance and repositioning of existing extensions",
      price: "$77.31 avg",
      duration: "1.5-2 hours",
      details: [
        "Repositioning",
        "Tightening",
        "Damage assessment",
        "Longevity extension",
      ],
    },
    {
      name: "Extensions - Consultation",
      description: "Expert consultation for extension options",
      price: "$356.25 avg",
      duration: "1-1.5 hours",
      details: [
        "Hair type assessment",
        "Extension options review",
        "Custom recommendations",
        "Pricing discussion",
      ],
    },
    {
      name: "Extensions - Removal",
      description: "Safe, professional removal of extensions",
      price: "$95.00 avg",
      duration: "1-1.5 hours",
      details: [
        "Gentle removal process",
        "Hair health assessment",
        "Deep conditioning",
        "Aftercare advice",
      ],
    },
    {
      name: "Extension - Fix",
      description: "Quick fixes and adjustments for extensions",
      price: "$22.50 avg",
      duration: "30-45 minutes",
      details: [
        "Quick repairs",
        "Adjustment",
        "Damage assessment",
        "Extended longevity",
      ],
    },
    {
      name: "Bellami Hair Extension Consultation",
      description: "Specialized consultation for Bellami extensions",
      price: "$175.00 avg",
      duration: "1-1.5 hours",
      details: [
        "Bellami specialist",
        "Product overview",
        "Custom recommendations",
        "Installation planning",
      ],
    },
  ];

  const specialists = [
    {
      name: "Melissa Mitchell",
      specialty: "Extension Specialist",
      reviews: 11,
      rating: 5.0,
    },
    {
      name: "Noon K",
      specialty: "Master Stylist",
      reviews: 12,
      rating: 5.0,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Hand-Tied Extensions | Hello Beauty Lounge"
        description="Get luxurious length and volume with our premium hand-tied hair extensions in Red Deer, AB. Seamless blending and professional installation. Book today."
        keywords="hair extensions Red Deer, hand tied extensions Alberta, professional hair extensions, luxury hair length volume"
        canonicalUrl="https://hellobeautylounge.com/services/hair-extensions"
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hair Extensions
          </h1>
          <Button
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-accent/5 to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Premium Hair Extensions
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Add length, volume, and dimension to your hair with our premium extension services. From hand-tied to tape-in extensions, we use only the highest quality human hair and expert installation techniques to create seamless, natural-looking results.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
              >
                Book Your Extensions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation("/#contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Extension Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.name}
                </h4>
                <p className="text-accent font-semibold mb-2">{service.price}</p>
                <p className="text-sm text-foreground/60 mb-4">{service.duration}</p>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/70">{detail}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
                >
                  Book {service.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Types Comparison */}
      <section className="py-24 bg-accent/5">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Extension Types Explained
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h4 className="text-2xl mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hand-Tied
              </h4>
              <p className="text-foreground/70 mb-4">Premium option for long-lasting, natural results. Perfect for those wanting maximum volume and length.</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Lasts 6-12 months</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Most natural look</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Higher investment</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Requires maintenance</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h4 className="text-2xl mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Tape-In
              </h4>
              <p className="text-foreground/70 mb-4">Quick application with minimal damage. Great for those wanting a balance of quality and convenience.</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Lasts 6-8 weeks</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Quick application</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Reusable wefts</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Easy maintenance</li>
              </ul>
            </Card>
            <Card className="p-8">
              <h4 className="text-2xl mb-4 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Clip-In
              </h4>
              <p className="text-foreground/70 mb-4">Temporary option for flexibility. Perfect for special occasions or trying before committing.</p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> No commitment</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Easy to apply</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Fully reusable</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" /> Event-ready</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Extensions */}
      <section className="py-24">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Our Extensions
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">100% Human Hair</h4>
                  <p className="text-foreground/70">We use only premium, ethically-sourced human hair for natural look and feel.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expert Installation</h4>
                  <p className="text-foreground/70">Our specialists ensure seamless blending and secure application for lasting results.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Custom Color Matching</h4>
                  <p className="text-foreground/70">We match extensions perfectly to your natural hair color for undetectable results.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Maintenance Support</h4>
                  <p className="text-foreground/70">We provide ongoing care and maintenance to keep your extensions looking beautiful.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hair Health First</h4>
                  <p className="text-foreground/70">We prioritize your natural hair health and use gentle techniques throughout.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Aftercare Guidance</h4>
                  <p className="text-foreground/70">We educate you on proper care and styling to maximize the lifespan of your extensions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="py-24 bg-accent/5">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Extension Specialists
          </h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {specialists.map((specialist, index) => (
              <Card key={index} className="p-8 text-center">
                <h4 className="text-2xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {specialist.name}
                </h4>
                <p className="text-accent font-semibold mb-4">{specialist.specialty}</p>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/70 mb-6">({specialist.reviews} reviews)</p>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
                >
                  Book with {specialist.name.split(' ')[0]}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <h3 className="text-4xl mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="bg-accent/5 px-6 rounded-lg border border-border/50">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Will extensions damage my hair?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base pb-6 leading-relaxed">
                  When applied and maintained properly, extensions should not damage your natural hair. We use gentle techniques and provide aftercare guidance to protect your hair health.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="bg-accent/5 px-6 rounded-lg border border-border/50">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  How long do extensions last?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base pb-6 leading-relaxed">
                  Longevity depends on the type: hand-tied (6-12 months), tape-in (6-8 weeks), and clip-in (reusable indefinitely). Regular maintenance extends their lifespan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="bg-accent/5 px-6 rounded-lg border border-border/50">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Can I style my extensions?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base pb-6 leading-relaxed">
                  Yes! You can curl, straighten, and style your extensions just like natural hair. We recommend using heat protectant products and gentle techniques.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="bg-accent/5 px-6 rounded-lg border border-border/50">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  How do I care for my extensions?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base pb-6 leading-relaxed">
                  Use sulfate-free products, brush gently from ends to roots, sleep in a braid, and avoid excessive heat. We provide detailed aftercare instructions at your appointment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="bg-accent/5 px-6 rounded-lg border border-border/50">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  What's the consultation process?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base pb-6 leading-relaxed">
                  We assess your hair type, discuss your goals, recommend the best extension type, and show you color options. This ensures we create the perfect look for you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* JSON-LD FAQPage Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Will extensions damage my hair?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When applied and maintained properly, extensions should not damage your natural hair. We use gentle techniques and provide aftercare guidance to protect your hair health."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long do extensions last?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Longevity depends on the type: hand-tied (6-12 months), tape-in (6-8 weeks), and clip-in (reusable indefinitely). Regular maintenance extends their lifespan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I style my extensions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can curl, straighten, and style your extensions just like natural hair. We recommend using heat protectant products and gentle techniques."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I care for my extensions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use sulfate-free products, brush gently from ends to roots, sleep in a braid, and avoid excessive heat. We provide detailed aftercare instructions at your appointment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the consultation process?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We assess your hair type, discuss your goals, recommend the best extension type, and show you color options. This ensures we create the perfect look for you."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/5">
        <div className="container text-center">
          <h3 className="text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Transform Your Hair Length?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Book your extension consultation today and discover the perfect length and volume for you.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
            onClick={() => window.open('https://www.vagaro.com/hellobeautylounge/staff', '_blank')}
          >
            Book Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
