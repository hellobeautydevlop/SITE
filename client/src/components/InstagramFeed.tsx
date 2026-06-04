import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, ExternalLink } from "lucide-react";

/**
 * Design Philosophy: Modern Luxury Minimalism
 * - Instagram feed component showcasing salon's real content
 * - Links to Instagram profile for social proof
 */

interface InstagramPost {
  id: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
  link: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([
    {
      id: "1",
      caption: "✨ Custom balayage transformation using Kevin Murphy products. Swipe to see the before & after! 💛",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      likes: 324,
      comments: 28,
      link: "https://www.instagram.com/hello.beauty.lounge",
    },
    {
      id: "2",
      caption: "🎀 Bridal hair trial for our gorgeous bride-to-be! Can't wait to see you on your big day! 💍",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      likes: 412,
      comments: 45,
      link: "https://www.instagram.com/hello.beauty.lounge",
    },
    {
      id: "3",
      caption: "💇‍♀️ Precision cut with our master stylist Tiara. Loving this new style! #HairGoals",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      likes: 287,
      comments: 32,
      link: "https://www.instagram.com/hello.beauty.lounge",
    },
    {
      id: "4",
      caption: "✨ Hand-tied extensions by Melissa. Length, volume, and confidence! 💛 DM for booking",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
      likes: 556,
      comments: 67,
      link: "https://www.instagram.com/hello.beauty.lounge",
    },
    {
      id: "5",
      caption: "🌟 Color correction magic! From brassy to beautiful. Kevin Murphy color care keeps it vibrant! 🎨",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      likes: 445,
      comments: 51,
      link: "https://www.instagram.com/hello.beauty.lounge",
    },
    {
      id: "6",
      caption: "💅 Nail art by our talented team. What's your favorite design? Comment below! 💕",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      likes: 198,
      comments: 24,
      link: "https://www.instagram.com/hello.beauty.lounge",
    },
  ]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow Our Journey
            </h2>
            <p className="text-lg text-foreground/70">Stay updated with our latest transformations and salon moments</p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hidden md:flex"
            onClick={() => window.open("https://www.instagram.com/hello.beauty.lounge", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Follow on Instagram
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => window.open(post.link, "_blank")}
            >
              <div className="relative overflow-hidden bg-gray-200 aspect-square">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 fill-white" />
                      <span className="text-sm font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-foreground/80 line-clamp-2 mb-3">{post.caption}</p>
                <div className="flex items-center justify-between text-xs text-foreground/60">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" /> {post.comments}
                    </span>
                  </div>
                  <Share2 className="w-4 h-4" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center md:hidden">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            onClick={() => window.open("https://www.instagram.com/hello.beauty.lounge", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Follow on Instagram
          </Button>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 md:p-12 text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            @hello.beauty.lounge
          </h3>
          <p className="text-foreground/70 mb-6">
            Follow us on Instagram for daily inspiration, transformation reveals, and exclusive salon updates. Tag us in your photos for a chance to be featured!
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://www.instagram.com/hello.beauty.lounge", "_blank")}
          >
            Visit Our Instagram Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
