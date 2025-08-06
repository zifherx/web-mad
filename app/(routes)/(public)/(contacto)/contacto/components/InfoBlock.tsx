"use client";

import { Book, Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoItem } from "@/components/shared/InfoItem";

import { InfoItemData } from "@/data";
import { BtnLargeWhatsApp } from "@/components/shared/BtnLargeWhatsApp";
import { NUMERO_WHATSAPP, WHATSAPP_MESSAGES } from "@/utils/Constants";

export function InfoBlock() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105">
        <CardHeader>
          <CardTitle className="text-md md:text-2xl flex items-center gap-2">
            <Book className="h-5 w-5 text-orangeCustom" />
            Información de Contacto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {InfoItemData.map(({ id, icon, text, value }) => (
            <InfoItem key={id} id={id} icon={icon} text={text} value={value} />
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105">
        <CardHeader>
          <CardTitle className="text-md md:text-2xl flex items-center gap-2">
            <Clock className="h-5 w-5 text-orangeCustom" />
            Horario de Atención
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium">Lunes - Viernes</span>
            <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Sábado</span>
            <span className="text-muted-foreground">10:00 AM - 2:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Domingo</span>
            <span className="text-muted-foreground">Cerrado</span>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-0 bg-gradient-to-r from-redCustom to-orangeCustom text-white transition-all duration-300 hover:shadow-xl hover:scale-105">
        <CardHeader>
          <CardTitle>Respuesta Rápida</CardTitle>
          <CardDescription className="text-white/90">
            ¿Necesitas una respuesta inmediata?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-white/90">
            Contáctanos directamente por WhatsApp y te responderemos en minutos.
          </p>
          <BtnLargeWhatsApp
            text="Chatea con nosotros"
            celular={NUMERO_WHATSAPP}
            mensaje={WHATSAPP_MESSAGES.CONTACTO_CHATEA_CON_NOSOTROS}
          />
        </CardContent>
      </Card>
    </div>
  );
}
