import { useEffect, useState } from "react";

const formatDate = (date) => {
    const hours = `${date.getHours()}`.slice(-2);
    const minutes = `${date.getMinutes()}`.slice(-2);
    const seconds = `${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
};

function useClock(props) {
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);
        return () => {
            clearInterval(clockInterval);
        };
    }, []);

    return { timeString };
}

export default useClock;
