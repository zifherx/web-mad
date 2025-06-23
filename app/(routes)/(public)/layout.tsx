import { ReactNode } from "react";

import { Header } from "@/components/shared/Header";
import { Footer2 } from "@/components/shared/Footer2";

export default function PublicLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      {/* <MotionTransition/> */}
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
}
