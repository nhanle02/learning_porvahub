export interface Theme {
    id: string;
    name: string;
    createdAt: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export const generateTheme = async (
    input: string
): Promise<ApiResponse<Theme>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                message: "Theme generated successfully",
                data: {
                    id: Math.random().toString(),
                    name: input,
                    createdAt: new Date().toISOString(),
                },
            });
        }, 1500);
    });
};