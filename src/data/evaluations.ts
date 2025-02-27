import { Evaluation } from "@/types/evaluation";

export const evaluations: Evaluation[] = [
    {
        id: "1",
        name: "GPT-4 Performance Benchmark",
        type: "benchmark",
        model: "GPT-4",
        status: "completed",
        metrics: {
            accuracy: 95,
            latency: 250,
            tokenCount: 15000,
            cost: 2.50
        },
        timestamp: "2024-03-20T14:30:00Z",
        dataset: "benchmark-suite-v1",
        results: {
            passed: 95,
            failed: 5,
            total: 100
        }
    },
    {
        id: "2",
        name: "Claude Code Generation Test",
        type: "test",
        model: "Claude 3 Opus",
        status: "running",
        metrics: {
            accuracy: 88,
            latency: 180,
            tokenCount: 12000,
            cost: 1.80
        },
        timestamp: "2024-03-20T15:00:00Z",
        dataset: "code-gen-test-v2",
        results: {
            passed: 44,
            failed: 6,
            total: 50
        }
    },
    {
        id: "3",
        name: "Mistral Language Understanding",
        type: "benchmark",
        model: "Mistral Large",
        status: "failed",
        metrics: {
            accuracy: 0,
            latency: 0,
            tokenCount: 0,
            cost: 0
        },
        timestamp: "2024-03-20T13:45:00Z",
        dataset: "language-understanding-v1",
        results: {
            passed: 0,
            failed: 1,
            total: 100
        }
    },
    {
        id: "4",
        name: "Multilingual Response Test",
        type: "test",
        model: "GPT-4",
        status: "completed",
        metrics: {
            accuracy: 92,
            latency: 300,
            tokenCount: 20000,
            cost: 3.20
        },
        timestamp: "2024-03-20T12:15:00Z",
        dataset: "multilingual-test-v1",
        results: {
            passed: 92,
            failed: 8,
            total: 100
        }
    }
]; 