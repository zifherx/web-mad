import { NextRequest } from "next/server";
import { ZodError } from "zod";

import { testimonialService } from "@/services/testimonial.service";

import { updateTestimonialSchema } from "@/lib/validations/testimonial.validation";
import { APIResponseUtil } from "@/lib/utils/api-response.util";
import { connectDB } from "@/lib/db/mongodb";

import { RouteParams } from "@/interfaces";

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  try {
    await connectDB();

    const testimonial = await testimonialService.getTestimonialById(id);

    return APIResponseUtil.success(testimonial);
  } catch (err: any) {
    console.error(`GET /api/testimonial/${id} error:`, err);

    if (err.message === "Testimonio no encontrado") {
      return APIResponseUtil.notFound(err.message);
    }

    return APIResponseUtil.internalError("Error al obtener testimonio");
  }
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  try {
    await connectDB();

    const body = await request.json();
    const validatedData = updateTestimonialSchema.parse(body);
    const testimonial = await testimonialService.updateTestimonial(
      id,
      validatedData
    );
    return APIResponseUtil.success(testimonial);
  } catch (err: any) {
    console.error(`PATH /api/testimonials/${id} error:`, err);

    if (err instanceof ZodError) {
      return APIResponseUtil.badRequest("Datos de entrada inválidos", {
        errors: err.errors,
      });
    }

    if (err.message === "Testimonio no encontrado") {
      return APIResponseUtil.notFound(err.message);
    }

    return APIResponseUtil.internalError("Error al actualizar testimonio");
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  try {
    await connectDB();
    await testimonialService.deleteTestimonial(id);
    return APIResponseUtil.success({
      message: "Testimonio eliminado correctamente",
    });
  } catch (err: any) {
    console.error(`DELETE /api/testimonials/${id} error:`, err);

    if (err.message === "Testimonio no encontrado") {
      return APIResponseUtil.notFound(err.message);
    }

    return APIResponseUtil.internalError("Error al eliminar testimonio");
  }
}
