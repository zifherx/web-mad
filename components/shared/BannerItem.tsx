"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";
import { CarouselBannerItemProp } from "@/types";

export function BannerItem({ banner }: CarouselBannerItemProp) {
  const {
    btnCTA1,
    btnCTA2,
    description,
    id,
    imageItem,
    motionDivImage,
    motionDivText,
    positionImage,
    title,
  } = banner;
  return (
    <div
      className={cn(
        "relative h-[80vh] w-full overflow-hidden",
        `bg-gradient-to-r ${id === 1 && "from-redCustom/60 to-redCustom/30"} ${
          id === 2 && "from-blueCustom/10 to-blueCustom/30"
        } ${id === 3 && "from-orangeCustom/10 to-orangeCustom/30"}`
      )}
    >
      <div className="max-w-7xl mx-auto h-full px-4">
        <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center gap-8">
          {positionImage === "left" && (
            <motion.div
              initial={motionDivImage.initial}
              animate={motionDivImage.animate}
              transition={motionDivImage.transition}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative w-full max-w-md h-[400px]">
                <Image
                  src={`/images/banners/${imageItem.imageSource}`}
                  alt={imageItem.imageAlt}
                  fill
                  className="object-cover rounded-lg shadow-lg drop-shadow-2xl"
                  priority
                />
                <div
                  className={cn(
                    "absolute -bottom-4 -right-4 w-32 h-32 rounded-full",
                    id === 1 && "bg-redCustom/20",
                    id === 2 && "bg-blueCustom/20",
                    id === 3 && "bg-orangeCustom/20"
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute -top-4 -left-4 w-24 h-24 rounded-lg z-0",
                    id === 1 && "bg-redCustom/10",
                    id === 2 && "bg-blueCustom/10",
                    id === 3 && "bg-orangeCustom/10"
                  )}
                ></div>
              </div>
            </motion.div>
          )}
          <motion.div
            initial={motionDivText.initial}
            animate={motionDivText.animate}
            transition={motionDivText.transition}
            className="text-left"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className={cn(
                  "text-white transition-all duration-300 animate-pulse",
                  id === 1 && "bg-redCustom hover:bg-redCustom/80",
                  id === 2 && "bg-blueCustom hover:bg-blueCustom/80",
                  id === 3 && "bg-orangeCustom hover:bg-orangeCustom/80"
                )}
                asChild
              >
                <Link href={btnCTA1.buttonHref}>{btnCTA1.buttonText}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-black hover:bg-black hover:text-white"
                asChild
              >
                <Link href={btnCTA2.buttonHref}>{btnCTA2.buttonText}</Link>
              </Button>
            </div>
          </motion.div>
          {positionImage === "right" && (
            <motion.div
              initial={motionDivImage.initial}
              animate={motionDivImage.animate}
              transition={motionDivImage.transition}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative w-full max-w-md h-[400px]">
                <Image
                  src={`/images/banners/${imageItem.imageSource}`}
                  alt={imageItem.imageAlt}
                  fill
                  className="object-cover rounded-lg shadow-lg drop-shadow-2xl"
                  priority
                />
                <div
                  className={cn(
                    "absolute -bottom-4 -right-4 w-32 h-32 rounded-full",
                    id === 1 && "bg-redCustom/20",
                    id === 2 && "bg-blueCustom/20",
                    id === 3 && "bg-orangeCustom/20"
                  )}
                ></div>
                <div
                  className={cn(
                    "absolute -top-4 -left-4 w-24 h-24 rounded-lg z-0",
                    id === 1 && "bg-redCustom/10",
                    id === 2 && "bg-blueCustom/10",
                    id === 3 && "bg-orangeCustom/10"
                  )}
                ></div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
