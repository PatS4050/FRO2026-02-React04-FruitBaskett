import react, {useState} from "react";
import './App.css'
import {fruits} from "./constants/inventory.js";

function App() {
    // const [fruit, setfruit] = react.useState ("")
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
    // const countDecrement = {counter > 0 ? () => {setCounter(prevCount => prevCount - 1)} : 0};

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <article>
                <p>&#127827;{(fruits[0].type)}
                    <button onClick={countDecrement}>-</button>
                    <span>{counter}</span>
                    <button onClick={countIncrement}>+</button>
                </p>
            </article>
            <article>
                <p>&#x1F34C;{(fruits[1].type)}
                </p>
            </article>
            <srticle>
                <p>&#x1F34F;{(fruits[2].type)}</p>
            </srticle>
            <article>
                <p>&#x1F95D;{(fruits[3].type)}</p>
            </article>
            <section>
                <button type="reset" id="reset" name="reset" onClick={countReset}>reset</button>
            </section>
            <form>
                <div>
                    <label htmlFor="name-field">
                        Voornaam:<input
                        type="text"
                        name="name"
                        id="name-field"
                        placeholder="voornaam"
                    />
                    </label>
                    <label htmlFor="surName-field">
                        Achternaam:<input
                        type="text"
                        name="surname"
                        id="surName-field"
                        placeholder="achternaam"
                    />
                    </label>
                    <label htmlFor="age">
                        Leeftijd:<input
                        type="text"
                        name="age"
                        id="age"
                        placeholder="0"
                    />
                    </label>
                    <label htmlFor="zipCode">
                        Postcode:<input
                        type="text"
                        name="zipcode"
                        id="zipCode"
                        placeholder="zipcode"
                    />
                    </label>
                    <label htmlFor="delivery">
                        Bezorgfrequentie:<select
                        name="delivery"
                        id="delivery">
                        <option value="week">iedere week</option>
                        <option value="2weekly">om de week</option>
                        <option value="monthly">elke maand</option>
                    </select>
                    </label>
                    <label htmlFor="daytime">
                        <input
                        type="radio"
                        name="daytime"
                        id="daytime"
                        value="day"
                    />Overdag
                    </label><label htmlFor="daytime">
                    <input
                        type="radio"
                        name="daytime"
                        id="daytime"
                        value="evening"
                    />'s Avonds
                </label>
                    <label htmlFor="remarks">
                        Opmerking:<input
                        type="text-box"
                        name="remarks"
                        id="remarks"
                        placeholder="opmerkingen"
                    />
                    </label>



                </div>
            </form>
        </>
    )
}

export default App
