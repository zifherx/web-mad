"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
}: ServiceCardProp) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-redCustom to-orangeCustom rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl">{titleService}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <CardDescription className="text-base">
          {descriptionService}
        </CardDescription>
        <Button
          variant="outline"
          className="w-full group-hover:bg-redCustom group-hover:text-white"
          asChild
        >
          <Link href={`/servicios/${slug}`}>
            Ver Servicio
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
