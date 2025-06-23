"use client";

import { motion } from "framer-motion";

import { ServiceProp } from "@/types";
import { Title } from "@/components/shared/Title";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export function BenefitsSection({ service }: ServiceProp) {
  const { benefits } = service;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Title
          description="Resultados tangibles que transformarán tu negocio desde el primer día"
          text="Beneficios Clave"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map(({ benefit, description, id }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-redCustom/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-redCustom/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-redCustom/20 transition-colors">
                      <Lightbulb className="w-6 h-6 text-redCustom" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-redCustom transition-colors">
                        {benefit}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
