import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currTab, setCurTab] = useState(0);

  function handleOnClick(getCurrIndex) {
    setCurTab(getCurrIndex);
    onChange(getCurrIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currTab === index ? "activeTab" : null}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currTab] && tabsContent[currTab].content}
      </div>
    </div>
  );
}
