
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { chats } from "@/data/chat_history";
import { Chat } from "@/types/assistant";

interface ChatsTabProps {
  onChatSelect: (chat: Chat) => void;
}

export default function ChatsTab({ onChatSelect }: ChatsTabProps) {
    return (
        <div></div>
    )
}
