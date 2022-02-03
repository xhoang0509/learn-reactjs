import { useEffect, useRef, useState } from "react";

const randomColor = (currentColor) => {
    const LIST_COLOR = ["red", "green", "blue", "yellow", "deeppink"];
    const newIndex = LIST_COLOR.indexOf(currentColor);
    let randomIndex = Math.ceil(Math.random() * 3);
    while (newIndex === randomIndex) {
        randomIndex = Math.ceil(Math.random() * 3);
    }    
    return LIST_COLOR[randomIndex];
};
function useMagicBox() {
    const [color, setColor] = useState("transparent");
    const colorRef = useRef("transparent");
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        };
    }, []);

    return color;
}

export default useMagicBox;
