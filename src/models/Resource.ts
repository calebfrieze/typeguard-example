export interface Note {
  subject: string;
  message: string;
}
export interface Resource {
  name: string;
  available: boolean;
  count: number;
  owner?: string;
  notes?: Note[];
}
