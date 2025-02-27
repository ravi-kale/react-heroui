import { User } from "@/types/user";

export const users: User[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        role: "admin",
        status: "active",
        lastActive: "2024-03-20 14:30",
        avatar: null,
        permissions: ["manage_users", "manage_settings", "view_analytics"]
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "developer",
        status: "active",
        lastActive: "2024-03-20 13:15",
        avatar: null,
        permissions: ["manage_code", "view_analytics"]
    },
    {
        id: "3",
        name: "Bob Wilson",
        email: "bob.wilson@example.com",
        role: "viewer",
        status: "inactive",
        lastActive: "2024-03-19 09:45",
        avatar: null,
        permissions: ["view_documents"]
    },
    {
        id: "4",
        name: "Alice Brown",
        email: "alice.brown@example.com",
        role: "developer",
        status: "active",
        lastActive: "2024-03-20 11:20",
        avatar: null,
        permissions: ["manage_code", "view_analytics"]
    },
    {
        id: "5",
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        role: "admin",
        status: "active",
        lastActive: "2024-03-20 15:00",
        avatar: null,
        permissions: ["manage_users", "manage_settings", "view_analytics"]
    }
]; 