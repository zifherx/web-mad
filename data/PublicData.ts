import { BarChart3, Lightbulb, Mail, Phone, Users } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

import { MenuFooterProp, SocialButtonProp } from "@/types";
import {
  CarouselBannerItem,
  ICardCounter,
  IServiceCard,
  ITestimonialCard,
  LinkIcon,
  SlideItem,
} from "@/interfaces";

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
      imageSource: "clinton-flores.png",
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

export const CounterItemsData: ICardCounter[] = [
  {
    id: 1,
    title: "Clientes Satisfechos",
    description: "Empresas que confían en nosotros",
    finalNumber: 500,
  },
  {
    id: 2,
    title: "Países",
    description: "Presencia internacional",
    finalNumber: 15,
  },
  {
    id: 3,
    title: "Proyectos",
    description: "Completados exitosamente",
    finalNumber: 1500,
  },
  {
    id: 4,
    title: "Satisfacción",
    description: "Índice de satisfacción",
    finalNumber: "98%",
  },
];

export const SlidesHeroData: SlideItem[] = [
  {
    id: 1,
    image: "alex-elias.png",
    title: "Estrategias de Marketing Innovadoras",
    description:
      "Transformamos tu negocio con estrategias de vanguardia que generan resultados medibles y sostenibles en el tiempo",
    btnCTA1: {
      id: 1,
      buttonHref: "#",
      buttonText: "Descubre Nuestros Servicios",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "#",
      buttonText: "Ver más casos de éxito",
    },
    gradient: "from-purple-600 via-pink-600 to-red-600",
    layout: "left",
  },
  {
    id: 2,
    image: "clinton-flores.png",
    title: "Experiencia de Cliente Excepcional",
    description:
      "Creamos experiencias memorables que fidelizan a tus clientes y aumentan la rentabilidad de tu negocio",
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
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    layout: "right",
  },
  {
    id: 3,
    image: "elkin-avendano.png",
    title: "Desarrollo Web Estratégico",
    description:
      "Sitios web que convierten visitantes en clientes, optimizados para generar el máximo impacto en tu audiencia",
    btnCTA1: {
      id: 1,
      buttonHref: "#",
      buttonText: "Ver Proyectos",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "#",
      buttonText: "Conoce al Equipo",
    },
    gradient: "from-green-600 via-emerald-600 to-cyan-600",
    layout: "left",
  },
];

export const ServiceCardData: IServiceCard[] = [
  {
    id: 1,
    titleService: "Marketing Estratégico",
    descriptionService:
      "Consultoría, conferencias y desarrollo de planes en Marketing Estratégico y Estrategia Digital.",
    icon: BarChart3,
    slug: "marketing-estrategico",
  },
  {
    id: 2,
    titleService: "Customer Experience",
    descriptionService:
      "Consultoría y conferencias en Customer Experience Management y Service Design.",
    icon: Users,
    slug: "customer-experience",
  },
  {
    id: 3,
    titleService: "Desarrollo Web",
    descriptionService:
      "Desarrollo Web e E-Commerce con enfoque estratégico para maximizar resultados.",
    icon: Lightbulb,
    slug: "desarrollo-web",
  },
];

export const TestimonialCardData: ITestimonialCard[] = [
  {
    id: 1,
    title: "María González",
    position: "CEO, Empresa Innovadora",
    imageSource: "https://placeholder.svg?height=100&width=100",
    quote:
      "Marketing Al Día transformó completamente nuestra estrategia digital. Los resultados han sido excepcionales, superando todas nuestras expectativas.",
  },
  {
    id: 2,
    title: "Carlos Rodríguez",
    position: "Director de Marketing, Corporación Global",
    imageSource: "https://placeholder.svg?height=100&width=100",
    quote:
      "Su enfoque estratégico y conocimiento del mercado nos ayudó a posicionarnos como líderes en nuestro sector. Altamente recomendados.",
  },
  {
    id: 3,
    title: "Laura Martínez",
    position: "Fundadora, Startup Tecnológica",
    imageSource: "https://placeholder.svg?height=100&width=100",
    quote:
      "El programa de aceleramiento empresarial fue clave para el crecimiento de nuestra startup. Su equipo es profesional y comprometido con los resultados.",
  },
  {
    id: 4,
    title: "Roberto Silva",
    position: "Gerente General, Retail Corp",
    imageSource: "https://placeholder.svg?height=100&width=100",
    quote:
      "La consultoría en Customer Experience transformó la forma en que interactuamos con nuestros clientes. Increíble retorno de inversión.",
  },
  {
    id: 5,
    title: "Ana Fernández",
    position: "Directora de Ventas, Tech Solutions",
    imageSource: "https://placeholder.svg?height=100&width=100",
    quote:
      "Las conferencias de Marketing Al Día son de altísima calidad. Contenido práctico y aplicable inmediatamente en nuestros procesos.",
  },
  {
    id: 6,
    title: "Diego Morales",
    position: "Fundador, E-commerce Plus",
    imageSource: "https://placeholder.svg?height=100&width=100",
    quote:
      "El desarrollo web que realizaron para nosotros superó todas las expectativas. Profesionales, creativos y orientados a resultados.",
  },
];
