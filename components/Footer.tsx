'use client';

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between px-12 py-10 border-t border-white/10">
      
      <div>
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Vital AI"
            width={40}
            height={40}
          />

          <div className="text-2xl font-bold bg-neutral bg-clip-text text-transparent">
            Vital AI
          </div>
        </div>

        <p className="mt-4 text-neutral max-w-md">
          &copy; 2024 Vital AI Systems. HIPAA Compliant Precision Care.
        </p>
      </div>

      <ul className="flex gap-8 text-neutral font-medium">
        <li className="cursor-pointer hover:text-white transition-colors">
          Privacy Policy
        </li>

        <li className="cursor-pointer hover:text-white transition-colors">
          Terms of Service
        </li>

        <li className="cursor-pointer hover:text-white transition-colors">
          Clinical Standards
        </li>

        <li className="cursor-pointer hover:text-white transition-colors">
          Contact Support
        </li>
      </ul>

    </footer>
  );
};