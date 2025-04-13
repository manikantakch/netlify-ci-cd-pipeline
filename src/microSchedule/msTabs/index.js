import React from "react";

const Tabs = ({ tabs, activeTab, onTabChange }) => (
  <div className="w-full max-w-2xl">
    {/* Tab Headers */}
    <div className="flex border-b border-gray-200 gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onTabChange(tab.label)}
          className={`
              px-6 py-2 text-sm transition-colors duration-300 rounded-t-lg
              ${
                tab.label === activeTab
                  ? "bg-white-900 border-b-2 border-gradient-blue-600 font-bold text-gradient-blue-600 hover"
                  : "font-medium text-text-grey-900 hover:bg-text-grey-100"
              }
            `}
        >
          {tab.label}{" "}
          {tab.count ? `(${String(tab.count).padStart(2, "0")})` : ""}
        </button>
      ))}
    </div>
  </div>
);

// Demo component to show usage
const MsTabs = ({ tabs, activeTab, onTabChange }) => (
  <Tabs tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
);

export default MsTabs;
