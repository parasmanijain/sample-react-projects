import { useRef, useState } from "react";

const itemHeight = 50;
const height = 400;
const longListItems = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

export const VirtualizedList = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const totalHeight = longListItems.length * itemHeight;
    const viewportRef = useRef<HTMLDivElement | null>(null);

    if (!viewportRef.current) {
        return <></>;
    }

    const handleScroll = () => {
        if (viewportRef.current) {
            setScrollTop(viewportRef.current.scrollTop);
        }
    };

    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
        longListItems.length - 1,
        startIndex + Math.ceil(height / itemHeight)
    );

    const visibleItems = longListItems
        .slice(startIndex, endIndex + 1)
        .map((item, index) => (
            <div key={index} style={{ height: itemHeight }}>
                {item}
            </div>
        ));

    return (
        <div
            ref={viewportRef}
            onScroll={handleScroll}
            style={{ height, overflowY: "auto", position: "relative" }}
        >
            <div style={{ height: totalHeight, position: "relative" }}>
                <div
                    style={{
                        position: "absolute",
                        top: startIndex * itemHeight,
                        width: "100%",
                    }}
                >
                    {visibleItems}
                </div>
            </div>
        </div>
    );
};
