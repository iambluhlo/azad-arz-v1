import { dashboardStats } from "./constants";

const StatsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    {dashboardStats.map((stat, index) => (
      <div key={index} className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <stat.icon className="h-8 w-8 text-primary-500 ml-3" />
            <h3 className="text-sm font-medium text-gray-400">{stat.title}</h3>
          </div>
          <span
            className={`text-sm font-medium ${
              stat.changeType === "increase" ? "text-green-400" : "text-red-400"
            }`}
          >
            {stat.change}
          </span>
        </div>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-white">{stat.value}</span>
          <span className="text-sm text-gray-400 mr-2">{stat.unit}</span>
        </div>
      </div>
    ))}
  </div>
);

export { StatsGrid };
