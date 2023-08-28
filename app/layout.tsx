import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-[#1f1f1f] dark:bg-[#1f1f1f] dark:text-white">
        {children}
      </body>
    </html>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my site!",
};
