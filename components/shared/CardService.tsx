"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import { ServiceCardProp } from "@/types";

export function CardService({
  descriptionService,
  icon: Icon,
  titleService,
  slug,
  features,
}: ServiceCardProp) {
  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-redCustom/20 bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="text-center pb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="mx-auto w-16 h-16 bg-gradient-to-r from-redCustom to-orangeCustom rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-redCustom transition-colors">
          {titleService}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {descriptionService}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map(({ id, nombre }) => (
            <li key={id} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-redCustom mr-2 shrink-0" />
              {nombre}
            </li>
          ))}
        </ul>

        {/* Acciones */}
        <Button
          variant="outline"
          className="w-full group-hover:bg-redCustom group-hover:text-white group-hover:border-redCustom transition-all duration-300"
          asChild
        >
          <Link href={`/servicios/${slug}`}>
            Saber más
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
