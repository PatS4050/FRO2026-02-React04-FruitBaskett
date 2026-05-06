
import react from "react";
import './App.css'
import {fruits} from "./constants/inventory.js";

function App() {
    // const [fruit, setfruit] = react.useState ("")
    const [counter, setCounter] = react.useState (0);
    const countIncrement = () => setCounter(prevCount => prevCount + 1);
    const countDecrement = () => setCounter(prevCount => prevCount - 1);

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section>
            <p>{(fruits[0].type)}
            <button onClick={countDecrement}>-</button>
            <span>{counter}</span>
            <button onClick={countIncrement}>+</button>
            </p>
            <p>{(fruits[1].type)}
                <button onClick={countDecrement}>-</button>
                <span>{counter}</span>
                <button onClick={countIncrement}>+</button>
            </p>
        </section>
    </>
  )
}

export default App
