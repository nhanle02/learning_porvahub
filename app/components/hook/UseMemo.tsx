"use client";

import { useMemo, useState } from "react";

export default function UseMemoDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const expensiveValue = useMemo(() => {
        console.log("Đang tính toán...");

        return count * 1000;
    }, [count]);
    // nếu truyền [] thì chỉ tính toán 1 lần khi component mount, nếu truyền [count] thì chỉ tính toán lại khi count thay đổi   

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">
                useMemo Demo
            </h2>

            <div className="space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    placeholder="Nhập tên..."
                    className="border p-2 rounded"
                />

                <p>Name: {name}</p>

                <p>Count: {count}</p>

                <p>
                    Expensive Value: {expensiveValue}
                </p>

                <button
                    onClick={() =>
                        setCount(count + 1)
                    }
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Tăng Count
                </button>
            </div>
        </div>
    );
}