// use this as just a reference
import type { Metadata } from "next";
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

import "./globals.css";

export const metadata: Metadata = {
  title: "lollyxsrinand",
  description: "give up on your dreams and die",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen`}>
        <div className="w-full h-full flex justify-center items-center bg-neutral-950">
          {children}
        </div>
      </body>
    </html>
  );
}
// this is mostly used
