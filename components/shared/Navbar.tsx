"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";

export function Navbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <nav className="max-w-7xl mx-auto flex h-28 px-4 md:px-0 items-center justify-between">
      <Image
        src="/images/logos/logo-mad-original.png"
        alt="Logo Marketing Al Día"
        width={120}
        height={50}
        onClick={() => router.push("/")}
        priority
        className="cursor-pointer"
      />

      <MenuDesktop />

      <div className="hidden md:block">
        <Button asChild className="bg-redCustom hover:bg-orangeCustom/70">
          <Link href="/contacto">Solicitar Asesoría</Link>
        </Button>
      </div>

      <MenuMobile
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLinkClick={handleLinkClick}
        openSubmenu={openSubmenu}
        setOpenSubmenu={setOpenSubmenu}
        toggleSubmenu={toggleSubmenu}
      />
    </nav>
  );
}
