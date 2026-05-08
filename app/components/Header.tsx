'use client';

import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-screen border-b border-secondary px-8 py-2 flex items-center justify-between">
      
     <div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="logo"
    width={50}
    height={50}
  />

  <h1 className="text-3xl font-bold bg-linear-to-r from-[#B9A7FF] to-[#8ED8FF] bg-clip-text text-transparent">
    Vital AI
  </h1>
</div>

      <nav>
        <ul className="flex items-center gap-8 text-white font-semibold">
          <li className="cursor-pointer hover:text-primary transition-colors">
            Features
          </li>

          <li className="cursor-pointer hover:text-primary transition-colors">
            How it works
          </li>

          <li className="cursor-pointer hover:text-primary transition-colors">
            Pricing
          </li>

          <li>
            <button className="bg-primary px-5 py-2 rounded-lg text-white hover:opacity-90 transition-opacity cursor-pointer">
              Get Started
            </button>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;