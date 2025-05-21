"use client";

import { ToolbarHeaderData } from "@/data";
import { LinkIcon } from "./LinkIcon";

export function ToolbarHeader() {
  return (
    <div className="hidden md:flex items-center justify-end bg-redCustom text-white px-5 py-1 text-sm">
      <div className="flex items-center space-x-5">
        {ToolbarHeaderData.map(({ href, icon, text }, index) => (
          <LinkIcon key={index} href={href} icon={icon} text={text} />
        ))}
        <span className="text-white">Atención a todo el Perú</span>
      </div>
    </div>
  );
}
