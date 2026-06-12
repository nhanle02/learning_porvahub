"use client";

import { useState } from "react";
import { generateTheme, ApiResponse, Theme } from "../../lib/api/themeApi";

type FormState = {
    name: string;
};

export default function ThemeGeneratorWithAPI() {
    const [form, setForm] = useState<FormState>({
        name: "",
    });

    const [loading, setLoading] = useState(false);

    const [result, setResult] =
        useState<ApiResponse<Theme> | null>(null);

    const [error, setError] = useState<string | null>(null);

    // async/await flow
    const handleGenerate = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await generateTheme(form.name);

            setResult(response);
        } catch (err) {
            setError("Generate failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-md">
            <h1 className="text-xl font-bold mb-4">
                Theme Generator (API version)
            </h1>

            <input
                className="border p-2 w-full mb-3"
                placeholder="Enter theme name"
                value={form.name}
                onChange={(e) =>
                    setForm({ name: e.target.value })
                }
            />

            <button
                onClick={handleGenerate}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                {loading ? "Generating..." : "Generate"}
            </button>

            {/* ERROR */}
            {error && (
                <p className="text-red-500 mt-3">
                    {error}
                </p>
            )}

            {/* RESULT */}
            {result && (
                <div className="mt-4 p-3 border rounded">
                    <h2 className="font-bold">
                        API Response
                    </h2>

                    <pre>
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}