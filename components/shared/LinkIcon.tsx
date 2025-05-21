"use client";

import Link from "next/link";
import { LinkIconProp } from "@/types";

export function LinkIcon({ href, icon: Icon, text }: LinkIconProp) {
  return (
    <Link
      href={href}
      className="flex items-center hover:text-blueCustom/80 transition"
    >
      <Icon className="h-4 w-4 mr-1" />
      {text}
    </Link>
  );
}
