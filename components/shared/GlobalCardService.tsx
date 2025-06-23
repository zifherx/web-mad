"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "../ui/button";

import { ServiceProp } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";

export function GlobalCardService({ service }: ServiceProp) {
  const { title, shortDescription, slug, icon: Icon, features } = service;

  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-redCustom/20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-redCustom/5 to-orangeCustom/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative z-10 pb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="text-4xl mb-4"
        >
          <Icon
            className="group-hover:text-redCustom transition-colors w-6 h-6"
            strokeWidth={2}
          />
        </motion.div>

        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-redCustom transition-colors mb-2">
          {title}
        </CardTitle>

        <CardDescription className="text-gray-600 leading-relaxed">
          {shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 pt-0">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map(({ id, feature }) => (
              <Badge
                key={id}
                variant="secondary"
                className="bg-blueCustom text-white text-xs"
              >
                {feature}
              </Badge>
            ))}
          </div>

          <Button
            asChild
            className="w-full group-hover:bg-redCustom group-hover:text-white transition-all duration-300"
            variant="outline"
          >
            <Link href={`/servicios/${slug}`}>
              Ver Detalles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
