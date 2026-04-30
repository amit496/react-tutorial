import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setTime((currentTime) => currentTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-12 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.22),_transparent_30%)]" />

      <div className="relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-white/8 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:p-10">
        <div className="mb-8 flex flex-col gap-4 text-left sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Focus Timer
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Time that feels alive
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              A clean practice timer with a brighter card layout, live seconds,
              and simple controls.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
            {isRunning ? "Running now" : "Paused"}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-inner shadow-cyan-500/5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Elapsed Time
            </p>
            <div className="mt-5 flex items-end gap-3">
              <span className="text-6xl font-black tracking-[0.08em] text-white sm:text-7xl">
                {minutes}
              </span>
              <span className="pb-2 text-5xl font-bold text-cyan-300">:</span>
              <span className="text-6xl font-black tracking-[0.08em] text-white sm:text-7xl">
                {seconds}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIsRunning(true)}
                className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start
              </button>
              <button
                type="button"
                onClick={() => setIsRunning(false)}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Pause
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsRunning(false);
                  setTime(0);
                }}
                className="rounded-full border border-rose-400/30 bg-rose-400/10 px-5 py-3 text-sm font-semibold text-rose-200 transition hover:bg-rose-400/20"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[24px] border border-white/10 bg-slate-900/60 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Status
              </p>
              <p className="mt-3 text-2xl font-bold text-white">
                {isRunning ? "In Motion" : "Ready"}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Start the timer to watch the live counter update every second.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-cyan-400/15 to-fuchsia-400/15 p-5 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                Quick Tip
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-100">
                Use this component to practice <code>useEffect</code> with
                cleanup and state updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timer;
