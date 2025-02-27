import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import DataTable from "@/components/table/datatable";
import { chats } from "@/data/chat_history";
import { Chat } from "@/types/assistant";
import { useState } from "react";

interface ChatsTabProps {
    onChatSelect: (chat: Chat) => void;
    filter?: (chat: Chat) => boolean;
}

export default function ChatsTab({ onChatSelect, filter }: ChatsTabProps) {
    const [filterValue, setFilterValue] = useState("");
    
    const filteredChats = filter ? chats.filter(filter) : chats;

    const columns = [
        {
            key: "title",
            label: "CONVERSATION",
            render: (chat: Chat) => (
                <div className="flex items-center gap-4">
                    <Icon 
                        icon={chat.messages.length > 0 ? "mdi:chat" : "mdi:chat-outline"} 
                        className="w-5 h-5 text-gray-500"
                    />
                    <div>
                        <p className="font-medium">{chat.title}</p>
                        <p className="text-sm text-gray-500">
                            {chat.messages.length} messages
                        </p>
                    </div>
                </div>
            ),
        },
        {
            key: "lastActivity",
            label: "LAST ACTIVITY",
            render: (chat: Chat) => (
                <span className="text-gray-600">{chat.lastMessageTime}</span>
            ),
        },
        {
            key: "files",
            label: "FILES",
            render: (chat: Chat) => {
                const lastMessage = chat.messages[chat.messages.length - 1];
                const fileCount = lastMessage?.files?.length || 0;
                return (
                    <div className="flex items-center gap-2">
                        <Icon icon="mdi:file-document-outline" className="w-5 h-5" />
                        <span>{fileCount} files</span>
                    </div>
                );
            },
        },
        {
            key: "changes",
            label: "CHANGES",
            render: (chat: Chat) => {
                const lastMessage = chat.messages[chat.messages.length - 1];
                const changes = lastMessage?.proposedChanges || [];
                const totalAdditions = changes.reduce((sum, change) => sum + change.additions, 0);
                const totalDeletions = changes.reduce((sum, change) => sum + change.deletions, 0);
                
                return (
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-green-600">
                            <Icon icon="mdi:plus" className="w-4 h-4" />
                            <span>{totalAdditions}</span>
                        </div>
                        <div className="flex items-center gap-1 text-red-600">
                            <Icon icon="mdi:minus" className="w-4 h-4" />
                            <span>{totalDeletions}</span>
                        </div>
                    </div>
                );
            },
        },
        {
            key: "actions",
            label: "ACTIONS",
            render: (chat: Chat) => (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => onChatSelect(chat)}
                    >
                        <Icon icon="mdi:eye" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        color="danger"
                        onClick={() => console.log('Delete chat', chat.id)}
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
                data={filteredChats}
                filterValue={filterValue}
                onFilterChange={setFilterValue}
                filterPlaceholder="Search conversations..."
            />
        </div>
    );
}