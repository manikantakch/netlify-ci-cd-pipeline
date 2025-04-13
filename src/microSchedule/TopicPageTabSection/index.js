"use client";
import TopicTestCard from "@/components/molecules/topic-card";
import DynamicTabs from "@/components/organisms/tabs/HorizontalTabsNavigation/DynamicTabs";
import React, { useState } from "react";
import { data, getbgColor, getIcon, tabs } from "./helpers";

const TopicPageTabSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const filteredData =
    activeTab === 0
      ? data
      : data.filter((item) => item.type === tabs[activeTab].label);
  const pendingData = filteredData.filter((item) => item.status === "Pending");
  const completedData = filteredData.filter(
    (item) => item.status === "Completed"
  );

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <DynamicTabs
        tabs={tabs}
        onTabChange={(e) => handleTabChange(e)}
        activeIndex={activeTab}
        showIcon={false}
        active_bgColor={"bg-white-900"}
        activeBorderColor="gradient-blue-30"
        activeTextColor="text-grey-900"
      />
      <div className="mt-4">
        {pendingData.length > 0 && <div>Pending</div>}
        {pendingData.length > 0 &&
          pendingData.map((item, index) => (
            <div key={index} className="p-2 rounded mb-2">
              <TopicTestCard
                topic_name={item.title}
                progress={item.percentage}
                card_image={getIcon(item.type)}
                bgColor={getbgColor(item.status)}
                pathColor={"#faca9e"}
              />
            </div>
          ))}
        {completedData.length > 0 && <div>Completed</div>}
        {completedData.length > 0 &&
          completedData.map((item, index) => (
            <div key={index} className="p-2 rounded mb-2">
              <TopicTestCard
                topic_name={item.title}
                progress={item.percentage}
                card_image={getIcon(item.type)}
                bgColor={getbgColor(item.status)}
                pathColor={"#faca9e"}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopicPageTabSection;
