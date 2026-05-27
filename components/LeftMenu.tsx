'use client';

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { menuList } from "@/constants/menuList";
import Image from "next/image";
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
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
      if (e.matches) setIsOpen(false);
    };
    handleChange(mql);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  async function handleLogout() {
    console.log('user-logged-out')
    await signOut({
      callbackUrl: '/sign-in'
    });
  }

  function handleMenuToggle() {
    setIsOpen((prev) => !prev);
  }

  function handleMenuClick(path: string) {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    router.push(path);
    if (isMobile) setIsOpen(false);
  }

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={clsx(
          "flex flex-col justify-between h-screen shrink-0 overflow-y-auto",
          "border-r border-white/10 bg-[#071427]/90 backdrop-blur-2xl",
          "py-4 transition-[width,padding] duration-300",
          isMobile
            ? isOpen
              ? "fixed top-0 left-0 z-50 w-64 px-3"
              : "relative w-14 px-1.5"
            : isOpen
              ? "relative w-61 px-3"
              : "relative w-14 px-1.5"
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
              gap-2

              cursor-pointer
            "
            >

              <Image
                width={32}
                height={32}
                src={'/logo.png'}
                alt="Vital AI"
                className="shrink-0"
              />

              {isOpen && (
                <div>

                  <div className="text-white font-bold text-lg leading-none">
                    Vital AI
                  </div>

                  <div className="text-[10px] text-[#A1A1AA] font-medium mt-1">
                    Precision Medicine
                  </div>

                </div>
              )}

            </div>

            {isOpen && (
              <PanelLeftClose
                onClick={handleMenuToggle}
                className="
                w-4
                h-4

                text-white

                cursor-pointer

                hover:text-secondary

                transition-colors
              "
              />
            )}

          </div>

          {/* UPLOAD BUTTON */}
          <button
            className={clsx(
              `
            mt-6

            flex
            items-center
            justify-center
            gap-2

            rounded-lg

            py-2.5

            text-white
            font-semibold
            text-xs

            border-[0.5px]
            border-[#7B6DFF]

            bg-transparent

            shadow-[0_0_15px_rgba(108,99,255,0.15)]

            transition-all
            duration-300

            hover:bg-[#7B6DFF]/10
            hover:border-[#9D8CFF]
            `,
              isOpen ? 'w-full px-3' : 'w-9 h-9 p-0 mx-auto'
            )}
          >
            <Upload className="w-3.5 h-3.5 shrink-0" />

            {isOpen && 'Upload Report'}
          </button>

          {/* MENU */}
          <div className="mt-8 flex flex-col gap-2">

            {menuList.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  onClick={() => handleMenuClick(item.path)}
                  className={clsx(
                    `
                  flex
                  items-center

                  rounded-lg

                  cursor-pointer

                  transition-all
                  duration-300

                  text-[#D4D4D8]
                  font-medium
                  text-xs

                  hover:bg-white/5
                  hover:text-white
                  `,

                    isOpen
                      ? 'gap-3 px-3 py-2.5'
                      : 'justify-center py-2.5',

                    pathname === item.path &&
                    `
                    bg-linear-to-r
                    from-[#5D5FEF]
                    to-[#9D8CFF]

                    text-white

                    shadow-[0_0_18px_rgba(108,99,255,0.22)]
                  `
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />

                  {isOpen && item.name}
                </div>
              );
            })}

          </div>

        </div>

        {/* BOTTOM */}
        <div>

          <div className="h-px w-full bg-white/10 mb-4" />

          <div className="flex flex-col gap-1.5">

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

                  rounded-lg

                  font-medium
                  text-xs

                  transition-all
                  duration-300

                  cursor-pointer
                  `,

                    isOpen
                      ? 'gap-3 px-3 py-2.5'
                      : 'justify-center py-2.5',

                    item.danger
                      ? 'text-[#D4D4D8] hover:bg-red-500/10 hover:text-red-300'
                      : 'text-[#D4D4D8] hover:bg-white/5 hover:text-white'
                  )}
                  onClick={
                    item?.label === "Logout" ? handleLogout : undefined
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />

                  {isOpen && item.label}
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </>
  );
};

export default LeftMenu;