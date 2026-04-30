import { useState } from 'react';
import Sum from './sum';
import BigSum from './bigsum';
import NumberDisplay from './NumberDisplay'; // Naye component ko import kiya


function Counter() {

    console.log("Counter Render");
    

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(100);

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleNumberIncrement = () => {
        setNumber(prevNumber => prevNumber + 100);
    };



    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-2">
                        Counter
                    </h1>
                    <p className="text-gray-400 mb-8">A simple and elegant counter.</p>
                </div>

                <div className="text-center my-10">
                    <span className="text-7xl sm:text-8xl font-bold text-white tracking-wider">
                        {count}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={handleDecrement }
                        className="py-4 bg-gray-700 rounded-lg text-xl font-semibold text-gray-100 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-colors duration-300"
                    >
                        Decrement
                    </button>
                    <button
                        onClick={ handleIncrement}
                        className="py-4 bg-indigo-600 rounded-lg text-xl font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-colors duration-300"
                    >
                        Increment
                    </button>
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={handleReset}
                        disabled={count === 0}
                        className="text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                        Reset
                    </button>
                </div>

                <div className="text-center mt-8">
                    <Sum />
                </div>

                <div className="text-center mt-8">
                    <BigSum  number={number}/>
                    
                    {/* Naye component ko yahan use kiya gaya hai */}
                    <NumberDisplay number={number} />

                    <button 
                        onClick={handleNumberIncrement}
                        className="mt-4 px-4 py-2 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                    >
                        Add 100 to Sum Number
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Counter;
