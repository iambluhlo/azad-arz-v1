import { AdminPanelTranslation } from "./constants";

interface SystemAlertsProps {
  systemAlerts: {
    severity: string;
    type: string;
    message: string;
    time: string;
  }[];
}

const t = AdminPanelTranslation;

export const SystemAlerts: React.FC<SystemAlertsProps> = ({ systemAlerts }) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">{t.systemAlerts}</h2>
      <div className="space-y-4">
        {systemAlerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-4 bg-dark-700 rounded-lg"
          >
            <div className="flex items-start">
              <div
                className={`w-3 h-3 rounded-full mt-2 ml-3 ${
                  alert.severity === "high"
                    ? "bg-red-500"
                    : alert.severity === "medium"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              ></div>
              <div>
                <h3 className="font-medium text-white">{alert.type}</h3>
                <p className="text-sm text-gray-400 mt-1">{alert.message}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {alert.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
