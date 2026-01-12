import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [bars, setBars] = useState<number[]>([]);
  const [filled, setFilled] = useState(false);
  const addBar = () => {
    setBars((prev) => [...prev, Date.now()]);
  };

  useEffect(() => {
    // Trigger the CSS transition right after mount
    const timer = setTimeout(() => setFilled(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        width: "100%",
      }}
    >
      <button
        onClick={addBar}
        style={{
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      <div style={{ marginTop: "20px", width: "100%" }}>
        {bars.map((id) => (
          <div
            key={id}
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
        ))}
      </div>
    </div>

  );
};