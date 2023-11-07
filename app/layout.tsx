import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tax Consulant",
  description: "Help You To Manage Your Tax",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
