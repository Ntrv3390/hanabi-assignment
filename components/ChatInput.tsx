"use client"

import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useState } from "react";


const ChatInput = ({onSendMessage} : any) => {
    const [message, setMessage] = useState<string>('');

    const handleInputChange = (e:any) => {
       setMessage(e.target.value);
    };

    const handleSmoothScroll = (e:any, targetId:string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const [isLoading, setIsLoading] = useState<boolean>();

    const handleSendMessage = (e: any) => {
        setIsLoading(true);
        if (message.trim() !== '') {
            onSendMessage(message, true);
                setTimeout(async () => {
                    try {
                        const aiResponse = await getAiResponse(message);
                        onSendMessage(aiResponse, false);
                        setMessage('');
                        setIsLoading(false);
                    } catch (error) {
                        alert("Error occurred: " + error);
                    }
                }, 2000);
        }
        handleSmoothScroll(e, 'input_box');
    };

    const getAiResponse = async (message : string) => {
        try {
            const response = await fetch(`http://hanabi-assignment.vercel.app/api/v1`,{
                method:"POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ message }),
            })
            if(response.ok) {
                const data = await response.json();
                return data.message
            }   
            else {
                throw new Error("Failed to get AI response.")
            }
        } catch (error) {
            alert("Error occured " + error);
        }
    }

    return(<>
            <div id="input_box" className="mx-2 bottom-0 w-full flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:max-auto lg:max-w-2xl xl:max-w-3xl">
                <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                    <div className="relative flex flex-col w-full flex-grow p-4">
                        <div className="relative">
                            <Textarea 
                             onKeyDown={(e : any) => {
                                if(e.key === 'Enter' && !e.shiftKey && !isLoading) {
                                    e.preventDefault();
                                    handleSendMessage(e);
                                }
                             }}
                             rows={1} autoFocus onChange={handleInputChange} value={message} className="resize-none shadow-lg pr-12 text-base py-3" placeholder="Enter your query..."/>
                            <Button disabled={isLoading}
                            className="absolute bottom-4 right-[8px]" aria-label="send message" onClick={handleSendMessage}> <Send className="h-4 w-4"/></Button>
                        </div>
                    </div>
                </div>
            </div>
            </>
       )
}

export default ChatInput;