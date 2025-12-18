import { Link } from "react-router-dom";

import { homepageTranslations } from "./constants";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center animate-slide-up">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="text-primary-400 block mt-2">{homepageTranslations.heroTitle}</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {homepageTranslations.heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={homepageTranslations.registerPath}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 animate-pulse-glow"
          >
            {homepageTranslations.startTrading}
          </Link>
          <Link
            to={homepageTranslations.tradingPath}
            className="border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            {homepageTranslations.viewMarket}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export { HeroSection };
