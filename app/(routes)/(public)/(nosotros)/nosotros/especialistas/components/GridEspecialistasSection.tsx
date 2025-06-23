"use client";

import { AnimatePresence, motion } from "framer-motion";

import { NoResults } from "./NoResults";
import { GridSpecialistProps } from "@/types";
import { CardEspecialista } from "@/components/shared/CardEspecialista";

export function GridEspecialistasSection({
  onClearFilters,
  resultsCount,
  specialists,
  handleSpecialistClick,
}: GridSpecialistProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {resultsCount > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {specialists.map((especialista, index) => (
                <CardEspecialista
                  key={especialista.id}
                  specialist={especialista}
                  index={index}
                  onClick={() => handleSpecialistClick(especialista)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <NoResults onClearFilters={onClearFilters} />
        )}
      </div>
    </section>
  );
}
