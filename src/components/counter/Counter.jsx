import React, {useState} from "react";
import "./Counter.css";

//Counter.jsx//
export function  Counter() {

    const [counter, setCounter] = useState(0);
    const countIncrement = () => {
        setCounter(prevCount => prevCount + 1)
    };
    const countDecrement = () => {
        if (counter > 0) {
            setCounter(prevCount => prevCount - 1)
        }
    };
    const countReset = () => (setCounter(0))

// function Counter() {
        return (
            //     <button onClick={countDecrement}>-</button>
            <span>{counter}</span>
            // <button onClick={countIncrement}>+</button>
        )
    }

export function  CounterUp() {

    const [counter, setCounter] = useState(0);
    const countIncrement = () => {
        setCounter(prevCount => prevCount + 1)
    };
    const countDecrement = () => {
        if (counter > 0) {
            setCounter(prevCount => prevCount - 1)
        }
    };
    const countReset = () => (setCounter(0))

// function Counter() {
    return (
        //     <button onClick={countDecrement}>-</button>
        // <span>{counter}</span>
        <button onClick={countIncrement}>+</button>
    )
}
//     return (
//         <span>testCounter</span>
//     );
// }

