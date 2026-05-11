'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { TypingText } from '@/utils/helpers';

const ChatLayout = ({}:{}) => {
    const [currentChat, setCurrentChat] = useState([]);

    const chat = {
        status: 'success',
        chatId: 101,
        data: [
            {
                id: 1,
                chatType: 'sender',
                message: "Can you explain the lipid panel results from the report I just uploaded? I'm specifically concerned about my cholesterol levels and what they mean for my cardiovascular risk." +
                
                "I have analyzed your recent laboratory report dated October 24, 2024. Your overall metabolic profile is stable, but there are specific markers in your lipid panel that require attention."
            },
            {
                id: 2,
                chatType: 'receiver',
                message: "I have analyzed your recent laboratory report dated October 24, 2024. Your overall metabolic profile is stable, but there are specific markers in your lipid panel that require attention."
            },
            {
                id: 3,
                chatType: 'sender',
                message: 'Hii userm how are you?'
            },
            {
                id: 4,
                chatType: 'sender',
                message: "Can you explain the lipid panel results from the report I just uploaded? I'm specifically concerned about my cholesterol levels and what they mean for my cardiovascular risk." +
                
                "I have analyzed your recent laboratory report dated October 24, 2024. Your overall metabolic profile is stable, but there are specific markers in your lipid panel that require attention."
            },
            {
                id: 5,
                chatType: 'receiver',
                message: "I have analyzed your recent laboratory report dated October 24, 2024. Your overall metabolic profile is stable, but there are specific markers in your lipid panel that require attention."
            },
            {
                id: 6,
                chatType: 'sender',
                message: 'Hii userm how are you?'
            },
            {
                id: 7,
                chatType: 'sender',
                message: "Can you explain the lipid panel results from the report I just uploaded? I'm specifically concerned about my cholesterol levels and what they mean for my cardiovascular risk." +
                
                "I have analyzed your recent laboratory report dated October 24, 2024. Your overall metabolic profile is stable, but there are specific markers in your lipid panel that require attention."
            },
            {
                id: 8,
                chatType: 'receiver',
                message: "I have analyzed your recent laboratory report dated October 24, 2024. Your overall metabolic profile is stable, but there are specific markers in your lipid panel that require attention."
            },
            {
                id: 9,
                chatType: 'sender',
                message: 'Hii userm how are you?'
            }
        ]
    };

    return (
        <div className='text-sm tracking-wider text-neutral leading-loose flex flex-col gap-5'>
            {
                chat?.data.map((item: any) => {
                    return (
                        <div
                            key={item.id}
                            className={clsx(
                                'flex w-full',
                                item.chatType === 'sender'
                                    ? 'justify-end'
                                    : 'justify-start'
                            )}
                        >
                            <div
                                className={clsx(
                                    'p-2 rounded-lg w-fit max-w-[90%]',
                                    item.chatType === 'sender'
                                        ? 'bg-[#263141]'
                                        : 'bg-[#0B1825]'
                                )}
                            >
                                {item.chatType === 'receiver'?item?.message:item?.message}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ChatLayout;