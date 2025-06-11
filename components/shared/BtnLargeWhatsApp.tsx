"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { createWhatsappChatLink } from "@/utils/GlobalFunctions";

export function BtnLargeWhatsApp({
  text,
  celular,
  mensaje,
}: {
  text: string;
  celular: string;
  mensaje: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      className={cn(
        "bg-green-500 text-sm font-medium cursor-pointer shadow transition-all duration-300",
        "hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
        isHovered ? "scale-110" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      asChild
    >
      <Link
        href={createWhatsappChatLink(celular, mensaje)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-5 h-5" />
        {text}
      </Link>
    </Button>
  );
}
