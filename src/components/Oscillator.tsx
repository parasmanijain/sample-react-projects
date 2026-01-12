import { useState, useRef, useEffect, useCallback } from "react";

export const Oscillator = ({ stepMs = 200 }: { stepMs?: number }) => {
    const [value, setValue] = useState(0);
    const [playing, setPlaying] = useState(false);
    // direction: 1 = increasing, -1 = decreasing
    const [direction, setDirection] = useState<1 | -1>(1);

    const intervalRef = useRef<number | null>(null);

    const tick = useCallback(() => {
        setValue(prev => {
            let next = prev + direction;
            if (next > 10) {
                next = 9;
                setDirection(-1);
            } else if (next < 0) {
                next = 1;
                setDirection(1);
            }
            return next;
        });
    }, [direction]);

    useEffect(() => {
        // If direction changes, tick closure needs latest direction, so we clear and restart if playing
        if (!playing) return;
        intervalRef.current = window.setInterval(tick, stepMs);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [playing, tick, stepMs, direction]);

    const play = useCallback(() => setPlaying(true), []);
    const pause = useCallback(() => setPlaying(false), []);
    const reset = useCallback(() => {
        setPlaying(false);
        setDirection(1);
        setValue(0);
    }, []);

    // cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <>
            <h1>Oscillator</h1>
            <div style={{ fontSize: 36 }}>{value}</div>
            <div>Direction: {direction === 1 ? "↑" : "↓"}</div>
            <div style={{ marginTop: 8 }}>
                <button onClick={play} disabled={playing}>Play</button>
                <button onClick={pause} disabled={!playing}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
}
