"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import { parseCounterValue } from "@/utils/GlobalFunctions";
import { HeroSectionSpecialistProps } from "@/types";

export function HeroSection({ kpis }: HeroSectionSpecialistProps) {
  const { averageRating, totalProjects, totalSpecialists } = kpis;

  return (
    <section className="relative py-32 bg-gradient-to-br from-redCustom via-orangeCustom to-blueCustom text-white overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Formas geométricas */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-4 border-white/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 transform rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
              Los mejores expertos de Latinoamérica
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Nuestros{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Especialistas
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Conoce a los referentes que están transformando el marketing en
            Latinoamérica. Cada uno, un maestro en su especialidad.
          </motion.p>

          {/* Stats animados */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: totalSpecialists.toString(), label: "Especialistas" },
              { number: "5", label: "Países" },
              { number: `${totalProjects}+`, label: "Proyectos" },
              { number: averageRating.toFixed(1), label: "Rating Promedio" },
            ].map((stat, index) => {
              const { numericValue, symbol } = parseCounterValue(stat.number);
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CountUp
                    start={0}
                    end={numericValue}
                    className="text-3xl md:text-4xl font-bold text-gray-200"
                    enableScrollSpy
                    duration={3}
                    suffix={symbol ? `${symbol}` : ""}
                  />
                  <div className="text-sm text-white/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
