import { useState, useEffect } from "react"

function Counter() {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);
    }

    useEffect(() => {
        console.log("Hello, world!");
    })


    useEffect(() => {
        console.log(counter);
    }, [])

    useEffect(() => {
        console.log("counter has been updated " + counter);
    }, [counter])

    return (
        <div className="flex justify-center items-center min-h-screen flex-col gap-4 bg-gray-950 text-white font-bold">
            <button onClick={increase} className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600" >Increase</button>
            <h1 className="text-5xl">{counter}</h1>
            <button onClick={decrease} className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-600" >Decrease</button>
        </div>
    )
}

export default Counter
