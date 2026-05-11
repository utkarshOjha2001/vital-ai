'use client';

import clsx from 'clsx';

const ChatLayout = () => {

    let chat = {
        status: 'success',
        chatId: 101,
        data: [
            {
                id: 1,
                chatType: 'sender',
                message:
                    "Can you explain the lipid panel results from the report I just uploaded? I'm specifically concerned about my cholesterol levels and what they mean for my cardiovascular risk."
            },
            {
                id: 2,
                chatType: 'receiver',
                message:
                    "I reviewed your lipid panel report. Your LDL cholesterol appears elevated, which may increase long-term cardiovascular risk. However, your HDL levels are within a healthy range, which is positive."
            },
            {
                id: 3,
                chatType: 'sender',
                message:
                    "Should I be worried about this immediately?"
            },
            {
                id: 4,
                chatType: 'receiver',
                message:
                    "Not necessarily immediately, but it would be wise to discuss lifestyle adjustments and follow-up testing with your physician."
            },

        ]
    };
    // chat.data =[]
    return (
        <div
            className='
                w-full
                max-w-4xl
                mx-auto

                flex
                flex-col
                gap-8

                pt-8
                pb-40
            '
        >
            {
                chat?.data.map((item: any) => {

                    const isSender =
                        item.chatType === 'sender';

                    return (
                        <div
                            key={item.id}
                            className={clsx(
                                'w-full flex',
                                isSender
                                    ? 'justify-end'
                                    : 'justify-start'
                            )}
                        >
                            <div
                                className={clsx(

                                    `
                                    max-w-[85%]
                                    px-5
                                    py-4

                                    rounded-3xl

                                    text-[15px]
                                    leading-relaxed

                                    whitespace-pre-wrap

                                    shadow-sm
                                    `,

                                    isSender
                                        ? `
                                            bg-[#1F2937]
                                            text-white

                                            rounded-br-md
                                          `
                                        : `
                                            bg-[#111827]
                                            border
                                            border-[#2A3441]

                                            text-[#ECECF1]

                                            rounded-bl-md
                                          `
                                )}
                            >

                                {
                                    item.message
                                }

                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ChatLayout;