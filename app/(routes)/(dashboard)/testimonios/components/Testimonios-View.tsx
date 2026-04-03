"use client";

import { useState } from "react";
import { Plus, RefreshCcw } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { StatsSection } from "./Stats-Section";
import { FiltrosSection } from "./Filtros-Section";
import { TableContentSection } from "./Table-Content-Section";
import { EditTestimonioDialog } from "./Edit-Testimonio-Dialog";
import { DeleteTestimonioDialog } from "./Delete-Testimonio-Dialog";

import {
  useCreateTestimonial,
  useDeleteTestimonial,
  useTestimonials,
  useUpdateTestimonial,
} from "@/hooks/useTestimonial";
import {
  TestimonialFilterDTO,
  TestimonialResponseDTO,
} from "@/types/models/testimonial.types";
import {
  CreateTestimonialInput,
  UpdateTestimonialInput,
} from "@/lib/validations/testimonial.validation";

export function TestimoniosView() {
  const [serverFilters, setServerFilters] = useState<TestimonialFilterDTO | {}>(
    {
      // status: "published",
      page: 1,
      limit: 10,
    }
  );

  // Filtros locales
  const [authoFilter, setAuthoFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  // Estados dialogos
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialResponseDTO | null>(null);

  // Query automático con cache
  const { data, isLoading, error, isError, refetch } =
    useTestimonials(serverFilters);

  const createMutation = useCreateTestimonial();
  const updateMutation = useUpdateTestimonial();
  const deleteMutation = useDeleteTestimonial();

  // Handlers

  const handleNew = () => {
    console.log("🟢 TestimoniosView | handleNew ejecutado");
    setSelectedTestimonial(null);
    setEditDialogOpen(true);
  };

  const handleEdit = (testimonial: TestimonialResponseDTO) => {
    console.log("🟡 TestimoniosView | handleEdit ejecutado", testimonial.id);
    setSelectedTestimonial(testimonial);
    setEditDialogOpen(true);
  };

  const handleDelete = (testimonial: TestimonialResponseDTO) => {
    console.log("🔴 TestimoniosView | handleDelete ejecutado", testimonial.id);
    setSelectedTestimonial(testimonial);
    setDeleteDialogOpen(true);
  };

  const handleRefresh = () => {
    refetch();
    toast.success("Datos actualizados");
  };

  // Submits

  const handleEditSubmit = async (
    data: CreateTestimonialInput | UpdateTestimonialInput
  ) => {
    try {
      if (selectedTestimonial?.id) {
        await updateMutation.mutateAsync({
          id: selectedTestimonial.id,
          data,
        });
        toast.success("Testimonio actualizado correctamente");
        console.log("✅ Actualización exitosa");
      } else {
        await createMutation.mutateAsync(data as CreateTestimonialInput);
        toast.success("Testimonio creado correctamente");
        console.log("✅ Creación exitosa");
      }

      setEditDialogOpen(false);
      setSelectedTestimonial(null);
    } catch (err) {
      console.error("Error al guardar testimonio", err);
      toast.error(
        selectedTestimonial?.id
          ? "Error al actualizar el testimonio"
          : "Error al crear el testimonio"
      );
    }
  };

  const handleDeleteConfirm = async () => {
    if (!selectedTestimonial?.id) {
      console.warn("⚠️ No hay testimonio seleccionado para eliminar");
      return;
    }

    console.log("🗑️ Eliminando testimonio ID:", selectedTestimonial.id);

    try {
      await deleteMutation.mutateAsync(selectedTestimonial.id);
      toast.success("Testimonio eliminado correctamente");
      setDeleteDialogOpen(false);
      setSelectedTestimonial(null);
    } catch (err) {
      console.error("Error al eliminar testimonio", err);
      toast.error("Error al eliminar el testimonio");
    }
  };

  // Early Returns
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 rounded-lg p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No hay datos disponibles</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 rounded-lg p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-redCustom/10 border border-red-200 rounded-lg p-4">
            <h3 className="text-redCustom font-semibold">
              Error al cargar testimonios
            </h3>
            <p className="text-red-600 text-sm mt-1">
              {error.message || "Ocurrió un error inesperado"}
            </p>
            <Button onClick={handleRefresh} className="mt-3" variant="outline">
              Reintentar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const testimonials = data?.data || [];

  return (
    <div className="min-h-screen bg-gray-50 rounded-lg p-6 space-y-5">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Testimonios</h1>
            <p className="text-gray-600 mt-1">
              Gestiona las reseñas y testimonios de tus clientes
            </p>
          </div>
          <div className="space-x-2">
            <Button
              variant="ghost"
              className="cursor-pointer border border-gray-300"
              onClick={handleNew}
            >
              <Plus className="h-6 w-6" strokeWidth={2} />
            </Button>
            <Button
              className="cursor-pointer text-orangeCustom hover:text-black hover:bg-orangeCustom/40"
              variant="ghost"
              onClick={handleRefresh}
              disabled={isLoading}
            >
              <RefreshCcw
                className={`h-6 w-6 ${isLoading ? "animate-spin" : ""}`}
                strokeWidth={2}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <StatsSection testimonios={data!} isLoading={isLoading} />

      {/* Filtros */}
      <FiltrosSection
        setView={setView}
        view={view}
        authorFilter={authoFilter}
        onAuthorFilterChange={setAuthoFilter}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      {/* Contenido */}
      <TableContentSection
        isLoading={isLoading}
        testimonials={testimonials}
        setView={setView}
        view={view}
        authorFilter={authoFilter}
        statusFilter={statusFilter}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modales */}
      <EditTestimonioDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        testimonial={selectedTestimonial}
        onSubmit={handleEditSubmit}
        isSubmitting={createMutation.isPending || updateMutation.isPending}
      />

      <DeleteTestimonioDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        testimonial={selectedTestimonial}
        onConfirm={handleDeleteConfirm}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
}
