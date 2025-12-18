import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { homepageTranslations } from "./constants";

const CtaSection = () => (
  <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">{homepageTranslations.startNowTitle}</h2>
      <p className="text-xl text-primary-100 mb-8">{homepageTranslations.startNowSubtitle}</p>
      <Link
        to={homepageTranslations.registerPath}
        className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors space-x-2 space-x-reverse"
      >
        <span>{homepageTranslations.freeRegister}</span>
        <ArrowLeft className="h-5 w-5" />
      </Link>
    </div>
  </section>
);

export { CtaSection };
