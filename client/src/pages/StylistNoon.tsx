import StylistProfile from "@/components/StylistProfile";
import { teamMembers } from "@/data/teamPortfolioData";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function StylistNoon() {
  const noon = teamMembers.find(member => member.id === "noon-k");

  if (!noon) return null;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${noon.name} - Senior Stylist & Founder | Hello Beauty Lounge`}
        description={`Meet ${noon.name}, founder and senior stylist specializing in ${noon.specialties.join(", ")}. Book your appointment today.`}
        keywords={`${noon.name}, senior stylist, bridal hair, balayage specialist, Red Deer hairstylist`}
        canonicalUrl={`https://hellobeautylounge.com/stylists/${noon.id}`}
      />
      <StylistProfile {...noon} />
      <Footer />
    </div>
  );
}
