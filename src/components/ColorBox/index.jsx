import React, { useState } from "react";
import "./styles.scss";

ColorBox.propTypes = {};

const getRanddomColor = () => {
    const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
    const randomeIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomeIndex];
};

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("box_color") || "deeppink";
        return initColor;
    });
    const handleBoxClick = () => {
        // get random color -> set color
        const newColor = getRanddomColor();
        setColor(newColor);
        localStorage.setItem("box_color", newColor);
    };
    return (
        <div>
            <h1>Color Box</h1>
            <p>Click to change background color</p>
            <div
                onClick={handleBoxClick}
                className="box"
                style={{ backgroundColor: color }}
            ></div>
            <button onClick={() => setColor("black")}>Change to black</button>
            <button onClick={() => setColor("deeppink")}>
                Change to deeppink
            </button>
        </div>
    );
}

export default ColorBox;
