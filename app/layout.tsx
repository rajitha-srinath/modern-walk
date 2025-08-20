import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { ProductsProvider } from "@/contexts/products-context";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "Online Fashion Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <nav className="flex justify-center my-8">
          <div>
            <Link href="/" className="text-3xl font-bold ">
              Modern Walk
            </Link>
          </div>
        </nav>
        <hr className="border-4" />
        <ProductsProvider>{children}</ProductsProvider>
      </body>
    </html>
  );
}
