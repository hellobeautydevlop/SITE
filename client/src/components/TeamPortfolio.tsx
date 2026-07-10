import { useState } from "react";
import { Heart, MessageCircle, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  link: string;
  comments_showcase?: Array<{ user: string; text: string }>;
}

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
  instagramHandle: string;
  portfolio: InstagramPost[];
}

interface TeamPortfolioProps {
  teamMember: TeamMember;
}

export default function TeamPortfolio({ teamMember }: TeamPortfolioProps) {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const toggleLike = (postId: string) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="space-y-12">
      {/* Team Member Header */}
      <div className="bg-white rounded-2xl p-8 border border-border/50 luxury-card">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Profile Image */}
          <div className="md:col-span-1">
            <img
              src={teamMember.image}
              alt={teamMember.name}
              className="w-full aspect-square object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Profile Info */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {teamMember.name}
            </h2>
            <p className="text-xl text-accent font-semibold mb-4">{teamMember.title}</p>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">{teamMember.bio}</p>

            {/* Specialties */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {teamMember.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/30"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Instagram Link */}
            <a
              href={`https://instagram.com/${teamMember.instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              @{teamMember.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <div>
        <h3 className="text-3xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Portfolio & Recent Work
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMember.portfolio.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-border/50 luxury-card hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption Preview */}
              <div className="p-4">
                <p className="text-foreground/70 text-sm line-clamp-2 mb-3">{post.caption}</p>
                {post.comments_showcase && post.comments_showcase.length > 0 && (
                  <div className="mb-3 pt-3 border-t border-border/30">
                    <p className="text-xs font-semibold text-accent mb-2">Client Feedback</p>
                    <p className="text-xs text-foreground/60 italic">"{post.comments_showcase[0].text}"</p>
                    <p className="text-xs text-foreground/50">— {post.comments_showcase[0].user}</p>
                  </div>
                )}
                <p className="text-xs text-foreground/50">{post.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Post Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img src={selectedPost.image} alt={selectedPost.caption} className="w-full h-full object-cover" />
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <h4 className="font-semibold text-foreground">{teamMember.name}</h4>
                  <p className="text-xs text-foreground/50">{selectedPost.timestamp}</p>
                </div>
                <a
                  href={selectedPost.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Caption */}
              <p className="text-foreground/80 leading-relaxed">{selectedPost.caption}</p>

              {/* Engagement */}
              <div className="flex gap-6 py-4 border-t border-b border-border">
                <button
                  onClick={() => toggleLike(selectedPost.id)}
                  className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${likedPosts.has(selectedPost.id) ? 'fill-accent text-accent' : ''}`}
                  />
                  <span className="text-sm font-medium">{selectedPost.likes}</span>
                </button>
                <div className="flex items-center gap-2 text-foreground/70">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{selectedPost.comments}</span>
                </div>
                <button className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>

              {/* CTA */}
              <Button
                onClick={() => window.open(selectedPost.link, '_blank')}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg"
              >
                View on Instagram
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
