import React, { useState } from "react";

Counter.propTypes = {};

function Counter(props) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        console.log(count);
        return setCount(count + 1);
    };
    return (
        <div>
            {count}
            <button onClick={handleClick}>Increase</button>
        </div>
    );
}

export default Counter;
