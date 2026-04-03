import { z } from "zod";

export const createTestimonialSchema = z.object({
  title: z
    .string()
    .min(2, "autor debe etner al menos 2 caracteres")
    .max(100, "autor no puede exceder 100 caracteres")
    .trim(),
  quote: z
    .string()
    .min(10, "testimonio debe tener al menos 10 caracteres")
    .max(1000, "testimonio no puede exceder 1000 caracteres")
    .trim(),
  position: z
    .string()
    .min(2, "cargo debe tener al menos 2 caracteres")
    .max(150, "cargo no puede exceder 150 caracteres")
    .trim(),
  company: z
    .string()
    .max(100, "empresa no puede exceder 100 caracteres")
    .trim()
    .optional(),
  imageSource: z.string().url("Debe ser una URL válida"),
  rating: z
    .number()
    .int()
    .min(1, "calificación mínima es 1")
    .max(5, "calificación máxima es 5")
    .optional()
    .default(5),
  featured: z.boolean().optional().default(false),
  status: z
    .enum(["published", "draft", "archived"] as const)
    .optional()
    .default("draft"),
  order: z.number().int().optional().default(0),
  videoUrl: z.string().url("Debe ser una URL válida").optional(),
  socialMedia: z
    .object({
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
    })
    .optional(),
  tags: z.array(z.string().trim().toLowerCase()).optional().default([]),
});

export const updateTestimonialSchema = createTestimonialSchema.partial();

export const testimonialFilterSchema = z.object({
  status: z.enum(["published", "draft", "archived"] as const).optional(),
  featured: z
    .string()
    .transform((val) => val === "true")
    .optional(),
  tags: z
    .string()
    .transform((val) => val.split(",").map((t) => t.trim()))
    .optional(),
  search: z.string().optional(),
  page: z
    .string()
    .transform((val) => parseInt(val, 10))
    .optional()
    .default("1"),
  limit: z
    .string()
    .transform((val) => parseInt(val, 10))
    .optional()
    .default("10"),
  sortBy: z
    .enum(["createdAt", "updatedAt", "order", "rating"] as const)
    .optional()
    .default("createdAt"),
  sortOrder: z
    .enum(["asc", "desc"] as const)
    .optional()
    .default("desc"),
});

export type CreateTestimonialInput = z.infer<typeof createTestimonialSchema>;
export type UpdateTestimonialInput = z.infer<typeof updateTestimonialSchema>;
export type TestimonialFilterInput = z.infer<typeof testimonialFilterSchema>;
