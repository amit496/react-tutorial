import React from 'react';

const calculatedSum = (() => {
    let total = 0;
    for (let index = 1; index <= 1000; index++) {
        total += index;
    }
    return total;
})();

function Sum() {
    console.log("Sum Component Rendered");

    return (
        <div className="text-center mt-8 border-t border-gray-700 pt-6">
            <h2 className="text-xl font-semibold text-gray-100 mb-2">Sum from 1 to 1000</h2>
            <p className="text-5xl font-bold text-indigo-400">
                {calculatedSum}
            </p>
        </div>
    );
}

// React.memo ensures this component only re-renders if its props change.
// Since it has no props, it will effectively render only once.
export default React.memo(Sum);
