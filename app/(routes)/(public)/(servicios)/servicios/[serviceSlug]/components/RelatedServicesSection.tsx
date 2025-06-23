"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Title } from "@/components/shared/Title";
import { Card, CardContent } from "@/components/ui/card";

import { RelatedServiceProp } from "@/types";

export function RelatedServicesSection({
  relatedServices,
}: RelatedServiceProp) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Title
          text="Servicios Relacionados"
          description="Potencia tu transformación con nuestros servicios complementarios"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map(
            ({ id, icon: Icon, title, shortDescription, slug }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-redCustom/20">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl mb-4"
                    >
                      <Icon
                        className="w-8 h-8 group-hover:text-redCustom transition-colors"
                        strokeWidth={2}
                      />
                    </motion.div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-redCustom transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {shortDescription}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-redCustom group-hover:text-white transition-all"
                    >
                      <Link href={`/servicios/${slug}`}>
                        Ver Más
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
