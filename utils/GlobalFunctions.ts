import { IService, NumerParseResult } from "@/interfaces";
import { Metadata } from "next";

export const parseCounterValue = (
  finalNumber: string | number
): NumerParseResult => {
  if (typeof finalNumber === "number") {
    return {
      isNumber: true,
      numericValue: finalNumber,
      originalValue: finalNumber,
    };
  }

  const stringValue = finalNumber.toString();

  const match = stringValue.match(/^([^0-9]*)?([0-9]+(?:\.[0-9]+)?)(.*)?$/);

  if (match) {
    const [, prefixSymbol = "", numberPart, suffixSymbol = ""] = match;
    const numericValue = parseFloat(numberPart);
    const symbol = (prefixSymbol + suffixSymbol).trim();
    return {
      isNumber: false,
      numericValue,
      symbol: symbol || undefined,
      originalValue: finalNumber,
    };
  }

  return {
    isNumber: false,
    numericValue: 0,
    symbol: stringValue,
    originalValue: finalNumber,
  };
};

export const createWhatsappChatLink = (
  celular: string,
  mensaje: string
): string => {
  const message = encodeURIComponent(mensaje);
  return `https://wa.me/51${celular}?text=${message}`;
};

export const METADATA: Metadata = {
  title: {
    template: "%s | Marketing Al Día",
    default:
      "Marketing Al Día - Comunidad de Expertos en Marketing y Negocios Latinoamérica",
  },
  description:
    "Únete a la comunidad líder que reúne a los referentes más importantes de Latinoamérica y Europa en Marketing, Ventas, Negocios y Liderazgo. Consultoría estratégica, conferencias de alto impacto, desarrollo web y programas de aceleración empresarial para emprendedores y corporativos.",
  keywords:
    "marketing digital, estrategia de negocios, consultoría empresarial, emprendimiento latinoamérica, conferencias marketing, desarrollo web, ecommerce, CX experiencia cliente, aceleración empresarial",
  authors: {
    name: "Marketing Al Día",
  },
  creator: "Marketing Al Día",
  publisher: "Marketing Al Día",
  openGraph: {
    title: "Marketing Al Día - Comunidad de Expertos en Marketing y Negocios",
    description:
      "Comunidad que reúne a los referentes más importantes de Latinoamérica y Europa en Marketing, Ventas, Negocios y Liderazgo. Consultoría estratégica y programas de aceleración empresarial.",
    url: "https://marketingaldia.net",
    siteName: "Marketing Al Día",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Al Día - Comunidad de Expertos en Marketing y Negocios",
    description:
      "Únete a la comunidad líder en Marketing, Ventas y Negocios de Latinoamérica y Europa. Consultoría estratégica y programas de aceleración empresarial.",
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://marketingaldia.net",
    languages: {
      "es-PE": "/es-PE",
    },
  },
  verification: {
    google: "google",
  },
};

export const getRandomServices = (servicios: IService[]): IService[] => {
  if (servicios.length <= 4) {
    return [...servicios];
  }

  const servicesCopy = [...servicios];
  const randomServices: IService[] = [];

  for (let i = 0; i < 4; i++) {
    const randonIndex = Math.floor(Math.random() * servicesCopy.length);
    randomServices.push(servicesCopy[randonIndex]);
    servicesCopy.splice(randonIndex, 1);
  }

  return randomServices;
};
