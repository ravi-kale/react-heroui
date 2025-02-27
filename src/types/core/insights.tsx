export type Insight = {
  id: string;
  name: string;
  folder?: string;
  type: "code" | "documentation";
  status: "active" | "inactive";  
  content?: string;
  createdAt: string;
  score: number;
  processingTime: string;
};
