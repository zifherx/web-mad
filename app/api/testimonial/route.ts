import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import { testimonialService } from "@/services/testimonial.service";
import { connectDB } from "@/lib/db/mongodb";
import { testimonialFilterSchema } from "@/lib/validations/testimonial.validation";
import { APIResponseUtil } from "@/lib/utils/api-response.util";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const params = Object.fromEntries(searchParams.entries());

    // Validar filtros
    const filters = testimonialFilterSchema.parse(params);

    // Obtener testimonios
    const { testimonials, total } = await testimonialService.getAllTestimonials(
      filters
    );

    // Respuesta Paginada

    return APIResponseUtil.paginated(
      testimonials,
      filters.page,
      filters.limit,
      total
    );
  } catch (err: any) {
    console.error("GET /api/testimonials error:", err);

    if (err instanceof ZodError) {
      return APIResponseUtil.badRequest("Parámetros de consulta inválidos", {
        errors: err.errors,
      });
    }

    return APIResponseUtil.internalError("Error al obtener testimonios");
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    // Parsear body
    const body = await request.json();

    // Crear testimonio
    const testimonial = await testimonialService.createTestimonial(body);

    return APIResponseUtil.success(testimonial, undefined, 201);
  } catch (err: any) {
    console.error("POST /api/testimonials error:", err);

    if (err instanceof ZodError) {
      return APIResponseUtil.badRequest("Datos de entrada inválidos", {
        errors: err.errors,
      });
    }

    return APIResponseUtil.internalError("Error al crear testimonio");
  }
}
