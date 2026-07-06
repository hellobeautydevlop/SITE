import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book directly through our Vagaro booking system at www.vagaro.com/hellobeautylounge. Select your preferred stylist, service, and time slot. We also accept phone calls at +1-587-273-1668 for personalized assistance.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations. Cancellations made within 24 hours of your appointment may be subject to a 50% cancellation fee. No-shows will be charged the full service price.",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes! We highly recommend a consultation before major color changes, extensions, or bridal services. Consultations are complimentary and typically take 15-30 minutes. You can book one through our online system or call us.",
  },
  {
    question: "How long do hand-tied extensions last?",
    answer:
      "Hand-tied extensions typically last 6-8 weeks before requiring maintenance. We recommend scheduling maintenance appointments every 4-6 weeks to keep them looking fresh and prevent matting.",
  },
  {
    question: "What is your hair care product line?",
    answer:
      "We exclusively use Kevin Murphy professional hair care products. These premium products are specially formulated for color-treated and extended hair. We recommend them for maintaining the health and longevity of your services.",
  },
  {
    question: "Do you offer bridal packages?",
    answer:
      "Yes! Our bridal packages include a consultation, trial appointment, and on-the-day styling. We work with you to create your perfect bridal look. Packages start at $150 and vary based on complexity and party size.",
  },
  {
    question: "Can I bring my wedding party for styling?",
    answer:
      "Absolutely! We offer group bookings for bridesmaids, mothers, and other wedding party members. We recommend booking at least 2-3 months in advance for wedding dates to ensure availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit cards, and debit cards. Payment is due at the time of service. We do not offer payment plans, but we accept all major credit cards.",
  },
  {
    question: "How much should I tip?",
    answer:
      "Tipping is appreciated and customary. We recommend 15-20% for excellent service. Tips can be added to your credit card payment or given in cash.",
  },
  {
    question: "Do you offer gift certificates?",
    answer:
      "Yes! Gift certificates are available in any amount and can be purchased through our salon or online. They make perfect gifts for any occasion and never expire.",
  },
  {
    question: "What should I do before my appointment?",
    answer:
      "Please arrive 5-10 minutes early. For color services, avoid washing your hair for 24 hours before your appointment. For extensions, come with clean, dry hair. Bring reference photos if you're trying a new style.",
  },
  {
    question: "How do I care for my new color?",
    answer:
      "Use color-safe shampoo and conditioner, avoid hot water, and limit heat styling. We recommend using Kevin Murphy products specifically formulated for color protection. Schedule touch-ups every 4-6 weeks depending on your hair growth.",
  },
  {
    question: "Can you fix a bad color from another salon?",
    answer:
      "Yes, we specialize in color corrections. However, depending on the damage and current color, it may take multiple sessions. We'll assess your hair during a consultation and create a safe plan to achieve your desired result.",
  },
  {
    question: "Do you do balayage and highlights?",
    answer:
      "Yes! We specialize in custom dimensional color, including balayage, highlights, and dimensional color techniques. Our master stylists use hand-painting techniques for natural, blended results.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "Tuesday-Thursday: 10:00 AM - 8:00 PM, Friday: 10:00 AM - 6:00 PM, Saturday: 10:00 AM - 5:00 PM. We are closed Sunday and Monday. Holiday hours may vary.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "We primarily offer in-person consultations for the best assessment. However, you can send photos and questions via email to info@hellobeautylounge.com, and our team will provide guidance.",
  },
  {
    question: "Are you located in Red Deer?",
    answer:
      "Yes! We are located at 4919 59 Street Unit 120, Red Deer, AB T4N 6C9. We serve clients from Red Deer, Lacombe, Sylvan Lake, and surrounding areas.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "We accept walk-ins based on availability, but we recommend booking in advance to ensure your preferred time and stylist. Walk-in wait times vary depending on our schedule.",
  },
  {
    question: "What makes Hello Beauty Lounge different?",
    answer:
      "We specialize in luxury hair services with a focus on custom color, hand-tied extensions, and bridal packages. Our master stylists use premium Kevin Murphy products and stay current with the latest techniques through continuous education.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="FAQ | Hello Beauty Lounge"
        description="Frequently asked questions about our hair salon services, booking, pricing, and care instructions."
        keywords="hair salon FAQ, booking questions, hair care, extensions, color, bridal"
        canonicalUrl="https://hellobeautylounge.com/faq"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Find answers to common questions about our services, booking, and hair care.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 bg-card hover:bg-card/80 text-left flex items-center justify-between transition-colors duration-200"
                >
                  <h3 className="font-semibold text-foreground text-lg">{item.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedIndex === index && (
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Schema */}
          <JsonLd
            data={useMemo(
              () => ({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
              []
            )}
          />

      {/* Contact CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Didn't find your answer?
            </h3>
            <p className="text-foreground/70 mb-4">
              Feel free to reach out to us directly. We're happy to answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1-587-273-1668"
                className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                Call Us: +1-587-273-1668
              </a>
              <a
                href="mailto:info@hellobeautylounge.com"
                className="inline-block px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
              >
                Email: info@hellobeautylounge.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
