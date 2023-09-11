import React, { useState } from "react";
import "./TabList.css";

function TabList({ tabs }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="tab-list">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={selectedTabIndex === index ? "active" : ""}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[selectedTabIndex].content}</div>
    </div>
  );
}

export default TabList;
