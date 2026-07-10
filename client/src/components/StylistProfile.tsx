import { Heart, MessageCircle, Share2, ExternalLink, Star, Instagram, Phone, Mail, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface InstagramComment {
  user: string;
  text: string;
}

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  link: string;
  comments_showcase?: InstagramComment[];
}

interface StylistProfileProps {
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

export default function StylistProfile({
  name,
  title,
  bio,
  image,
  specialties,
  instagramHandle,
  portfolio,
  rating,
  reviews,
  instagram,
}: StylistProfileProps) {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
      </div>

      <div className="container relative z-10 -mt-32 mb-16">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-3 gap-8">
          {/* Profile Image & Info */}
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-accent shadow-lg">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {name}
            </h1>
            <p className="text-lg text-accent font-semibold mb-4">{title}</p>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-foreground/70">({reviews} reviews)</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5 text-accent" />
              </a>
            </div>

            {/* Book Button */}
            <a href="https://www.vagaro.com/hellobeautylounge" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full py-6 shadow-md hover:shadow-lg transition-all duration-300">
                Book with {name.split(" ")[0]}
              </Button>
            </a>
          </div>

          {/* Bio & Specialties */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                About
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg">{bio}</p>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Specialties
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((specialty, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg border border-accent/20">
                    <p className="text-foreground font-semibold">{specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border border-accent/20">
              <h3 className="text-lg font-bold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>@{instagramHandle}</span>
                </a>
                <div className="flex items-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5" />
                  <span>Red Deer, Alberta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="container py-16 md:py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Instagram <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Explore {name.split(" ")[0]}'s latest work and transformations on Instagram. Each post showcases their expertise and client satisfaction.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-muted h-72 md:h-80">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-12 h-12 text-white fill-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-foreground/70 text-sm line-clamp-2 mb-3">{post.caption}</p>

                {/* Client Feedback */}
                {post.comments_showcase && post.comments_showcase.length > 0 && (
                  <div className="mb-3 pt-3 border-t border-border/30">
                    <p className="text-xs font-semibold text-accent mb-2">Client Feedback</p>
                    <p className="text-xs text-foreground/60 italic">"{post.comments_showcase[0].text}"</p>
                    <p className="text-xs text-foreground/50">— {post.comments_showcase[0].user}</p>
                  </div>
                )}

                {/* Engagement */}
                <div className="flex justify-between items-center pt-3 border-t border-border/30">
                  <div className="flex gap-4 text-xs text-foreground/50">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden bg-muted">
              {selectedPost.image ? (
                <img src={selectedPost.image} alt={selectedPost.caption} className="w-full h-full object-cover" />
              ) : null}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Post Details */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-sm text-accent font-semibold mb-2">Instagram Post</p>
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {selectedPost.caption.substring(0, 50)}...
                  </h3>
                </div>
                <a href={selectedPost.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>

              {/* Full Caption */}
              <p className="text-foreground/70 mb-6 leading-relaxed">{selectedPost.caption}</p>

              {/* Engagement */}
              <div className="flex gap-8 mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-semibold text-foreground">{selectedPost.likes} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-foreground/50" />
                  <span className="font-semibold text-foreground">{selectedPost.comments} comments</span>
                </div>
              </div>

              {/* Comments */}
              {selectedPost.comments_showcase && selectedPost.comments_showcase.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Client Feedback</h4>
                  <div className="space-y-4">
                    {selectedPost.comments_showcase.map((comment, index) => (
                      <div key={index} className="bg-background p-4 rounded-lg border border-border/30">
                        <p className="font-semibold text-foreground mb-2">@{comment.user}</p>
                        <p className="text-foreground/70">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Book Button */}
              <div className="mt-8">
                <a href="https://www.vagaro.com/hellobeautylounge" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full py-6 shadow-md hover:shadow-lg transition-all duration-300">
                    Book with {name.split(" ")[0]}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
