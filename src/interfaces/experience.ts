export interface Experience {
  id: string;
  jobTitle: string;
  place: string;
  initialDate: string;
  description: string[];
  tags: string[];
  redirectUrl?: string;
  redirectLabel?: string;
  finalDate?: string;
}
