"use client";

import { motion } from "framer-motion";

import { SearchAndFiltersProps } from "@/types";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearhAndFiltersSection({
  filters,
  onFiltersChange,
  resultsCount,
  specialtyOptions,
}: SearchAndFiltersProps) {
  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value });
  };

  const handleSpecialtyChange = (speciality: string) => {
    onFiltersChange({ ...filters, speciality });
  };

  const clearFilters = () => {
    onFiltersChange({ search: "", speciality: "Todos" });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Barra de búsqueda */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar especialista, país o especialidad..."
              value={filters.search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-10"
            />
            {filters.search && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2">
            {specialtyOptions.map((especialidad, index) => (
              <motion.div
                key={especialidad.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button
                  variant={
                    filters.speciality === especialidad.nombre
                      ? "default"
                      : "outline"
                  }
                  size="sm"
                  onClick={() => handleSpecialtyChange(especialidad.nombre)}
                  className={`transition-all duration-300 cursor-pointer ${
                    filters.speciality === especialidad.nombre
                      ? "bg-redCustom hover:bg-orangeCustom scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  {especialidad.nombre}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Contador de resultados */}
          <motion.div
            key={resultsCount}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <p className="text-gray-600">
              {resultsCount} especialista{resultsCount !== 1 ? "s" : ""}{" "}
              encontrado
              {resultsCount !== 1 ? "s" : ""}
            </p>
            {(filters.search || filters.speciality !== "Todos") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="mt-2 text-redCustom hover:text-redCustom/80"
              >
                Limpiar filtros
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
