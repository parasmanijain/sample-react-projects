import "./App.scss";
import { Accordion } from "./components/Accordion";
import { ContactForm } from "./components/ContactForm";
import { ProgressBar } from "./components/ProgressBar";
import { Stopwatch } from "./components/Stopwatch";
import { MortgageCalculator } from "./components/MortgageCalculator";
import { ToggleBooleanComponent } from "./components/ToggleBoolean";
import { CounterComponent } from "./components/Counter";
import { SearchBar } from "./components/SearchBar";
import { Tabs } from "./components/Tabs";
import { Carousel } from "./components/Carousel";
import { MultiStepForm } from "./components/MultiStepForm";
import { VirtualizedList } from "./components/VirtualizedList";
import { TodoList } from "./components/TodoList";
import { StarRating } from "./components/StarRating";
import { CountdownTimer } from "./components/CountdownTimer";
import { DragDropTodoList } from "./components/DragDropTodoList";
import { Oscillator } from "./components/Oscillator";
import { Modal } from "./components/Modal";

export const App = () => {
  const tabs = [
    { label: "Oscillator", content: <Oscillator /> },
    { label: "Stopwatch", content: <Stopwatch /> },
    { label: "Contact Form", content: <ContactForm /> },
    { label: "Mortgage Calculator", content: <MortgageCalculator /> },
    { label: "Toggle Boolean", content: <ToggleBooleanComponent /> },
    { label: "Counter", content: <CounterComponent /> },
    { label: "SearchBar", content: <SearchBar /> },
    { label: "Carousel", content: <Carousel /> },
    { label: "Multi Step Form", content: <MultiStepForm /> },
    {
      label: "Virtualized List",
      content: <VirtualizedList />,
    },
    { label: "Accordion", content: <Accordion /> },
    { label: "ProgressBar", content: <ProgressBar /> },
    { label: "TodoList", content: <TodoList /> },
    { label: "Modal", content: <Modal /> },
    { label: "Star Rating", content: <StarRating /> },
    { label: "CountdownTimer", content: <CountdownTimer /> },
    { label: "DragDropTodoList", content: <DragDropTodoList /> },
  ];

  return (
    <div className="app">
      <header>Header</header>
      <div className="container">
        <nav>Navigation</nav>
        <main className="main-content">
          <Tabs tabs={tabs} />
        </main>
        <aside>Ads</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
};
