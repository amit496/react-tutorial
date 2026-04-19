import { useState } from "react";

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

    return (
        <section className="center">
            <div>
                <button onClick={increase}>+</button>

                <p>{counter}</p>

                <button
                    onClick={decrease}
                    disabled={counter === 0}
                >
                    -
                </button>
            </div>
        </section>
    )
}

export default Counter;