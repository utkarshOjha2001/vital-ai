'use client';

import React, { useState } from 'react';
import { SquarePen } from 'lucide-react';
import { dateAnalyzer } from '@/utils/helpers';
import clsx from 'clsx';

import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
});

const HistoryTab = () => {

    const [history, setHistory] = useState<any[]>([]);
    const [selectedHistory, setSelectedHistory] = useState<any>(null);

    const getHistory = [
        {
            id: 1,
            name: "Chat History one",
            description: "This is the description of the chat history one",
            date: "2026-05-12"
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
            date: "2026-05-9"
        },
        {
            id: 4,
            name: "Chat History four",
            description: "This is the description of the chat history four",
            date: "2026-05-8"
        },
        {
            id: 5,
            name: "Chat History five",
            description: "This is the description of the chat history five",
            date: "2026-05-7"
        },
    ];

    return (
        <div
            className={clsx(
                inter.className,

                `
                flex
                flex-col

                h-full
                w-[18%]
                shrink-0

                gap-4

                bg-[#031222]

                p-2

                overflow-y-auto
                scrollbar-thin
                `
            )}
        >

            <div
                className='
                    text-sm
                    text-neutral

                    flex
                    items-center
                    gap-2

                    font-bold

                    cursor-pointer
                    shrink-0
                '
            >
                <div className='p-2'>
                    Consultation History
                </div>

                <SquarePen className='w-4 h-4' />
            </div>

            <div className='w-full border-b border-white/10 shrink-0' />

            <div
                className='
                    flex
                    flex-col
                    gap-4

                    mb-1

                    overflow-y-auto
                    scrollbar-thin

                    min-h-0
                '
            >
                {
                    getHistory.map((item: any) => (

                        <div
                            key={item.id}

                            onClick={() =>
                                setSelectedHistory(item.id)
                            }

                            className={clsx(

                                `
                                text-sm

                                p-3

                                text-neutral

                                flex
                                flex-col

                                justify-start
                                items-start

                                gap-2

                                tracking-wide

                                cursor-pointer

                                rounded-xl

                                transition-all
                                duration-200
                                `,

                                selectedHistory === item.id &&
                                `
                                bg-white/5
                                backdrop-blur-xl
                                border
                                border-white/10
                                `
                            )}
                        >

                            <div className='font-semibold'>
                                {item.name}
                            </div>

                            <div
                                className='
                                    text-xs
                                    font-medium

                                    tracking-wide

                                    text-neutral-300
                                '
                            >
                                {item.description}
                            </div>

                            <div
                                className='
                                    text-[11px]
                                    text-neutral-400
                                    tracking-widerst
                                '
                            >
                                {dateAnalyzer(new Date(item.date))}
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HistoryTab;