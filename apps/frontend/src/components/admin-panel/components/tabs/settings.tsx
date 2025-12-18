import { AdminPanelTranslation } from "../constants";

interface SettingsProps {}

const t = AdminPanelTranslation;

export const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">{t.systemSettings}</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t.platformName}
            </label>
            <input
              type="text"
              value="بیت‌کوین پلاس"
              className="w-full bg-dark-700 border border-dark-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t.transactionFeeLimit}
            </label>
            <input
              type="number"
              value="0.1"
              step="0.01"
              className="w-full bg-dark-700 border border-dark-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t.dailyWithdrawalLimit}
          </label>
          <input
            type="number"
            value="500000000"
            className="w-full bg-dark-700 border border-dark-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white">{t.enable2FA}</span>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            {t.enabled}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white">{t.showMaintenanceAlert}</span>
          <button className="bg-dark-600 hover:bg-dark-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            {t.disabled}
          </button>
        </div>
      </div>
    </div>
  );
};
