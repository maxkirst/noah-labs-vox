import { SkipLink } from "@/components/ui/SkipLink";
import { Nav } from "@/components/navigation/Nav";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyVoiceSection } from "@/components/sections/WhyVoiceSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { MilestonesSection } from "@/components/sections/MilestonesSection";
import { RewardChoiceSection } from "@/components/sections/RewardChoiceSection";
import { SafetySection } from "@/components/sections/SafetySection";
import { ActivateSection } from "@/components/sections/ActivateSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { skipLink } from "@/content/campaign.de";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id={skipLink.targetId}>
        <HeroSection />
        <WhyVoiceSection />
        <ProcessSection />
        <MilestonesSection />
        <RewardChoiceSection />
        <SafetySection />
        <ActivateSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
