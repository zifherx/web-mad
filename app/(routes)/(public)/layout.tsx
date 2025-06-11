import { ReactNode } from "react";

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { MotionTransition } from "@/components/shared/MotionTransition";

export default function PublicLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      {/* <MotionTransition/> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
