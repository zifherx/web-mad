export const NUMERIC = {
  CUATRO: 4,
};

export const NUMERO_WHATSAPP = "963454290";

export const WHATSAPP_MESSAGES = {
  CONTACTO_CHAT_DIRECTO: `💬 Hola equipo, quiero conversar directo con ustedes. Tengo una idea/proyecto y me interesa saber cómo pueden ayudarme a hacerlo crecer. Quedo a la espera de su respuesta`,
  CONTACTO_CHATEA_CON_NOSOTROS: `👋 ¡Hola! Estoy interesado en conocer más sobre los servicios que ofrecen. Tengo algunas preguntas específicas y me gustaría recibir su orientación. ¿Podemos hablar ahora?`,
  NOSOTROS_ESPECIALISTAS_CONTACTAR_WHATSAPP: `👋 Hola equipo, vi que cuentan con especialistas top y quiero saber cómo pueden ayudarme con [Proyecto/Servicio]. Estoy interesado en más detalles.`,
  SERVICIOS_CONTACTAR_WHATSAPP: (servicio: string) =>
    `📊 ¡Hola! Estoy interesado en conocer más sobre sus servicios de ${servicio}. Vi lo que ofrecen y creo que es justo lo que mi empresa necesita. ¿Podrían brindarme más detalles?`,
  SERVICIOS_CONTACTANOS: `🚨 Hola Marketing Al Día, estoy buscando soluciones para [problema o necesidad] y me interesa conocer más a fondo cómo sus servicios pueden ayudarme. ¿Me cuentan más?`,
  FOOTER_BOTON_WHATSAPP: `📲 ¡Hola! Estoy interesado en ser parte de Marketing Al Día, ya sea contratando sus servicios, escribiendo en su blog, siendo speaker o formando parte de la comunidad. ¿Cómo podemos empezar?`,
};

export const HTTP_RESPONSE = {
  BAD_REQUEST: {
    code: 400,
    value: "BAD_REQUEST",
    message: "Bad Request",
  },
  UNAUTHORIZED: {
    code: 401,
    value: "UNAUTHORIZED",
    message: "Unauthorized",
  },
  FORBIDDEN: {
    code: 403,
    value: "FORBIDDEN",
    message: "Forbidden",
  },
  NOT_FOUND: {
    code: 404,
    value: "NOT_FOUND",
    message: "Resource not found",
  },
  CONFLICT: {
    code: 409,
    value: "CONFLICT",
    message: "Conflict",
  },
  INTERNAL_ERROR: {
    code: 500,
    value: "INTERNAL_ERROR",
    message: "Internal Server Error",
  },
};
