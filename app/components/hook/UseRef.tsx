"use client";

import { useEffect, useRef } from "react";

export default function Page() {
    const pricingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("👉 pricingRef AFTER render:", pricingRef.current);
    }, []);

    return (
        <div className="p-6">
        <button
            className="bg-blue-500 text-white px-3 py-1"
            onClick={() => {
            pricingRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            Go to Pricing
        </button>

        <div style={{ height: "800px" }} />

        <div ref={pricingRef} className="p-6 bg-gray-200">
            <h2>Pricing Section</h2>
        </div>
        </div>
    );
}