import React, { useState } from "react";

Counter.propTypes = {};

function Counter(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        return setCount(count + 1);
    };
    return (
        <div>
            <h1>Counter</h1>
            {count}
            <button onClick={handleClick}>Increase</button>
        </div>
    );
}

export default Counter;
