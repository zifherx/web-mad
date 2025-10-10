"use client";

import { useDeleteTestimonial } from "@/hooks/useTestimonial";

import { TestimonialResponseDTO } from "@/types/models/testimonial.types";

interface TableContentSectionProps {
  isLoading: boolean;
  isError: boolean;
  testimonials: TestimonialResponseDTO[];
}

export function TableContentSection({
  isError,
  isLoading,
  testimonials,
}: TableContentSectionProps) {
  // Mutation
  const deleteTestimonial = useDeleteTestimonial();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Cargando testimonios...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-red-600">Error desconocido</div>
      </div>
    );
  }

  if (!Array.isArray(testimonials)) {
    console.error("data.data no es un array:", testimonials);
    return <div>Error: Formato de datos incorrecto</div>;
  }

  if (testimonials.length === 0) {
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Testimonios:</h1>
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No hay testimonios disponibles</p>
      </div>
    </div>;
  }

  return (
    <div className="w-full p-4 border-2 border-black">
      Table-Content-Section
      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="font-bold">{testimonial.title}</h3>
            <p className="text-sm text-gray-600">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
