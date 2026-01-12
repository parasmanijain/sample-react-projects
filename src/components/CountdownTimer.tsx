import { useEffect, useState } from "react";

const initialSeconds = 60;

export const CountdownTimer = () => {
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