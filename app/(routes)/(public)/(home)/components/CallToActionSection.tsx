import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="py-16 bg-orangeCustom">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar
            tus objetivos
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="hover:scale-110"
          >
            <Link href="/contacto">
              <Phone className="mr-2 w-5 h-5" />
              Contáctanos Ahora
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
