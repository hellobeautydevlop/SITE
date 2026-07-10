import StylistProfile from "@/components/StylistProfile";
import { teamMembers } from "@/data/teamPortfolioData";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function StylistKeltie() {
  const keltie = teamMembers.find(member => member.id === "keltie-cummins");

  if (!keltie) return null;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${keltie.name} - Hair Specialist | Hello Beauty Lounge`}
        description={`Meet ${keltie.name}, a master colorist specializing in ${keltie.specialties.join(", ")}. Book your appointment today.`}
        keywords={`${keltie.name}, hair specialist, balayage, blonde specialist, Red Deer hairstylist`}
        canonicalUrl={`https://hellobeautylounge.com/stylists/${keltie.id}`}
      />
      <StylistProfile {...keltie} />
      <Footer />
    </div>
  );
}
