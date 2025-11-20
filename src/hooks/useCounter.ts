import { useState, useCallback, useRef } from "react";

export function useCounter(initialValue: number = 0) {
  // Store the initial value in a ref so that reset always resets to the original initialValue
  const initialRef = useRef(initialValue);

  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialRef.current);
  }, []);

  const setCountValue = useCallback((value: number) => {
    setCount(value);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount: setCountValue,
  };
}
