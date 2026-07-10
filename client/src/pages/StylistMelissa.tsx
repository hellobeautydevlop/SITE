import StylistProfile from "@/components/StylistProfile";
import { teamMembers } from "@/data/teamPortfolioData";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function StylistMelissa() {
  const melissa = teamMembers.find(member => member.id === "melissa-mitchell");

  if (!melissa) return null;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${melissa.name} - Master Stylist | Hello Beauty Lounge`}
        description={`Meet ${melissa.name}, a master stylist specializing in ${melissa.specialties.join(", ")}. Book your appointment today.`}
        keywords={`${melissa.name}, master stylist, precision cuts, balayage specialist, Red Deer hairstylist`}
        canonicalUrl={`https://hellobeautylounge.com/stylists/${melissa.id}`}
      />
      <StylistProfile {...melissa} />
      <Footer />
    </div>
  );
}
