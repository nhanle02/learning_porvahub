export interface GuestSession {
  id: string;
  session_id: string;
  fingerprint_id: string;
  ip_address: string;
  generation_count: number;
  created_at: string;
}