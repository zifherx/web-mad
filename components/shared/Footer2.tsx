"use client";

import { MenuFooterData, SocialButtonData } from "@/data";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { OptionFooter } from "./OptionFooter";
import { SocialButton } from "./SocialButton";
import { LinkHref } from "./LinkHref";

export function Footer2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blueCustom text-white">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block mx-auto">
              <Image
                src={`/images/logos/logo-mad-white.png`}
                alt="Marketing Al Día"
                width={180}
                height={50}
                className="h-16 w-auto mx-auto brightness-0 invert"
              />
            </Link>

            <p className="leading-relaxed max-w-md">
              Transformamos negocios a través de estrategias innovadoras y
              soluciones digitales de clase mundial. Más de una década ayudando
              a emrpesas a crecer.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-redCustom" />
                <Link
                  href="mailto:info@marketingaldia.net"
                  className="hover:text-orangeCustom/90 transition-colors"
                >
                  info@marketingaldia.net
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-redCustom" />
                <Link
                  href="tel:+51963454290"
                  className="hover:text-orangeCustom/90 transition-colors"
                >
                  +51 963 454 290
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-redCustom" />
                <span>Latinoamérica & Europa</span>
              </div>
            </div>
          </div>

          {MenuFooterData.filter((item) => item.id < 4).map(
            ({ childrens, id, titleMenu }) => (
              <OptionFooter
                key={id}
                id={id}
                childrens={childrens}
                titleMenu={titleMenu}
              />
            )
          )}
        </div>

        <div className="border-t border-gray-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
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

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              {MenuFooterData.filter((item) => item.id === 4).map(
                ({ childrens, id }) => (
                  <div key={id} className="flex space-x-6">
                    {childrens.map(({ id, linkOption, titleOption }) => (
                      <Link
                        key={id}
                        href={linkOption}
                        className="hover:text-redCustom transition-colors"
                      >
                        {titleOption}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-center md:text-base gap-2 md:gap-0 justify-between mt-8 pt-8 border-t border-gray-900">
            <p className="text-gray-100 text-sm">
              © {currentYear} Marketing Al Día. Todos los derechos reservados.
            </p>
            <span className="text-sm hover:text-redCustom transition-colors">
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
