import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spaced",
  description: "Create flashcards and learn using spaced repitition",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
