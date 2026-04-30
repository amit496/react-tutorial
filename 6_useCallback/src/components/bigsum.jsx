import React, { useMemo } from "react";

function BigSum({ number }) {

    const calculatedSum = useMemo(() => {
        console.log(`Performing heavy calculation for number: ${number}...`);
        let total = 0;

        for (let index = 1; index <= parseInt(number, 10); index++) {
            total += index;
        }
        return total;
    }, [number]);


    return (
        <div className="text-center mt-8 border-t border-gray-700 pt-6">
            {/* Title ko bhi dynamic banaya gaya hai */}
            <h2 className="text-xl font-semibold text-gray-100 mb-2">Sum from 1 to {number}</h2>
            <p className="text-sm text-gray-400">(Calculated with useMemo)</p>
            <p className="text-5xl font-bold text-indigo-400 mt-2">
                {/* Badi sankhyon ko padhne mein aasan banane ke liye toLocaleString() ka istemal */}
                {calculatedSum.toLocaleString()}
            </p>
        </div>
    );
}

export default BigSum;
