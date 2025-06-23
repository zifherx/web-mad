"use client";

import { useMemo, useState } from "react";

import { HeroSection } from "./HeroSection";
import { SearhAndFiltersSection } from "./SearhAndFiltersSection";
import { GridEspecialistasSection } from "./GridEspecialistasSection";
import { EspecialistaModalSection } from "./EspecialistaModalSection";
import { CTASection } from "./CTASection";

import { IEspecialista, IEspecialistaFiltros } from "@/interfaces";
import { EspecialistasData, ListaEspecialidadesData } from "@/data";

export function EspecialistasView() {
  const [filters, setFilters] = useState<IEspecialistaFiltros>({
    search: "",
    speciality: "Todos",
  });
  const [selectedSpecialist, setSelectedSpecialist] =
    useState<IEspecialista | null>(null);

  const filteredSpecialists = useMemo(() => {
    return EspecialistasData.filter((especialista) => {
      const matchesFilter =
        filters.speciality === "Todos" ||
        especialista.especialidad === filters.speciality;
      const matchesSearch =
        especialista.nombre
          .toLowerCase()
          .includes(filters.search.toLowerCase()) ||
        especialista.especialidad
          .toLowerCase()
          .includes(filters.search.toLowerCase()) ||
        especialista.pais
          .toLowerCase()
          .includes(filters.search.toLowerCase()) ||
        especialista.especialidades.some((specialist) =>
          specialist.nombre.toLowerCase().includes(filters.search.toLowerCase())
        );

      return matchesFilter && matchesSearch;
    });
  }, [filters]);

  const stats = useMemo(() => {
    const totalProjects = EspecialistasData.reduce(
      (sum, esp) => sum + esp.proyectos,
      0
    );
    const averageRating =
      EspecialistasData.reduce((sum, esp) => sum + esp.rating, 0) /
      EspecialistasData.length;

    return {
      totalSpecialists: EspecialistasData.length,
      totalProjects,
      averageRating,
    };
  }, []);

  const handleFiltersChange = (newFilters: IEspecialistaFiltros) => {
    setFilters(newFilters);
  };

  const handleSpecialistClick = (specialist: IEspecialista) => {
    setSelectedSpecialist(specialist);
  };

  const handleModalClose = () => {
    setSelectedSpecialist(null);
  };

  const clearFilters = () => {
    setFilters({ search: "", speciality: "Todos" });
  };

  return (
    <>
      <HeroSection kpis={stats} />
      <SearhAndFiltersSection
        filters={filters}
        onFiltersChange={handleFiltersChange}
        specialtyOptions={ListaEspecialidadesData}
        resultsCount={filteredSpecialists.length}
      />
      <GridEspecialistasSection
        handleSpecialistClick={handleSpecialistClick}
        onClearFilters={clearFilters}
        resultsCount={filteredSpecialists.length}
        specialists={filteredSpecialists}
      />
      <EspecialistaModalSection
        isOpen={!!selectedSpecialist}
        onClose={handleModalClose}
        specialist={selectedSpecialist}
      />
      <CTASection />
    </>
  );
}
