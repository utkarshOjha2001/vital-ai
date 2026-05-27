'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';
import { navList } from '@/constants/navList';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  return (
    <header
      className="
        w-full

        border-b-[0.5px]
        border-b-cyan-900

        dark:bg-background/70
        backdrop-blur-xl

        px-4
        sm:px-6
        lg:px-23

        py-2.5

        flex
        items-center
        justify-between

        sticky
        top-0
        z-50
      "
    >
      <div className="flex items-center cursor-pointer shrink-0 gap-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={34}
          height={34}
          className="w-7 h-7 sm:w-8 sm:h-8"
        />

        <h1
          className="
            text-xl
            sm:text-2xl

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

          gap-5
          lg:gap-6

          cursor-pointer
        "
      >

        {
          navList.map((item, index) => (
            <div
              className="
                text-xs
                lg:text-sm

                font-medium

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
          className='w-28 lg:w-30 rounded-md text-xs'
          onClick={() => router.push('/sign-in')}
          loading={false}
        >
          Get Started
        </CustomButton>

      </nav>

      <div className="md:hidden">

        <CustomButton
          variant='primary'
          size='sm'
          className='rounded-md px-3 text-xs'
        >
          Start
        </CustomButton>

      </div>

    </header>
  );
};

export default Header;