import { useState } from "react";

import {
  AdminPanelTranslation,
  adminStats,
  recentUsers,
  systemAlerts,
  tabs,
} from "./components/constants";
import { RecentUsers, SystemAlerts } from "./components";
import { Security, Settings, Transactions, Users } from "./components/tabs";

const t = AdminPanelTranslation;

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-dark-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{t.adminPanel}</h1>
          <p className="text-gray-400">{t.manageSystem}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-dark-700 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 space-x-reverse py-4 px-6 font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b-2 border-primary-500 text-primary-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adminStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <stat.icon className="h-8 w-8 text-primary-500 ml-3" />
                      <h3 className="text-sm font-medium text-gray-400">
                        {stat.title}
                      </h3>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        stat.changeType === "increase"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Users */}
              <RecentUsers recentUsers={recentUsers} />

              {/* System Alerts */}
              <SystemAlerts systemAlerts={systemAlerts} />
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && <Users recentUsers={recentUsers} />}

        {/* Transactions Tab */}
        {activeTab === "transactions" && <Transactions />}

        {/* Settings Tab */}
        {activeTab === "settings" && <Settings />}

        {/* Security Tab */}
        {activeTab === "security" && <Security />}
      </div>
    </div>
  );
};

export default AdminPanel;
