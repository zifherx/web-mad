"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { StatsSection } from "./Stats-Section";
import { FiltrosSection } from "./Filtros-Section";
import { TableContentSection } from "./Table-Content-Section";

import { useTestimonials } from "@/hooks/useTestimonial";
import { TestimonialFilterDTO } from "@/types/models/testimonial.types";

export function TestimoniosView() {
  const [filters, setFilters] = useState<TestimonialFilterDTO | {}>({
    // status: "published",
    // page: 1,
    // limit: 10,
  });
  const [showModal, setShowModal] = useState(false);

  // Query automático con cache
  const { data, isLoading, error, isError } = useTestimonials(filters);

  // Debug: Ver qué contiene data
  console.log("Data completa:", data);
  console.log("Data:", typeof data);
  console.log("Data.data:", data?.data);
  console.log("Es array?", Array.isArray(data));

  if (!data) {
    return <div>No hay datos disponibles</div>;
  }

  const testimonials = data.data || [];

  return (
    <div className="min-h-screen bg-gray-50 rounded-lg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Testimonios</h1>
            <p className="text-gray-600 mt-1">
              Gestiona las reseñas y testimonios de tus clientes
            </p>
          </div>
          <Button className="cursor-pointer">
            <Plus className="h-6 w-6" strokeWidth={2} />
          </Button>
        </div>
      </div>
      <StatsSection testimonios={data} />
      <FiltrosSection />
      <TableContentSection
        isError={isError}
        isLoading={isLoading}
        testimonials={testimonials}
      />
    </div>
  );
}
