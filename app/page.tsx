import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Features } from "@/components/sections/features";
import { FeatureDashboard } from "@/components/sections/feature-dashboard";
import { FeatureCalendar } from "@/components/sections/feature-calendar";
import { FeaturePermissions } from "@/components/sections/feature-permissions";
import { Security } from "@/components/sections/security";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <FeatureDashboard />
        <FeatureCalendar />
        <FeaturePermissions />
        <Security />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
