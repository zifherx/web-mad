"use client";

import { motion } from "framer-motion";

import { TitleProp } from "@/types";

export function Title({ description, text }: TitleProp) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
        {text}
      </h2>
      <p className="text-gray-600 md:text-xl max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}
