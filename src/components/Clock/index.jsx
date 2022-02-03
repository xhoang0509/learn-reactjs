import React from "react";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function Clock(props) {
    const { timeString } = useClock();

    return (
        <>
            <h1>Clock 🤣</h1>
            <p style={{ fontSize: "42px" }}>{timeString}</p>
        </>
    );
}

export default Clock;
