"use client"

import { Variant_Effect_Page } from "@/utils/Variants"
import { AnimatePresence, motion } from "framer-motion"

export function MotionTransition() {
  return (
    <AnimatePresence mode="wait">
        <div>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-redCustom"
                variants={Variant_Effect_Page}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.2,
                    duration: 0.3,
                    ease: "easeInOut"
                }}
            ></motion.div>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-orangeCustom"
                variants={Variant_Effect_Page}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.4,
                    duration: 0.4,
                    ease: "easeInOut"
                }}
            ></motion.div>
        </div>
    </AnimatePresence>
  )
}
