import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import UsersTab from './tabs/users-tab';
import { User } from "@/types/user";

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
      </div>
      
      <Tabs 
        aria-label="User categories" 
        className="mb-6"
        defaultSelectedKey="all"
      >
        <Tab key="all" title="All Users">
          <UsersTab onUserSelect={setSelectedUser} />
        </Tab>
        <Tab key="admins" title="Administrators">
          <UsersTab 
            onUserSelect={setSelectedUser}
            filter={(user) => user.role === 'admin'} 
          />
        </Tab>
        <Tab key="developers" title="Developers">
          <UsersTab 
            onUserSelect={setSelectedUser}
            filter={(user) => user.role === 'developer'} 
          />
        </Tab>
        <Tab key="viewers" title="Viewers">
          <UsersTab 
            onUserSelect={setSelectedUser}
            filter={(user) => user.role === 'viewer'} 
          />
        </Tab>
      </Tabs>
    </div>
  );
} 