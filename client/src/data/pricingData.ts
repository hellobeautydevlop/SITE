export interface PricingService {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  priceRange?: string;
  duration: string;
  details?: string[];
}

export interface PricingCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: PricingService[];
}

export interface PricingPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  savings?: number;
  includes: string[];
  popular?: boolean;
}

export interface PricingAddOn {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const pricingCategories: PricingCategory[] = [
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    description: "Custom color services including balayage, highlights, and full color",
    icon: "🎨",
    services: [
      {
        id: "color-consultation",
        name: "Color Consultation",
        description: "Personalized consultation to determine your perfect color",
        basePrice: 0,
        duration: "30 min",
        details: ["Complimentary with service booking", "Color matching", "Lifestyle assessment"],
      },
      {
        id: "full-color",
        name: "Full Color",
        description: "Complete hair color application",
        basePrice: 85,
        priceRange: "$85 - $150+",
        duration: "1.5 - 2 hours",
        details: ["Base color application", "Toner included", "Heat protection", "Adjustments for hair type"],
      },
      {
        id: "balayage",
        name: "Custom Balayage",
        description: "Hand-painted dimensional color for natural-looking highlights",
        basePrice: 120,
        priceRange: "$120 - $200+",
        duration: "2 - 3 hours",
        details: ["Custom placement", "Multiple tones", "Toner included", "Kevin Murphy color care products"],
      },
      {
        id: "highlights",
        name: "Highlights",
        description: "Traditional foil highlights for dimension and brightness",
        basePrice: 95,
        priceRange: "$95 - $160+",
        duration: "1.5 - 2.5 hours",
        details: ["Partial or full highlights", "Toner included", "Gloss treatment", "Professional finishing"],
      },
      {
        id: "color-correction",
        name: "Color Correction",
        description: "Expert correction for previous color mistakes",
        basePrice: 150,
        priceRange: "$150 - $300+",
        duration: "2 - 4 hours",
        details: ["Consultation included", "Custom formula", "Multiple sessions may be needed", "Kevin Murphy treatment"],
      },
      {
        id: "root-touch-up",
        name: "Root Touch-Up",
        description: "Maintain your color between full appointments",
        basePrice: 65,
        priceRange: "$65 - $120+",
        duration: "45 min - 1.5 hours",
        details: ["Root application only", "Toner optional", "Quick refresh", "Extends color life"],
      },
    ],
  },
  {
    id: "cuts-styling",
    name: "Cuts & Styling",
    description: "Expert cutting and styling services for all hair types",
    icon: "✂️",
    services: [
      {
        id: "haircut",
        name: "Haircut",
        description: "Professional haircut with consultation",
        basePrice: 55,
        priceRange: "$55 - $95+",
        duration: "45 min - 1 hour",
        details: ["Consultation included", "Precision cutting", "Styling included", "Blow-dry finish"],
      },
      {
        id: "style-appointment",
        name: "Styling Appointment",
        description: "Professional styling for events or everyday",
        basePrice: 60,
        priceRange: "$60 - $120+",
        duration: "1 - 1.5 hours",
        details: ["Custom style creation", "Heat styling", "Product application", "Finishing spray"],
      },
      {
        id: "blow-dry",
        name: "Blow-Dry Service",
        description: "Professional blow-dry styling",
        basePrice: 45,
        priceRange: "$45 - $75+",
        duration: "45 min",
        details: ["Shampoo included", "Professional styling", "Kevin Murphy products", "Long-lasting hold"],
      },
      {
        id: "cut-color",
        name: "Cut + Color Combo",
        description: "Haircut combined with color service",
        basePrice: 140,
        priceRange: "$140 - $250+",
        duration: "2.5 - 3.5 hours",
        details: ["Consultation", "Color service", "Precision cut", "Styling included"],
      },
    ],
  },
  {
    id: "hair-extensions",
    name: "Hair Extensions",
    description: "Premium hand-tied extensions for volume and length",
    icon: "💇",
    services: [
      {
        id: "extension-consultation",
        name: "Extension Consultation",
        description: "Personalized consultation for extension options",
        basePrice: 0,
        duration: "30 min",
        details: ["Complimentary", "Hair assessment", "Style discussion", "Pricing quote"],
      },
      {
        id: "extension-install",
        name: "Extension Installation",
        description: "Hand-tied extension application",
        basePrice: 300,
        priceRange: "$300 - $600+",
        duration: "2.5 - 3.5 hours",
        details: ["Premium hand-tied extensions", "Custom color matching", "Seamless blend", "Styling included"],
      },
      {
        id: "extension-maintenance",
        name: "Extension Maintenance",
        description: "Maintenance and tightening appointments",
        basePrice: 150,
        priceRange: "$150 - $250+",
        duration: "1.5 - 2 hours",
        details: ["Tightening service", "Conditioning treatment", "Styling", "Every 6-8 weeks recommended"],
      },
      {
        id: "extension-removal",
        name: "Extension Removal",
        description: "Professional removal and hair care",
        basePrice: 100,
        priceRange: "$100 - $150+",
        duration: "1 - 1.5 hours",
        details: ["Safe removal", "Deep conditioning", "Hair assessment", "Aftercare products"],
      },
    ],
  },
  {
    id: "bridal-services",
    name: "Bridal Services",
    description: "Complete bridal hair and styling packages",
    icon: "👰",
    services: [
      {
        id: "bridal-trial",
        name: "Bridal Trial",
        description: "Pre-wedding trial to perfect your look",
        basePrice: 150,
        duration: "1.5 - 2 hours",
        details: ["Full consultation", "Style creation", "Photos for reference", "Adjustments included"],
      },
      {
        id: "bridal-day-of",
        name: "Bridal Hair (Day-Of)",
        description: "Wedding day bridal hair styling",
        basePrice: 160,
        priceRange: "$160 - $200+",
        duration: "1 - 1.5 hours",
        details: ["Custom updo or style", "Professional finishing", "Touch-up spray", "Long-lasting hold"],
      },
      {
        id: "bridesmaid-styling",
        name: "Bridesmaid Styling",
        description: "Coordinated hairstyles for bridesmaids",
        basePrice: 130,
        priceRange: "$130 - $160+",
        duration: "45 min - 1 hour",
        details: ["Coordinated with bride", "Professional styling", "Finishing spray", "Per person"],
      },
      {
        id: "mother-styling",
        name: "Mother of Bride/Groom",
        description: "Elegant styling for mothers",
        basePrice: 110,
        priceRange: "$110 - $140+",
        duration: "45 min",
        details: ["Sophisticated style", "Professional finishing", "Complements wedding aesthetic"],
      },
      {
        id: "flower-girl",
        name: "Flower Girl Hair",
        description: "Adorable styling for flower girls",
        basePrice: 65,
        priceRange: "$65 - $85+",
        duration: "30 - 45 min",
        details: ["Age-appropriate style", "Gentle styling", "Decorative accessories optional"],
      },
    ],
  },
  {
    id: "specialty-services",
    name: "Specialty Services",
    description: "K18, treatments, and specialty services",
    icon: "✨",
    services: [
      {
        id: "k18-treatment",
        name: "K18 Hair Treatment",
        description: "Professional K18 molecular repair treatment",
        basePrice: 85,
        priceRange: "$85 - $120+",
        duration: "45 min - 1 hour",
        details: ["Molecular repair", "Damage reversal", "Strengthening", "Shine enhancement"],
      },
      {
        id: "deep-conditioning",
        name: "Deep Conditioning Treatment",
        description: "Intensive moisture and repair treatment",
        basePrice: 50,
        priceRange: "$50 - $75+",
        duration: "30 - 45 min",
        details: ["Kevin Murphy products", "Heat therapy", "Moisture boost", "Frizz control"],
      },
      {
        id: "keratin-treatment",
        name: "Keratin Treatment",
        description: "Smoothing and frizz-control treatment",
        basePrice: 120,
        priceRange: "$120 - $180+",
        duration: "1.5 - 2 hours",
        details: ["Professional application", "Frizz reduction", "Smoothing effect", "Lasts 8-12 weeks"],
      },
      {
        id: "nail-design",
        name: "Nail Design",
        description: "Professional nail art and design",
        basePrice: 40,
        priceRange: "$40 - $80+",
        duration: "45 min - 1 hour",
        details: ["Custom designs", "Premium polishes", "Gel or regular", "Artistic finishes"],
      },
    ],
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: "hello-beauty-bridal-experience",
    name: "The Hello Beauty Bridal Experience",
    description: "Complete bridal package for the perfect wedding day",
    price: 450,
    originalPrice: 545,
    savings: 95,
    popular: true,
    includes: [
      "Bridal trial session ($150 value)",
      "Wedding day bridal hair ($160 value)",
      "Kevin Murphy touch-up spray",
      "K18 treatment 1 week before wedding ($85 value)",
      "Priority booking",
      "Complimentary consultation",
    ],
  },
  {
    id: "color-cut-package",
    name: "Color + Cut Package",
    description: "Refresh your look with color and cut",
    price: 140,
    originalPrice: 180,
    savings: 40,
    includes: [
      "Full color service",
      "Professional haircut",
      "Styling included",
      "Kevin Murphy products",
      "Blow-dry finish",
    ],
  },
  {
    id: "bridal-party-package",
    name: "Bridal Party Package",
    description: "Coordinated styling for your entire bridal party",
    price: 1200,
    originalPrice: 1450,
    savings: 250,
    includes: [
      "Bridal trial ($150 value)",
      "Bride hair day-of ($160 value)",
      "4 Bridesmaid styles ($130 each = $520 value)",
      "Mother styling ($110 value)",
      "Kevin Murphy touch-up spray",
      "Priority booking for all members",
    ],
  },
  {
    id: "extension-package",
    name: "Extension Package",
    description: "Complete extension service with maintenance",
    price: 450,
    originalPrice: 550,
    savings: 100,
    includes: [
      "Extension installation ($300 value)",
      "First maintenance appointment ($150 value)",
      "Extension care products",
      "Styling consultation",
      "Aftercare guidance",
    ],
  },
];

