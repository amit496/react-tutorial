import { useState, useEffect } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 text-center w-96 transition-all duration-300 hover:scale-105">

                <h1 className="text-2xl font-semibold text-white mb-2">
                    Stopwatch
                </h1>

                <div className="flex justify-center mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>

                {/* Time Display */}
                <div className="text-5xl font-mono text-green-400 mb-8 tracking-widest drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]">
                    {String(Math.floor(time / 60)).padStart(2, "0")}:
                    {String(time % 60).padStart(2, "0")}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4">

                    <button
                        onClick={start}
                        className="px-5 py-2 bg-green-500/90 hover:bg-green-600 active:scale-95 text-white rounded-xl shadow-lg transition-all duration-200">
                        Start
                    </button>

                    <button
                        onClick={pause}
                        className="px-5 py-2 bg-yellow-400/90 hover:bg-yellow-500 active:scale-95 text-black rounded-xl shadow-lg transition-all duration-200">
                        Pause
                    </button>

                    <button
                        onClick={reset}
                        className="px-5 py-2 bg-red-500/90 hover:bg-red-600 active:scale-95 text-white rounded-xl shadow-lg transition-all duration-200">
                        Reset
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Stopwatch;