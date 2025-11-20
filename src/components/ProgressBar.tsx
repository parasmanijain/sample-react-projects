import { useEffect, useState, type FC } from "react";

interface ProgressBarProps {
  id: number;
}

export const ProgressBar: FC<ProgressBarProps> = () => {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    // Trigger the CSS transition right after mount
    const timer = setTimeout(() => setFilled(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "#eee",
        borderRadius: "10px",
        margin: "10px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: filled ? "100%" : "0%",
          height: "100%",
          backgroundColor: "#4caf50",
          transition: "width 2s linear", // smooth fill over 2 seconds
        }}
      />
    </div>
  );
};