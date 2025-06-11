"use client";

import { parseCounterValue } from "@/utils/GlobalFunctions";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export function HeroSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-redCustom via-pink-700 to-orangeCustom text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

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
              Una comunidad que transforma negocios
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Quiénes{" "}
            <span className="bg-gradient-to-r from-yellow-100 to-orange-300 bg-clip-text text-transparent">
              Somos
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Una comunidad joven pero poderosa que ha logrado reunir a los
            referentes más importantes de Latinoamérica y Europa en Marketing,
            Ventas, Negocios y más.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "500+", label: "Clientes" },
              { number: "15+", label: "Países" },
              { number: "1000+", label: "Proyectos" },
              { number: "98%", label: "Satisfacción" },
            ].map((stat, index) => {
              const { numericValue, symbol } = parseCounterValue(stat.number);
              return (
                <div key={index} className="text-center">
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
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
