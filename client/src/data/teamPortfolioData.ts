/**
 * Team Portfolio Data Structure
 * This file contains sample data structure for team members and their Instagram portfolios
 * 
 * To populate with actual Instagram content:
 * 1. Visit @hello.beauty.lounge on Instagram
 * 2. Extract image URLs, captions, and engagement metrics from recent posts
 * 3. Update the portfolio array for each team member
 * 4. Link to actual Instagram post URLs
 */

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  link: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  instagramHandle: string;
  portfolio: InstagramPost[];
}

// Sample team data structure - replace with actual Instagram content
export const teamMembers: TeamMember[] = [
  {
    id: "noon-k",
    name: "Noon K",
    title: "Senior Stylist & Colorist",
    bio: "Specializing in custom balayage, bridal hair, and luxury color transformations. With over 8 years of experience, Noon creates personalized looks that enhance each client's unique beauty.",
    image: "/manus-storage/noon-k-profile.jpg", // Replace with actual image URL
    specialties: ["Balayage", "Bridal Hair", "Color Correction", "Hair Extensions"],
    instagramHandle: "hello.beauty.lounge",
    portfolio: [
      {
        id: "post-1",
        image: "/manus-storage/portfolio-1.jpg",
        caption: "Beautiful balayage transformation! From dark to light with seamless blending. Swipe to see the before ✨",
        likes: 245,
        comments: 18,
        timestamp: "2 weeks ago",
        link: "https://instagram.com/p/example1",
      },
      {
        id: "post-2",
        image: "/manus-storage/portfolio-2.jpg",
        caption: "Bridal hair trial for our gorgeous bride-to-be! Soft waves and romantic updo 💕",
        likes: 189,
        comments: 12,
        timestamp: "3 weeks ago",
        link: "https://instagram.com/p/example2",
      },
      {
        id: "post-3",
        image: "/manus-storage/portfolio-3.jpg",
        caption: "Hair extensions add volume and length! Check out this stunning transformation 🌟",
        likes: 312,
        comments: 24,
        timestamp: "1 month ago",
        link: "https://instagram.com/p/example3",
      },
    ],
  },
  {
    id: "melissa-mitchell",
    name: "Melissa Mitchell",
    title: "Master Stylist & Cuts Specialist",
    bio: "Expert in precision cuts, styling, and creative color. Melissa is passionate about helping clients find their signature look with personalized consultations and expert technique.",
    image: "/manus-storage/melissa-profile.jpg",
    specialties: ["Precision Cuts", "Styling", "Color", "Texture Work"],
    instagramHandle: "hello.beauty.lounge",
    portfolio: [
      {
        id: "post-4",
        image: "/manus-storage/portfolio-4.jpg",
        caption: "Fresh cut and style for our client! Textured layers with movement 💇‍♀️",
        likes: 267,
        comments: 19,
        timestamp: "10 days ago",
        link: "https://instagram.com/p/example4",
      },
      {
        id: "post-5",
        image: "/manus-storage/portfolio-5.jpg",
        caption: "Dimensional color with lived-in texture. This is what we love to create! 🎨",
        likes: 198,
        comments: 14,
        timestamp: "2 weeks ago",
        link: "https://instagram.com/p/example5",
      },
      {
        id: "post-6",
        image: "/manus-storage/portfolio-6.jpg",
        caption: "Short and chic! This cut is perfect for summer. Who's ready for a change? ✂️",
        likes: 334,
        comments: 28,
        timestamp: "3 weeks ago",
        link: "https://instagram.com/p/example6",
      },
    ],
  },
  {
    id: "keltie-cummins",
    name: "Keltie Cummins",
    title: "Nail Specialist & Esthetician",
    bio: "Creating beautiful nails and glowing skin! Keltie specializes in gel manicures, nail art, and skincare treatments using premium products.",
    image: "/manus-storage/keltie-profile.jpg",
    specialties: ["Gel Manicures", "Nail Art", "Skincare", "Esthetics"],
    instagramHandle: "hello.beauty.lounge",
    portfolio: [
      {
        id: "post-7",
        image: "/manus-storage/portfolio-7.jpg",
        caption: "Stunning nail art design! Custom colors and intricate details ✨💅",
        likes: 421,
        comments: 35,
        timestamp: "1 week ago",
        link: "https://instagram.com/p/example7",
      },
      {
        id: "post-8",
        image: "/manus-storage/portfolio-8.jpg",
        caption: "Gel manicure perfection! Long-lasting shine and color 💎",
        likes: 278,
        comments: 21,
        timestamp: "2 weeks ago",
        link: "https://instagram.com/p/example8",
      },
      {
        id: "post-9",
        image: "/manus-storage/portfolio-9.jpg",
        caption: "Skincare glow-up! Facials and treatments for radiant skin 🌟",
        likes: 195,
        comments: 16,
        timestamp: "3 weeks ago",
        link: "https://instagram.com/p/example9",
      },
    ],
  },
  {
    id: "tiara-black",
    name: "Tiara Black",
    title: "Creative Colorist & Stylist",
    bio: "Passionate about creating bold, beautiful color transformations. Tiara specializes in fashion colors, creative cuts, and personalized styling for every client.",
    image: "/manus-storage/tiara-profile.jpg",
    specialties: ["Fashion Color", "Creative Cuts", "Styling", "Color Correction"],
    instagramHandle: "hello.beauty.lounge",
    portfolio: [
      {
        id: "post-10",
        image: "/manus-storage/portfolio-10.jpg",
        caption: "Bold color transformation! From brunette to vibrant copper 🔥",
        likes: 567,
        comments: 42,
        timestamp: "5 days ago",
        link: "https://instagram.com/p/example10",
      },
      {
        id: "post-11",
        image: "/manus-storage/portfolio-11.jpg",
        caption: "Creative cut with color! Textured layers and dimensional tones 🎨",
        likes: 289,
        comments: 22,
        timestamp: "2 weeks ago",
        link: "https://instagram.com/p/example11",
      },
      {
        id: "post-12",
        image: "/manus-storage/portfolio-12.jpg",
        caption: "Stunning color correction! We brought back the shine ✨",
        likes: 412,
        comments: 31,
        timestamp: "1 month ago",
        link: "https://instagram.com/p/example12",
      },
    ],
  },
];

/**
 * Instructions for populating with real Instagram content:
 * 
 * 1. Visit https://www.instagram.com/hello.beauty.lounge/
 * 2. For each post you want to feature:
 *    - Right-click the image and select "Copy image link"
 *    - Copy the caption text
 *    - Note the approximate likes and comments
 *    - Copy the post URL from the address bar
 * 
 * 3. Update the portfolio array above with:
 *    - image: Direct Instagram image URL
 *    - caption: Post caption text
 *    - likes: Approximate engagement number
 *    - comments: Approximate comment count
 *    - link: Full Instagram post URL
 * 
 * 4. Test the component by importing TeamPortfolio and passing a team member object
 * 
 * Example usage in a page component:
 * ```
 * import TeamPortfolio from '@/components/TeamPortfolio';
 * import { teamMembers } from '@/data/teamPortfolioData';
 * 
 * export default function StylistProfile() {
 *   return <TeamPortfolio teamMember={teamMembers[0]} />;
 * }
 * ```
 */
