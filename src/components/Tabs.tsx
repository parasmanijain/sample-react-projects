import { useState, type ReactNode } from "react";
import classes from "./Tabs.module.scss";
interface TabsProps {
    label: string;
    content: ReactNode;
}

export const Tabs = ({ tabs }: { tabs: TabsProps[] }) => {
    const [activeTab, setActiveTab] = useState(-1);
    return (
        <div className={classes.tabContainer}>
            <div className={classes.tabButtons}>
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
                <div className={classes.tabContent}>{tabs[activeTab].content}</div>
            )}
        </div>
    );
};
