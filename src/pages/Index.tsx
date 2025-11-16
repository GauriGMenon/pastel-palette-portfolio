import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MusingsHub from "@/components/MusingsHub";
import MusicalsSection from "@/components/MusicalsSection";
import WanderlustSection from "@/components/WanderlustSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MusingsHub />
      <MusicalsSection />
      <WanderlustSection />
      <ContactSection />
    </div>
  );
};

export default Index;
