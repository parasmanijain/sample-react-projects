import { useRef, useState } from "react";

interface VirtualizedListProps {
    items: string[];
    itemHeight: number;
    height: number;
}

export const VirtualizedList = ({
    items,
    itemHeight,
    height,
}: VirtualizedListProps) => {
    const [scrollTop, setScrollTop] = useState(0);
    const totalHeight = items.length * itemHeight;
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
        items.length - 1,
        startIndex + Math.ceil(height / itemHeight)
    );

    const visibleItems = items
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
