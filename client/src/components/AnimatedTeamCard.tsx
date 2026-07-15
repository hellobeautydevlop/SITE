import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocation } from "wouter";

interface TeamMember {
  name: string;
  image: string;
  role: string;
  specialty: string;
  rating: number;
  reviews: number;
  spotlight?: {
    slug: string;
    title: string;
  };
}

interface AnimatedTeamCardProps {
  member: TeamMember;
  index: number;
}

/**
 * Animated team member card component with scroll-triggered fade-in
 * Safely uses the useScrollAnimation hook within component scope
 */
export default function AnimatedTeamCard({ member, index }: AnimatedTeamCardProps) {
  const [, setLocation] = useLocation();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? 'active' : ''}`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <Card className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-primary mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            {member.name}
          </h3>
          <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
          <p className="text-foreground/70 text-sm mb-4">{member.specialty}</p>
          <div className="flex justify-center items-center gap-2 text-yellow-500 mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>{member.rating} ({member.reviews} reviews)</span>
          </div>
          <Button 
            onClick={() => setLocation(`/stylists/${member.name.toLowerCase().replace(/\s+/g, '-')}`)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
          >
            View Profile
          </Button>
        </div>
      </Card>
    </div>
  );
}
