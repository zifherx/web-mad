import { z } from "zod";

export const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: `nombre debe tener al menos 2 caracteres` })
    .max(50, { message: `nombre no puede exceder 50 caracteres` })
    .regex(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: `nombre solo puede contener letras y espacios`,
    }),
  apellido: z
    .string()
    .min(2, { message: `nombre debe tener al menos 2 caracteres` })
    .max(50, { message: `nombre no puede exceder 50 caracteres` })
    .regex(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: `nombre solo puede contener letras y espacios`,
    }),
  email: z
    .string()
    .email({ message: `Por favor ingresa un email válido` })
    .min(1, { message: `email es requerido` }),
  celular: z
    .string()
    .length(9, {
      message: `celular debe tener exactamente 9 dígitos`,
    })
    .regex(/^\d{1,9}$/, {
      message: `celular solo puede contener números`,
    }),
  servicio: z
    .string()
    .min(1, { message: `Por favor selecciona un servicio de interés` }),
  presupuesto: z
    .string()
    .min(1, { message: `Por favor selecciona un rango de presupuesto` }),
  mensaje: z
    .string()
    .min(10, { message: `mensaje debe tener al menos 10 caracteres` })
    .max(1000, { message: `mensaje no puede exceder 1000 caracteres` }),
  acepta_terminos: z.boolean().refine((val) => val === true, {
    message: `Debes aceptar los términos y condiciones`,
  }),
  acepta_marketing: z.boolean().optional(),
});

export type ConctactFormValues = z.infer<typeof contactFormSchema>;
