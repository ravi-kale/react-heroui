import { Icon } from "@iconify/react";
import { Button, Switch } from "@heroui/react";
import DataTable from "@/components/table/datatable";
import { users } from "@/data/users";
import { User } from "@/types/user";
import { useState } from "react";

interface UsersTabProps {
    onUserSelect: (user: User) => void;
    filter?: (user: User) => boolean;
}

export default function UsersTab({ onUserSelect, filter }: UsersTabProps) {
    const [filterValue, setFilterValue] = useState("");
    
    const filteredUsers = filter ? users.filter(filter) : users;

    const columns = [
        {
            key: "name",
            label: "USER",
            render: (user: User) => (
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                        ) : (
                            <Icon icon="mdi:account" className="w-5 h-5 text-gray-500" />
                        )}
                    </div>
                    <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "role",
            label: "ROLE",
            render: (user: User) => (
                <div className="flex items-center gap-2">
                    <Icon 
                        icon={
                            user.role === 'admin' 
                                ? "mdi:shield-account" 
                                : user.role === 'developer' 
                                    ? "mdi:code-braces" 
                                    : "mdi:eye"
                        } 
                        className="w-5 h-5 text-gray-500" 
                    />
                    <span className="capitalize">{user.role}</span>
                </div>
            ),
        },
        {
            key: "status",
            label: "STATUS",
            render: (user: User) => (
                <div className="flex items-center gap-2">
                    <Switch
                        defaultSelected={user.status === 'active'}
                        size="sm"
                        color={user.status === 'active' ? "success" : "danger"}
                        onChange={() => console.log('Toggle user status', user.id)}
                    />
                    <span className={
                        user.status === 'active' 
                            ? "text-green-600" 
                            : "text-red-600"
                    }>
                        {user.status}
                    </span>
                </div>
            ),
        },
        {
            key: "lastActive",
            label: "LAST ACTIVE",
            render: (user: User) => (
                <span className="text-gray-600">{user.lastActive}</span>
            ),
        },
        {
            key: "actions",
            label: "ACTIONS",
            render: (user: User) => (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => onUserSelect(user)}
                    >
                        <Icon icon="mdi:pencil" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => console.log('Reset password', user.id)}
                    >
                        <Icon icon="mdi:key" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        color="danger"
                        onClick={() => console.log('Delete user', user.id)}
                    >
                        <Icon icon="mdi:trash" className="w-4 h-4" />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <DataTable
                columns={columns}
                data={filteredUsers}
                filterValue={filterValue}
                onFilterChange={setFilterValue}
                filterPlaceholder="Search users..."
            />
        </div>
    );
} 