'use client';

import Image from "next/image";

export const Footer = () => {
  return (
    <footer
      className="
        w-full

        flex
        flex-col
        lg:flex-row

        items-start
        lg:items-center

        justify-between

        gap-8
        lg:gap-5

        px-4
        sm:px-6
        lg:px-10

        py-6
        lg:py-7

        border-t
        border-white/10
      "
    >

      {/* LEFT */}
      <div>

        <div className="flex items-center gap-2">

          <Image
            src="/logo.png"
            alt="Vital AI"
            width={32}
            height={32}
            className="shrink-0"
          />

          <div className="text-xl font-bold bg-neutral bg-clip-text text-transparent">
            Vital AI
          </div>

        </div>

        <p
          className="
            mt-3

            text-neutral

            max-w-sm

            text-[11px]
            sm:text-sm

            leading-6
          "
        >
          &copy; 2026 Vital AI Systems. HIPAA Compliant Precision Care.
        </p>

      </div>

      {/* RIGHT */}
      <ul
        className="
          flex

          flex-col
          sm:flex-row

          gap-3
          sm:gap-5
          lg:gap-6

          text-neutral
          font-medium

          text-[11px]
          sm:text-sm
        "
      >

        <li className="cursor-pointer hover:text-white transition-colors duration-300">
          Privacy Policy
        </li>

        <li className="cursor-pointer hover:text-white transition-colors duration-300">
          Terms of Service
        </li>

        <li className="cursor-pointer hover:text-white transition-colors duration-300">
          Clinical Standards
        </li>

        <li className="cursor-pointer hover:text-white transition-colors duration-300">
          Contact Support
        </li>

      </ul>

    </footer>
  );
};