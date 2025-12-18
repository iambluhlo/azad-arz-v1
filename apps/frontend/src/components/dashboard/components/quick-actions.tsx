import { dashboardTranslations } from "./constants";

const QuickActions = () => (
  <div className="mt-8 bg-dark-800 rounded-lg p-6">
    <h2 className="text-xl font-bold text-white mb-6">{dashboardTranslations.quickActions}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-medium transition-colors">
        {dashboardTranslations.buy}
      </button>
      <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg font-medium transition-colors">
        {dashboardTranslations.sell}
      </button>
      <button className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-lg font-medium transition-colors">
        {dashboardTranslations.convert}
      </button>
    </div>
  </div>
);

export { QuickActions };
