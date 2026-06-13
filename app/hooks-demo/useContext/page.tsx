"use client";

import { ListContext } from "@/app/context/demoContext";
import Child from "@/app/components/hook/UseContext";

export default function Parent() {
  const fruits = ["apple", "banana", "orange"];

  return (
    <ListContext.Provider value={fruits}>
      <div>
        <h1>Parent Component</h1>
        <Child />
      </div>
    </ListContext.Provider>
  );
}