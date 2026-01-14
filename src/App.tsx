import { useEffect } from "react";
import "./App.scss";
import { Accordion } from "./components/Accordion";
import { ContactForm } from "./components/ContactForm";
import { ProgressBar } from "./components/ProgressBar";
import { Stopwatch } from "./components/Stopwatch";
import { MortgageCalculator } from "./components/MortgageCalculator";
import { ToggleBooleanComponent } from "./components/ToggleBoolean";
import { CounterComponent } from "./components/Counter";
import { SearchBar } from "./components/SearchBar";
import { Tab, Tabs } from "./components/Tabs";
import { Carousel } from "./components/Carousel";
import { MultiStepForm } from "./components/MultiStepForm";
import { VirtualizedList } from "./components/VirtualizedList";
import { TodoList } from "./components/TodoList";
import { StarRating } from "./components/StarRating";
import { CountdownTimer } from "./components/CountdownTimer";
import { DragDropTodoList } from "./components/DragDropTodoList";
import { Oscillator } from "./components/Oscillator";
import { Modal } from "./components/Modal";
import { CustomHookComponent } from "./components/CustomHook";
import { FormWithLogic } from "./components/FormWithLogic";
import { Button } from "./components/Button";
import { RenderProps } from "./components/RenderProps";

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
    { label: "Countdown Timer", content: <CountdownTimer /> },
    { label: "Drag Drop Todo", content: <DragDropTodoList /> },
    { label: "Custom Hook", content: <CustomHookComponent /> },
    { label: "HOC Form", content: <FormWithLogic /> },
    {
      label: "Default Button",
      content: (
        <Button
          onClick={() => {
            console.log("Default Button Clicked");
          }}
        >
          Default Button Text
        </Button>
      ),
    },
    {
      label: "Large Red Button",
      content: (
        <Button
          color="red"
          size="large"
          onClick={() => {
            console.log("Large Red Button Clicked");
          }}
        >
          Large Red Button Text
        </Button>
      ),
    },
    {
      label: "Small Green Button",
      content: (
        <Button
          color="green"
          size="small"
          onClick={() => {
            console.log("Small Green Button Clicked");
          }}
        >
          Small Green Button Text
        </Button>
      ),
    },
    {
      label: "Render Props", content: <RenderProps />
    }
  ];

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const onResize = () => console.log("resize");
    const onScroll = () => console.log("scroll");
    const onKeyDown = (e: KeyboardEvent) => console.log(e.key);
    window.addEventListener("resize", onResize, { signal });
    window.addEventListener("scroll", onScroll, { signal });
    window.addEventListener("keydown", onKeyDown, { signal });
    return () => {
      // abort once → all listeners cleaned
      controller.abort();
    };
  }, []);

  return (
    <div className="app">
      <header>Header</header>
      <div className="container">
        <nav>Navigation</nav>
        <main className="main-content">
          <Tabs>
            {tabs.map(({ label, content }, index: number) => (
              <Tab label={label} key={index}>
                {content}
              </Tab>
            ))}
          </Tabs>
        </main>
        <aside>Ads</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
};
