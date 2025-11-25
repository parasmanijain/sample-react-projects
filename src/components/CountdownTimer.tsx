import { useEffect, useState } from "react";

interface CountdownTimerProps {
    initialSeconds: number;
}

export const CountdownTimer = ({ initialSeconds }: CountdownTimerProps) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>Countdown Timer</h1>
            <p>{seconds} seconds remaining</p>
        </div>
    );
};