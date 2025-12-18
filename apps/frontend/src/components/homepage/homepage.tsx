import { CtaSection, FeaturesSection, HeroSection, MarketOverview } from "./components";

const Homepage = () => (
  <div className="min-h-screen bg-dark-900">
    <HeroSection />
    <MarketOverview />
    <FeaturesSection />
    <CtaSection />
  </div>
);

export default Homepage;
