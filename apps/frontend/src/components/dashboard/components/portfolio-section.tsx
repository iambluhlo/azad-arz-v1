import { dashboardTranslations, portfolioItems } from "./constants";

const PortfolioSection = () => (
  <div className="bg-dark-800 rounded-lg p-6">
    <h2 className="text-xl font-bold text-white mb-6">{dashboardTranslations.portfolio}</h2>
    <div className="space-y-4">
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center ml-4">
              <span className="text-white font-bold text-sm">{item.symbol}</span>
            </div>
            <div>
              <h3 className="font-medium text-white">{item.crypto}</h3>
              <p className="text-sm text-gray-400">
                {item.amount} {item.symbol}
              </p>
            </div>
          </div>
          <div className="text-left">
            <p className="font-medium text-white">
              {item.value} {dashboardTranslations.currency}
            </p>
            <div className="flex items-center">
              <span className="text-sm text-gray-400 ml-2">{item.percentage}</span>
              <span
                className={`text-sm font-medium ${
                  item.change.startsWith(dashboardTranslations.portfolioChangePositive)
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {item.change}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export { PortfolioSection };
