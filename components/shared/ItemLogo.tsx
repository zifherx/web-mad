"use client";

import Image from "next/image";

import { ContentItem } from "./ContentItem";

import { ItemLogoProp } from "@/types";

export function ItemLogo({ partner }: ItemLogoProp) {
  const { imageSource, imageAlt } = partner;

  return (
    <ContentItem
      variant="simple"
      className="h-16 md:h-24 flex items-center justify-center p-4"
      image={
        <div className="transition-all duration-300 hover:scale-110">
          <Image
            src={`/images/socios/${imageSource}`}
            alt={imageAlt}
            width={170}
            height={85}
            className="object-contain transition-all duration-300 max-h-16 drop-shadow-xl drop-shadow-gray-300"
          />
          {/* className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-16" */}
        </div>
      }
    />
  );
}
