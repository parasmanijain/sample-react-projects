import { useState } from "react";
import "./App.scss";
import { Accordion } from "./components/Accordion";
import { ContactForm } from "./components/ContactForm";
import { Oscillator } from "./components/Oscillator";
import { ProgressBar } from "./components/ProgressBar";
import { Stopwatch } from "./components/Stopwatch";
import { MortgageCalculator } from "./components/MortgageCalculator";
import { ToggleBooleanComponent } from "./components/ToggleBoolean";
import { CounterComponent } from "./components/Counter";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  const [bars, setBars] = useState<number[]>([]);

  const addBar = () => {
    setBars((prev) => [...prev, Date.now()]);
  };
  const accordionItems = [
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

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  return (
    <div className="app">
      <header>Header</header>

      <div className="container">
        <nav>Navigation</nav>
        <main className="main-content">
          <Oscillator />
          <Stopwatch />
          <div style={{ padding: "2rem", background: "#fafafa" }}>
            <h1 style={{ textAlign: "center" }}>Accordion Example</h1>
            <Accordion items={accordionItems} />
          </div>
          <ContactForm />
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
                <ProgressBar key={id} id={id} />
              ))}
            </div>
          </div>
          <MortgageCalculator />
          <ToggleBooleanComponent />
          <CounterComponent />
          <SearchBar items={items} />
        </main>
        <aside>Ads</aside>
      </div>

      <footer>Footer</footer>
    </div>
  );
};
