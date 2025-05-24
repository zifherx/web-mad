"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { LinkHref } from "./LinkHref";
import { OptionFooter } from "./OptionFooter";
import { SocialButton } from "./SocialButton";

import { MenuFooterData, SocialButtonData } from "@/data";

export function Footer() {
  const today = new Date().getFullYear();

  return (
    <footer className="bg-blueCustom text-white">
      <div className="container  mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14">
          <div className="space-y-5">
            <Image
              src={`/images/logos/logo-mad-white.png`}
              alt="MAD Logo"
              width={180}
              height={50}
              className="mx-auto"
            />
            <p className="text-primary-foreground/90 max-w-xs text-center mx-auto">
              Conectando mentes líderes, acelerando negocios que transforman el
              futuro.
            </p>
            <div className="flex space-x-4 justify-center">
              {SocialButtonData.map(
                ({ href, iconName, id, srOnly, target }) => (
                  <SocialButton
                    key={id}
                    id={id}
                    href={href}
                    iconName={iconName}
                    srOnly={srOnly}
                    target={target}
                  />
                )
              )}
            </div>
          </div>
          {MenuFooterData.map(({ childrens, id, titleMenu }) => (
            <OptionFooter
              key={id}
              id={id}
              childrens={childrens}
              titleMenu={titleMenu}
            />
          ))}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-5">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <div>
                  <a
                    href="tel:938163886"
                    className="hover:text-redCustom/80 transition"
                  >
                    938 163 886
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <a
                  href="mailto:contacto@marketingaldia.net"
                  className="hover:text-redCustom/80 transition"
                >
                  contacto@marketingaldia.net
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 shrink-0" />
                <span>Atención a todo el Perú</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80">
            © {today} Marketing Al Día. Todos los derechos reservados
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <LinkHref
              href="/politiva-privacidad"
              text="Política de Privacidad"
            />
            <LinkHref
              href="/terminos-y-condiciones"
              text="Términos y Condiciones"
            />
            <span className="text-sm text-primary-foreground/80 hover:text-primary-foreground/100 transition">
              Diseñado por{" "}
              <LinkHref
                href="https://ziphonex.com"
                target="_blank"
                text="Ziphonex"
                className="font-bold"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
