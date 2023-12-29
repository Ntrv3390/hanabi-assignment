"use client"

import { cn } from "@/lib/utils";

const Chats = ({ messages } : any) => {
    return (<>
    {messages != null && messages.map((chat : any) => (
    <div className={cn('flex p-4 items-end', {
        "justify-end" : chat.id == 1,
    })}>
        <div className={cn("flex flex-col space-y-2 text-base max-w-md mx-2",
            {
                "order-1 items-end": chat.id == 1,
                "order-2 items-start" : chat.id == 0,
            }
        )}>
            <div className={cn("px-2 py-2 rounded-lg inline-block", {
                "bg-blue-600 text-white" : chat.id == 1,
                "bg-gray-800 text-gray-900" : chat.id == 0
            })}>
                    <div className={cn("text-xs select-none font-semibold w-full text-justify",
                        {
                            "text-white": chat.id == 0,
                            "text-zinc-100" : chat.id == 1,
                        }
                    )}>
                        <p>{chat.message}</p>
                    </div>
            </div>
            </div>
    </div>
    ))}
    </>)
}

export default Chats;