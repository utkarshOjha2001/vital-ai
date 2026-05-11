'use client';
import React from 'react'
import HistoryTab from '@/components/HistoryTab';
import AIChatBox from '@/components/AIChatBox';

const AiConsutant = () => {
  return (
    <div className='pl-[15%] pr-[15%] w-full h-full flex flex-col gap-4'>
      <AIChatBox />
    </div>
    
  )
}

export default AiConsutant;