import React from "react";
import useMagicBox from "../../hooks/useMagicBox";
import "./MagicBox.scss";

MagicBox.propTypes = {};

function MagicBox(props) {
    const color = useMagicBox();
    return (
        <div>
            <h1>Magic Box</h1>
            <div className="magic-box" style={{ backgroundColor: color }}></div>
        </div>
    );
}

export default MagicBox;
