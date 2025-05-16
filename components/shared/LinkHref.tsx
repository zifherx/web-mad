"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkHrefProp } from "@/types";

export function LinkHref({ className, href, text, target }: LinkHrefProp) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "text-sm text-primary-foreground/80 hover:text-primary-foreground/100 transition",
        className
      )}
    >
      {text}
    </Link>
  );
}
