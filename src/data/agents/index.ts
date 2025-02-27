export interface Agent {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'inactive';
  description: string;
  lastActive: string;
  performance: number;
}

export const agents: Agent[] = [
  {
    id: "ac-001",
    name: "AutoCoder",
    type: "Code Assistant",
    status: "active",
    description: "AI agent specialized in code generation and review",
    lastActive: "2024-03-20T10:30:00",
    performance: 95,
  },
  {
    id: "cc-002",
    name: "CallCenter AI",
    type: "Customer Service",
    status: "active",
    description: "Handles customer inquiries and support tickets",
    lastActive: "2024-03-20T11:45:00",
    performance: 88,
  },
  {
    id: "da-003",
    name: "DataAnalyst",
    type: "Data Processing",
    status: "inactive",
    description: "Processes and analyzes large datasets",
    lastActive: "2024-03-19T15:20:00",
    performance: 92,
  },
  {
    id: "ct-004",
    name: "CodeTester",
    type: "QA Assistant",
    status: "active",
    description: "Automated testing and quality assurance",
    lastActive: "2024-03-20T09:15:00",
    performance: 90,
  },
];