"use client";

import { Dispatch, SetStateAction, useMemo } from "react";

import { GridView } from "./Grid-View";
import { TableView } from "./Table-View";

import {
  TestimonialResponseDTO,
  UpdateTestimonialDTO,
} from "@/types/models/testimonial.types";

interface TableContentSectionProps {
  isLoading: boolean;
  testimonials: TestimonialResponseDTO[];
  view: "grid" | "list";
  setView: Dispatch<SetStateAction<"grid" | "list">>;
  authorFilter: string;
  statusFilter: string;
  onEdit: (testimonio: TestimonialResponseDTO) => void;
  onDelete: (testimonio: TestimonialResponseDTO) => void;
}

export function TableContentSection({
  isLoading,
  testimonials,
  view,
  authorFilter,
  statusFilter,
  onEdit,
  onDelete,
}: TableContentSectionProps) {
  const filteredData = useMemo(() => {
    if (statusFilter === "all") {
      return testimonials;
    }
    return testimonials.filter((item) => item.status === statusFilter);
  }, [testimonials, statusFilter]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Cargando testimonios...</div>
      </div>
    );
  }

  if (!Array.isArray(filteredData)) {
    console.error("data.data no es un array:", filteredData);
    return <div>Error: Formato de datos incorrecto</div>;
  }

  if (filteredData.length === 0) {
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Testimonios:</h1>
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No hay testimonios disponibles</p>
      </div>
    </div>;
  }

  return (
    <>
      {view === "grid" ? (
        <GridView
          filteredTestimonials={filteredData}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ) : (
        <TableView
          filteredTestimonials={filteredData}
          authorFilter={authorFilter}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </>
  );
}
