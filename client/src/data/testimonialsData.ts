export interface Testimonial {
  id: string;
  clientName: string;
  service: string;
  rating: number;
  review: string;
  imageUrl: string;
  date: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    clientName: "Sarah Mitchell",
    service: "Bridal Hair & Makeup",
    rating: 5,
    review:
      "Keltie made me feel absolutely beautiful on my wedding day! The bridal trial was perfect, and she nailed the execution on the big day. My hair stayed flawless through the entire ceremony and reception. I couldn't have asked for a better experience!",
    imageUrl: "/manus-storage/testimonial-sarah-mitchell.jpg",
    date: "June 2026",
    verified: true,
  },
  {
    id: "testimonial-2",
    clientName: "Jessica Chen",
    service: "Custom Balayage",
    rating: 5,
    review:
      "I've been getting my hair done at Hello Beauty for over a year now, and Melissa's balayage work is absolutely incredible. She listens to what I want and always delivers beyond my expectations. The color is vibrant, healthy-looking, and lasts so long!",
    imageUrl: "/manus-storage/testimonial-jessica-chen.jpg",
    date: "May 2026",
    verified: true,
  },
  {
    id: "testimonial-3",
    clientName: "Amanda Rodriguez",
    service: "Hair Extensions",
    rating: 5,
    review:
      "Tiara installed my extensions and they look SO natural! I was nervous about the process, but she made me feel completely comfortable. The quality is premium and the blending is seamless. I get compliments all the time!",
    imageUrl: "/manus-storage/testimonial-amanda-rodriguez.jpg",
    date: "April 2026",
    verified: true,
  },
  {
    id: "testimonial-4",
    clientName: "Michelle Thompson",
    service: "Color Correction & Cut",
    rating: 5,
    review:
      "I had a color disaster from another salon and Noon K fixed it perfectly! Not only did she correct the color beautifully, but she also gave me an amazing cut that frames my face perfectly. She's a true artist and I trust her completely.",
    imageUrl: "/manus-storage/testimonial-michelle-thompson.jpg",
    date: "March 2026",
    verified: true,
  },
  {
    id: "testimonial-5",
    clientName: "Emily Watson",
    service: "Bridal Party Styling",
    rating: 5,
    review:
      "Hello Beauty did hair for my entire bridal party and we all looked stunning! Keltie coordinated everyone's styles perfectly so we looked cohesive but individual. The team was professional, punctual, and made the morning so stress-free!",
    imageUrl: "/manus-storage/testimonial-emily-watson.jpg",
    date: "February 2026",
    verified: true,
  },
  {
    id: "testimonial-6",
    clientName: "Lauren Brooks",
    service: "Precision Haircut & Styling",
    rating: 5,
    review:
      "Melissa gave me the perfect haircut! I've been searching for someone who understands my hair type and style preferences for years. She nailed it on the first try. The precision, the styling, everything is perfect. I'm a customer for life!",
    imageUrl: "/manus-storage/testimonial-lauren-brooks.jpg",
    date: "January 2026",
    verified: true,
  },
  {
    id: "testimonial-7",
    clientName: "Rachel Kim",
    service: "Bold Color Transformation",
    rating: 5,
    review:
      "Tiara transformed my hair with a bold new color and I absolutely love it! She was so knowledgeable about maintaining the color and gave me amazing product recommendations. The Kevin Murphy products she recommended have made such a difference!",
    imageUrl: "/manus-storage/testimonial-rachel-kim.jpg",
    date: "December 2025",
    verified: true,
  },
  {
    id: "testimonial-8",
    clientName: "Victoria Hayes",
    service: "K18 Treatment & Styling",
    rating: 5,
    review:
      "My hair was damaged from heat styling and the K18 treatment at Hello Beauty literally transformed it! Combined with Noon's styling expertise, my hair has never looked better. I feel so confident now!",
    imageUrl: "/manus-storage/testimonial-victoria-hayes.jpg",
    date: "November 2025",
    verified: true,
  },
  {
    id: "testimonial-9",
    clientName: "Nicole Anderson",
    service: "Bridal Trial & Day-Of Hair",
    rating: 5,
    review:
      "Keltie's bridal trial was so thorough and helpful. She took photos, made adjustments, and really listened to my vision. On my wedding day, she executed everything flawlessly and I felt like the most beautiful version of myself!",
    imageUrl: "/manus-storage/testimonial-nicole-anderson.jpg",
    date: "October 2025",
    verified: true,
  },
  {
    id: "testimonial-10",
    clientName: "Sophia Martinez",
    service: "Hair Extensions & Maintenance",
    rating: 5,
    review:
      "Tiara's extensions are premium quality and the maintenance appointments are so important. She takes great care of my extensions and my natural hair. I love having the length and volume without damaging my own hair!",
    imageUrl: "/manus-storage/testimonial-sophia-martinez.jpg",
    date: "September 2025",
    verified: true,
  },
];

export const testimonialStats = {
  averageRating: 5.0,
  totalReviews: 10,
  verifiedReviews: 10,
  recommendationRate: 100,
};
