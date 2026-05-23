'use client';

import React, { useState } from 'react';
import { SendHorizonal } from 'lucide-react';
import { useChatStore } from '@/store/store';

const AIChatBox = () => {
    const [message, setMessage] = useState('');
    const addChatData = useChatStore((state) => state.addChatData);

    const sendMessage = (text: string) => {
        if (!text.trim()) return;

        addChatData({
            id: Date.now(),
            message: text,
            createdAt: new Date().toISOString(),
            chatType: 'sender',
        });
        setMessage('');
    };

    const handleSubmit = (e?: React.SubmitEvent<HTMLFormElement>) => {
        e?.preventDefault();
        sendMessage(message);
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage(e.currentTarget.value);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
                w-full
                max-w-4xl
                min-h-16

                flex
                items-end
                gap-3

                rounded-3xl

                border
                border-[#2A3441]

                bg-[#0B1826]/95
                backdrop-blur-xl

                px-4
                py-3

                shadow-2xl
            "
        >
            <textarea
                placeholder="Ask your symptoms, concerns or questions..."
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="
                    flex-1
                    resize-none
                    bg-transparent

                    text-[#ECECF1]
                    placeholder:text-[#8E8EA0]

                    text-[15px]
                    leading-relaxed

                    outline-none
                    border-none
                    ring-0

                    max-h-40
                    overflow-y-auto

                    py-2
                "
            />

            <button
                type="submit"
                className="
                    flex
                    items-center
                    justify-center

                    min-w-10
                    h-10

                    rounded-full

                    bg-white
                    text-black

                    transition-all
                    duration-200

                    hover:scale-105
                    active:scale-95
                "
            >
                <SendHorizonal className="w-4 h-4" />
            </button>
        </form>
    );
};

export default AIChatBox;