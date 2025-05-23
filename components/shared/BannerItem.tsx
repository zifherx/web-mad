"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'

import { Button } from "../ui/button";

import { CarouselBannerItemProp } from "@/types";

export function BannerItem({ title, positionImage, imageItem, motionDivImage, motionDivText, description, btnCTA1, btnCTA2, bgColorGradient }: CarouselBannerItemProp) {
  console.log("Color de Banner",bgColorGradient)
  return (
    <div className={`relative h-[80vh] w-full bg-gradient-to-r from-${bgColorGradient}/10 to-${bgColorGradient}/30 overflow-hidden`}>
      <div className="max-w-7xl mx-auto h-full px-4">
        <div className="grid h-full grid-cols-1 md:grid-cols-2 items-center gap-8">
          {
            positionImage === 'left' && (
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
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-${bgColorGradient}/20 rounded-full`}></div>
                  <div className={`absolute -top-4 -left-4 w-24 h-24 bg-${bgColorGradient}/10 rounded-lg z-0`}></div>
                </div>
              </motion.div>
            )
          }
          <motion.div
            initial={motionDivText.initial}
            animate={motionDivText.animate}
            transition={motionDivText.transition}
            className="text-left"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className={`"bg-${bgColorGradient} text-white hover:bg-${bgColorGradient}/80 transition duration-300`} asChild>
                <Link href={btnCTA1.buttonHref}>{btnCTA1.buttonText}</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-black hover:bg-black hover:text-white" asChild>
                <Link href={btnCTA2.buttonHref}>{btnCTA2.buttonText}</Link>
              </Button>
            </div>
          </motion.div>
          {
            positionImage === 'right' && (
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
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-${bgColorGradient}/20 rounded-full`}></div>
                  <div className={`absolute -top-4 -left-4 w-24 h-24 bg-${bgColorGradient}/10 rounded-lg z-10`}></div>
                </div>
              </motion.div>
            )
          }
        </div>
      </div>
    </div>
  )
}
