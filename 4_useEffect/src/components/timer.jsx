import { useState, useEffect } from "react";


function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section className="center">
            <div>
                <h1>{seconds} seconds</h1>
            </div>
        </section>
    )
}

export default Timer;