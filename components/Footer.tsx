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

        gap-10
        lg:gap-6

        px-5
        sm:px-8
        lg:px-12

        py-8
        lg:py-10

        border-t
        border-white/10
      "
    >

      {/* LEFT */}
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

        <p
          className="
            mt-4
            text-neutral

            max-w-md

            text-sm
            sm:text-base

            leading-7
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

          gap-4
          sm:gap-6
          lg:gap-8

          text-neutral
          font-medium

          text-sm
          sm:text-base
        "
      >

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