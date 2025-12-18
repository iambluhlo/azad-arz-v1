import { AdminPanelTranslation } from "./constants";

export interface RecentUsersProps {
  recentUsers: {
    name: string;
    email: string;
    status: string;
    joined: string;
    balance: string;
  }[];
}

const t = AdminPanelTranslation;

export const RecentUsers: React.FC<RecentUsersProps> = ({ recentUsers }) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">{t.recentUsers}</h2>
      <div className="space-y-4">
        {recentUsers.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center ml-4">
                <span className="text-white font-bold text-sm">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-medium text-white">{user.name}</h3>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
            </div>
            <div className="text-left">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  user.status === "فعال"
                    ? "bg-green-900 text-green-300"
                    : user.status === "در انتظار تأیید"
                    ? "bg-yellow-900 text-yellow-300"
                    : "bg-red-900 text-red-300"
                }`}
              >
                {user.status}
              </span>
              <p className="text-sm text-gray-400 mt-1">{user.joined}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
