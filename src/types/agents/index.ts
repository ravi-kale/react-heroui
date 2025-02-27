
export interface Agent {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive';
  description: string;
  lastActive: string;
  performance: number;
}
