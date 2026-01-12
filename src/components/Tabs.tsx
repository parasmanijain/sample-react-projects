import { useState, type ReactNode } from "react";

interface TabsProps {
    label: string;
    content: ReactNode;
}

export const Tabs = ({ tabs }: { tabs: TabsProps[] }) => {
    const [activeTab, setActiveTab] = useState(-1);
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={index === activeTab ? "active" : ""}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {activeTab > -1 && (
                <div className="tab-content">{tabs[activeTab].content}</div>
            )}
        </div>
    );
};
