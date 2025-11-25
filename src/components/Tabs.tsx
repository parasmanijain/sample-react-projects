import { useState, type JSX } from "react";

interface TabsProps {
    label: string;
    content: JSX.Element;
}

export const Tabs = ({ tabs }: { tabs: TabsProps[] }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
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
            <div className="tab-content">{tabs[activeTab].content}</div>
        </div>
    );
};
