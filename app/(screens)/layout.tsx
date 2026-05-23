import type { Metadata } from "next";
import Providers from "../provider";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import LeftMenu from "@/components/LeftMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vital Ai",
  description: "Ai powered report analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark:bg-background`}
    >
      <body>
        <Providers>
          <div className="flex h-screen w-full overflow-hidden">
            <LeftMenu />
            <div className="flex-1 overflow-x-hidden overflow-y-auto">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
