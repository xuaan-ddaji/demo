import React, { useState } from 'react';
import './styles.scss';

function getRandomColor() {
    const colorList = ['red', 'green', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 3);
    return colorList[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color') || 'deeppink';
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('color', newColor);
    }

    return (
        <div
            className='color-box'
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;