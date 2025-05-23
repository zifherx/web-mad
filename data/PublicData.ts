import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { MenuFooterProp, SocialButtonProp } from "@/types";
import { CarouselBannerItem, LinkIcon } from "@/interfaces";
import { animate } from "framer-motion";

export const MenuFooterData: MenuFooterProp[] = [
  {
    id: 1,
    titleMenu: "Enlaces Rápidos",
    childrens: [
      {
        id: 1,
        titleOption: "Inicio",
        linkOption: "/",
      },
      {
        id: 2,
        titleOption: "Quienes Somos",
        linkOption: "/quienes-somos",
      },
      {
        id: 3,
        titleOption: "Servicios",
        linkOption: "/servicios",
      },
      {
        id: 4,
        titleOption: "Blog",
        linkOption: "/blog",
      },
      {
        id: 5,
        titleOption: "Contacto",
        linkOption: "/contacto",
      },
    ],
  },
  {
    id: 2,
    titleMenu: "Blog",
    childrens: [
      {
        id: 1,
        titleOption: "Marketing",
        linkOption: "/blog/marketing",
      },
      {
        id: 2,
        titleOption: "Transformación Digital",
        linkOption: "/blog/transformacion-digital",
      },
      {
        id: 3,
        titleOption: "Industrias",
        linkOption: "/blog/industrias",
      },
      {
        id: 4,
        titleOption: "Negocios",
        linkOption: "/blog/negocios",
      },
      {
        id: 5,
        titleOption: "CX",
        linkOption: "/customer-experience",
      },
    ],
  },
];

export const SocialButtonData: SocialButtonProp[] = [
  {
    id: 1,
    href: "https://www.facebook.com/MarketerosAlMundo",
    iconName: FaWhatsapp,
    target: "_blank",
    srOnly: "Whatsapp",
  },
  {
    id: 2,
    href: "https://www.instagram.com/marketing_al_dia/",
    iconName: FaInstagram,
    target: "_blank",
    srOnly: "Instagram",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/company/65540696/admin/page-posts/published/",
    iconName: FaLinkedin,
    target: "_blank",
    srOnly: "Linkedin",
  },
  {
    id: 4,
    href: "https://www.youtube.com/@marketingaldiaperu",
    iconName: AiOutlineYoutube,
    target: "_blank",
    srOnly: "Youtube",
  },
];

export const ToolbarHeaderData: LinkIcon[] = [
  {
    href: "mailto:contacto@marketingaldia.net",
    icon: Mail,
    text: "contacto@marketingaldia.net",
  },
  {
    href: "tel:938163886",
    icon: Phone,
    text: "938 163 886",
  },
];

export const BannerCarruselData: CarouselBannerItem[] = [
  {
    id: 1,
    title: "Transforma Tu Negocio con Marketing que Funciona",
    description:
      "Estrategias digitales comprobadas que generan leads, ventas y crecimiento real para tu empresa",
    imageItem: {
      id: 1,
      imageSource: "alex-elias.png",
      imageAlt: "Alex Elias Banner",
    },
    positionImage: "right",
    btnCTA1: {
      id: 1,
      buttonHref: "#",
      buttonText: "Agenda tu Consulta",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "#",
      buttonText: "Ver Casos de Éxito",
    },
    motionDivImage: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay: 0.2 },
    },
    motionDivText: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
    },
  },
  {
    id: 2,
    title: "Marketing Digital de Vanguardia para Marcas Ambiciosas",
    description:
      "Mantente adelante de la competencia con las últimas tendencias y tecnologías del marketing digital",
    imageItem: {
      id: 1,
      imageSource: "clinton-flores2.png",
      imageAlt: "Clinton Flores Banner",
    },
    positionImage: "left",
    btnCTA1: {
      id: 1,
      buttonHref: "#",
      buttonText: "Comienza Ahora",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "#",
      buttonText: "Descubre Nuestros Servicios",
    },
    motionDivImage: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5 },
    },
    motionDivText: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, delay: 0.2 },
    },
  },
  {
    id: 3,
    title: "Expertos en Marketing Digital con +5 Años de Experiencia",
    description:
      "Confía en profesionales que han ayudado a cientos de empresas a alcanzar sus objetivos digitales",
    imageItem: {
      id: 1,
      imageSource: "elkin-avendano.png",
      imageAlt: "Elkin Avendano Banner",
    },
    positionImage: "right",
    btnCTA1: {
      id: 1,
      buttonHref: "#",
      buttonText: "Solicita Propuesta",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "#",
      buttonText: "Conoce al Equipo",
    },
    motionDivImage: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay: 0.2 },
    },
    motionDivText: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
    },
  },
];
