"use client";

import { MenuFooterProp } from "@/types";
import Link from "next/link";

export function OptionFooter({ childrens, titleMenu }: MenuFooterProp) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{titleMenu}</h3>
      <ul className="space-y-2">
        {childrens.map(({ id, linkOption, titleOption }) => (
          <li key={id}>
            <Link
              href={linkOption}
              className="hover:text-redCustom/90 transition"
            >
              {titleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
