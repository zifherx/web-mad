import { Button } from "@/components/ui/button";
import { NUMERO_WHATSAPP, WHATSAPP_MESSAGES } from "@/utils/Constants";
import { createWhatsappChatLink } from "@/utils/GlobalFunctions";
import { MessageSquare, Phone } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orangeCustom to-pink-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:texl-6xl font-bold mb-6 animate-in">
            Hablemos de Tu Proyecto
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-accordion-up">
            Estamos aquí para ayudarte a transformar tu negocio. Contáctanos y
            descubre cómo podemos impulsar tu éxito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              className="cursor-pointer"
              asChild
            >
              <Link
                href={createWhatsappChatLink(
                  NUMERO_WHATSAPP,
                  WHATSAPP_MESSAGES.CONTACTO_CHAT_DIRECTO
                )}
                target="_blank"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat Directo
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-redCustom font-medium cursor-pointer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
