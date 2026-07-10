import StylistProfile from "@/components/StylistProfile";
import { teamMembers } from "@/data/teamPortfolioData";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

export default function StylistTiara() {
  const tiara = teamMembers.find(member => member.id === "tiara-black");

  if (!tiara) return null;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${tiara.name} - Extension Specialist | Hello Beauty Lounge`}
        description={`Meet ${tiara.name}, an extension specialist specializing in ${tiara.specialties.join(", ")}. Book your appointment today.`}
        keywords={`${tiara.name}, extension specialist, hand-tied extensions, Red Deer hairstylist`}
        canonicalUrl={`https://hellobeautylounge.com/stylists/${tiara.id}`}
      />
      <StylistProfile {...tiara} />
      <Footer />
    </div>
  );
}
