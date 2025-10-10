import { Check, Edit, Quote, Star } from "lucide-react";

import { TestimonialResponseDTO } from "@/types/models/testimonial.types";
import { PaginatedResponse } from "@/types/api/response.types";

interface StatsSectionProps {
  testimonios: PaginatedResponse<TestimonialResponseDTO>;
}

export function StatsSection({ testimonios }: StatsSectionProps) {
  console.log("Testimonios: ", testimonios);
  const testimonials = testimonios.data || [];

  const publishedTestimonials = testimonials
    ? testimonials.filter((t) => t.status === "published").length
    : 0;
  const featuredTestimonials = testimonials
    ? testimonials.filter((t) => t.featured).length
    : 0;
  const draftTestimonials = testimonials
    ? testimonials.filter((t) => t.status === "draft").length
    : 0;
  const arrTestimonios = [
    {
      id: 1,
      title: "Total",
      value: testimonials.length,
      icon: Quote,
      bgIcon: "bg-blue-100",
      colorIcon: "text-blue-600",
    },
    {
      id: 2,
      title: "Publicados",
      value: publishedTestimonials,
      icon: Check,
      bgIcon: "bg-green-100",
      colorIcon: "text-green-600",
    },
    {
      id: 3,
      title: "Destacados",
      value: featuredTestimonials,
      icon: Star,
      bgIcon: "bg-yellow-100",
      colorIcon: "text-yellow-600",
    },
    {
      id: 4,
      title: "Borradores",
      value: draftTestimonials,
      icon: Edit,
      bgIcon: "bg-gray-100",
      colorIcon: "text-gray-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {arrTestimonios.map(
        ({ id, icon: Icon, title, value, bgIcon, colorIcon }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-4 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
              </div>
              <div
                className={`w-12 h-12 ${bgIcon} rounded-lg flex items-center justify-center`}
              >
                <Icon className={`w-6 h-6 ${colorIcon}`} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
