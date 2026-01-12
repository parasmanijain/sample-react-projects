import { useState, type FC } from "react";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

export const Accordion = () => {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());
  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces developed by Facebook.",
    },
    {
      id: 2,
      title: "What is TypeScript?",
      content:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      id: 3,
      title: "What is an Accordion?",
      content:
        "An accordion is a vertically stacked list of sections that expand or collapse when clicked.",
    },
  ];

  const toggleSection = (id: number) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div style={{ padding: "2rem", background: "#fafafa" }}>
      <h1 style={{ textAlign: "center" }}>Accordion Example</h1>
      <div
        className="accordion-container"
        style={{
          width: "600px",
          margin: "0 auto",
          border: "1px solid #ddd",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        {accordionItems.map((item) => {
          const isOpen = openSections.has(item.id);
          return (
            <div key={item.id} style={{ borderBottom: "1px solid #eee" }}>
              <button
                onClick={() => toggleSection(item.id)}
                aria-expanded={isOpen}
                aria-controls={`section-${item.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  background: "white",
                  border: "none",
                  padding: "1rem",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textAlign: "left",
                }}
              >
                <span>{item.title}</span>
                <span
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {/* Inline chevron-down SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div
                  id={`section-${item.id}`}
                  style={{
                    background: "#f9f9f9",
                    padding: "1rem",
                    borderTop: "1px solid #eee",
                    transition: "all 0.3s ease",
                  }}
                >
                  <p style={{ margin: 0 }}>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

  );
};
