import { useState, useEffect } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    useEffect(() => {
        document.title = `Counter: ${counter}`;
    });

    useEffect(() => {
        console.log("Hello from the second useEffect");
    }, []);

    useEffect(() => {
        console.log("Hello from the third useEffect");
    }, [counter]);

    return (
        <section className="center">
            <div>
                <button onClick={increase}>INCREAMENT</button>

                <p>{counter}</p>

                <button onClick={decrease} disabled={counter === 0} >
                    DECREAMENT
                </button>
            </div>
        </section>
    )
}

export default Counter;