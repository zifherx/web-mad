"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { Button } from "../ui/button";

export function Navbar() {
  const router = useRouter();

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

      <MenuMobile />
    </nav>
  );
}
