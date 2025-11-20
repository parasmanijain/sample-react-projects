import { useCounter } from "../hooks/useCounter";

export const CounterComponent = ()  => {
  const { count, increment, decrement, reset, setCount } = useCounter(5);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setCount(100)}>Set to 100</button>
    </div>
  );
}
