import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import ChatsTab from './tabs/chats-tab';
import { Chat } from "@/types/assistant";

export default function ChatsPage() {
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Conversation History</h1>
            </div>
            
            <Tabs 
                aria-label="Chat categories" 
                className="mb-6"
                defaultSelectedKey="all"
            >
                <Tab key="all" title="All Chats">
                    <ChatsTab onChatSelect={setSelectedChat} />
                </Tab>
                <Tab key="docs" title="Documentation">
                    <ChatsTab 
                        onChatSelect={setSelectedChat}
                        filter={(chat) => chat.title.includes("NEC")} 
                    />
                </Tab>
                <Tab key="projects" title="Projects">
                    <ChatsTab 
                        onChatSelect={setSelectedChat}
                        filter={(chat) => chat.title.includes("Project")} 
                    />
                </Tab>
            </Tabs>
        </div>
    );
}