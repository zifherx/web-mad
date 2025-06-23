"use client";

import { Button } from "@/components/ui/button";
import { NoResultsProps } from "@/types";
import { motion } from "framer-motion";

export function NoResults({ onClearFilters }: NoResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        No se encontraron especialistas
      </h3>
      <p className="text-gray-600 mb-6">
        Intenta con otros términos de búsqueda o filtros
      </p>
      <Button size="lg" onClick={onClearFilters}>
        Limpiar Filtros
      </Button>
    </motion.div>
  );
}
