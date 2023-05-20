export interface Envelope {
  id: string;
  title: string;
  description: string | null;
  balance: number;
  created_at: number;
  updated_at: number;
}
