export interface ThemeInput {
    id: string;
    label: string;
    type: "text" | "number" | "select";
    value: string;
    options?: string[]; // Only for select type
    placeholder?: string; // Only for text and number types
}

export interface Theme {
    id: string;
    name: string;
    description: string;
    inputs: ThemeInput[];
}