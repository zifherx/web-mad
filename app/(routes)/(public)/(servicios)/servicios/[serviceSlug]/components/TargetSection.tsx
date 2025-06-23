"use client";

import { motion } from "framer-motion";

import { ServiceProp } from "@/types";
import { Title } from "@/components/shared/Title";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export function TargetSection({ service }: ServiceProp) {
  const { targetAudience } = service;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Title
          text="¿Para Quién es Este Servicio?"
          description="Diseñado específicamente para organizaciones que buscan resultados excepcionales"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {targetAudience.map(({ id, target }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                    <User className="w-8 h-8 text-redCustom" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-redCustom transition-colors">
                    {target}
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
