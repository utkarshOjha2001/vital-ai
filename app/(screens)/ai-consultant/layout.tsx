import HistoryTab from "@/components/HistoryTab";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function AiConsultantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} flex h-full`}>
      <HistoryTab />

      <div className="flex-1 overflow-x-hidden overflow-y-auto dark:bg-background">
        {children}
      </div>
    </div>
  );
}