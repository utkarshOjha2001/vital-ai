'use client';
import React from 'react'
import HistoryTab from '@/components/HistoryTab';
import AIChatBox from '@/components/AIChatBox';
import ChatLayout from '@/components/ChatLayout';

const AiConsutant = () => {
  const chatData = ''
  return (
    <div className='pl-[15%] pr-[15%] w-full h-screen flex flex-col'>
  
  <div className='flex-1 overflow-y-auto pb-28 mt-4'>
    <div className='flex justify-center items-center text-neutral rounded-2xl w-full'>
      <div className='mb-4 mt-3 text-sm bg-gray-800 pl-3 pr-3 p-2 rounded-2xl'>
        Today
      </div>
    </div>
    <ChatLayout />
  </div>
  <AIChatBox chatData={chatData} />

</div>
  )
}

export default AiConsutant;