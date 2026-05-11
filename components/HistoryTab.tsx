'use client';

import React, { useState } from 'react'
import { SquarePen } from 'lucide-react';
import clsx from 'clsx';

const HistoryTab = () => {
    const [history, setHistory] = useState<any[]>([]);
    const [selectedHistory, setSelectedHistory] = useState<any>(null);

    const getHistory = [
        {
            id: 1,
            name: "Chat History one",
            description: "This is the description of the chat history one",
            date: "2026-05-11"
        },
        {
            id: 2,
            name: "Chat History two",
            description: "This is the description of the chat history two",
            date: "2026-05-11"
        },
        {
            id: 3,
            name: "Chat History three",
            description: "This is the description of the chat history three",
            date: "2026-05-11"
        },
        {
            id: 4,
            name: "Chat History four",
            description: "This is the description of the chat history four",
            date: "2026-05-11"
        },
        {
            id: 5,
            name: "Chat History five",
            description: "This is the description of the chat history five",
            date: "2026-05-11"
        },
    ]

  return (
    <div className='flex flex-col h-full w-[18%] shrink-0 gap-4 bg-[#031222] p-2 overflow-y-auto scrollbar-thin'>
        <div className='text-sm text-neutral flex items-center gap-2 font-bold cursor-pointer shrink-0'>
            <div className='p-2'>
                Consultantion History
            </div>
            <SquarePen className='w-4 h-4' />
        </div>
            <div className='w-full border-b border-white/10 shrink-0'/>
        <div className='flex flex-col gap-4 mb-1 overflow-y-auto scrollbar-thin min-h-0'>
            {getHistory.map((item:any) => (
                <div 
                className={clsx('text-sm p-2 text-neutral flex flex-col justify-start items-start gap-2 font-bold cursor-pointer', selectedHistory === item.id && 'bg-neutral-500/10 rounded-lg' )}
                key={item.id}
                onClick={() => setSelectedHistory(item.id)}
                >
                    {item.name}
                    <div className='text-xs text-neutral-500'>
                        {item.description}
                    </div>
                    <div className='text-xs text-neutral-500'>
                        {item.date}
                    </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default HistoryTab;