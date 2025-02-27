export interface Evaluation {
    id: string;
    name: string;
    type: 'benchmark' | 'test';
    model: string;
    status: 'completed' | 'running' | 'failed';
    metrics: {
        accuracy: number;
        latency: number;
        tokenCount: number;
        cost: number;
    };
    timestamp: string;
    dataset: string;
    results: {
        passed: number;
        failed: number;
        total: number;
    };
} 