"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CatalogoServiciosData } from "@/data";

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-redCustom transition-colors"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Menu size={24} className="text-white" strokeWidth={2} />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <nav className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>

              <div>
                <div className="px-4 py-2 text-gray-700 font-medium">
                  Nosotros
                </div>
                <div className="pl-6 space-y-1">
                  {/* </div></div>{[].map((item) => ( */}
                  {/* <Link */}
                  {/* key={item.name} */}
                  {/* href={item.href} */}
                  {/* className="block px-4 py-2 text-sm text-gray-600 hover:text-redCustom hover:bg-gray-50 transition-colors" */}
                  {/* onClick={() => setIsOpen(false)} */}
                  {/* > */}
                  {/* {item.name} */}
                  {/* </Link> */}
                  {/* ))} */}
                </div>
              </div>

              <div>
                <div className="px-4 py-2 text-gray-700 font-medium">
                  Servicios
                </div>
                <div className="pl-6 space-y-1">
                  {CatalogoServiciosData.map(({ menuTitle, slug, id }) => (
                    <Link
                      key={id}
                      href={`/servicios/${slug}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-redCustom hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {menuTitle}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/madnews"
                className="block px-4 py-2 text-gray-700 hover:text-redCustom hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Comunidad
              </Link>

              <Link
                href="/contacto"
                className="block px-4 py-2 text-gray-700 hover:text-redCustom hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>

              <div className="px-4 pt-4">
                <Button
                  asChild
                  className="w-full bg-redCustom hover:bg-redCustom/90"
                >
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    Consulta Gratuita
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
