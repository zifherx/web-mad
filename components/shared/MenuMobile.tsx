"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import { MobileMenuType } from "@/types";
import { CatalogoServiciosData } from "@/data";
import { cn } from "@/lib/utils";

export function MenuMobile({
  isOpen,
  setIsOpen,
  handleLinkClick,
  openSubmenu,
  setOpenSubmenu,
  toggleSubmenu,
}: MobileMenuType) {
  const services = [
    {
      name: "Todos los Servicios",
      href: "/servicios",
      description: "Explora nuestro portafolio completo",
    },
    ...CatalogoServiciosData.slice(0, 5).map((service) => ({
      name: service.title,
      href: `/servicios/${service.slug}`,
      description: service.menuDescription,
    })),
  ];

  const nosotros = [
    {
      name: "Quiénes Somos",
      href: "/nosotros/quienes-somos",
      description: "Nuestra historia y misión",
    },
    {
      name: "Especialistas",
      href: "/nosotros/especialistas",
      description: "Nuestro equipo de expertos",
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden p-2 text-gray-700 cursor-pointer hover:text-redCustom transition-colors"
        >
          <Menu className="w-24 h-24" strokeWidth={2} />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[400px] h-full p-0 overflow-y-auto"
      >
        <div className="flex flex-col h-full">
          <SheetHeader className="p-6 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logos/logo-mad-original.png"
                  alt="Marketing Al Día"
                  width={120}
                  height={50}
                />
              </div>
            </div>
            <div className="text-left">
              <SheetDescription className="text-sm text-gray-600">
                Explora nuestros servicios y soluciones
              </SheetDescription>
            </div>
          </SheetHeader>

          <nav className="flex-1/2 p-6 space-y-2">
            <Link
              href="/"
              className="flex items-center justify-between p-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-redCustom transition-colors group"
              onClick={handleLinkClick}
            >
              <span className="font-medium">Inicio</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-redCustom transition-colors" />
            </Link>

            {/* Nosotros */}
            <Collapsible
              open={openSubmenu === "nosotros"}
              onOpenChange={() => toggleSubmenu("nosotros")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors group">
                <span className="font-medium">Nosotros</span>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 text-gray-400 group-hover:text-redCustom transition-all duration-200",
                    openSubmenu === "nosotros" && "rotate-90"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-4 mt-2 space-y-1">
                {nosotros.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block p-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-redCustom transition-colors"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Servicios */}
            <Collapsible
              open={openSubmenu === "servicios"}
              onOpenChange={() => toggleSubmenu("servicios")}
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-redCustom transition-colors group">
                <span className="font-medium">Servicios</span>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 text-gray-400 group-hover:text-redCustom transition-all duration-200",
                    openSubmenu === "servicios" && "rotate-90"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-4 mt-2 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={handleLinkClick}
                    className="block p-3 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-redCustom transition-colors"
                  >
                    <div className="font-medium">{service.name}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {service.description}
                    </div>
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>

            {/* Contacto */}
            <Link
              href="/contacto"
              onClick={handleLinkClick}
              className="flex items-center justify-between p-3 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-redCustom transition-colors group"
            >
              <span className="font-medium">Contacto</span>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-redCustom transition-colors" />
            </Link>
          </nav>

          <Separator className="mx-6" />

          <div className="p-6 space-y-4 bg-gray-50">
            <h3 className="font-semibold text-gray-900 text-sm">
              Información de Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-redCustom flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-redCustom transition-colors"
                >
                  +51 963-454-290
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-redCustom flex-shrink-0" />
                <a
                  href="mailto:info@marketingaldia.com"
                  className="hover:text-redCustom transition-colors"
                >
                  info@marketingaldia.net
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-redCustom flex-shrink-0" />
                <span>Latinoamérica & Europa</span>
              </div>
            </div>
          </div>

          <div className="p-6 pt-4">
            <Button
              asChild
              className="w-full bg-redCustom hover:bg-redCustom/90"
              onClick={handleLinkClick}
            >
              <Link href="/contacto">
                <Phone className="w-4 h-4 mr-2" />
                Consulta Gratuita
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
