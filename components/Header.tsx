'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';
import { navList } from '@/constants/navList';

const Header = () => {
  return (
    <header
      className="
        w-full

        border-b-[0.5px]
        border-b-cyan-900

        dark:bg-background/70
        backdrop-blur-xl

        px-5
        sm:px-8
        lg:px-8

        py-3

        flex
        items-center
        justify-between

        sticky
        top-0
        z-50
      "
    >

      {/* LOGO */}
      <div className="flex items-center cursor-pointer shrink-0">

        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10"
        />

        <h1
          className="
            text-2xl
            sm:text-3xl

            font-bold

            bg-linear-to-r
            from-[#B9A7FF]
            to-[#8ED8FF]

            bg-clip-text
            text-transparent
          "
        >
          Vital AI
        </h1>

      </div>

      {/* NAVIGATION */}
      <nav
        className="
          hidden
          md:flex

          items-center
          gap-6
          lg:gap-8

          cursor-pointer
        "
      >

        {
          navList.map((item, index) => (
            <div
              className="
                text-sm
                lg:text-md

                text-foreground

                hover:text-secondary

                transition-colors
                duration-300
              "
              key={index}
            >
              {item?.name}
            </div>
          ))
        }

        <CustomButton
          variant='primary'
          size='sm'
          className='w-32 lg:w-35 rounded-md'
          onClick={() => alert("clicked")}
          loading={false}
        >
          Get Started
        </CustomButton>

      </nav>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">

        <CustomButton
          variant='primary'
          size='sm'
          className='rounded-md px-4'
        >
          Start
        </CustomButton>

      </div>

    </header>
  );
};

export default Header;