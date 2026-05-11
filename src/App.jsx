import react, {useState} from "react";
import './App.css'
import {fruits} from "./constants/inventory.js";
import {typeProducts, imageProducts} from "./components/informationProducts/informationProducts.jsx";
import {Counter, CounterUp} from "./components/counter/Counter.jsx";
import headerImage from "./assets/screenshot-logo.png"

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

    // Hier komen de formulier gegevens //
    const [nameValue, setNameValue] = useState('')
    const [surnameValue, setSurnameValue] = useState('')
    const [ageValue, setAgeValue] = useState(0)
    const [zipcodeValue, setZipcodeValue] = useState('')
    const [deliveryValue, setDeliveryValue] = useState('week')
    const [daytimeValue, setDaytimeValue] = useState('')
    const [remarksValue, setRemarksValue] = useState('')
    const [termsValue, setTermsValue] = useState(false)
    const [formState,setFormState] = useState({firstname: "",
    });
    function logClick() {
        console.log(`aantal bestellingen ${setCounter}`)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <img src={headerImage} alt="fruitmand-bord" />
            <div>
                {fruits.map((diffFruits) => {
                    return <article>
                        <p>{imageProducts(diffFruits)}</p>
                        <p>{typeProducts(diffFruits)}</p>
                        <Counter />
                        <CounterUp />
                        <button onClick={countDecrement}>-</button>
                        <span>{counter}</span>
                        <button onClick={countIncrement}>+</button>
                    </article>
                })}
                <section>
                    <button type="reset" id="reset" name="reset" onClick={countReset}>reset</button>
                </section>
            </div>
            <div>
                <form>
                    <label htmlFor="name-field">
                        Voornaam <input
                        type="text"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        name="name"
                        id="name-field"
                        placeholder="voornaam"
                    />
                    </label>
                    <label htmlFor="surName-field">
                        Achternaam <input
                        type="text"
                        name="surname"
                        value={surnameValue}
                        onChange={(e) => setSurnameValue(e.target.value)}
                        id="surName-field"
                        placeholder="achternaam"
                    />
                    </label>
                    <label htmlFor="age">
                        Leeftijd <input
                        type="number"
                        name="age"
                        value={ageValue}
                        onChange={(e) => setAgeValue(e.target.value)}
                        id="age"
                        placeholder="0"
                    />
                    </label>
                    <label htmlFor="zipCode">
                        Postcode <input
                        type="text"
                        name="zipcode"
                        value={zipcodeValue}
                        onChange={(e) => setZipcodeValue(e.target.value)}
                        id="zipCode"
                        placeholder="zipcode"
                    />
                    </label>
                    <label htmlFor="delivery">
                        Bezorgfrequentie <select
                        name="delivery"
                        value={deliveryValue}
                        onChange={(e) => setDeliveryValue(e.target.value)}
                        id="delivery">
                        <option value="week">iedere week</option>
                        <option value="2weekly">om de week</option>
                        <option value="monthly">elke maand</option>
                    </select>
                    </label>
                    <span>
                    <label htmlFor="daytime">
                        <input
                            type="radio"
                            name="daytime"
                            // checked={daytimeValue}
                            // onChange={(e) => setDaytimeValue(e.target.value)}
                            id="daytime"
                        /> Overdag
                    <input
                        type="radio"
                        name="daytime"
                        id="daytime"
                        // checked={daytimeValue}
                        // onChange={(e) => setDaytimeValue(e.target.value)}
                    /> 's Avonds
                </label>
                    </span>
                    <label htmlFor="remarks">
                    <textarea
                        type="text"
                        name="remarks"
                        value={remarksValue}
                        onChange={(e) => setRemarksValue(e.target.value)}
                        id="remarks"
                        placeholder="opmerkingen"
                        rows={4}
                        cols={40}
                    />
                    </label>
                    <label htmlFor="confirmationTerms">
                        Akkoord met de voorwaarden:<input
                        type="checkbox"
                        value={termsValue}
                        onChange={(e) => setTermsValue(e.target.value)}
                        name="terms"
                        id="confirmationTerms"
                    />
                    </label>
                    <button type="button" id="submit" name="submit" onClick={logClick}>verzenden</button>

                </form>
            </div>
        </>
    )
}

export default App
