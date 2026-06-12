export type GenerationStatus = "processing" | "completed" | "failed";

export interface GenerationHistory  {
    id: string;
    user_id?: string;
    guest_session_id?: string;
    type: string;
    status: GenerationStatus;
    theme_id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input_json: Record<string, any>;
    output_url?: string;
    credits_used: number;
    created_at: string;  
}