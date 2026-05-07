import React, {useState} from "react";
import "./components/counter/Counter.css";

//Counter.jsx//
function Counter() {

const [counter, setCounter] = useState(0);
const countIncrement = () => {
    setCounter(prevCount => prevCount + 1)
};
const countDecrement = () => {
    if (counter > 0) {
        setCounter(prevCount => prevCount - 1)
    }
    // const countDecrement = {counter > 0 ? () => {setCounter(prevCount => prevCount - 1)} : 0};
};

// function Counter() {
    return (
        <button onClick={countDecrement}>-</button>
    <p>{counter}</p>
    <button onClick={countIncrement}>+</button>
)}

export default Counter;