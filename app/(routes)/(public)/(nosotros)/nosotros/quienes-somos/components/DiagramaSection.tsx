"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Title } from "@/components/shared/Title";

import { OrbitalesElementsData } from "@/data";
import { IWindowSize } from "@/interfaces";

export function DiagramaSection() {
  const [windowSize, setwindowSize] = useState<IWindowSize>({
    innerHeight: 0,
    innerWidth: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowData: IWindowSize = {
        innerHeight: window.innerHeight || 0,
        innerWidth: window.innerWidth || 0,
      };

      setwindowSize(windowData);
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Nuestro Enfoque"
          description="Un modelo integral que conecta todos los aspectos de nuestro trabajo"
        />

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: Math.random() * windowSize.innerWidth,
                  y: Math.random() * windowSize.innerHeight,
                }}
                animate={{
                  x: Math.random() * windowSize.innerWidth,
                  y: Math.random() * windowSize.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center mb-16"
            ></motion.div>

            {/* Orbital Diagram Container */}
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Orbital Rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 border border-white/10 rounded-full"
                  style={{
                    width: `${60 + ring * 20}%`,
                    height: `${60 + ring * 20}%`,
                    top: `${20 - ring * 10}%`,
                    left: `${20 - ring * 10}%`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30 + ring * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Central Core */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(147, 51, 234, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent rounded-full" />
              </motion.div>

              {/* Orbital Elements */}
              {OrbitalesElementsData.map((element, index) => {
                const radius = 200; // Distance from center
                const angleInRadians = (element.angle * Math.PI) / 180;
                const x = Math.cos(angleInRadians) * radius;
                const y = Math.sin(angleInRadians) * radius;

                return (
                  <motion.div
                    key={element.label}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%)`,
                    }}
                    animate={{
                      x: [x, x],
                      y: [y, y],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      whileHover={{ scale: 1.2, z: 10 }}
                      className="relative"
                    >
                      <Card className="p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex flex-col items-center space-y-2">
                          <div
                            className={`p-3 rounded-full bg-gradient-to-r ${element.color} shadow-lg`}
                          >
                            <element.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-white font-medium text-sm whitespace-nowrap">
                            {element.label}
                          </span>
                        </div>
                      </Card>

                      {/* Connecting Line */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{
                          height: `${radius}px`,
                          transformOrigin: "top center",
                          transform: `translate(-50%, -100%) rotate(${
                            element.angle + 180
                          }deg)`,
                        }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Bottom Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-center mt-16"
            >
              <p className="text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
                Conectamos todos los elementos esenciales del marketing moderno
                en un ecosistema dinámico y efectivo
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
