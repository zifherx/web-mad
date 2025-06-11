"use client";

import { motion } from "framer-motion";
import { Award, Lightbulb, Target, Users, Zap } from "lucide-react";

export function DiagramaSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestro Enfoque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un modelo integral que conecta todos los aspectos de nuestro trabajo
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-5xl"
          >
            <div className="relative h-[700px] md:h-[600px] flex items-center justify-center">
              {/* Círculo central */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-48 h-48 bg-gradient-to-br from-redCustom to-pink-600 rounded-full flex items-center justify-center z-20 shadow-2xl"
              >
                <div className="text-white text-center">
                  <h3 className="font-bold text-xl mb-1">Marketing Al Día</h3>
                  <p className="text-sm opacity-90">Estrategia Integral</p>
                </div>
                {/* Anillo decorativo */}
                <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
              </motion.div>

              {/* Círculos orbitales */}
              {[
                {
                  label: "Cliente",
                  angle: 0,
                  icon: Users,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  label: "Estrategia",
                  angle: 72,
                  icon: Target,
                  color: "from-green-500 to-green-600",
                },
                {
                  label: "Innovación",
                  angle: 144,
                  icon: Lightbulb,
                  color: "from-yellow-500 to-yellow-600",
                },
                {
                  label: "Resultados",
                  angle: 216,
                  icon: Award,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  label: "Crecimiento",
                  angle: 288,
                  icon: Zap,
                  color: "from-orange-500 to-orange-600",
                },
              ].map((item, index) => {
                const radius = 220;
                const angle = (item.angle * Math.PI) / 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="absolute w-32 h-32 bg-white rounded-full shadow-xl flex flex-col items-center justify-center z-10 group hover:scale-110 transition-transform duration-300"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* Líneas conectoras mejoradas */}
              <svg
                className="absolute top-0 left-0 w-full h-full z-0"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Círculo orbital */}
                <motion.circle
                  cx="300"
                  cy="300"
                  r="220"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                  strokeDasharray="20,10"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.2 }}
                />

                {/* Líneas radiales */}
                {[0, 72, 144, 216, 288].map((angle, index) => {
                  const radians = (angle * Math.PI) / 180;
                  const x1 = 300 + Math.cos(radians) * 96; // Radio del círculo central
                  const y1 = 300 + Math.sin(radians) * 96;
                  const x2 = 300 + Math.cos(radians) * 156; // Radio hasta los círculos externos
                  const y2 = 300 + Math.sin(radians) * 156;

                  return (
                    <motion.line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#ff3d4d"
                      strokeWidth="3"
                      strokeDasharray="8,4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
