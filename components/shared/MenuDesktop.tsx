"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "../ui/navigation-menu";

import { cn } from "@/lib/utils";
import { ListItem } from "./ListItemMenu";
import { MenuServicios } from "@/data";
import { Button } from "../ui/button";

export function MenuDesktop() {
  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent font-semibold text-lg hover:bg-transparent hover:text-redCustom/80"
              )}
            >
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent font-semibold text-lg hover:bg-transparent hover:text-redCustom/80">
            Nosotros
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <a
                    href="/nosotros/quienes-somos"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orangeCustom/60 to-redCustom p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Marketing Al Día
                    </div>
                    <p className="text-sm leading-tight text-gray-100">
                      Conoce más sobre nuestra comunidad y misión
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/nosotros/quienes-somos" title="Quiénes Somos">
                Nuestra historia, misión y visión empresarial
              </ListItem>
              <ListItem href="/nosotros/especialistas" title="Especialistas">
                Conoce a nuestro equipo de expertos
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent font-semibold text-lg hover:bg-transparent hover:text-redCustom/80">
            Servicios
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2">
              {MenuServicios.map(({ description, id, slug, title }) => (
                <ListItem key={id} href={`/servicios/${slug}`} title={title}>
                  {description}
                </ListItem>
              ))}
              <li className="col-span-full mt-4 flex justify-center">
                <Button
                  asChild
                  className="w-full bg-redCustom hover:bg-orangeCustom"
                >
                  <Link href="/servicios">Ver todos los servicios</Link>
                </Button>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent font-semibold text-lg hover:bg-transparent hover:text-redCustom/80">
            Comunidad
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <ListItem href="/comunidad/madnews" title="Madnews">
                Noticias y tendencas del mundo del marketing
              </ListItem>
              <ListItem href="/comunidad/podcast" title="Podcast">
                Escucha nuestros podcasts con expertos
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent font-semibold text-lg hover:bg-transparent hover:text-redCustom/80"
            )}
          >
            <Link href="/contacto">Contacto</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
