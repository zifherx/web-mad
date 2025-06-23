"use client";

import { motion } from "framer-motion";
import { SocialButtonProp } from "@/types";

export function SocialButton({
  href,
  iconName: Icon,
  srOnly,
  target,
}: SocialButtonProp) {
  return (
    <motion.a
      href={href}
      target={target}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-redCustom hover:text-white transition-all duration-300"
      aria-label={srOnly}
    >
      <Icon className="h-6 w-6" strokeWidth="2" />
      <span className="sr-only">{srOnly}</span>
    </motion.a>
  );
}
