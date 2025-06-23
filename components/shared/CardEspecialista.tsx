"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight, MapPin, Star, Target } from "lucide-react";

import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

import { CardEspecialistaProp } from "@/types";

export function CardEspecialista({
  index,
  onClick,
  specialist,
}: CardEspecialistaProp) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        layout: { duration: 0.3 },
      }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={() => onClick(specialist)}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group-hover:bg-gray-50">
        <div className="relative">
          {/* Imagen con overlay gradient */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={`/images/especialistas/${specialist.imagen}`}
              alt={specialist.nombre}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${specialist.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
            />

            {/* Badge de rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="absolute top-4 right-4"
            >
              <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                {specialist.rating}
              </Badge>
            </motion.div>

            {/* Badge de país */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="absolute top-4 left-4"
            >
              <Badge
                variant="secondary"
                className="bg-black/50 text-white backdrop-blur-sm"
              >
                <MapPin className="w-3 h-3 mr-1" />
                {specialist.pais}
              </Badge>
            </motion.div>
          </div>

          <CardContent className="p-6 space-y-4">
            {/* Nombre y especialidad */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-redCustom transition-colors duration-300">
                {specialist.nombre}
              </h3>
              <p className="text-redCustom font-medium">
                {specialist.especialidad}
              </p>
            </div>

            {/* Experiencia y proyectos */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                {specialist.experiencia}
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-1" />
                {specialist.proyectos} proyectos
              </div>
            </div>

            {/* Reseña */}
            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
              {specialist.resena}
            </p>

            {/* Especialidades */}
            <div className="flex flex-wrap gap-1">
              {specialist.especialidades.slice(0, 2).map((esp, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {esp.nombre}
                </Badge>
              ))}
              {specialist.especialidades.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{specialist.especialidades.length - 2}
                </Badge>
              )}
            </div>

            {/* Botón de ver más */}
            <motion.div
              className="pt-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center text-redCustom text-sm font-medium group-hover:text-orangeCustom">
                Ver perfil completo
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}
