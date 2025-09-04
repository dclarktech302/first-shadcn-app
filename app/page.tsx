import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
      <>
          <HeroSection />
          <Features />
          <ContentSection />
          <CallToAction />
          <FooterSection />
          <ModeToggle />
        </>
  );
}
