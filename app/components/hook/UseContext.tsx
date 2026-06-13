"use client";

import { useContext } from "react";
import { ListContext } from "@/app/context/demoContext";


export default function Child() {
  const list = useContext(ListContext);

  return (
    <div>
      <h2>Child Component</h2>

      {list?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}