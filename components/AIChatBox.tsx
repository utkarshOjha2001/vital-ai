'use client';
import React from 'react'
import { SendHorizonal } from 'lucide-react';

const AIChatBox = ({chatData}:{chatData:any}) => {
    const handleSubmit = (e?: React.SubmitEvent<HTMLFormElement>) => {
        e?.preventDefault();
        alert('submit');
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e?.key === 'Enter' && !e?.shiftKey) {
            e?.preventDefault();
            handleSubmit();
        }
    }
    return (
        <form onSubmit={handleSubmit}
            className='absolute bottom-20 right-[9%] z-50  flex h-20 rounded-xl w-[50%] gap-4 bg-[#0d1c2d] p-2 overflow-y-auto scrollbar-thin'
        >
            <textarea
                placeholder="Ask anything..."
                onKeyDown={handleKeyDown}
                className="
    w-full
    h-full

    resize-none
    outline-none
    border-none
    ring-0
    focus:outline-none
    focus:ring-0
    focus:border-none

    bg-transparent

    text-[#E4E4E7]
    placeholder:text-[#71717A]

    text-md
    font-normal

    px-2
    py-2

    scrollbar-thin
  "
            />
            <button
                type='submit'
                className="
    cursor-pointer
    flex
    items-center
    justify-center

    rounded-xl

    px-2
    min-w-14
    h-[80%]
    bg-linear-to-br
    from-[#7B6DFF]
    via-[#8B5CF6]
    to-[#5D5FEF]

    shadow-[0_0_20px_rgba(123,109,255,0.45)]

    transition-all
    duration-300

    hover:scale-100
    hover:shadow-[0_0_28px_rgba(123,109,255,0.7)]

    active:scale-95
  "
            >
                <SendHorizonal className="w-5 h-5 text-white" />
            </button>
        </form>
    );
};

export default AIChatBox;