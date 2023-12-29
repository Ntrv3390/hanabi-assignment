"use client"

import ChatInput from "./ChatInput";
import Chats from "./Chats";
import { useState } from "react";

const ChatWrapper = () => {
    const [messages, setMessages] = useState<any>([
        {
            id: 0,
            message: "Hi I am Celestia, how can I help you today?"
        }
    ]);

    const handleSendMessage = async (message: string, isUserMessage: boolean) => {
        const newMessage = isUserMessage ? { id: 1, message: message } : { id: 0, message: message };
        setMessages((prevMessages : any) => [...prevMessages, newMessage]); 
    };

    return (
        <div className="bg-white grainy min-h-[calc(100vh-14vh)] max-h-[calc(100vh-14vh)] shadow-lg overflow-y-auto rounded-lg">
            <div id="chats_wrapper">
                <Chats messages={messages} />
            </div>
            <div id="input_wrapper" className="flex bottom-0 justify-center items-center">
                <ChatInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    )
}

export default ChatWrapper;