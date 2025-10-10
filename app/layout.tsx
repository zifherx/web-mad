import { ReactNode } from "react";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";

import "./globals.css";

import { Toaster } from "@/components/ui/sonner";

import { geistMono, geistSans } from "@/fonts";
import { METADATA } from "@/utils/GlobalFunctions";
import { QueryProvider } from "@/providers/QueryProvider";

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
        <StackProvider app={stackClientApp} lang="es-419">
          <QueryProvider>
            <StackTheme>
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
              <Toaster />
            </StackTheme>
          </QueryProvider>
        </StackProvider>
      </body>
    </html>
  );
}
