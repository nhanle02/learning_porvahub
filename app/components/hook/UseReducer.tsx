"use client";
import { useReducer } from "react";

function reducer(state: number, action: string) {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      
      <h1 className="text-6xl font-bold text-blue-600">
        {count}
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch("DECREMENT")}
          className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          -
        </button>

        <button
          onClick={() => dispatch("RESET")}
          className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>

        <button
          onClick={() => dispatch("INCREMENT")}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}