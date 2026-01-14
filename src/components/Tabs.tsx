import {
    Children,
    isValidElement,
    useState,
    type FC,
    type ReactNode,
} from "react";
import classes from "./Tabs.module.scss"; // <-- make sure this file contains your styles

export interface TabProps {
    label: string;
    children: ReactNode;
}

export const Tab: FC<TabProps> = ({ children }) => {
    return <>{children}</>;
};

export interface TabsProps {
    children: ReactNode;
}

export const Tabs: FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div className={classes["tabContainer"]}>
            <div className={classes["tabButtons"]}>
                {Children.map(children, (child, index) => {
                    if (isValidElement<TabProps>(child)) {
                        return (
                            <button
                                key={index}
                                className={`${classes.tabButton} ${index === activeTab ? classes.active : ""
                                    }`} onClick={() => setActiveTab(index)}
                                type="button"
                            >
                                {child.props.label}
                            </button>
                        );
                    }
                    return null;
                })}
            </div>

            <div className={classes["tabContent"]}>
                {Children.map(children, (child, index) => {
                    if (index === activeTab && isValidElement<TabProps>(child)) {
                        return <div key={index}>{child}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};
