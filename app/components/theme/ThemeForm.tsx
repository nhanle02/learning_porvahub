"use client";

import { useEffect, useState } from "react";
import { ThemeInput } from "../../types/theme";

interface ThemeFormProps {
    inputs: ThemeInput[];
}

interface GenerateResponse {
    success: boolean;
    message: string;
    data: Record<string, string>;
}

type FormData = Record<string, string>;

export default function ThemeForm({
    inputs,
}: ThemeFormProps) {

    const [formData, setFormData] =
        useState<FormData>({});

    const [loading, setLoading] =
        useState(false);

    const [result, setResult] =
        useState<GenerateResponse | null>(null);

    useEffect(() => {
        console.log("Form Changed:");

        console.log(formData);
    }, [formData]);

    const handleChange = (
        fieldId: string,
        value: string
    ) => {
        setFormData({
            ...formData,
            [fieldId]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);

            await new Promise((resolve) =>
                setTimeout(resolve, 2000)
            );

            const response: GenerateResponse = {
                success: true,
                message: "Generate completed",
                data: formData,
            };

            setResult(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl p-6">

            <h1 className="text-2xl font-bold mb-6">
                Theme Form
            </h1>

            {inputs.map((input) => (
                <div
                    key={input.id}
                    className="mb-4"
                >
                    <label
                        className="
                            block
                            mb-2
                            text-sm
                            font-medium
                        "
                    >
                        {input.label}
                    </label>

                    <input
                        type={input.type}
                        placeholder={
                            input.placeholder
                        }
                        value={
                            formData[input.id] || ""
                        }
                        onChange={(e) =>
                            handleChange(
                                input.id,
                                e.target.value
                            )
                        }
                        className="
                            w-full
                            px-4
                            py-2
                            rounded-lg
                            border
                            border-zinc-700
                            bg-zinc-800
                            text-white
                            placeholder:text-zinc-400
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />
                </div>
            ))}

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                    px-4
                    py-2
                    bg-blue-600
                    rounded-lg
                    mt-4
                "
            >
                {loading
                    ? "Generating..."
                    : "Generate"}
            </button>

            <div
                className="
                    mt-8
                    p-4
                    rounded-lg
                "
            >
                <h2 className="font-bold mb-2">
                    Form Data Preview
                </h2>

                <pre>
                    {JSON.stringify(
                        formData,
                        null,
                        2
                    )}
                </pre>
            </div>

            {result && (
                <div
                    className="
                        mt-6
                        p-4
                        rounded-lg
                        bg-green-900
                    "
                >
                    <h2 className="font-bold">
                        API Response
                    </h2>

                    <pre>
                        {JSON.stringify(
                            result,
                            null,
                            2
                        )}
                    </pre>
                </div>
            )}
        </div>
    );
}