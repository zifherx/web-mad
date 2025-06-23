import { ReactNode } from "react";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { geistMono, geistSans } from "@/fonts";
import "./globals.css";
import { METADATA } from "@/utils/GlobalFunctions";

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#000c25"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #000c25,0 0 5px #000c25"
          showAtBottom={true}
        />
        {children}
      </body>
    </html>
  );
}
