"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

import { TestimonialCardProp } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function CardTestimonial({
  imageSource,
  position,
  quote,
  title,
}: TestimonialCardProp) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-110">
      <div className="flex flex-col items-center text-center">
        <Avatar className="relative w-16 h-16 mb-4">
          <AvatarImage src={`/images/testimonial/${imageSource}`} />
          <AvatarFallback>{title}</AvatarFallback>
        </Avatar>
        {/* <div className="relative w-16 h-16 mb-4">
          <Image
            src={`/images/testimonial/${imageSource}`}
            alt={title}
            fill
            className="rounded-full object-cover"
          />
        </div> */}
        <Quote className="h-6 w-6 text-redCustom mb-3" />
        <p className="text-sm italic mb-4 line-clamp-4">{quote}</p>
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground">{position}</p>
      </div>
    </div>
  );
}
