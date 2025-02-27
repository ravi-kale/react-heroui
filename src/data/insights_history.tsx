import { Insight } from "@/types/core/insights";

export const insightsHistory: Insight[] = [
    {
        id: "1",
        name: "Code Quality Analysis",
        type: "code",
        status: "active",
        createdAt: "2024-03-20",
        score: 95,
        processingTime: "2.3s",
        content: "Code quality analysis results...",
        folder: "/code-analysis"
    },
    {
        id: "2",
        name: "API Documentation",
        type: "documentation",
        status: "active",
        createdAt: "2024-03-19",
        score: 88,
        processingTime: "1.5s",
        content: "API documentation content...",
        folder: "/docs/api"
    },
    {
        id: "3",
        name: "Security Scan Results",
        type: "code",
        status: "active",
        createdAt: "2024-03-18",
        score: 92,
        processingTime: "3.1s",
        content: "Security scan findings...",
        folder: "/security"
    },
    {
        id: "4",
        name: "User Guide",
        type: "documentation",
        status: "inactive",
        createdAt: "2024-03-17",
        score: 85,
        processingTime: "1.8s",
        content: "User guide content...",
        folder: "/docs/user"
    }
];