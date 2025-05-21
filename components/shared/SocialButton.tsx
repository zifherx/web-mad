"use client";

import Link from "next/link";
import { SocialButtonProp } from "@/types";

export function SocialButton({
  href,
  iconName: Icon,
  srOnly,
  target,
}: SocialButtonProp) {
  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      className="hover:text-redCustom/80 transition"
    >
      <Icon className="h-6 w-6" strokeWidth="2" />
      <span className="sr-only">{srOnly}</span>
    </Link>
  );
}
