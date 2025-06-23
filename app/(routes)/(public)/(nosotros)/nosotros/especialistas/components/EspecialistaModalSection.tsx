"use client";

import Image from "next/image";
import { Award, MapPin, Quote, Target, TrendingUp } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { SpecialistModalProps } from "@/types";
import { StatsPopUp } from "@/components/shared/StatsPopUp";

export function EspecialistaModalSection({
  isOpen,
  onClose,
  specialist,
}: SpecialistModalProps) {
  if (!specialist) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-6xl max-h-[80vh] overflow-y-auto p-0"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="relative">
          {/* Header con imagen */}
          <div className="relative h-64">
            <Image
              src={`/images/especialistas/${specialist.imagen}`}
              alt={specialist.nombre}
              fill
              className="object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${specialist.color} opacity-40`}
            />

            {/* Info superpuesta */}
            <div className="absolute bottom-6 left-6 text-white">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-2 text-white">
                  {specialist.nombre}
                </DialogTitle>
              </DialogHeader>
              <p className="text-xl opacity-90">{specialist.especialidad}</p>
              <div className="flex items-center mt-2 space-x-4">
                <Badge className="bg-white/20 backdrop-blur-sm text-white">
                  <MapPin className="w-3 h-3 mr-1" />
                  {specialist.pais}
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-sm text-white">
                  {specialist.experiencia}
                </Badge>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-5 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatsPopUp
                id={1}
                icon={Award}
                title="Rating"
                value={specialist.rating}
              />
              <StatsPopUp
                id={2}
                icon={Target}
                title="Proyectos"
                value={specialist.proyectos}
              />
              <StatsPopUp
                id={3}
                icon={TrendingUp}
                title="Experiencia"
                value={specialist.experiencia}
              />
            </div>

            {/* Descripción completa */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Quote className="w-5 h-5 mr-2 text-redCustom" />
                Sobre {specialist.nombre.split(" ")[0]}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm text-justify">
                {specialist.descripcionCompleta}
              </p>
            </div>

            {/* Especialidades */}
            <div>
              <h3 className="text-xl font-bold mb-4">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {specialist.especialidades.map(({ id, nombre }) => (
                  <Badge
                    key={id}
                    className="bg-redCustom hover:bg-redCustom/90 text-white text-xs"
                  >
                    {nombre}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Logros */}
            <div>
              <h3 className="text-xl font-bold mb-4">Logros Destacados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specialist.logros.map(({ id, logro }) => (
                  <div key={id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-redCustom rounded-full mt-2 shrink-0" />
                    <p className="text-gray-700 text-xs">{logro}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de acción */}
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 bg-redCustom hover:bg-redCustom/90">
                Solicitar Consultoría
              </Button>
              <Button variant="outline" className="flex-1">
                Ver Casos de Éxito
              </Button>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
