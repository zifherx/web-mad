"use client";

import { Title } from "@/components/shared/Title";
import { motion } from "framer-motion";
import { Award, Lightbulb, Target, Users, Zap } from "lucide-react";

export function DiagramaSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Title
          text="Nuestro Enfoque"
          description="Un modelo integral que conecta todos los aspectos de nuestro trabajo"
        />

        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden"></div>

          <div className="relative w-full max-w-4xl mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
