
"use client";

import { useState, useTransition } from "react";

const users = [
  "Nguyen Van A",
  "Nguyen Van B",
  "Tran Thi C",
  "Le Van D",
  "Pham Thi E",
  "Hoang Van F",
  "Vo Thi G",
  "Dang Van H",
  "Bui Thi I",
  "Do Van K",
  "Nguyen Van L",
  "Tran Van M",
  "Le Thi N",
  "Pham Van O",
  "Vo Van P",
  "Dang Thi Q",
  "Bui Van R",
  "Do Thi S",
  "Nguyen Van T",
  "Tran Thi U",
];

export default function SearchDemo() {
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState<string[]>(users);
        
    const [isPending, startTransition] = useTransition();
    const handleSearch = () => {

    startTransition(() => {

        const filtered = users.filter((user) =>
          user
            .toLowerCase()
            .includes(keyword.toLowerCase())
        );

        setResult(filtered);

        });

    };

    return (
        <div className="p-5">

            <h2 className="mb-3">
                useTransition Demo
            </h2>

            <input
                className="border p-2 mr-2"
                value={keyword}
                onChange={(e) =>
                setKeyword(e.target.value)
                }
                placeholder="Search..."
            />

            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-3 py-2"
            >
                Search
            </button>

            <hr className="my-4" />

            {isPending && (
                <p>🔄 Searching...</p>
            )}

            <ul>
                {result.map((user) => (
                <li key={user}>
                    {user}
                </li>
                ))}
            </ul>

        </div>
    );
}