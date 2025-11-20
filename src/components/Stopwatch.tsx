import { useRef, useState, useCallback, useEffect } from "react";

export const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [display, setDisplay] = useState(0); // milliseconds
  const startRef = useRef<number | null>(null);
  const elapsedRef = useRef<number>(0); // accumulated elapsed when paused
  const rafRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    const now = performance.now();
    const start = startRef.current ?? now;
    const elapsed = elapsedRef.current + (now - start);
    setDisplay(elapsed);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const play = useCallback(() => {
    if (running) return;
    startRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    setRunning(true);
  }, [running, tick]);

  const pause = useCallback(() => {
    if (!running) return;
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    const now = performance.now();
    elapsedRef.current = elapsedRef.current + (now - (startRef.current ?? now));
    startRef.current = null;
    rafRef.current = null;
    setRunning(false);
  }, [running]);

  const reset = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    elapsedRef.current = 0;
    rafRef.current = null;
    setDisplay(0);
    setRunning(false);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const format = (ms: number) => {
    const sec = Math.floor(ms / 1000) % 60;
    const min = Math.floor(ms / 60000);
    const milli = Math.floor(ms % 1000);
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(
      2,
      "0"
    )}.${String(milli).padStart(3, "0")}`;
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <div style={{ fontFamily: "monospace", fontSize: 24 }}>
        {format(display)}
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={play} disabled={running}>
          Play
        </button>
        <button onClick={pause} disabled={!running}>
          Pause
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};
