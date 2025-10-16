import { Hero } from "@/components/Hero";
import { HiddenSkill } from "@/components/HiddenSkill";
import { SecretGenius } from "@/components/SecretGenius";
import { FieldMapFramework } from "@/components/FieldMapFramework";
import { EliteMentorship } from "@/components/EliteMentorship";
import { Programmes } from "@/components/Programmes";
import { Testimonials } from "@/components/Testimonials";
import { WhoAmI } from "@/components/WhoAmI";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HiddenSkill />
      <SecretGenius />
      <FieldMapFramework />
      <EliteMentorship />
      <Programmes />
      <Testimonials />
      <WhoAmI />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
