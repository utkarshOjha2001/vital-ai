'use client';

import { useState } from "react";
import Image from "next/image";
import { menuList } from "@/constants/menuList";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Settings,
  CircleHelp,
  LogOut,
  Upload,
  PanelLeftClose,
} from "lucide-react";

const LeftMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  function handleMenuToggle() {
    setIsOpen((prev) => !prev);
  }

  function handleMenuClick(index: number, path: string) {
    if (!isOpen) {
      setIsOpen(true);
    }

    router.push(path);
  }

  return (
    <div
      className={clsx(
        `
        fixed
        top-0
        left-0
        z-50

        flex
        flex-col
        justify-between

        min-h-screen

        border-r
        border-white/10

        bg-[#071427]/90
        backdrop-blur-2xl

        py-6

        transition-all
        duration-300
        `,
        isOpen
          ? 'w-52 sm:w-60 lg:w-64 px-5'
          : 'w-16 px-2'
      )}
    >

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div
          className={clsx(
            `
            flex
            items-center
            `,
            isOpen ? 'justify-between' : 'justify-center'
          )}
        >

          <div
            onClick={() => !isOpen && setIsOpen(true)}
            className="
              flex
              items-center
              gap-3

              cursor-pointer
            "
          >

            <Image
              width={40}
              height={40}
              src={'/logo.png'}
              alt="Vital AI"
              className="shrink-0"
            />

            {isOpen && (
              <div>

                <div className="text-white font-bold text-2xl leading-none">
                  Vital AI
                </div>

                <div className="text-xs text-[#A1A1AA] font-medium mt-1">
                  Precision Medicine
                </div>

              </div>
            )}

          </div>

          {isOpen && (
            <PanelLeftClose
              onClick={handleMenuToggle}
              className="
                w-5
                h-5

                text-white

                cursor-pointer

                hover:text-secondary

                transition-colors
              "
            />
          )}

        </div>
        <button
          className={clsx(
            `
            mt-8

            flex
            items-center
            justify-center
            gap-2

            rounded-lg

            py-3

            text-white
            font-semibold
            text-sm

            border-[0.5px]
            border-[#7B6DFF]

            bg-transparent

            shadow-[0_0_20px_rgba(108,99,255,0.18)]

            transition-all
            duration-300

            hover:bg-[#7B6DFF]/10
            hover:border-[#9D8CFF]
            `,
            isOpen ? 'w-full px-4' : 'w-10 h-10 p-0 mx-auto'
          )}
        >
          <Upload className="w-4 h-4 shrink-0" />

          {isOpen && 'Upload New Report'}
        </button>


        <div className="mt-10 flex flex-col gap-3">
          {menuList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={() => handleMenuClick(index, item.path)}
                className={clsx(
                  `
                  flex
                  items-center

                  rounded-lg

                  cursor-pointer

                  transition-all
                  duration-300

                  text-[#D4D4D8]
                  font-semibold
                  text-sm

                  hover:bg-white/5
                  hover:text-white
                  `,

                  isOpen
                    ? 'gap-3 px-4 py-3'
                    : 'justify-center py-3',

                  pathname === item.path &&
                    `
                    bg-linear-to-r
                    from-[#5D5FEF]
                    to-[#9D8CFF]

                    text-white

                    shadow-[0_0_25px_rgba(108,99,255,0.28)]
                  `
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />

                {isOpen && item.name}
              </div>
            );
          })}

        </div>

      </div>

      <div>

        <div className="h-px w-full bg-white/10 mb-5" />

        <div className="flex flex-col gap-2">

          {[
            { icon: Settings, label: 'Settings' },
            { icon: CircleHelp, label: 'Help Center' },
            { icon: LogOut, label: 'Logout', danger: true },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={clsx(
                  `
                  flex
                  items-center

                  rounded-xl

                  font-semibold
                  text-sm

                  transition-all
                  duration-300

                  cursor-pointer
                  `,

                  isOpen
                    ? 'gap-3 px-4 py-3'
                    : 'justify-center py-3',

                  item.danger
                    ? 'text-[#D4D4D8] hover:bg-red-500/10 hover:text-red-300'
                    : 'text-[#D4D4D8] hover:bg-white/5 hover:text-white'
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />

                {isOpen && item.label}
              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
};

export default LeftMenu;