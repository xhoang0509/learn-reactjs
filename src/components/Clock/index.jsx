import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

Clock.propTypes = {};
const formatDate = (date) => {
    const hours = `${date.getHours()}`.slice(-2);
    const minutes = `${date.getMinutes()}`.slice(-2);
    const seconds = `${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
};
function Clock(props) {
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

    return (
        <>
            <h1>Clock</h1>
            <p style={{ fontSize: "42px" }}>{timeString}</p>
        </>
    );
}

export default Clock;
