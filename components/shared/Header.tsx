"use client";

import { ToolbarHeader } from "./ToolbarHeader";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 border-b backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <ToolbarHeader />
      <Navbar />
    </header>
  );
}
