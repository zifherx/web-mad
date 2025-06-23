import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-muted-foreground md:text-xl mb-8">
            No espere más. Contáctano hoy y comienza a transformar tu negocio
            con estrategias que realmente funcionan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-redCustom hover:bg-orangeCustom cursor-pointer"
            >
              Agendar Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border border-gray-300 hover:border-orangeCustom hover:text-orangeCustom cursor-pointer"
              asChild
            >
              <Link href="/nosotros/especialistas">
                Ver a Nuestros Especialistas
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
