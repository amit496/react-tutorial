import React from 'react';

// Yeh component React.memo se wrap kiya gaya hai.
// Yeh tabhi re-render hoga jab iska `number` prop badlega.
function NumberDisplay({ number }) {
  console.log(`Rendering NumberDisplay for number: ${number}`);

  return (
    <div className="text-center mt-8 border-t border-gray-700 pt-6">
      <h2 className="text-xl font-semibold text-gray-100 mb-2">
        Current Number
      </h2>
      <p className="text-sm text-gray-400">(Wrapped with React.memo)</p>
      <p className="text-5xl font-bold text-teal-400 mt-2">
        {number}
      </p>
    </div>
  );
}

// React.memo ka istemal karke re-renders ko roka ja raha hai jab props same ho
export default React.memo(NumberDisplay);
