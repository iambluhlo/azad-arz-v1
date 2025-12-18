import { AdminPanelTranslation } from "../constants";

interface SecurityProps {}

const t = AdminPanelTranslation;

export const Security: React.FC<SecurityProps> = ({}) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        {t.securitySettings}
      </h2>
      <div className="space-y-6">
        <div className="bg-dark-700 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-3">
            {t.securityLogs}
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{t.failedLoginAttempts}</span>
              <span className="text-red-400">1,234 مورد</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{t.blockedIPs}</span>
              <span className="text-yellow-400">45 مورد</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{t.suspiciousTransactions}</span>
              <span className="text-green-400">12 مورد</span>
            </div>
          </div>
        </div>

        <div className="bg-dark-700 p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-3">
            {t.firewallSettings}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">{t.requestRateLimit}</span>
              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                {t.enabled}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">{t.countryFilter}</span>
              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                {t.enabled}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">{t.ddosDetection}</span>
              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                {t.enabled}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
