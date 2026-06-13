"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  console.log("🟡 Render Demo");

  // ❌ normal function (luôn tạo lại)
  const fnNormal = () => {
    console.log("❌ Normal function called");
    return count + 1;
  };

  // ✅ useCallback
  const fnMemo = useCallback(() => {
    console.log("✅ useCallback function called");
    return count + 1;
  }, [count]);

  // 🔥 DEBUG: lưu function cũ để so sánh
  const prevFnMemo = useRef(fnMemo);

  useEffect(() => {
    console.log(
      "👉 fnMemo có đổi không?",
      prevFnMemo.current === fnMemo
    );

    prevFnMemo.current = fnMemo;
  });

  return (
    <div className="container mt-4">
      <div className="card p-3 shadow-sm">
        <h3 className="mb-3">useCallback Demo</h3>

        <p className="fs-5">
          Count: <b>{count}</b>
        </p>
        <p className="fs-5">
          Other: <b>{other}</b>
        </p>

        <div className="d-flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setCount(count + 1)}
          >
            Increase Count
          </button>

          <button
            className="bg-gray-600 text-white px-4 py-2 rounded"
            onClick={() => setOther(other + 1)}
          >
            Increase Other
          </button>
        </div>

        <br />
        <hr />
        <br />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => console.log(fnNormal())}
        >
          Run Normal Function
        </button>

        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => console.log(fnMemo())}
        >
          Run useCallback Function
        </button>
      </div>
    </div>
  );
}