export const pricingAddOns: PricingAddOn[] = [
  {
    id: "clip-in-extensions",
    name: "Clip-In Extension Installation",
    description: "Install and style your own clip-in extensions",
    price: 30,
  },
  {
    id: "early-start-fee",
    name: "Early Start Fee (Before 8 AM)",
    description: "Additional fee for appointments before 8:00 AM",
    price: 30,
  },
  {
    id: "travel-fee",
    name: "Travel Fee (On-Site Weddings)",
    description: "Travel to your venue for on-site services",
    price: 70,
  },
  {
    id: "rush-appointment",
    name: "Rush Appointment Fee",
    description: "Last-minute appointment booking",
    price: 25,
  },
  {
    id: "color-gloss",
    name: "Color Gloss Add-On",
    description: "Add a gloss or toner to any service",
    price: 25,
  },
  {
    id: "extension-color-match",
    name: "Extension Color Matching",
    description: "Custom color matching for extensions",
    price: 40,
  },
];

export const pricingNotes = [
  "All prices are starting prices and may vary based on hair length, thickness, and complexity",
  "Consultations are complimentary with service bookings",
  "We recommend bridal trials 2-3 weeks before your wedding",
  "Extension maintenance recommended every 6-8 weeks",
  "Travel fees apply for on-site wedding services (calculated at $0.70 per km per artist)",
  "All services use premium Kevin Murphy products",
  "Prices subject to change. Current pricing valid as of July 2026",
];
