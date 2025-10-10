"use client";

import { useSidebar } from "@/components/ui/sidebar";
import Image from "next/image";

export function LogoSidebar() {
  const { open } = useSidebar();

  return (
    <div className="flex items-center justify-between">
      {open ? (
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 bg-transparent rounded-lg flex items-center justify-between">
            <Image
              src="/images/logos/isologo-black.png"
              alt="Logo MAD"
              height={100}
              width={100}
              priority
            />
          </div>
          <div>
            <h1 className="font-bold text-gray-800">Marketing Al Día</h1>
            <p className="text-xs text-gray-500">CMS - Admin</p>
          </div>
        </div>
      ) : (
        <div className="p-0 mt-2 rounded-lg">
          <Image
            src="/images/logos/isologo-black.png"
            alt="Logo MAD"
            height={150}
            width={150}
            priority
          />
        </div>
      )}
    </div>
  );
}
