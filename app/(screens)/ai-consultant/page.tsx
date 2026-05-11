'use client';

import React from 'react';

import AIChatBox from '@/components/AIChatBox';
import ChatLayout from '@/components/ChatLayout';

const AiConsutant = () => {

  const chatData: [] = [];

  const isEmpty = chatData?.length === 0;

  return (
    <div className='w-full h-screen'>

      {
        !isEmpty ? (

          <div
            className='
                            h-full
                            flex
                            flex-col
                            items-center
                            justify-center
                            -mt-16
                            px-4
                        '
          >

            <div
              className='
                                w-full
                                max-w-4xl
                                flex
                                flex-col
                                items-center
                            '
            >

              <h1
                className='
                                    text-2xl
                                    font-semibold
                                    text-white
                                    tracking-tight
                                '
              >
                Your AI Medical Consultant
              </h1>

              <p
                className='
                                    mt-1
                                    mb-8

                                    text-lg
                                    text-[#9CA3AF]

                                    text-center
                                    leading-relaxed
                                '
              >
                Describe your symptoms, concerns,
                or medical questions.
              </p>

              <AIChatBox chatData={chatData} />

            </div>

          </div>

        ) : (

          <div className='h-full flex flex-col'>

            <div className='flex-1 overflow-y-auto'>
              <ChatLayout />
            </div>

            <div className='w-full flex justify-center px-4 pb-6'>
              <AIChatBox chatData={chatData} />
            </div>

          </div>
        )
      }

    </div>
  );
};

export default AiConsutant;