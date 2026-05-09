'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';
import { menuList } from '@/constants/menuList';

const Header = () => {
  
  return (
    <header className="w-screen border-b-[0.5px] dark:bg-background border-b-cyan-900 px-8 py-3 flex items-center justify-between">
      <div className="flex items-center cursor-pointer">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
        />

        <h1 className="text-3xl font-bold bg-linear-to-r from-[#B9A7FF] to-[#8ED8FF] bg-clip-text text-transparent">
          Vital AI
        </h1>
      </div>

      <nav className='flex items-center gap-8 cursor-pointer'>
        {
          menuList.map((item, index) => (
            <div className='text-md text-foreground' key={index}>
              {item?.name}
            </div>
          ))
        }
        <CustomButton
          text='Get Started'
          variant='primary'
          size='sm'
          className='w-35 rounded-md'
           onClick={() => alert("clicked")}
        >
          Get Started
          </CustomButton>
      </nav>

    </header>
  );
};

export default Header;