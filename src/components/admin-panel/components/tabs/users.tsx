import { AdminPanelTranslation } from "../constants";

interface UsersProps {
  recentUsers: {
    name: string;
    email: string;
    status: string;
    joined: string;
    balance: string;
  }[];
}

const t = AdminPanelTranslation;

export const Users: React.FC<UsersProps> = ({ recentUsers }) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">{t.manageUsers}</h2>
        <div className="flex space-x-4 space-x-reverse">
          <select className="bg-dark-700 border border-dark-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>{t.allUsers}</option>
            <option>{t.active}</option>
            <option>{t.deactive}</option>
            <option>{t.block}</option>
          </select>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
            {t.addUser}
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">
                {t.user}
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">
                {t.email}
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">
                {t.status}
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">
                {t.joinedDate}
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">
                {t.balance}
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">
                {t.actions}
              </th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((user, index) => (
              <tr
                key={index}
                className="border-b border-dark-700 hover:bg-dark-700 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center ml-3">
                      <span className="text-white font-bold text-sm">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-white">{user.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-400">{user.email}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "فعال"
                        ? "bg-green-900 text-green-300"
                        : user.status === "در انتظار تأیید"
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-red-900 text-red-300"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-400">{user.joined}</td>
                <td className="py-4 px-4 text-white">
                  {user.balance} {t.toman}
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2 space-x-reverse">
                    <button className="text-primary-400 hover:text-primary-300 text-sm">
                      {t.edit}
                    </button>
                    <button className="text-red-400 hover:text-red-300 text-sm">
                      {t.block}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
