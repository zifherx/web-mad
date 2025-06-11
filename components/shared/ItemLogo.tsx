"use client";

import Image from "next/image";

import { ContentItem } from "./ContentItem";

import { ItemLogoProp } from "@/types";

export function ItemLogo({ partner }: ItemLogoProp) {
  const { imageSource, imageAlt } = partner;

  return (
    <ContentItem
      variant="simple"
      className="h-24 flex items-center justify-center p-4"
      image={
        <div className="transition-all duration-300 hover:scale-125">
          <Image
            src={`/images/socios/${imageSource}`}
            alt={imageAlt}
            width={170}
            height={85}
            className="object-contain grayscale hover:grayscale-0 transition-all duration-300 max-h-16"
          />
        </div>
      }
    />
  );
}
