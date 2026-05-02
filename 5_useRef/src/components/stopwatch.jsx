import { useState, useRef } from "react";


function StopWatch() {

    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    const start = () => {
        if (timerRef.current !== null) return;

        timerRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
    }

    const pause = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    const reset = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
    }

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;



    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
                <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>

                {/* Time Display */}
                <div className="text-5xl font-mono mb-6">
                    {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                    <button onClick={start} className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition">
                        Start
                    </button>

                    <button onClick={pause} className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-xl transition">
                        Pause
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StopWatch;
