import { Activity } from "lucide-react";
import { AdminPanelTranslation } from "../constants";

interface TransactionsProps {}

const t = AdminPanelTranslation;

export const Transactions: React.FC<TransactionsProps> = ({}) => {
  return (
    <div className="bg-dark-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        {t.manageTransactions}
      </h2>
      <div className="text-center py-12">
        <Activity className="h-16 w-16 text-gray-500 mx-auto mb-4" />
        <p className="text-gray-400">{t.manageTransactionsInProgress}</p>
      </div>
    </div>
  );
};
