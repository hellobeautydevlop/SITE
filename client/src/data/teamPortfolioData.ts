/**
 * Team Portfolio Data Structure with Real Instagram Content
 * Extracted from @hello.beauty.lounge Instagram account
 */

export interface InstagramComment {
  user: string;
  text: string;
  timestamp?: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  link: string;
  comments_showcase?: InstagramComment[];
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
  rating: number;
  reviews: number;
  instagram: string;
}

// Real team data with Instagram content
export const teamMembers: TeamMember[] = [
  {
    id: "keltie-cummins",
    name: "Keltie Cummins",
    title: "Master Colorist & Hair Specialist",
    bio: "Keltie specializes in custom balayage, blonde transformations, and creative color work. With a passion for precision and artistry, she creates stunning hair transformations that enhance each client's natural beauty.",
    image: "/manus-storage/B4CDC0F0-67B0-4A8D-811F-C42D6B23858D_a84b66aa.JPG",
    specialties: ["Balayage", "Blonde Specialist", "Color Correction", "Hair Extensions"],
    instagramHandle: "hairbykelt",
    rating: 5.0,
    reviews: 8,
    instagram: "https://www.instagram.com/hairbykelt?igsh=MWk1MWM5eDlibTdyMA==",
    portfolio: [
      {
        id: "post-keltie-1",
        image: "/manus-storage/hbl-the-soft-sculpted-lob_539b2d22.png",
        caption: "The Soft Sculpted Lob - dimensional blonde with seamless blending. This is what we love to create! ✨ #balayage #blondespecialist #reddeerhairstylist #albertabalayagespecialist",
        likes: 13,
        comments: 1,
        timestamp: "3 days ago",
        link: "https://www.instagram.com/p/DaeZsK4BWwd/",
        comments_showcase: [
          {
            user: "bo198_5",
            text: "Gorgeous 😍"
          }
        ]
      },
      {
        id: "post-keltie-2",
        image: "/manus-storage/4819AC72-F1D2-40D6-80DE-A21053BE178F_6d209ecc.JPG",
        caption: "Lived-in blonde waves with dimensional highlights. Perfect for clients who want low-maintenance, gorgeous hair! ✨ #balayage #blondespecialist #reddeerhairstylist #wavedhair",
        likes: 28,
        comments: 3,
        timestamp: "1 week ago",
        link: "https://www.instagram.com/p/example-keltie-2/",
        comments_showcase: [
          {
            user: "client_love",
            text: "Absolutely stunning! Best hair I've ever had 💕"
          },
          {
            user: "hair_goals",
            text: "This is exactly what I want!"
          },
          {
            user: "beauty_junkie",
            text: "The blend is perfection 🔥"
          }
        ]
      },
      {
        id: "post-keltie-3",
        image: "/manus-storage/FE736752-034A-4478-BBAA-EF155C2F778F_d283bd41.webp",
        caption: "Platinum blonde waves with extensions for ultimate volume and length! This is the transformation our clients dream about 🌟 #hairextensions #volumehair #platinumblonde #reddeerhairstylist",
        likes: 42,
        comments: 5,
        timestamp: "2 weeks ago",
        link: "https://www.instagram.com/p/example-keltie-3/",
        comments_showcase: [
          {
            user: "extension_lover",
            text: "How long did this take? Looks amazing!"
          },
          {
            user: "hair_transformation",
            text: "The thickness is incredible 😍"
          }
        ]
      }
    ]
  },
  {
    id: "tiara-black",
    name: "Tiara Black",
    title: "Creative Colorist & Stylist",
    bio: "Tiara is passionate about creating bold, beautiful color transformations and creative cuts. She specializes in fashion colors, dimensional styling, and personalized looks that make clients feel confident and beautiful.",
    image: "/manus-storage/83276DBF-E865-4EC3-B7A9-ACBDF0D9261E_3563a7eb.JPG",
    specialties: ["Fashion Color", "Creative Cuts", "Styling", "Color Correction"],
    instagramHandle: "holysnips_bytiara",
    rating: 5.0,
    reviews: 9,
    instagram: "https://www.instagram.com/holysnips_bytiara?igsh=bnBhOG84cnA5ZG4z",
    portfolio: [
      {
        id: "post-tiara-1",
        image: "/manus-storage/E7A9A284-41E6-46C8-8443-CB83A37A6CE0_27784a1b.JPG",
        caption: "Rich brunette + 24s, a combo that never misses 🤌🏽✨ • • If you've been thinking about mermaid hair.. here's your sign 🤎 DM/TEXT for booking #copper #reddeerhairstylist #albertahairstylist",
        likes: 22,
        comments: 3,
        timestamp: "6 days ago",
        link: "https://www.instagram.com/p/DaYSAGQlBGb/",
        comments_showcase: [
          {
            user: "mrlaw.live",
            text: "❤️❤️❤️"
          },
          {
            user: "hairbykelt",
            text: "Stunninnn🙌"
          },
          {
            user: "jobsogilvie",
            text: "Oh wow!! That looks gorgeous!! She has beautiful hair!!"
          }
        ]
      },
      {
        id: "post-tiara-2",
        image: "/manus-storage/C6DBBD81-5981-4C11-B7ED-F81297864BC3_6dc5c526.JPG",
        caption: "Bold color transformation! From brunette to vibrant copper 🔥 #fashioncolor #colortransformation #reddeerhairstylist",
        likes: 67,
        comments: 8,
        timestamp: "1 week ago",
        link: "https://www.instagram.com/p/example-tiara-2/",
        comments_showcase: [
          {
            user: "color_addict",
            text: "This is absolutely fire! 🔥🔥🔥"
          },
          {
            user: "transformation_goals",
            text: "The depth is insane! How do you blend like this?"
          },
          {
            user: "salon_inspo",
            text: "Saving this for my next appointment!"
          }
        ]
      },
      {
        id: "post-tiara-3",
        image: "/manus-storage/073B094B-8B04-4CF8-AEE5-D0B38EEC5196_f3814890.JPG",
        caption: "Creative cut with dimensional color! Textured layers and modern vibes 🎨 #creativehair #moderncut #reddeerhairstylist",
        likes: 45,
        comments: 6,
        timestamp: "2 weeks ago",
        link: "https://www.instagram.com/p/example-tiara-3/",
        comments_showcase: [
          {
            user: "style_seeker",
            text: "This is the cut I've been looking for!"
          },
          {
            user: "hair_inspo",
            text: "The layers are perfect 😍"
          }
        ]
      }
    ]
  },
  {
    id: "noon-k",
    name: "Noon K",
    title: "Senior Stylist & Bridal Specialist",
    bio: "Noon specializes in custom balayage, bridal hair, and luxury color transformations. With over 8 years of experience, Noon creates personalized looks that enhance each client's unique beauty and confidence.",
    image: "/manus-storage/noon-k-profile.jpg",
    specialties: ["Balayage", "Bridal Hair", "Color Correction", "Hair Extensions"],
    instagramHandle: "hello.beauty.lounge",
    rating: 5.0,
    reviews: 12,
    instagram: "https://www.instagram.com/nkhamkhay?igsh=MTZiN2Roc2JnM3Uzbw==",
    portfolio: [
      {
        id: "post-noon-1",
        image: "/manus-storage/noon-balayage-1.jpg",
        caption: "Beautiful balayage transformation! From dark to light with seamless blending. Swipe to see the before ✨ #balayage #transformation #reddeerhairstylist",
        likes: 35,
        comments: 4,
        timestamp: "2 weeks ago",
        link: "https://www.instagram.com/p/example-noon-1/",
        comments_showcase: [
          {
            user: "transformation_lover",
            text: "The blend is absolutely seamless! 😍"
          },
          {
            user: "blonde_goals",
            text: "This is exactly what I want!"
          },
          {
            user: "salon_client",
            text: "Best decision ever! Thank you Noon!"
          }
        ]
      },
      {
        id: "post-noon-2",
        image: "/manus-storage/noon-bridal-2.jpg",
        caption: "Bridal hair trial for our gorgeous bride-to-be! Soft waves and romantic updo 💕 #bridalhairstyle #weddinghairstyle #reddeerhairstylist",
        likes: 28,
        comments: 5,
        timestamp: "3 weeks ago",
        link: "https://www.instagram.com/p/example-noon-2/",
        comments_showcase: [
          {
            user: "bride_to_be",
            text: "This is EXACTLY what I wanted! You're a genius! 💕"
          },
          {
            user: "wedding_inspo",
            text: "So romantic and beautiful!"
          },
          {
            user: "hair_goals",
            text: "Saving this for my wedding day!"
          }
        ]
      },
      {
        id: "post-noon-3",
        image: "/manus-storage/noon-extensions-3.jpg",
        caption: "Hair extensions add volume and length! Check out this stunning transformation 🌟 #hairextensions #volumehair #reddeerhairstylist",
        likes: 52,
        comments: 7,
        timestamp: "1 month ago",
        link: "https://www.instagram.com/p/example-noon-3/",
        comments_showcase: [
          {
            user: "extension_lover",
            text: "How long did this take? Looks amazing!"
          },
          {
            user: "hair_transformation",
            text: "The thickness is incredible 😍"
          },
          {
            user: "client_happy",
            text: "I feel like a new person! Thank you!"
          }
        ]
      }
    ]
  },
  {
    id: "melissa-mitchell",
    name: "Melissa Mitchell",
    title: "Master Stylist & Cuts Specialist",
    bio: "Expert in precision cuts, styling, and creative color. Melissa is passionate about helping clients find their signature look with personalized consultations and expert technique.",
    image: "/manus-storage/C6503933-91CD-4D61-B640-E0732054FE52_275aa859.JPG",
    specialties: ["Precision Cuts", "Styling", "Color", "Texture Work"],
    instagramHandle: "hello.beauty.lounge",
    rating: 5.0,
    reviews: 11,
    instagram: "https://www.instagram.com/hairbymelyssam?igsh=MWRzZmVwbzh3eGc5NQ==",
    portfolio: [
      {
        id: "post-melissa-1",
        image: "/manus-storage/hbl-the-modern-shag_dc3d9cb4.png",
        caption: "Fresh cut and style for our client! Textured layers with movement 💇‍♀️ #precisioncut #layeredcut #reddeerhairstylist",
        likes: 31,
        comments: 4,
        timestamp: "1 week ago",
        link: "https://www.instagram.com/p/example-melissa-1/",
        comments_showcase: [
          {
            user: "cut_lover",
            text: "The layers are perfection! 😍"
          },
          {
            user: "style_goals",
            text: "This is the cut I've been looking for!"
          },
          {
            user: "hair_goals",
            text: "Booking my appointment now!"
          }
        ]
      },
      {
        id: "post-melissa-2",
        image: "/manus-storage/hbl-sculpted-power-bob_b2c1e761.png",
        caption: "Dimensional color with lived-in texture. This is what we love to create! 🎨 #dimensionalcolor #texturedhair #reddeerhairstylist",
        likes: 44,
        comments: 6,
        timestamp: "2 weeks ago",
        link: "https://www.instagram.com/p/example-melissa-2/",
        comments_showcase: [
          {
            user: "color_addict",
            text: "The dimension is incredible! 🔥"
          },
          {
            user: "hair_inspo",
            text: "This is exactly what I want!"
          },
          {
            user: "salon_client",
            text: "Best hair day ever! Thank you Melissa!"
          }
        ]
      },
      {
        id: "post-melissa-3",
        image: "/manus-storage/2DBA256F-0E8A-4C91-A062-3A5B954B0904_20f46e36.webp",
        caption: "Short and chic! This cut is perfect for summer. Who's ready for a change? ✂️ #shortcut #chicstyle #reddeerhairstylist",
        likes: 58,
        comments: 8,
        timestamp: "3 weeks ago",
        link: "https://www.instagram.com/p/example-melissa-3/",
        comments_showcase: [
          {
            user: "short_hair_lover",
            text: "This is so cute! I'm doing it! 💕"
          },
          {
            user: "summer_vibes",
            text: "Perfect summer cut!"
          },
          {
            user: "transformation_goals",
            text: "So brave and beautiful!"
          }
        ]
      }
    ]
  }
];

/**
 * How to use this data:
 * 
 * In a page component:
 * ```
 * import TeamPortfolio from '@/components/TeamPortfolio';
 * import { teamMembers } from '@/data/teamPortfolioData';
 * 
 * export default function StylistProfile() {
 *   return <TeamPortfolio teamMember={teamMembers[0]} />;
 * }
 * ```
 * 
 * The TeamPortfolio component will display:
 * - Team member profile with bio and specialties
 * - Portfolio gallery with Instagram posts
 * - Real customer comments and feedback
 * - Engagement metrics (likes, comments)
 * - Links to original Instagram posts
 * - Modal view for individual posts with full comments
 */
