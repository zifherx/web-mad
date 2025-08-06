import { BtnLargeWhatsApp } from "@/components/shared/BtnLargeWhatsApp";
import { Button } from "@/components/ui/button";
import { NUMERO_WHATSAPP, WHATSAPP_MESSAGES } from "@/utils/Constants";
import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-redCustom to-orangeCustom text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-xl mb-8">
              Contáctanos hoy mismo y descubre cómo nuestros servicios puedes
              ayudarte a alcanzar tus objetivos empresariales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-black hover:bg-transparent hover:border-white hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Link href="/contacto">Solicitar Asesoría Gratuita</Link>
              </Button>
              <BtnLargeWhatsApp
                celular={NUMERO_WHATSAPP}
                mensaje={WHATSAPP_MESSAGES.SERVICIOS_CONTACTANOS}
                text="Contáctanos"
              />
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl hidden md:block">
            <Image
              src={`https://placehold.co/600x400`}
              alt={`Contacta con Marketing Al Día`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
