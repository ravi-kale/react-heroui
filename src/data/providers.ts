import { Provider } from "@/types/provider";

export const providers: Provider[] = [
    {
        id: "1",
        name: "OpenAI",
        type: "General Purpose",
        status: "active",
        logo: null,
        models: ["GPT-4", "GPT-3.5-turbo", "DALL-E 3"],
        usage: {
            requests: 50000,
            cost: 1500.00
        },
        apiConfig: {
            key: "sk-***",
            baseUrl: "https://api.openai.com/v1"
        }
    },
    {
        id: "2",
        name: "Anthropic",
        type: "General Purpose",
        status: "active",
        logo: null,
        models: ["Claude 3 Opus", "Claude 3 Sonnet", "Claude 2.1"],
        usage: {
            requests: 30000,
            cost: 1200.00
        },
        apiConfig: {
            key: "sk-***",
            baseUrl: "https://api.anthropic.com/v1"
        }
    },
    {
        id: "3",
        name: "Cohere",
        type: "Specialized",
        status: "inactive",
        logo: null,
        models: ["Command", "Generate"],
        usage: {
            requests: 10000,
            cost: 300.00
        },
        apiConfig: {
            key: "***",
            baseUrl: "https://api.cohere.ai/v1"
        }
    },
    {
        id: "4",
        name: "Mistral AI",
        type: "General Purpose",
        status: "active",
        logo: null,
        models: ["Mistral Large", "Mistral Medium", "Mistral Small"],
        usage: {
            requests: 25000,
            cost: 800.00
        },
        apiConfig: {
            key: "***",
            baseUrl: "https://api.mistral.ai/v1"
        }
    }
]; 