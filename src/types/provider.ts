export interface Provider {
    id: string;
    name: string;
    type: string;
    status: 'active' | 'inactive';
    logo: string | null;
    models: string[];
    usage: {
        requests: number;
        cost: number;
    };
    apiConfig: {
        key: string;
        baseUrl: string;
    };
} 