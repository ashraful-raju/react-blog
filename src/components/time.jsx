import { useState, useEffect } from "react";

export function Time() {
    // State to hold the current time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Effect to update the time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 className="heading text-4xl">
                <span className="text">
                    Now time {currentTime.toLocaleTimeString()}
                </span>
            </h1>
        </div>
    );
}
export default Time;
