import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter+1);
};
const decrease = () => {
    setCounter(counter-1);
  };
const jump5 = () => {
    setCounter(counter+5);
  };
  return (
    <div className="h-screen w-full bg-gray-900">
      <div className="flex flex-col items-center gap-6 p-10">
        <div className="text-8xl font-bold p-5 bg-gray-700 text-white rounded-2xl border shadow-xl w-48 text-center">
          {counter}
        </div>

        <div className="flex gap-6">
          <button onClick={decrease} className="px-9 py-3 bg-red-600 text-white rounded-xl text-2xl font-semibold hover:bg-red-700 active:scale-95 transition">
            –
          </button>

          <button onClick={increase} className="px-9 py-3 bg-green-600 text-white rounded-xl text-2xl font-semibold hover:bg-green-700 active:scale-95 transition">
            +
          </button>
          <button onClick={jump5} className="px-9 py-3 bg-green-600 text-white rounded-xl text-2xl font-semibold hover:bg-green-700 active:scale-95 transition">
            +5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
