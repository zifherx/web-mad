"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Title } from "@/components/shared/Title";

import { OrbitalesElementsData } from "@/data";
import { IWindowSize } from "@/interfaces";

export function DiagramaSection() {
  const [windowSize, setwindowSize] = useState<IWindowSize>({
    innerHeight: 0,
    innerWidth: 0,
  });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowData: IWindowSize = {
        innerHeight: window.innerHeight || 0,
        innerWidth: window.innerWidth || 0,
      };

      setwindowSize(windowData);
    }
  }, []);

  const handleHover = (label: string | null) => {
    setHoveredElement(label);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Nuestro Enfoque"
          description="Un modelo integral que conecta todos los aspectos de nuestro trabajo"
        />

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

            {/* Floating Particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1000),
                  y:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 1000),
                }}
                animate={{
                  x:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1000),
                  y:
                    Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 1000),
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}

            {/* Energy Waves */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute top-1/2 left-1/2 border border-blue-500/10 rounded-full"
                style={{
                  width: `${300 + i * 200}px`,
                  height: `${300 + i * 200}px`,
                  marginLeft: `${-150 - i * 100}px`,
                  marginTop: `${-150 - i * 100}px`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 1.5,
                }}
              />
            ))}
          </div>

          <div className="relative w-full max-w-5xl mx-auto z-10">
            {/* Enhanced Title */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center mb-16"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent mb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                Marketing
              </motion.h1>
              <motion.h2
                className="text-4xl md:text-6xl font-light text-blue-300"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(59, 130, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.8)",
                    "0 0 10px rgba(59, 130, 246, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                Al día
              </motion.h2>
            </motion.div>

            {/* Enhanced Orbital Diagram */}
            <div className="relative w-full aspect-square max-w-3xl mx-auto">
              {/* Dynamic Orbital Rings */}
              {[1, 2, 3, 4].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 rounded-full"
                  style={{
                    width: `${50 + ring * 15}%`,
                    height: `${50 + ring * 15}%`,
                    top: `${25 - ring * 7.5}%`,
                    left: `${25 - ring * 7.5}%`,
                    border: `1px solid rgba(255, 255, 255, ${
                      0.05 + ring * 0.02
                    })`,
                    boxShadow: `inset 0 0 20px rgba(59, 130, 246, ${
                      0.1 + ring * 0.05
                    })`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    rotate: {
                      duration: 25 + ring * 15,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                  }}
                />
              ))}

              {/* Enhanced Central Core */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 100%)",
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  boxShadow: [
                    "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4)",
                    "0 0 50px rgba(147, 51, 234, 0.8), 0 0 100px rgba(59, 130, 246, 0.6)",
                    "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-white/30 to-transparent rounded-full" />
                <motion.div
                  className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Enhanced Orbital Elements */}
              {OrbitalesElementsData.map((element, index) => {
                const baseRadius = 220;
                const oscillationRadius = 15;
                const angleInRadians = (element.angle * Math.PI) / 180;

                // Base position
                const baseX = Math.cos(angleInRadians) * baseRadius;
                const baseY = Math.sin(angleInRadians) * baseRadius;

                const isHovered = hoveredElement === element.label;

                return (
                  <div
                    key={element.label}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(-50%, -50%) translate(${baseX}px, ${baseY}px)`,
                    }}
                  >
                    {/* Oscillation Container */}
                    <motion.div
                      animate={{
                        x: [
                          Math.cos(angleInRadians + Math.PI / 4) *
                            oscillationRadius,
                          Math.cos(angleInRadians - Math.PI / 4) *
                            oscillationRadius,
                          Math.cos(angleInRadians + Math.PI / 4) *
                            oscillationRadius,
                        ],
                        y: [
                          Math.sin(angleInRadians + Math.PI / 4) *
                            oscillationRadius,
                          Math.sin(angleInRadians - Math.PI / 4) *
                            oscillationRadius,
                          Math.sin(angleInRadians + Math.PI / 4) *
                            oscillationRadius,
                        ],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        whileHover={{
                          scale: 1.3,
                          z: 20,
                        }}
                        onHoverStart={() => handleHover(element.label)}
                        onHoverEnd={() => handleHover(null)}
                        className="relative cursor-pointer"
                      >
                        <Card
                          className={`p-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border-white/30 shadow-2xl transition-all duration-500 ${
                            isHovered
                              ? "border-white/60 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                              : ""
                          }`}
                        >
                          <div className="flex flex-col items-center space-y-3">
                            <motion.div
                              className={`p-4 rounded-full bg-gradient-to-r ${element.color} shadow-xl relative overflow-hidden`}
                              animate={
                                isHovered
                                  ? {
                                      boxShadow: [
                                        `0 0 20px ${element.glowColor}`,
                                        `0 0 40px ${element.glowColor}`,
                                        `0 0 20px ${element.glowColor}`,
                                      ],
                                    }
                                  : {}
                              }
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            >
                              <element.icon className="w-8 h-8 text-white relative z-10" />
                              <motion.div
                                className="absolute inset-0 bg-white/30"
                                animate={
                                  isHovered ? { x: ["-100%", "100%"] } : {}
                                }
                                transition={{
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                }}
                              />
                            </motion.div>
                            <span className="text-white font-semibold text-lg whitespace-nowrap">
                              {element.label}
                            </span>
                          </div>
                        </Card>

                        {/* Enhanced Connecting Line */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 origin-top"
                          style={{
                            width: "2px",
                            height: `${baseRadius + 20}px`,
                            background: `linear-gradient(to bottom, transparent, ${element.glowColor}, transparent)`,
                            transform: `translate(-50%, -100%) rotate(${
                              element.angle + 180
                            }deg)`,
                          }}
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scaleY: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.4,
                          }}
                        />

                        {/* Hover Description */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 20, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 20, scale: 0.8 }}
                              transition={{ duration: 0.3 }}
                              className="absolute top-full mt-12 left-1/2 transform -translate-x-1/2 w-80 z-50"
                            >
                              <Card className="p-4 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border-white/20 shadow-2xl">
                                <p className="text-white/90 text-sm leading-relaxed text-center">
                                  {element.description}
                                </p>
                                <motion.div
                                  className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-800 rotate-45 border-l border-t border-white/20"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1 }}
                                />
                              </Card>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}

              {/* Enhanced Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${
                      OrbitalesElementsData[i % 5].glowColor
                    }, transparent)`,
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>

            {/* Enhanced Bottom Description */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-center mt-20"
            >
              <motion.p className="text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
                Conectamos todos los elementos esenciales del marketing moderno
                en un ecosistema dinámico y efectivo.
                <br />
                <span className="text-lg text-white/60 mt-2 block">
                  Pasa el cursor sobre cada elemento para descubrir su
                  potencial.
                </span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
