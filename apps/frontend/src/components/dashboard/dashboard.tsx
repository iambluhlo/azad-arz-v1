import {
  PortfolioSection,
  QuickActions,
  RecentTransactions,
  StatsGrid,
  dashboardTranslations,
} from "./components";

const Dashboard = () => (
  <div className="min-h-screen bg-dark-900 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{dashboardTranslations.dashboard}</h1>
        <p className="text-gray-400">{dashboardTranslations.overview}</p>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PortfolioSection />
        <RecentTransactions />
      </div>

      <QuickActions />
    </div>
  </div>
);

export default Dashboard;
