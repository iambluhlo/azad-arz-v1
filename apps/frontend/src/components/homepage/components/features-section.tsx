import { features, homepageTranslations } from "./constants";

const FeaturesSection = () => (
  <section className="py-16 bg-dark-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">{homepageTranslations.whyTitle}</h2>
        <p className="text-gray-400">{homepageTranslations.whySubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500 transition-colors">
              <feature.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { FeaturesSection };
