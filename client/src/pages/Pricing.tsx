import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Check, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { pricingCategories, pricingPackages, pricingAddOns, pricingNotes } from "@/data/pricingData";

export default function Pricing() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("hair-coloring");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Pricing" },
  ];

  return (
    <>
      <SEO
        title="Pricing | Hello Beauty Lounge"
        description="Transparent pricing for all hair and beauty services. View our service rates, packages, and add-ons."
        keywords="hair salon pricing, hair services cost, bridal hair price"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="max-w-3xl mx-auto text-center mt-12">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                Transparent Pricing
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Service Pricing
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Discover our comprehensive pricing for all hair and beauty services. All prices are starting rates and may vary based on hair length, thickness, and complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Service Categories
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Browse our full range of services organized by category. Click to expand and see detailed pricing and service details.
            </p>
          </div>

          <div className="space-y-4">
            {pricingCategories.map((category) => (
              <div key={category.id} className="border border-border/50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full px-6 py-6 bg-white hover:bg-accent/5 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">{category.name}</h3>
                      <p className="text-foreground/60">{category.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-accent transition-transform ${
                      expandedCategory === category.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedCategory === category.id && (
                  <div className="border-t border-border/50 bg-background/50 p-6">
                    <div className="grid gap-4">
                      {category.services.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg p-6 border border-border/30">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="text-xl font-semibold text-foreground">{service.name}</h4>
                              <p className="text-foreground/70">{service.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-accent">
                                {service.priceRange || `$${service.basePrice}`}
                              </div>
                              <div className="text-sm text-foreground/60">{service.duration}</div>
                            </div>
                          </div>
                          {service.details && service.details.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-border/30">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {service.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Special Offers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Premium Packages
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Save with our curated packages designed for specific needs. Each package includes premium services and exclusive benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-primary to-accent text-white shadow-2xl scale-105 md:scale-100"
                    : "bg-white border border-border/50 hover:shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full border border-white/30">
                    <span className="text-white font-semibold text-sm tracking-widest uppercase">Most Popular</span>
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-6 ${pkg.popular ? "text-white/90" : "text-foreground/70"}`}>
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <div className={`text-4xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-accent"}`}>
                    ${pkg.price}
                  </div>
                  {pkg.originalPrice && (
                    <div className={`flex items-center gap-2 ${pkg.popular ? "text-white/80" : "text-foreground/60"}`}>
                      <span className="line-through">${pkg.originalPrice}</span>
                      <span className={`font-semibold ${pkg.popular ? "text-white" : "text-accent"}`}>
                        Save ${pkg.savings}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-8 space-y-3">
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-white" : "text-accent"}`} />
                      <span className={pkg.popular ? "text-white/95" : "text-foreground/80"}>{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => window.open("https://www.vagaro.com/hellobeautylounge", "_blank")}
                  className={`w-full font-semibold py-3 rounded-full ${
                    pkg.popular
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Add-On Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Enhance your service with these optional add-ons. Perfect for customizing your experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingAddOns.map((addOn) => (
              <Card key={addOn.id} className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">{addOn.name}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{addOn.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="text-2xl font-bold text-accent">${addOn.price}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("https://www.vagaro.com/hellobeautylounge", "_blank")}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-24 bg-gradient-to-br from-secondary/30 to-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-12 text-foreground text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Important Information
            </h2>

            <div className="bg-white rounded-2xl p-8 border border-border/50">
              <ul className="space-y-4">
                {pricingNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                    <span className="text-foreground/80">{note}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Book?</h3>
                <p className="text-foreground/70 mb-6">
                  Visit our booking page to schedule your appointment or contact us for more information about any of our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => window.open("https://www.vagaro.com/hellobeautylounge", "_blank")}
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = "/contact"}
                    className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3 rounded-full"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
