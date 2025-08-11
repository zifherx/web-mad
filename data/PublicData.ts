import {
  AlertCircle,
  Award,
  BarChart3,
  BookOpen,
  Cookie,
  ExternalLink,
  Eye,
  FileText,
  Globe,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Phone,
  Presentation,
  Rocket,
  Shield,
  Target,
  UserCheck,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

import { MenuFooterProp, SocialButtonProp } from "@/types";
import {
  CarouselBannerItem,
  ICardCounter,
  IEspecialidad,
  IEspecialista,
  IFeature,
  ILegal,
  ImageI,
  InfoItem,
  IOrbitalesElement,
  IProtectionNotice,
  IService,
  ITestimonialCard,
  LinkIcon,
  SlideItem,
} from "@/interfaces";
import { createWhatsappChatLink } from "@/utils/GlobalFunctions";
import { NUMERO_WHATSAPP, WHATSAPP_MESSAGES } from "@/utils/Constants";

export const MenuFooterData: MenuFooterProp[] = [
  {
    id: 1,
    titleMenu: "Empresa",
    childrens: [
      {
        id: 1,
        titleOption: "Quienes Somos",
        linkOption: "/quienes-somos",
      },
      {
        id: 2,
        titleOption: "Especialistas",
        linkOption: "/especialistas",
      },
      // {
      //   id: 3,
      //   titleOption: "Blog",
      //   linkOption: "/blog",
      // },
      {
        id: 4,
        titleOption: "Contacto",
        linkOption: "/contacto",
      },
    ],
  },
  {
    id: 2,
    titleMenu: "Servicios",
    childrens: [
      {
        id: 1,
        linkOption: "/servicios/marketing-estrategico",
        titleOption: "Marketing Estratégico",
      },
      {
        id: 2,
        titleOption: "Customer Experience",
        linkOption: "/servicios/customer-experience",
      },
      {
        id: 3,
        titleOption: "Desarrollo Web",
        linkOption: "/servicios/desarrollo-web-ecommerce",
      },
      {
        id: 4,
        titleOption: "Conferencias",
        linkOption: "/servicios/conferencias",
      },
    ],
  },
  // {
  //   id: 3,
  //   titleMenu: "Comunidad",
  //   childrens: [
  //     {
  //       id: 1,
  //       titleOption: "MAD News",
  //       linkOption: "#",
  //       // linkOption: "/comunidad/mad-news",
  //     },
  //     {
  //       id: 2,
  //       titleOption: "Eventos",
  //       linkOption: "#",
  //       // linkOption: "/comunidad/eventos",
  //     },
  //     {
  //       id: 3,
  //       titleOption: "Recursos",
  //       linkOption: "#",
  //       // linkOption: "/comunidad/recursos",
  //     },
  //   ],
  // },
  {
    id: 3,
    titleMenu: "Comunidad",
    childrens: [
      {
        id: 1,
        titleOption: "MAD News",
        linkOption: "#",
        // linkOption: "/comunidad/mad-news",
      },
      {
        id: 2,
        titleOption: "Eventos",
        linkOption: "#",
        // linkOption: "/comunidad/eventos",
      },
      {
        id: 3,
        titleOption: "Recursos",
        linkOption: "#",
        // linkOption: "/comunidad/recursos",
      },
    ],
  },
  {
    id: 4,
    titleMenu: "Legal",
    childrens: [
      {
        id: 1,
        titleOption: "Política de Privacidad",
        linkOption: "/legal/politica-privacidad",
      },
      {
        id: 2,
        titleOption: "Términos y Condiciones",
        linkOption: "/legal/terminos-condiciones",
      },
    ],
  },
];

export const SocialButtonData: SocialButtonProp[] = [
  {
    id: 1,
    href: "https://www.facebook.com/MarketerosAlMundo",
    iconName: FaFacebook,
    iconName: FaFacebook,
    target: "_blank",
    srOnly: "Facebook",
    srOnly: "Facebook",
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
  {
    id: 5,
    href: createWhatsappChatLink(
      NUMERO_WHATSAPP,
      WHATSAPP_MESSAGES.FOOTER_BOTON_WHATSAPP
    ),
    iconName: FaWhatsapp,
    target: "_blank",
    srOnly: "Whatsapp",
  },
  {
    id: 5,
    href: createWhatsappChatLink(
      NUMERO_WHATSAPP,
      WHATSAPP_MESSAGES.FOOTER_BOTON_WHATSAPP
    ),
    iconName: FaWhatsapp,
    target: "_blank",
    srOnly: "Whatsapp",
  },
];

export const ToolbarHeaderData: LinkIcon[] = [
  {
    href: "mailto:info@marketingaldia.net",
    icon: Mail,
    text: "info@marketingaldia.net",
  },
  {
    href: "tel:+51963454290",
    icon: Phone,
    text: "963 454 290",
  },
];

export const BannerCarruselData: CarouselBannerItem[] = [
  {
    id: 1,
    title: "Transformamos Ideas en Estrategias Ganadoras",
    category: "Marketing Estratégico",
    description:
      "Acompañamos a líderes y empresas a redefinir su visión comercial con estrategias modernas, alineadas a los nuevos comportamientos del consumidor",
    imageItem: {
      id: 1,
      imageSource: "alex-elias.png",
      imageAlt: "Alex Elias",
    },
    btnCTA1: {
      id: 1,
      buttonHref: "/contacto",
      buttonText: "Agenda tu Consulta",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "/servicios/marketing-estrategico",
      buttonText: "Conoce más",
    },
  },
  {
    id: 2,
    title: "Experiencias que Enamoran",
    category: "Customer Experience",
    description:
      "Diseñamos experiencias que el cliente no quiere abandonar. Transformamos cada punto de contacto en una oportunidad de fidelización.",
    imageItem: {
      id: 1,
      imageSource: "marco-vives.png",
      imageAlt: "Marco Vives",
    },
    btnCTA1: {
      id: 1,
      buttonHref: "/contacto",
      buttonText: "Comienza Ahora",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "/servicios/customer-experience",
      buttonText: "Descubrir CX",
    },
  },
  {
    id: 3,
    title: "Desarrollo Web que Convierte",
    category: "Soluciones Digitales",
    description:
      "Tu vitrina digital debe vender, no solo verse bien. Creamos sitios web y plataformas E-Commerce pensadas para conversión.",
    imageItem: {
      id: 1,
      imageSource: "fernando-rojas.png",
      imageAlt: "Fernando Rojas",
    },
    btnCTA1: {
      id: 1,
      buttonHref: "/contacto",
      buttonText: "Solicita Propuesta",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "/servicios/desarrollo-web-ecommerce",
      buttonText: "Ver Proyectos",
    },
  },
  {
    id: 4,
    title: "Conferencias de Alto Impacto",
    category: "Inspiración + Acción",
    description:
      "No inspiramos por inspirar, inspiramos para accionar. Conferencias diseñadas para remover estructuras mentales y activar decisiones.",
    imageItem: {
      id: 1,
      imageSource: "walter-cabanillas.png",
      imageAlt: "Walter Cabanillas",
    },
    btnCTA1: {
      id: 1,
      buttonHref: "/contacto",
      buttonText: "Solicitar Información",
    },
    btnCTA2: {
      id: 2,
      buttonHref: "/servicios/conferencias",
      buttonText: "Ver Conferencias",
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

export const TestimonialCardData: ITestimonialCard[] = [
  {
    id: 1,
    title: "María González",
    position: "CEO, Empresa Innovadora",
    // imageSource: "https://placeholder.svg?height=100&width=100",
    imageSource: "https://github.com/shadcn.png",
    // imageSource: "https://placeholder.svg?height=100&width=100",
    // imageSource: "https://placeholder.svg?height=100&width=100",
    quote:
      "Marketing Al Día transformó completamente nuestra estrategia digital. Los resultados han sido excepcionales, superando todas nuestras expectativas.",
  },
  {
    id: 2,
    title: "Carlos Rodríguez",
    position: "Director de Marketing, Corporación Global",
    imageSource: "https://github.com/leerob.png",
    quote:
      "Su enfoque estratégico y conocimiento del mercado nos ayudó a posicionarnos como líderes en nuestro sector. Altamente recomendados.",
  },
  {
    id: 3,
    title: "Laura Martínez",
    position: "Fundadora, Startup Tecnológica",
    imageSource: "https://github.com/shadcn.png",
    quote:
      "El programa de aceleramiento empresarial fue clave para el crecimiento de nuestra startup. Su equipo es profesional y comprometido con los resultados.",
  },
  {
    id: 4,
    title: "Roberto Silva",
    position: "Gerente General, Retail Corp",
    imageSource: "https://github.com/leerob.png",
    quote:
      "La consultoría en Customer Experience transformó la forma en que interactuamos con nuestros clientes. Increíble retorno de inversión.",
  },
  {
    id: 5,
    title: "Ana Fernández",
    position: "Directora de Ventas, Tech Solutions",
    imageSource: "https://github.com/shadcn.png",
    quote:
      "Las conferencias de Marketing Al Día son de altísima calidad. Contenido práctico y aplicable inmediatamente en nuestros procesos.",
  },
  {
    id: 6,
    title: "Diego Morales",
    position: "Fundador, E-commerce Plus",
    imageSource: "https://github.com/leerob.png",
    quote:
      "El desarrollo web que realizaron para nosotros superó todas las expectativas. Profesionales, creativos y orientados a resultados.",
  },
];

export const SociosEstrategicosData: ImageI[] = [
  {
    id: 1,
    imageAlt: "Campus Romero",
    imageSource: "campus-romero.png",
  },
  {
    id: 2,
    imageAlt: "CX Latam Group",
    imageSource: "cx-latam.png",
  },
  {
    id: 3,
    imageAlt: "Doppler",
    imageSource: "doppler.png",
  },
  {
    id: 4,
    imageAlt: "Marco Vives",
    imageSource: "marco-cx.png",
  },
  {
    id: 5,
    imageAlt: "Master Coach 180",
    imageSource: "master-coach180.png",
  },
  {
    id: 6,
    imageAlt: "Microsoft",
    imageSource: "microsoft.png",
  },
  {
    id: 7,
    imageAlt: "AEVD",
    imageSource: "logo-aevd.png",
  },
  {
    id: 8,
    imageAlt: "Ceinfor",
    imageSource: "logo-ceinfor.png",
  },
  {
    id: 9,
    imageAlt: "Code",
    imageSource: "logo-code.png",
  },
  {
    id: 10,
    imageAlt: "Código Empresarial",
    imageSource: "logo-codigo-empresarial.png",
  },
  {
    id: 11,
    imageAlt: "Domingo Savio",
    imageSource: "logo-domingo-savio.png",
  },
  {
    id: 12,
    imageAlt: "Ek Consulting",
    imageSource: "logo-ek-consulting.png",
  },
  {
    id: 13,
    imageAlt: "GMA",
    imageSource: "logo-gma.png",
  },
  {
    id: 14,
    imageAlt: "Group MarkeThing",
    imageSource: "logo-group-markething.png",
  },
  {
    id: 15,
    imageAlt: "Indice Capital",
    imageSource: "logo-indice-capital.png",
  },
  {
    id: 16,
    imageAlt: "IPN",
    imageSource: "logo-ipn.png",
  },
  {
    id: 17,
    imageAlt: "Ismac",
    imageSource: "logo-ismac.png",
  },
  {
    id: 18,
    imageAlt: "Megavatio",
    imageSource: "logo-megavatio.png",
  },
  {
    id: 19,
    imageAlt: "Consumer Truth",
    imageSource: "logo-consumer-truth.png",
  },
  {
    id: 20,
    imageAlt: "Municipalidad de Lima",
    imageSource: "logo-muni-lima.png",
  },
  {
    id: 21,
    imageAlt: "Peruano Innovador",
    imageSource: "logo-peruano-innovador.png",
  },
  {
    id: 22,
    imageAlt: "Prodequa",
    imageSource: "logo-prodequa.png",
  },
  {
    id: 23,
    imageAlt: "DNN",
    imageSource: "logo-dnn.png",
  },
  {
    id: 24,
    imageAlt: "Zona Urea",
    imageSource: "logo-zona-urea.png",
  },
  {
    id: 25,
    imageAlt: "Lety Mind",
    imageSource: "logo-letymind.png",
  },
  {
    id: 26,
    imageAlt: "SES",
    imageSource: "logo-ses.png",
  },
  {
    id: 27,
    imageAlt: "El Tiburón Daniel",
    imageSource: "logo-el-tiburon-negro.png",
  },
  {
    id: 26,
    imageAlt: "SES",
    imageSource: "logo-ses.png",
  },
  {
    id: 27,
    imageAlt: "El Tiburón Daniel",
    imageSource: "logo-el-tiburon-negro.png",
  },
];

export const InfoItemData: InfoItem[] = [
  {
    id: 1,
    icon: Phone,
    text: "Teléfono",
    value: "+51 938 163 886",
  },
  {
    id: 2,
    icon: Mail,
    text: "Email",
    value: "info@marketingaldia.net",
  },
  {
    id: 3,
    icon: MapPin,
    text: "Dirección",
    value: "San Isidro, Lima, Perú",
  },
];

export const ShortSeviceData: IFeature[] = [
  {
    id: 1,
    title: "Enfoque Estratégico",
    description:
      "No nos quedamos en la superficie. Analizamos a fondo tu negocio para crear soluciones que realmente impacten.",
  },
  {
    id: 2,
    title: "Experiencia Comprobada",
    description:
      "Contamos con un equipo de expertos con amplia trayectoria en diferentes industrias y mercados.",
  },
  {
    id: 3,
    title: "Resultados Medibles",
    description:
      "Nos enfocamos en generar resultados tangibles y medibles que impacten positivamente en tu negocio.",
  },
  {
    id: 2,
    title: "Experiencia Comprobada",
    description:
      "Contamos con un equipo de expertos con amplia trayectoria en diferentes industrias y mercados.",
  },
  {
    id: 3,
    title: "Resultados Medibles",
    description:
      "Nos enfocamos en generar resultados tangibles y medibles que impacten positivamente en tu negocio.",
  },
  {
    id: 4,
    title: "Innovación Constante",
    description:
      "Estamos siempre a la vanguardia, incorporando las últimas tendencias y tecnologías a nuestras soluciones.",
  },
  {
    id: 5,
    title: "Enfoque Personalizado",
    description:
      "Cada negocio es único. Desarrollamos estrategias a medida que se adaptan a tus necesidades específicas.",
  },
  {
    id: 6,
    title: "Acompañamiento Continuo",
    description:
      "No solo entregamos soluciones, sino que te acompañamos en todo el proceso de implementación y mejora.",
  },
];

export const CatalogoServiciosData: IService[] = [
  {
    id: 1,
    title: "Consultoría y Conferencias en Marketing Estratégico",
    menuTitle: "Marketing Estratégico",
    menuDescription: "Estrategías que marcan el rumbo",
    slug: "marketing-estrategico",
    shortDescription:
      "Decisiones que marcan el rumbo. Acompañamos a líderes y empresas a redefinir su visión comercial con estrategias modernas.",
    longDescription:
      "Acompañamos a líderes y empresas a redefinir su visión comercial con estrategias modernas, alineadas a los nuevos comportamientos del consumidor. Desde la construcción de una propuesta de valor hasta la implementación de tácticas digitales efectivas, entregamos consultoría con mirada ejecutiva y conferencias que no dejan indiferente a nadie sino asombrados al que asiste.",
    features: [
      {
        id: 1,
        feature: "Consultoría especializada",
      },
      {
        id: 2,
        feature: "Customer Experience",
      },
      {
        id: 3,
        feature: "Estrategia digital",
      },
      {
        id: 4,
        feature: "Conferencias de impacto",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Estrategias alineadas al consumidor moderno",
        description:
          "Desarrollamos estrategias que conectan con los nuevos comportamientos y expectativas del consumidor digital.",
      },
      {
        id: 2,
        benefit: "Conferencias de alto impacto",
        description:
          "Presentaciones que no solo inspiran, sino que activan decisiones concretas en tu organización.",
      },
      {
        id: 3,
        benefit: "Consultoría ejecutiva especializada",
        description:
          "Asesoramiento estratégico con enfoque ejecutivo para decisiones que transforman el negocio.",
      },
      {
        id: 4,
        benefit: "Implementación de tácticas digitales",
        description:
          "Traducimos la estrategia en acciones digitales concretas y medibles que generan resultados.",
      },
      {
        id: 5,
        benefit: "Propuesta de valor diferenciada",
        description:
          "Construimos una propuesta única que te distingue claramente de la competencia en el mercado.",
      },
      {
        id: 6,
        benefit: "ROI medible y sostenible",
        description:
          "Todas nuestras estrategias están diseñadas para generar retorno de inversión comprobable y duradero.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "CEOs y directores ejecutivos",
      },
      {
        id: 2,
        target: "Directores de marketing",
      },
      {
        id: 3,
        target: "Gerentes comerciales",
      },
      {
        id: 4,
        target: "Empresas en crecimiento",
      },
      {
        id: 5,
        target: "Startups con tracción",
      },
      {
        id: 6,
        target: "Corporativos en transformación",
      },
    ],
    process: [
      {
        step: 1,
        title: "Diagnóstico Estratégico",
        description:
          "Análisis profundo del entorno, competencia y capacidades internas",
      },
      {
        step: 2,
        title: "Definición de Estrategia",
        description:
          "Construcción de propuesta de valor y estrategias diferenciadas",
      },
      {
        step: 3,
        title: "Plan de Implementación",
        description: "Desarrollo de tácticas digitales y plan de ejecución",
      },
      {
        step: 4,
        title: "Conferencias y Capacitación",
        description: "Transferencia de conocimiento y activación de equipos",
      },
      {
        step: 5,
        title: "Seguimiento y Optimización",
        description: "Monitoreo de resultados y ajustes estratégicos",
      },
    ],
    image: "marketing-estrategico.png",
    icon: BarChart3,
  },
  {
    id: 2,
    title: "Desarrollo de Planes en Marketing Estratégico",
    menuTitle: "Planes de Marketing",
    menuDescription: "Planes ejecutables que general resultados",
    slug: "planes-marketing",
    shortDescription:
      "Tu brújula para competir con inteligencia. Creamos planes que no se quedan en el PowerPoint: se diseñan para ejecutarse.",
    longDescription:
      "Creamos planes que no se quedan en el PowerPoint: se diseñan para ejecutarse. Analizamos el entorno, la competencia, tus capacidades internas y tu cliente ideal para crear un plan accionable, medible y con retorno. Si estás cansado de las 'ideas bonitas' sin resultados, este es el servicio que te sacude la estrategia.",
    features: [
      {
        id: 1,
        feature: "Análisis del entorno",
      },
      {
        id: 2,
        feature: "Estudio de competencia",
      },
      {
        id: 3,
        feature: "Cliente ideal",
      },
      {
        id: 4,
        feature: "Plan accionable",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Planes ejecutables y medibles",
        description:
          "Desarrollamos planes con métricas claras y pasos específicos que tu equipo puede implementar inmediatamente.",
      },
      {
        id: 2,
        benefit: "Análisis integral del mercado",
        description:
          "Investigación profunda del entorno competitivo y oportunidades de mercado para decisiones informadas.",
      },
      {
        id: 3,
        benefit: "ROI garantizado",
        description:
          "Cada plan está diseñado con objetivos financieros claros y métricas de retorno de inversión específicas.",
      },
      {
        id: 4,
        benefit: "Estrategias centradas en el cliente",
        description:
          "Todos nuestros planes parten del entendimiento profundo de tu cliente ideal y sus necesidades reales.",
      },
      {
        id: 5,
        benefit: "Ventaja competitiva sostenible",
        description:
          "Identificamos y desarrollamos ventajas únicas que son difíciles de replicar por la competencia.",
      },
      {
        id: 6,
        benefit: "Resultados tangibles",
        description:
          "Nos enfocamos en generar resultados concretos y medibles que impacten directamente en tu negocio.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Empresas sin estrategia clara",
      },
      {
        id: 2,
        target: "Equipos de marketing",
      },
      {
        id: 3,
        target: "Gerentes de producto",
      },
      {
        id: 4,
        target: "Empresas en expansión",
      },
      {
        id: 5,
        target: "Negocios estancados",
      },
      {
        id: 6,
        target: "Organizaciones en pivote",
      },
    ],
    process: [
      {
        step: 1,
        title: "Análisis del Entorno",
        description: "Estudio del mercado, tendencias y oportunidades",
      },
      {
        step: 2,
        title: "Investigación Competitiva",
        description: "Mapeo de competidores y análisis de posicionamiento",
      },
      {
        step: 3,
        title: "Definición de Cliente Ideal",
        description: "Creación de buyer personas y journey mapping",
      },
      {
        step: 4,
        title: "Construcción del Plan",
        description: "Desarrollo de estrategias y tácticas específicas",
      },
      {
        step: 5,
        title: "Implementación y Medición",
        description: "Ejecución del plan con KPIs y métricas de seguimiento",
      },
    ],
    image: "desarrollo-planes-marketing-estrategico.png",
    icon: Target,
  },
  {
    id: 3,
    title: "Desarrollo y Ejecución de Modelos de Negocio",
    menuTitle: "Modelos de Negocio",
    menuDescription: "Modelos sostenibles listos para escalar",
    slug: "modelos-negocio",
    shortDescription:
      "De la idea al modelo rentable. Transformamos conceptos en modelos de negocio sostenibles, listos para escalar.",
    longDescription:
      "Transformamos conceptos en modelos de negocio sostenibles, listos para escalar. Trabajamos desde el lienzo de modelo de negocio hasta la ejecución real, validando hipótesis y aplicando metodologías ágiles. Para quienes buscan innovar, lanzar nuevas líneas de negocio o repensar su core sin improvisar.",
    features: [
      {
        id: 1,
        feature: "Lienzo de modelo de negocio",
      },
      {
        id: 2,
        feature: "Validación de hipótesis",
      },
      {
        id: 3,
        feature: "Metodologías ágiles",
      },
      {
        id: 4,
        feature: "Escalabilidad",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Modelos sostenibles y escalables",
        description:
          "Diseñamos modelos de negocio que pueden crecer de manera rentable y sostenible en el tiempo.",
      },
      {
        id: 2,
        benefit: "Validación de mercado",
        description:
          "Probamos cada hipótesis con usuarios reales antes de la inversión completa, reduciendo riesgos significativamente.",
      },
      {
        id: 3,
        benefit: "Metodologías probadas",
        description:
          "Aplicamos frameworks reconocidos como Lean Startup y Design Thinking para maximizar las probabilidades de éxito.",
      },
      {
        id: 4,
        benefit: "Innovación estructurada",
        description:
          "Convertimos la innovación en un proceso sistemático y repetible dentro de tu organización.",
      },
      {
        id: 5,
        benefit: "Reducción de riesgos",
        description:
          "Identificamos y mitigamos riesgos potenciales antes de que se conviertan en problemas costosos.",
      },
      {
        id: 6,
        benefit: "Crecimiento acelerado",
        description:
          "Optimizamos el tiempo de llegada al mercado y aceleramos la curva de crecimiento del negocio.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Emprendedores con ideas",
      },
      {
        id: 2,
        target: "Empresas innovadoras",
      },
      {
        id: 3,
        target: "Corporativos en transformación",
      },
      {
        id: 4,
        target: "Startups en validación",
      },
      {
        id: 5,
        target: "Inversionistas",
      },
      {
        id: 6,
        target: "Aceleradoras de negocio",
      },
    ],
    process: [
      {
        step: 1,
        title: "Ideación y Conceptualización",
        description: "Desarrollo del concepto y propuesta de valor inicial",
      },
      {
        step: 2,
        title: "Lienzo de Modelo de Negocio",
        description: "Construcción del Business Model Canvas completo",
      },
      {
        step: 3,
        title: "Validación de Hipótesis",
        description: "Testing de mercado y validación con usuarios reales",
      },
      {
        step: 4,
        title: "Prototipado y MVP",
        description: "Desarrollo de producto mínimo viable",
      },
      {
        step: 5,
        title: "Escalamiento",
        description: "Implementación de estrategias de crecimiento",
      },
    ],
    image: "desarrollo-ejecucion-modelos-negocio.png",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Customer Experience Management y Service Design",
    menuTitle: "Customer Experience",
    menuDescription: "Experiencias que enamoran",
    slug: "customer-experience",
    shortDescription:
      "Diseñamos experiencias que el cliente no quiere abandonar. Transformamos cada punto de contacto en una oportunidad.",
    longDescription:
      "Ayudamos a las empresas a dejar de vender y empezar a enamorar. Con un enfoque integral en la gestión de la experiencia del cliente (CX) y el diseño de servicios (Service Design), transformamos cada punto de contacto en una oportunidad de fidelización y diferenciación. La diferencia de hoy radica en la experiencia que generas.",
    features: [
      {
        id: 1,
        feature: "Service Design",
      },
      {
        id: 2,
        feature: "Journey Mapping",
      },
      {
        id: 3,
        feature: "Gestión CX integral",
      },
      {
        id: 4,
        feature: "Fidelización",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Experiencias memorables",
        description:
          "Creamos momentos únicos que los clientes recuerdan y comparten, generando marketing orgánico poderoso.",
      },
      {
        id: 2,
        benefit: "Fidelización de clientes",
        description:
          "Desarrollamos estrategias que convierten clientes ocasionales en embajadores leales de tu marca.",
      },
      {
        id: 3,
        benefit: "Diferenciación competitiva",
        description:
          "Te posicionamos como líder en experiencia del cliente, creando una ventaja difícil de replicar.",
      },
      {
        id: 4,
        benefit: "Puntos de contacto optimizados",
        description:
          "Mejoramos cada interacción del customer journey para maximizar satisfacción y conversión.",
      },
      {
        id: 5,
        benefit: "Aumento en satisfacción",
        description:
          "Incrementamos significativamente los índices de satisfacción y Net Promoter Score (NPS).",
      },
      {
        id: 6,
        benefit: "Mayor valor de vida del cliente",
        description:
          "Extendemos la relación comercial y aumentamos el valor promedio por cliente a largo plazo.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Empresas B2C",
      },
      {
        id: 2,
        target: "Retailers y e-commerce",
      },
      {
        id: 3,
        target: "Empresas de servicios",
      },
      {
        id: 4,
        target: "Hoteles y restaurantes",
      },
      {
        id: 5,
        target: "Bancos y fintech",
      },
      {
        id: 6,
        target: "Empresas con alta rotación",
      },
    ],
    process: [
      {
        step: 1,
        title: "Research y Diagnóstico",
        description:
          "Investigación de usuarios y análisis de experiencia actual",
      },
      {
        step: 2,
        title: "Journey Mapping",
        description: "Mapeo completo del viaje del cliente",
      },
      {
        step: 3,
        title: "Service Design",
        description: "Diseño de servicios y puntos de contacto",
      },
      {
        step: 4,
        title: "Prototipado de Experiencias",
        description: "Testing y validación de nuevas experiencias",
      },
      {
        step: 5,
        title: "Implementación y Medición",
        description: "Despliegue y monitoreo de métricas CX",
      },
    ],
    image: "customer-experience-management.png",
    icon: Users,
  },
  {
    id: 5,
    title: "Conferencias de Alto Impacto",
    menuTitle: "Conferencias",
    menuDescription: "Inspiración que activa",
    slug: "conferencias",
    shortDescription:
      "No inspiramos por inspirar, inspiramos para accionar. Conferencias diseñadas para remover estructuras mentales.",
    longDescription:
      "Conferencias diseñadas para remover estructuras mentales, provocar reflexión estratégica y activar decisiones. Basadas en data, tendencias y casos reales. Ideales para convenciones, kick-offs, capacitaciones internas o eventos abiertos. Siempre con un enfoque práctico, provocador y energizante que sin lugar a dudas logra tener un gran impacto.",
    features: [
      {
        id: 1,
        feature: "Basadas en data",
      },
      {
        id: 2,
        feature: "Casos reales",
      },
      {
        id: 3,
        feature: "Enfoque práctico",
      },
      {
        id: 4,
        feature: "Impacto energizante",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Reflexión estratégica",
        description:
          "Provocamos cuestionamientos profundos que llevan a repensar estrategias y enfoques de negocio.",
      },
      {
        id: 2,
        benefit: "Activación de decisiones",
        description:
          "Nuestras conferencias generan momentum para que los equipos tomen decisiones importantes postergadas.",
      },
      {
        id: 3,
        benefit: "Contenido basado en data",
        description:
          "Presentamos información respaldada por datos reales, tendencias del mercado y casos de estudio verificables.",
      },
      {
        id: 4,
        benefit: "Impacto duradero",
        description:
          "El efecto de nuestras conferencias se extiende más allá del evento, generando cambios sostenibles.",
      },
      {
        id: 5,
        benefit: "Motivación de equipos",
        description:
          "Energizamos y alineamos equipos completos hacia objetivos comunes con renovado entusiasmo.",
      },
      {
        id: 6,
        benefit: "Cambio de mentalidad",
        description:
          "Transformamos paradigmas limitantes en mentalidades de crecimiento y posibilidad.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Equipos ejecutivos",
      },
      {
        id: 2,
        target: "Organizadores de eventos",
      },
      {
        id: 3,
        target: "Empresas en transformación",
      },
      {
        id: 4,
        target: "Universidades y escuelas",
      },
      {
        id: 5,
        target: "Asociaciones empresariales",
      },
      {
        id: 6,
        target: "Convenciones corporativas",
      },
    ],
    process: [
      {
        step: 1,
        title: "Briefing y Objetivos",
        description: "Definición de objetivos y audiencia específica",
      },
      {
        step: 2,
        title: "Investigación y Contenido",
        description: "Desarrollo de contenido basado en data y casos",
      },
      {
        step: 3,
        title: "Diseño de Experiencia",
        description: "Estructuración de la conferencia para máximo impacto",
      },
      {
        step: 4,
        title: "Presentación",
        description: "Ejecución de la conferencia con técnicas de engagement",
      },
      {
        step: 5,
        title: "Follow-up",
        description: "Seguimiento y materiales complementarios",
      },
    ],
    image: "conferencias-alto-impacto.png",
    icon: Presentation,
  },
  {
    id: 6,
    title: "Desarrollo Web y Comercio Electrónico",
    menuTitle: "Web y E-Commerce",
    menuDescription: "Sitios que convierten",
    slug: "desarrollo-web-ecommerce",
    shortDescription:
      "Tu vitrina digital debe vender, no solo verse bien. Creamos sitios web y plataformas E-Commerce pensadas para conversión.",
    longDescription:
      "Creamos sitios web y plataformas E-Commerce pensadas para conversión, experiencia de usuario y escalabilidad. No somos una agencia más: combinamos estrategia comercial, diseño UX/UI y tecnología para que tu presencia digital impulse el negocio. Desde un landing de alto impacto hasta un E-Commerce que facture 24/7.",
    features: [
      {
        id: 1,
        feature: "Código nativo",
      },
      {
        id: 2,
        feature: "UX/UI optimizado",
      },
      {
        id: 3,
        feature: "E-Commerce 24/7",
      },
      {
        id: 4,
        feature: "Escalabilidad",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Conversión optimizada",
        description:
          "Diseñamos cada elemento pensando en maximizar las conversiones y el retorno de inversión publicitaria.",
      },
      {
        id: 2,
        benefit: "Experiencia de usuario superior",
        description:
          "Creamos interfaces intuitivas que guían naturalmente al usuario hacia la acción deseada.",
      },
      {
        id: 3,
        benefit: "Tecnología escalable",
        description:
          "Desarrollamos con arquitecturas que crecen contigo, evitando costosas migraciones futuras.",
      },
      {
        id: 4,
        benefit: "Facturación 24/7",
        description:
          "Tu sitio web trabaja mientras duermes, generando ventas y leads de manera automatizada.",
      },
      {
        id: 5,
        benefit: "SEO optimizado",
        description:
          "Construimos sitios que los motores de búsqueda aman, mejorando tu visibilidad orgánica.",
      },
      {
        id: 6,
        benefit: "Performance superior",
        description:
          "Sitios ultra-rápidos que mejoran la experiencia del usuario y el ranking en Google.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Equipos ejecutivos",
      },
      {
        id: 2,
        target: "Organizadores de eventos",
      },
      {
        id: 3,
        target: "Empresas en transformación",
      },
      {
        id: 4,
        target: "Universidades y escuelas",
      },
      {
        id: 5,
        target: "Asociaciones empresariales",
      },
      {
        id: 6,
        target: "Convenciones corporativas",
      },
    ],
    process: [
      {
        step: 1,
        title: "Briefing y Objetivos",
        description: "Definición de objetivos y audiencia específica",
      },
      {
        step: 2,
        title: "Investigación y Contenido",
        description: "Desarrollo de contenido basado en data y casos",
      },
      {
        step: 3,
        title: "Diseño de Experiencia",
        description: "Estructuración de la conferencia para máximo impacto",
      },
      {
        step: 4,
        title: "Presentación",
        description: "Ejecución de la conferencia con técnicas de engagement",
      },
      {
        step: 5,
        title: "Follow-up",
        description: "Seguimiento y materiales complementarios",
      },
    ],
    image: "desarrollo-web-y-comercio-electronico.png",
    icon: Globe,
  },
  {
    id: 7,
    title: "Cursos de Capacitación Empresarial",
    slug: "capacitacion",
    menuTitle: "Capacitación Empresarial",
    menuDescription: "Formación que transforma equipos",
    shortDescription:
      "Capacitación real, aplicable y con mentalidad de negocio. Formaciones diseñadas para equipos que quieren pensar distinto.",
    longDescription:
      "Formaciones diseñadas para equipos comerciales, marketing o líderes que quieren pensar distinto. Cada curso/capacitación es una experiencia: casos reales, herramientas accionables y facilitadores con experiencia ejecutiva. Ideal para organizaciones que buscan ir más allá del conocimiento teórico.",
    features: [
      {
        id: 1,
        feature: "Casos reales",
      },
      {
        id: 2,
        feature: "Herramientas accionables",
      },
      {
        id: 3,
        feature: "Facilitadores expertos",
      },
      {
        id: 4,
        feature: "Experiencia práctica",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Conocimiento aplicable",
        description:
          "Cada concepto viene acompañado de herramientas y metodologías que se pueden implementar inmediatamente.",
      },
      {
        id: 2,
        benefit: "Experiencia ejecutiva",
        description:
          "Nuestros facilitadores han liderado equipos y empresas, aportando perspectiva real del mundo empresarial.",
      },
      {
        id: 3,
        benefit: "Herramientas prácticas",
        description:
          "Entregamos templates, frameworks y recursos que los participantes pueden usar en su trabajo diario.",
      },
      {
        id: 4,
        benefit: "Transformación de equipos",
        description:
          "Generamos cambios profundos en la mentalidad y capacidades de los equipos participantes.",
      },
      {
        id: 5,
        benefit: "ROI en capacitación",
        description:
          "Medimos el impacto de la capacitación en resultados concretos del negocio y productividad.",
      },
      {
        id: 6,
        benefit: "Cultura de innovación",
        description:
          "Fomentamos una mentalidad de mejora continua e innovación dentro de la organización.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Equipos comerciales",
      },
      {
        id: 2,
        target: "Departamentos de marketing",
      },
      {
        id: 3,
        target: "Líderes empresariales",
      },
      {
        id: 4,
        target: "Recursos humanos",
      },
      {
        id: 5,
        target: "Empresas en crecimiento",
      },
      {
        id: 6,
        target: "Organizaciones tradicionales",
      },
    ],
    process: [
      {
        step: 1,
        title: "Diagnóstico de Necesidades",
        description: "Evaluación de gaps y objetivos de capacitación",
      },
      {
        step: 2,
        title: "Diseño Curricular",
        description: "Desarrollo de contenido personalizado",
      },
      {
        step: 3,
        title: "Facilitación Experiencial",
        description: "Ejecución con metodologías activas",
      },
      {
        step: 4,
        title: "Práctica y Aplicación",
        description: "Ejercicios prácticos con casos reales",
      },
      {
        step: 5,
        title: "Seguimiento y Refuerzo",
        description: "Acompañamiento post-capacitación",
      },
    ],
    image: "cursos-capacitacion-empresarial.png",
    icon: BookOpen,
  },
  {
    id: 8,
    title: "Publicidad Estratégica",
    slug: "publicidad-estrategica",
    menuTitle: "Publicidad",
    menuDescription: "Campañas que impactan y convierten",
    shortDescription:
      "No se trata de hacer bulla, se trata de ser relevante. Diseñamos campañas que impactan porque están pensadas desde el cliente.",
    longDescription:
      "Diseñamos campañas que impactan porque están pensadas desde el cliente. Conectamos creatividad, medios y estrategia para lograr presencia, diferenciación y conversión. Desde campañas digitales hasta activaciones integradas. Ideal para marcas que quieren crecer sin malgastar el presupuesto.",
    features: [
      {
        id: 1,
        feature: "Creatividad + estrategia",
      },
      {
        id: 2,
        feature: "Medios integrados",
      },
      {
        id: 3,
        feature: "ROI medible",
      },
      {
        id: 4,
        feature: "Diferenciación",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Campañas centradas en el cliente",
        description:
          "Desarrollamos mensajes y creatividades que resuenan genuinamente con tu audiencia objetivo.",
      },
      {
        id: 2,
        benefit: "Presencia diferenciada",
        description:
          "Te destacamos en un mercado saturado con propuestas creativas únicas y memorables.",
      },
      {
        id: 3,
        benefit: "Conversión efectiva",
        description:
          "Cada campaña está optimizada para generar acciones concretas, no solo awareness.",
      },
      {
        id: 4,
        benefit: "Optimización de presupuesto",
        description:
          "Maximizamos el impacto de cada peso invertido a través de estrategias de medios inteligentes.",
      },
      {
        id: 5,
        benefit: "Brand awareness",
        description:
          "Construimos reconocimiento de marca sólido y duradero en tu mercado objetivo.",
      },
      {
        id: 6,
        benefit: "Engagement auténtico",
        description:
          "Generamos interacciones genuinas que construyen relaciones reales con tu audiencia.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Marcas establecidas",
      },
      {
        id: 2,
        target: "Empresas B2C",
      },
      {
        id: 3,
        target: "Startups con presupuesto",
      },
      {
        id: 4,
        target: "E-commerce",
      },
      {
        id: 5,
        target: "Empresas de servicios",
      },
      {
        id: 6,
        target: "Marcas en reposicionamiento",
      },
    ],
    process: [
      {
        step: 1,
        title: "Estrategia de Marca",
        description: "Definición de posicionamiento y mensajes clave",
      },
      {
        step: 2,
        title: "Investigación de Audiencia",
        description: "Análisis profundo del target y comportamientos",
      },
      {
        step: 3,
        title: "Creatividad Estratégica",
        description: "Desarrollo de conceptos creativos diferenciados",
      },
      {
        step: 4,
        title: "Planificación de Medios",
        description: "Selección y optimización de canales",
      },
      {
        step: 5,
        title: "Ejecución y Optimización",
        description: "Lanzamiento y optimización continua",
      },
    ],
    image: "publicidad-estrategica.png",
    icon: Target,
  },
  {
    id: 9,
    title: "Transformación Digital e IA",
    slug: "transformacion-digital-ia",
    menuTitle: "Transformación Digital",
    menuDescription: "El futuro es ahora",
    shortDescription:
      "El futuro es ahora. Implementamos soluciones de inteligencia artificial y transformación digital para revolucionar tu negocio.",
    longDescription:
      "Implementamos soluciones de inteligencia artificial y transformación digital que revolucionan la forma de hacer negocios. Desde automatización de procesos hasta implementación de IA generativa, te ayudamos a estar a la vanguardia tecnológica. Transformamos organizaciones tradicionales en empresas digitalmente nativas.",
    features: [
      {
        id: 1,
        feature: "Automatización inteligente",
      },
      {
        id: 2,
        feature: "IA aplicada",
      },
      {
        id: 3,
        feature: "Procesos digitales",
      },
      {
        id: 4,
        feature: "Innovación tecnológica",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Automatización de procesos",
        description:
          "Liberamos a tu equipo de tareas repetitivas para que se enfoquen en actividades de alto valor agregado.",
      },
      {
        id: 2,
        benefit: "Ventaja competitiva tecnológica",
        description:
          "Te posicionamos como líder tecnológico en tu industria con soluciones de vanguardia.",
      },
      {
        id: 3,
        benefit: "Eficiencia operativa",
        description:
          "Optimizamos procesos internos reduciendo costos operativos y mejorando la productividad.",
      },
      {
        id: 4,
        benefit: "Innovación disruptiva",
        description:
          "Implementamos tecnologías emergentes que pueden transformar completamente tu modelo de negocio.",
      },
      {
        id: 5,
        benefit: "Reducción de costos",
        description:
          "La automatización y optimización de procesos genera ahorros significativos a mediano plazo.",
      },
      {
        id: 6,
        benefit: "Escalabilidad exponencial",
        description:
          "Las soluciones digitales permiten crecer sin incrementar proporcionalmente los recursos.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Empresas tradicionales",
      },
      {
        id: 2,
        target: "Corporativos grandes",
      },
      {
        id: 3,
        target: "Startups tech",
      },
      {
        id: 4,
        target: "Empresas manufactureras",
      },
      {
        id: 5,
        target: "Sector financiero",
      },
      {
        id: 6,
        target: "Organizaciones innovadoras",
      },
    ],
    process: [
      {
        step: 1,
        title: "Auditoría Digital",
        description: "Evaluación del estado actual y oportunidades",
      },
      {
        step: 2,
        title: "Estrategia de Transformación",
        description: "Roadmap de transformación digital personalizado",
      },
      {
        step: 3,
        title: "Implementación de IA",
        description: "Desarrollo e integración de soluciones de IA",
      },
      {
        step: 4,
        title: "Automatización de Procesos",
        description: "Optimización y automatización de workflows",
      },
      {
        step: 5,
        title: "Capacitación y Adopción",
        description: "Training y acompañamiento en la adopción",
      },
    ],
    image: "transformacion-digital.png",
    icon: Rocket,
  },
  {
    id: 10,
    title: "Audiovisuales y Social Media",
    slug: "audiovisuales-social-media",
    menuTitle: "Audiovisuales",
    menuDescription: "Contenido que conecta",
    shortDescription:
      "El contenido es el rey, pero la forma en que lo presentas es la reina. Creamos audiovisuales que cuentan historias y conectan.",
    longDescription:
      "Creamos contenido audiovisual estratégico que conecta con tu audiencia y potencia tu presencia digital. Desde producción de video corporativo hasta gestión integral de redes sociales, desarrollamos piezas que comunican tu mensaje de manera efectiva y memorable. Nuestro enfoque combina creatividad, estrategia y tecnología para generar contenido que no solo se ve bien, sino que logra resultados medibles.",
    features: [
      {
        id: 1,
        feature: "Producción audiovisual",
      },
      {
        id: 2,
        feature: "Gestión de redes sociales",
      },
      {
        id: 3,
        feature: "Storytelling visual",
      },
      {
        id: 4,
        feature: "Marketing de contenidos",
      },
    ],
    benefits: [
      {
        id: 1,
        benefit: "Mayor engagement digital",
        description:
          "El contenido audiovisual genera hasta 10 veces más interacción que el texto plano en redes sociales.",
      },
      {
        id: 2,
        benefit: "Fortalecimiento de marca",
        description:
          "Desarrollamos una identidad visual consistente que refuerza el reconocimiento y posicionamiento de tu marca.",
      },
      {
        id: 3,
        benefit: "Alcance amplificado",
        description:
          "El contenido de calidad se comparte orgánicamente, multiplicando tu alcance sin costos adicionales.",
      },
      {
        id: 4,
        benefit: "Conexión emocional",
        description:
          "Los audiovisuales generan vínculos emocionales más fuertes con tu audiencia que otros formatos.",
      },
      {
        id: 5,
        benefit: "Mejor conversión",
        description:
          "El video marketing puede incrementar las tasas de conversión hasta en un 80% comparado con otros medios.",
      },
      {
        id: 6,
        benefit: "Presencia profesional",
        description:
          "Contenido de alta calidad posiciona tu marca como profesional y confiable en el mercado.",
      },
    ],
    targetAudience: [
      {
        id: 1,
        target: "Empresas B2B",
      },
      {
        id: 2,
        target: "Marcas de consumo",
      },
      {
        id: 3,
        target: "Startups emergentes",
      },
      {
        id: 4,
        target: "Influencers y creadores",
      },
      {
        id: 5,
        target: "Instituciones educativas",
      },
      {
        id: 6,
        target: "Organizaciones sin fines de lucro",
      },
    ],
    process: [
      {
        step: 1,
        title: "Estrategia de Contenido",
        description: "Definición de objetivos, audiencia y línea editorial",
      },
      {
        step: 2,
        title: "Preproducción",
        description: "Guionización, storyboard y planificación de rodaje",
      },
      {
        step: 3,
        title: "Producción Audiovisual",
        description: "Grabación, fotografía y captura de contenido",
      },
      {
        step: 4,
        title: "Postproducción",
        description: "Edición, color grading, motion graphics y sonorización",
      },
      {
        step: 5,
        title: "Distribución y Gestión",
        description: "Publicación estratégica y gestión de comunidades",
      },
    ],
    image: "audiovisuales-social-media.png",
    icon: Video,
  },
];

export const getServiceBySlug = (slug: string): IService | undefined => {
  return CatalogoServiciosData.find((servicio) => servicio.slug === slug);
};

export const PasosProcessData: IFeature[] = [
  {
    id: 1,
    title: "Diagnóstico",
    description:
      "Analizamos tu situacion actual, objetivos y necesidades específicas.",
  },
  {
    id: 2,
    title: "Estrategia",
    description:
      "Desarrollamos un plan personalizado basado en datos y mejores prácticas.",
  },
  {
    id: 3,
    title: "Implementación",
    description:
      "Ejecutamos las acciones definidas con precisión y atención al detalle.",
  },
  {
    id: 4,
    title: "Medición",
    description:
      "Evaluamos resultados y optimizamos continuamente para maximizar el impacto.",
  },
];

export const ListaEspecialidadesData: IEspecialidad[] = [
  {
    id: 1,
    nombre: "Todos",
  },
  {
    id: 2,
    nombre: "Marketing y Publicidad",
  },
  {
    id: 3,
    nombre: "Estrategia Digital",
  },
  {
    id: 4,
    nombre: "Design Thinking &  Liderazgo",
  },
  {
    id: 5,
    nombre: "Marketing Estratégico",
  },
  {
    id: 6,
    nombre: "Transformación Digital",
  },
];

export const EspecialistasData: IEspecialista[] = [
  {
    id: 1,
    nombre: "Elkin Avendaño",
    slug: "elkin-avendano",
    especialidad: "Marketing y Publicidad",
    pais: "Colombia",
    pais: "Colombia",
    experiencia: "10+ años",
    imagen: "elkin-avendano.png",
    resena:
      "Experto en transformar experiencias de cliente en ventajas competitivas. Con más de una década perfeccionando estrategias de CX y gestión empresarial que generan resultados medibles.",
    especialidades: [
      {
        id: 1,
        nombre: "Customer Experience",
      },
      {
        id: 2,
        nombre: "Atención al Cliente",
      },
      {
        id: 3,
        nombre: "Gestión Empresarial",
      },
      {
        id: 4,
        nombre: "Marketing Estratégico",
      },
    ],
    rating: 4.9,
    proyectos: 180,
    color: "from-blue-500 to-cyan-500",
    descripcionCompleta:
      "Profesional especializado en Marketing y Publicidad con más de 10 años de experiencia transformando la manera en que las empresas se conectan con sus clientes. Su expertise en Customer Experience y Atención al Cliente ha ayudado a organizaciones a incrementar su satisfacción del cliente en un promedio del 40%.",
    logros: [
      {
        id: 1,
        logro: "Implementó estrategias de CX en más de 50 empresas",
      },
      {
        id: 2,
        logro: "Incrementó la satisfacción del cliente promedio en 40%",
      },
      {
        id: 3,
        logro: "Certificado en metodologías ágiles de gestión empresarial",
      },
      {
        id: 4,
        logro: "Speaker reconocido en eventos de marketing latinoamericanos",
      },
    ],
  },
  {
    id: 2,
    nombre: "Clinton Flores",
    slug: "clinton-flores",
    especialidad: "Estrategia Digital",
    pais: "Perú",
    experiencia: "8+ años",
    imagen: "clinton-flores.png",
    resena:
      "Arquitecto de transformaciones digitales exitosas. Especialista en crear modelos de negocio disruptivos y estrategias web que posicionan marcas en la era digital.",
    especialidades: [
      {
        id: 1,
        nombre: "Estrategia Digital",
      },
      {
        id: 2,
        nombre: "Desarrollo Web",
      },
      {
        id: 3,
        nombre: "Modelos de Negocio",
      },
      {
        id: 4,
        nombre: "Consultoría Digital",
      },
    ],
    rating: 4.8,
    proyectos: 120,
    color: "from-purple-500 to-indigo-500",
    descripcionCompleta:
      "Consultor especializado en Estrategia Digital y Gestión Estratégica con 8 años de experiencia ayudando a empresas a navegar la transformación digital. Su enfoque integral abarca desde el desarrollo web hasta la creación de modelos de negocio innovadores.",
    logros: [
      {
        id: 1,
        logro: "Desarrolló más de 80 estrategias digitales exitosas",
      },
      {
        id: 2,
        logro: "Creó modelos de negocio que generaron +$2M en ingresos",
      },
      {
        id: 3,
        logro: "Experto en metodologías de desarrollo web modernas",
      },
      {
        id: 4,
        logro: "Consultor certificado en transformación digital",
      },
    ],
  },
  {
    id: 3,
    nombre: "Alexander Elias",
    slug: "alexander-elias",
    especialidad: "Design Thinking & Liderazgo",
    pais: "Perú",
    experiencia: "15+ años",
    imagen: "alex-elias.png",
    resena:
      "Visionario del pensamiento creativo y liderazgo transformacional. Combina Design Thinking con inteligencia emocional para crear soluciones innovadoras que impactan organizaciones.",
    especialidades: [
      { id: 1, nombre: "Design Thinking" },
      { id: 2, nombre: "Liderazgo" },
      { id: 3, nombre: "Inteligencia Emocional" },
      { id: 4, nombre: "Diseño Instruccional" },
    ],
    rating: 4.8,
    proyectos: 200,
    color: "from-pink-500 to-rose-500",
    descripcionCompleta:
      "Líder en innovación con más de 15 años especializándose en Design Thinking, Liderazgo e Inteligencia Emocional. Su metodología única combina creatividad estratégica con desarrollo humano para generar transformaciones organizacionales profundas.",
    logros: [
      {
        id: 1,
        logro: "Formó a más de 500 líderes en metodologías innovadoras",
      },
      {
        id: 2,
        logro: "Implementó Design Thinking en Fortune 500",
      },
      {
        id: 3,
        logro: "Certificado internacional en Inteligencia Emocional",
      },
      {
        id: 4,
        logro: "Autor de metodologías propias de aprendizaje estratégico",
      },
    ],
  },
  {
    id: 4,
    nombre: "Marco Vives",
    slug: "marco-vives",
    especialidad: "Marketing Estratégico",
    pais: "Perú",
    experiencia: "7+ años",
    imagen: "marco-vives.png",
    resena:
      "Estratega de marketing con visión 360°. Speaker y consultor empresarial que transforma desafíos de CX en oportunidades de crecimiento sostenible para las organizaciones",
    especialidades: [
      { id: 1, nombre: "Marketing Estratégico" },
      { id: 2, nombre: "CX Management" },
      { id: 3, nombre: "Design Thinking" },
      { id: 4, nombre: "Consultoría Empresarial" },
    ],
    rating: 4.7,
    proyectos: 120,
    color: "from-purple-500 to-indigo-500",
    descripcionCompleta:
      "Consultor empresarial y speaker especializado en Marketing Estratégico y CX Management con más de 7 años transformando la experiencia del cliente en ventaja competitiva. Su enfoque integra Design Thinking con gestión empresarial para resultados excepcionales.",
    logros: [
      {
        id: 1,
        logro: "Speaker en +30 eventos internacionales de marketing",
      },
      {
        id: 2,
        logro: "Mejoró el CX de empresas en un promedio de 60%",
      },
      {
        id: 3,
        logro: "Consultor certificado en metodologías ágiles",
      },
      {
        id: 4,
        logro: "Reconocido como Top Voice en LinkedIn LATAM",
      },
    ],
  },
  {
    id: 5,
    nombre: "Fernando Rojas",
    slug: "fernando-rojas",
    especialidad: "Desarrollo Software y Machine Learning",
    pais: "Perú",
    experiencia: "8+ años",
    imagen: "fernando-rojas.png",
    resena:
      "Ingeniero de la transformación digital. Experto en Machine Learning y desarrollo de software que convierte visiones tecnológicas en realidades empresariales exitosas.",
    especialidades: [
      { id: 1, nombre: "Machine Learning" },
      { id: 2, nombre: "Desarrollo Software" },
      { id: 3, nombre: "Transformación Digital" },
      { id: 4, nombre: "UX/UI" },
    ],
    rating: 4.8,
    proyectos: 110,
    color: "from-teal-500 to-cyan-500",
    descripcionCompleta:
      "Profesional de TI con más de 8 años de experiencia liderando proyectos de transformación digital. Especialista en Machine Learning, desarrollo de software y gestión del cambio tecnológico, con un historial comprobado de entregar proyectos a tiempo y bajo presupuesto.",
    logros: [
      {
        id: 1,
        logro: "Implementó +50 soluciones de Machine Learning",
      },
      {
        id: 2,
        logro: "Desarrolló sistemas que procesan millones de transacciones",
      },
      {
        id: 3,
        logro: "Líder en proyectos de transformación digital exitosos",
      },
      {
        id: 4,
        logro: "Experto certificado en múltiples tecnologías emergentes",
      },
    ],
  },
  {
    id: 6,
    nombre: "Walter Cabanillas",
    slug: "walter-cabanillas",
    especialidad: "Transformación Digital e IA",
    pais: "Perú",
    experiencia: "19+ años",
    imagen: "walter-cabanillas.png",
    resena:
      "Ejecutivo desarrollador de mercados y transformación digital con más de diecinueve años de experiencia en tecnología e innovación en áreas comerciales.",
    especialidades: [
      { id: 1, nombre: "Mentor de startups" },
      { id: 2, nombre: "Innovación Comercial" },
      { id: 3, nombre: "Transformación Digital" },
      { id: 4, nombre: "Intelifencia Artificial" },
    ],
    rating: 4.9,
    proyectos: 220,
    color: "from-teal-500 to-cyan-500",
    descripcionCompleta:
      "Ejecutivo desarrollador de mercados y transformación digital con más de diecinueve años de experiencia en tecnología e innovación en áreas comerciales de IBM Corporation, Microsoft Corporation y Unit 4 Corporation (multinacional europea de ERP); evaluador y mentor de startups por más de 6 años. Es ingeniero industrial y de sistemas por la Universidad Nacional de Trujillo. Tiene dos especializaciones en Transformación Digital, una por la Universidad de Berkeley (Estados Unidos) y otra por la Universidad de Virginia (Estados Unidos) en colaboración con Boston Consulting. ",
    logros: [
      {
        id: 1,
        logro: "Evangelizador Tecnológico Autodesk",
      },
      {
        id: 2,
        logro: "Director de Tecnología en la Universidad Privada del Norte",
      },
      {
        id: 3,
        logro: "MBA Internacional en la Universidad ESAN",
      },
      {
        id: 4,
        logro: "Certificado en Microsoft Most Valuable Professional",
      },
    ],
  },
  {
    id: 7,
    nombre: "Daniel Iriarte",
    slug: "daniel-iriarte",
    especialidad: "Ventas y Liderazgo Comercial",
    pais: "Estados Unidos",
    experiencia: "15+ años",
    imagen: "daniel-iriarte.png",
    resena:
      "Conocido como 'El Tiburón de las Ventas', es la figura más influyente en formación de ventas del continente. Creador del único método especializado en Closer de Ventas High Ticket para productos de alto valor.",
    especialidades: [
      { id: 1, nombre: "Ventas High Ticket" },
      { id: 2, nombre: "Liderazgo Comercial" },
      { id: 3, nombre: "Formación en Ventas" },
      { id: 4, nombre: "Estrategias Comerciales" },
    ],
    rating: 4.9,
    proyectos: 700,
    color: "from-red-500 to-orange-500",
    descripcionCompleta:
      "CEO y Director de SES La Escuela Corp de Ventas para Latam, Presidente de la Academia Corp de Ventas de Estados Unidos, y Co-Fundador de la Asociación Internacional de Ventas. Con más de 100,000 personas capacitadas y más de 500,000 asistentes a sus eventos, Daniel ha transformado la manera de vender en cientos de organizaciones a través de su metodología única aplicada en más de 12 países.",
    logros: [
      {
        id: 1,
        logro: "Capacitó a más de 100,000 personas en ventas",
      },
      {
        id: 2,
        logro: "Más de 500,000 asistentes a sus eventos",
      },
      {
        id: 3,
        logro: "Creador del evento 'Nadando con Tiburones NCT'",
      },
      {
        id: 4,
        logro: "Más de 5,000 conferencias y 700 operaciones corporativas",
      },
    ],
  },
  {
    id: 8,
    nombre: "Andy Erazo",
    slug: "andy-erazo",
    especialidad: "Growth Marketing y Emprendimiento",
    pais: "Perú",
    experiencia: "6+ años",
    imagen: "andy-erazo.png",
    resena:
      "CEO & Founder de LetyMind, startup que revoluciona la contratación de creativos. Growth Advisor, mentor y columnista especializado en marketing digital y contenidos que conectan de verdad.",
    especialidades: [
      { id: 1, nombre: "Growth Marketing" },
      { id: 2, nombre: "Marketing Digital" },
      { id: 3, nombre: "Branding" },
      { id: 4, nombre: "Desarrollo de Negocios" },
    ],
    rating: 4.8,
    proyectos: 85,
    color: "from-green-500 to-emerald-500",
    descripcionCompleta:
      "Comunicador publicitario y emprendedor con formación en Diseño Publicitario (IDC) y Comunicación y Publicidad (UPN). Growth Advisor en CIDE PUCP, Mentor en Seedstars y Columnista en Mercado Negro. Especialista en transformar organizaciones a través de contenidos digitales y estrategias de marketing que conectan auténticamente con las audiencias, combinando creatividad con datos para generar resultados reales.",
    logros: [
      {
        id: 1,
        logro: "CEO & Fundador de LetyMind startup",
      },
      {
        id: 2,
        logro: "Growth Content Lead en Manzana Verde",
      },
      {
        id: 3,
        logro: "Creador de curso 'Emprendimiento en Wellness' en Crehana",
      },
      {
        id: 4,
        logro: "Mentor certificado por Embajada de India y Hero Startup",
      },
    ],
  },
  {
    id: 9,
    nombre: "Mauricio Ruiz Sandoval",
    slug: "mauricio-ruiz",
    especialidad: "Consultoría Empresarial y Gerencia Estratégica",
    pais: "Colombia",
    experiencia: "20+ años",
    imagen: "mauricio-ruiz.png",
    resena:
      "Empresario y consultor empresarial internacional con veinte años de experiencia en gerencia general. Especialista en desarrollo integral de proyectos y planeación estratégica que transforma organizaciones.",
    especialidades: [
      { id: 1, nombre: "Gerencia de Mercadeo" },
      { id: 2, nombre: "Planeación Estratégica" },
      { id: 3, nombre: "Gerencia de Proyectos" },
      { id: 4, nombre: "Formación de Líderes" },
    ],
    rating: 4.8,
    proyectos: 250,
    color: "from-amber-500 to-yellow-500",
    descripcionCompleta:
      "Magister en Gerencia de Mercadeo y especialista en gerencia de proyectos con veinte años de experiencia ejecutiva en Gerencia General, Administrativa y Comercial. Desarrollador integral de proyectos y experto en planeación estratégica con énfasis en análisis de entorno, formulación, desarrollo, montaje y puesta en marcha de planes de negocios. Su expertise abarca estructura comercial, financiera, legal y capacitación empresarial.",
    logros: [
      {
        id: 1,
        logro: "20 años de experiencia en gerencia general exitosa",
      },
      {
        id: 2,
        logro: "Especialista certificado en gerencia de proyectos",
      },
      {
        id: 3,
        logro: "Magister en Gerencia de Mercadeo",
      },
      {
        id: 4,
        logro: "Consultor internacional en múltiples países",
      },
    ],
  },
  {
    id: 7,
    nombre: "Daniel Iriarte",
    slug: "daniel-iriarte",
    especialidad: "Ventas y Liderazgo Comercial",
    pais: "Estados Unidos",
    experiencia: "15+ años",
    imagen: "daniel-iriarte.png",
    resena:
      "Conocido como 'El Tiburón de las Ventas', es la figura más influyente en formación de ventas del continente. Creador del único método especializado en Closer de Ventas High Ticket para productos de alto valor.",
    especialidades: [
      { id: 1, nombre: "Ventas High Ticket" },
      { id: 2, nombre: "Liderazgo Comercial" },
      { id: 3, nombre: "Formación en Ventas" },
      { id: 4, nombre: "Estrategias Comerciales" },
    ],
    rating: 4.9,
    proyectos: 700,
    color: "from-red-500 to-orange-500",
    descripcionCompleta:
      "CEO y Director de SES La Escuela Corp de Ventas para Latam, Presidente de la Academia Corp de Ventas de Estados Unidos, y Co-Fundador de la Asociación Internacional de Ventas. Con más de 100,000 personas capacitadas y más de 500,000 asistentes a sus eventos, Daniel ha transformado la manera de vender en cientos de organizaciones a través de su metodología única aplicada en más de 12 países.",
    logros: [
      {
        id: 1,
        logro: "Capacitó a más de 100,000 personas en ventas",
      },
      {
        id: 2,
        logro: "Más de 500,000 asistentes a sus eventos",
      },
      {
        id: 3,
        logro: "Creador del evento 'Nadando con Tiburones NCT'",
      },
      {
        id: 4,
        logro: "Más de 5,000 conferencias y 700 operaciones corporativas",
      },
    ],
  },
  {
    id: 8,
    nombre: "Andy Erazo",
    slug: "andy-erazo",
    especialidad: "Growth Marketing y Emprendimiento",
    pais: "Perú",
    experiencia: "6+ años",
    imagen: "andy-erazo.png",
    resena:
      "CEO & Founder de LetyMind, startup que revoluciona la contratación de creativos. Growth Advisor, mentor y columnista especializado en marketing digital y contenidos que conectan de verdad.",
    especialidades: [
      { id: 1, nombre: "Growth Marketing" },
      { id: 2, nombre: "Marketing Digital" },
      { id: 3, nombre: "Branding" },
      { id: 4, nombre: "Desarrollo de Negocios" },
    ],
    rating: 4.8,
    proyectos: 85,
    color: "from-green-500 to-emerald-500",
    descripcionCompleta:
      "Comunicador publicitario y emprendedor con formación en Diseño Publicitario (IDC) y Comunicación y Publicidad (UPN). Growth Advisor en CIDE PUCP, Mentor en Seedstars y Columnista en Mercado Negro. Especialista en transformar organizaciones a través de contenidos digitales y estrategias de marketing que conectan auténticamente con las audiencias, combinando creatividad con datos para generar resultados reales.",
    logros: [
      {
        id: 1,
        logro: "CEO & Fundador de LetyMind startup",
      },
      {
        id: 2,
        logro: "Growth Content Lead en Manzana Verde",
      },
      {
        id: 3,
        logro: "Creador de curso 'Emprendimiento en Wellness' en Crehana",
      },
      {
        id: 4,
        logro: "Mentor certificado por Embajada de India y Hero Startup",
      },
    ],
  },
  {
    id: 9,
    nombre: "Mauricio Ruiz Sandoval",
    slug: "mauricio-ruiz",
    especialidad: "Consultoría Empresarial y Gerencia Estratégica",
    pais: "Colombia",
    experiencia: "20+ años",
    imagen: "mauricio-ruiz.png",
    resena:
      "Empresario y consultor empresarial internacional con veinte años de experiencia en gerencia general. Especialista en desarrollo integral de proyectos y planeación estratégica que transforma organizaciones.",
    especialidades: [
      { id: 1, nombre: "Gerencia de Mercadeo" },
      { id: 2, nombre: "Planeación Estratégica" },
      { id: 3, nombre: "Gerencia de Proyectos" },
      { id: 4, nombre: "Formación de Líderes" },
    ],
    rating: 4.8,
    proyectos: 250,
    color: "from-amber-500 to-yellow-500",
    descripcionCompleta:
      "Magister en Gerencia de Mercadeo y especialista en gerencia de proyectos con veinte años de experiencia ejecutiva en Gerencia General, Administrativa y Comercial. Desarrollador integral de proyectos y experto en planeación estratégica con énfasis en análisis de entorno, formulación, desarrollo, montaje y puesta en marcha de planes de negocios. Su expertise abarca estructura comercial, financiera, legal y capacitación empresarial.",
    logros: [
      {
        id: 1,
        logro: "20 años de experiencia en gerencia general exitosa",
      },
      {
        id: 2,
        logro: "Especialista certificado en gerencia de proyectos",
      },
      {
        id: 3,
        logro: "Magister en Gerencia de Mercadeo",
      },
      {
        id: 4,
        logro: "Consultor internacional en múltiples países",
      },
    ],
  },
];

export const PoliticaPrivacidadData: ILegal[] = [
  {
    id: 1,
    slug: "informacion-recopilada",
    title: "Información que Recopilamos",
    icon: UserCheck,
    content: [
      {
        id: 1,
        parrafo: "Nombres y apellidos completos",
      },
      {
        id: 2,
        parrafo: "Información de contacto como dirección de correo electrónico",
      },
      {
        id: 3,
        parrafo: "Información demográfica y de ubicación",
      },
      {
        id: 4,
        parrafo: "Número telefónico",
      },
      {
        id: 5,
        parrafo: "Información específica para procesar pedidos o entregas",
      },
      {
        id: 6,
        parrafo:
          "Datos del perfil público si el registro se realiza mediante Facebook",
      },
    ],
  },
  {
    id: 2,
    slug: "uso-informacion",
    title: "Uso de la Información",
    icon: Eye,
    content: [
      {
        id: 1,
        parrafo: "Proporcionar el mejor servicio posible a nuestros usuarios",
      },
      {
        id: 2,
        parrafo: "Mantener un registro de usuarios y pedidos",
      },
      {
        id: 3,
        parrafo: "Mejorar nuestros productos y servicios continuamente",
      },
      {
        id: 4,
        parrafo:
          "Enviar correos electrónicos con ofertas especiales y nueva información",
      },
      {
        id: 5,
        parrafo: "Análisis estadístico del tráfico web",
      },
      {
        id: 6,
        parrafo: "Personalización del servicio web",
      },
    ],
  },
  {
    id: 3,
    slug: "seguridad",
    title: "Seguridad de los Datos",
    icon: Lock,
    content: [
      {
        id: 1,
        parrafo:
          "Utilizamos sistemas avanzados de seguridad actualizados constantemente",
      },
      {
        id: 2,
        parrafo: "Protección contra accesos no autorizados",
      },
      {
        id: 3,
        parrafo: "Cumplimiento con estándares internacionales de seguridad",
      },
      {
        id: 4,
        parrafo: "Monitoreo continuo de nuestros sistemas",
      },
      {
        id: 5,
        parrafo: "Protocolos de encriptación para datos sensibles",
      },
    ],
  },
  {
    id: 4,
    slug: "cookies",
    title: "Política de Cookies",
    icon: Cookie,
    content: [
      {
        id: 1,
        parrafo:
          "Las cookies nos ayudan a identificar páginas visitadas y su frecuencia",
      },
      {
        id: 2,
        parrafo: "La información se usa únicamente para análisis estadístico",
      },
      {
        id: 3,
        parrafo:
          "Puedes eliminar las cookies desde tu navegador en cualquier momento",
      },
      {
        id: 4,
        parrafo:
          "Las cookies mejoran la experiencia del usuario en nuestro sitio",
      },
      {
        id: 5,
        parrafo: "No acceden a información personal sin tu consentimiento",
      },
      {
        id: 6,
        parrafo: "Puedes configurar tu navegador para declinar cookies",
      },
    ],
  },
  {
    id: 5,
    slug: "enlaces-terceros",
    title: "Enlaces a Terceros",
    icon: ExternalLink,
    content: [
      {
        id: 1,
        parrafo:
          "Nuestro sitio puede contener enlaces a otros sitios de interés",
      },
      {
        id: 2,
        parrafo: "No tenemos control sobre sitios de terceros",
      },
      {
        id: 3,
        parrafo:
          "No somos responsables de las políticas de privacidad de terceros",
      },
      {
        id: 4,
        parrafo:
          "Recomendamos revisar las políticas de privacidad de sitios externos",
      },
      {
        id: 5,
        parrafo: "Cada sitio externo está sujeto a sus propias políticas",
      },
    ],
  },
  {
    id: 6,
    slug: "control-datos",
    title: "Control de tu Información Personal",
    icon: Shield,
    content: [
      {
        id: 1,
        parrafo:
          "Puedes restringir la recopilación de información personal en cualquier momento",
      },
      {
        id: 2,
        parrafo:
          "Opción de marcar/desmarcar recepción de información por correo",
      },
      {
        id: 3,
        parrafo: "Cancelación de boletines y publicidad cuando lo desees",
      },
      {
        id: 4,
        parrafo:
          "No vendemos ni distribuimos información personal sin consentimiento",
      },
      {
        id: 5,
        parrafo: "Derecho a solicitar actualización o modificación de datos",
      },
      {
        id: 6,
        parrafo:
          "Los datos no pueden ser suprimidos por 12 meses desde el registro",
      },
    ],
  },
];

export const TerminosCondicionesData: ILegal[] = [
  {
    id: 1,
    slug: "datos-personales",
    title: "Recolección y Uso de Datos Personales",
    icon: Users,
    content: [
      {
        id: 1,
        parrafo:
          "El usuario autoriza libre y voluntariamente a Marketing Al Día para recolectar, almacenar, conservar, acceder, usar, suprimir o actualizar sus datos personales.",
      },
      {
        id: 2,
        parrafo:
          "Los datos pueden ser compartidos entre socios comerciales con fines comerciales y/o informativos.",
      },
      {
        id: 3,
        parrafo:
          "Los datos se obtienen mediante formularios y servicios que brinda la empresa.",
      },
    ],
  },
  {
    id: 2,
    slug: "servicios",
    title: "Servicios Ofrecidos",
    icon: FileText,
    content: [
      {
        id: 1,
        parrafo:
          "Marketing Al Día ofrece contenidos educativos, formativos y de entretenimiento en texto, imagen, audio y/o video.",
      },
      {
        id: 2,
        parrafo:
          "Los clientes pueden acceder mediante la compra de cursos o contenidos específicos.",
      },
      {
        id: 3,
        parrafo:
          "Los precios pueden ser modificados según criterio de la empresa, sin afectar compras previas.",
      },
    ],
  },
  {
    id: 3,
    slug: "contenido",
    title: "Acceso y Uso del Contenido",
    icon: Shield,
    content: [
      {
        id: 1,
        parrafo:
          "El acceso al contenido está disponible durante el tiempo que se encuentren disponibles.",
      },
      {
        id: 2,
        parrafo:
          "Los materiales descargables están permitidos cuando el contenido lo permita.",
      },
      {
        id: 3,
        parrafo:
          "Los certificados se otorgan al superar evaluaciones con al menos 70% de éxito.",
      },
      {
        id: 4,
        parrafo:
          "Está prohibido revender o utilizar el contenido para beneficio económico propio.",
      },
      {
        id: 5,
        parrafo:
          "No se permite la publicación total o parcial del contenido con terceros.",
      },
    ],
  },
  {
    id: 4,
    slug: "responsabilidades",
    title: "Responsabilidades del Usuario",
    icon: AlertCircle,
    content: [
      {
        id: 1,
        parrafo:
          "Toda la información proporcionada debe ser veraz, certera, completa y actualizada.",
      },
      {
        id: 2,
        parrafo:
          "El usuario garantiza la autenticidad de todos los datos comunicados.",
      },
      {
        id: 3,
        parrafo:
          "Es responsabilidad del usuario mantener actualizada su información.",
      },
      {
        id: 4,
        parrafo:
          "El incumplimiento puede resultar en la cancelación de la cuenta.",
      },
      {
        id: 5,
        parrafo:
          "Información falsa o errónea conlleva una penalidad de $100 USD.",
      },
    ],
  },
];

export const ProtectionNoticeData: IProtectionNotice[] = [
  {
    id: 1,
    title: "Cumplimiento Normativo",
    content: [
      {
        id: 1,
        parrafo:
          "Cumplimos con la Ley Nº 29733, Ley de Protección de Datos Personales del Perú y su Reglamento (Decreto Supremo 003-2013-JUS).",
      },
      {
        id: 2,
        parrafo:
          "Nuestro banco de datos está inscrito en el Registro Nacional de Protección de Datos Personales bajo el código RNPDP-PJP Nº 10719.",
      },
    ],
  },
  {
    id: 2,
    title: "Compartir Datos",
    content: [
      {
        id: 1,
        parrafo:
          "Los datos pueden ser compartidos con aliados estratégicos, speakers, auspiciadores y otros que consideremos adecuados.",
      },
      {
        id: 2,
        parrafo:
          "El compartir datos puede realizarse tanto a nivel local como transfronterizo, siempre respetando las normativas aplicables.",
      },
    ],
  },
];

export const TerminosImportantData: IProtectionNotice[] = [
  {
    id: 1,
    title: "Propiedad Intelectual",
    content: [
      {
        id: 1,
        parrafo:
          "Todo el contenido es propiedad intelectual de Marketing Al Día y está protegido por las leyes de derechos de autor.",
      },
      {
        id: 2,
        parrafo:
          "La reproducción total o parcial está prohibida sin autorización expresa y por escrito.",
      },
    ],
  },
  {
    id: 2,
    title: "Contacto y Soporte",
    content: [
      {
        id: 1,
        parrafo:
          "Para dudas, quejas o comentarios, contáctanos en: <info@marketingaldia.net>",
      },
      {
        id: 2,
        parrafo:
          "Estamos comprometidos a proporcionar los más altos estándares de servicio.",
      },
    ],
  },
];

export const OrbitalesElementsData: IOrbitalesElement[] = [
  {
    id: 1,
    label: "Cliente",
    angle: 0,
    icon: Users,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    label: "Estrategia",
    angle: 72,
    icon: Target,
    color: "from-green-500 to-green-600",
  },
  {
    id: 3,
    label: "Innovación",
    angle: 144,
    icon: Lightbulb,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: 4,
    label: "Resultados",
    angle: 216,
    icon: Award,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 5,
    label: "Crecimiento",
    angle: 288,
    icon: Zap,
    color: "from-orange-500 to-orange-600",
  },
];
