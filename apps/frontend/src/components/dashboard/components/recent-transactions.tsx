import { TrendingDown, TrendingUp } from "lucide-react";

import { dashboardTranslations, recentTransactions } from "./constants";

const RecentTransactions = () => (
  <div className="bg-dark-800 rounded-lg p-6">
    <h2 className="text-xl font-bold text-white mb-6">{dashboardTranslations.recentTransactions}</h2>
    <div className="space-y-4">
      {recentTransactions.map((transaction, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors"
        >
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ml-4 ${
                transaction.type === "خرید" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {transaction.type === "خرید" ? (
                <TrendingUp className="h-5 w-5 text-white" />
              ) : (
                <TrendingDown className="h-5 w-5 text-white" />
              )}
            </div>
            <div>
              <h3 className="font-medium text-white">
                {transaction.type} {transaction.crypto}
              </h3>
              <p className="text-sm text-gray-400">{transaction.time}</p>
            </div>
          </div>
          <div className="text-left">
            <p className="font-medium text-white">{transaction.amount}</p>
            <p className="text-sm text-gray-400">
              {transaction.value} {dashboardTranslations.currency}
            </p>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                transaction.status === "موفق"
                  ? "bg-green-900 text-green-300"
                  : "bg-yellow-900 text-yellow-300"
              }`}
            >
              {transaction.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export { RecentTransactions };
