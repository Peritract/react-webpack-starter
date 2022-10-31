import React, { useState } from 'react';

const ResourceCard = ({ name, description, startingValue }) => {

    const [amount, setAmount] = useState(startingValue); // A value, and a way to change that value
    const [color, setColor] = useState("blue");

    const increaseValue = (val) => {
        setAmount(prev => prev + val);
    }

    const toggleHeaderColor = () => {
        setColor(prev => prev == "blue" ? "gold" : "blue");
    }

    return (
        <div>
            <h2 style={{color: color}} onMouseDown={toggleHeaderColor}>{ name }</h2>
            <em>{ description }</em>
            <p role="figure" style={{color: amount < 1 ? "red" : "green" }}>{ amount }</p>
            <button onClick={() => increaseValue(-10)}>--</button>
            <button onClick={() => increaseValue(-1)}>-</button>
            <button onClick={() => setAmount(0)}>Reset</button>
            <button onClick={() => increaseValue(1)}>+</button>
            <button onClick={() => increaseValue(10)}>++</button>
        </div>
    )

};

export default ResourceCard;

