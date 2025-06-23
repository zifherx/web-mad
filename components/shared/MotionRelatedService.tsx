"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { ServiceProp } from "@/types";
import { ArrowRight } from "lucide-react";

export function MotionRelatedService({ service }: ServiceProp) {
  const { id, slug, title, shortTitle, longDescription } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/servicios/${slug}`} className="block h-full">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={`https://placehold.co/500x300`}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-xl font-bold text-white text-center px-4">
              {shortTitle}
            </h3>
          </div>
        </div>

        <div className="bg-white p-6 border border-gray-200 rounded-b-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <p className="text-muted-foreground line-clamp-2 mb-4">
            {longDescription.substring(0, 100)}...
          </p>
          <div className="flex items-center text-redCustom font-medium">
            Ver más
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
