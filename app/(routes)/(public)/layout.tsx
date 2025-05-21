import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import React, { ReactNode } from "react";

export default function PublicLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
