"use client";

import { motion } from "framer-motion";

import { ServiceProp } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Title } from "@/components/shared/Title";

export default function FeaturesSection({ service }: ServiceProp) {
  const { features } = service;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Title
          description="Cada elemento está diseñado para maximizar el impacto y generar
            resultados tangibles"
          text="¿Qué Incluye Este Servicio?"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map(({ feature, id }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-redCustom/20 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-redCustom/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-redCustom/20 transition-colors"
                  >
                    <CheckCircle className="w-8 h-8 text-redCustom" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-redCustom transition-colors">
                    {feature}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
