export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'developer' | 'viewer';
    status: 'active' | 'inactive';
    lastActive: string;
    avatar: string | null;
    permissions: string[];
} 