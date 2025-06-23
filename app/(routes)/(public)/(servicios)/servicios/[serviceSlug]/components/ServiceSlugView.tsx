"use client";

import { notFound } from "next/navigation";

import { HeroSection } from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import { TargetSection } from "./TargetSection";
import { BenefitsSection } from "./BenefitsSection";
import { ProcessSection } from "./ProcessSection";
import { CTASection } from "./CTASection";
import { RelatedServicesSection } from "./RelatedServicesSection";

import { OneServiceProp } from "@/types";
import { CatalogoServiciosData, getServiceBySlug } from "@/data";

export function ServiceSlugView({ serviceSlug }: OneServiceProp) {
  const servicioEncontrado = getServiceBySlug(serviceSlug);

  if (!servicioEncontrado) {
    notFound();
  }

  const relatedServices = CatalogoServiciosData.filter(
    (item) => item.id !== servicioEncontrado.id
  ).slice(0, 3);

  return (
    <>
      <HeroSection service={servicioEncontrado} />
      <FeaturesSection service={servicioEncontrado} />
      <BenefitsSection service={servicioEncontrado} />
      <ProcessSection service={servicioEncontrado} />
      <TargetSection service={servicioEncontrado} />
      <RelatedServicesSection relatedServices={relatedServices} />
      <CTASection service={servicioEncontrado} />
    </>
  );
}
