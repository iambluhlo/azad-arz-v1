import { TrendingUp } from "lucide-react";

import { cryptoPrices, homepageTranslations } from "./constants";

const MarketOverview = () => (
  <section className="py-16 bg-dark-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">{homepageTranslations.marketTitle}</h2>
        <p className="text-gray-400">{homepageTranslations.marketSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cryptoPrices.map((crypto, index) => (
          <div
            key={crypto.symbol}
            className="bg-dark-700 rounded-lg p-6 hover:bg-dark-600 transition-colors cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{crypto.name}</h3>
                <p className="text-gray-400">{crypto.symbol}</p>
              </div>
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">{crypto.price}</span>
              <span className={`text-sm font-medium ${crypto.changeColor}`}>{crypto.change}</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">{homepageTranslations.currency}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { MarketOverview };
