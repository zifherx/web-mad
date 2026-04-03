"use client";

import { Edit, Eye, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { TestimonialResponseDTO } from "@/types/models/testimonial.types";
import { StatusBadge } from "@/components/shared/Status-Badge";
import { RatingStar } from "@/components/shared/Rating-Star";
import { on } from "events";

interface GridViewProps {
  filteredTestimonials: TestimonialResponseDTO[];
  onEdit: (testimonio: TestimonialResponseDTO) => void;
  onDelete: (testimonio: TestimonialResponseDTO) => void;
}

export function GridView({
  filteredTestimonials,
  onEdit,
  onDelete,
}: GridViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTestimonials.map((item, index) => {
        const {
          id,
          title,
          quote,
          rating,
          imageSource,
          position,
          company,
          status,
          createdAt,
        } = item;
        return (
          <Card
            key={id}
            className="overflow-hidden transition-all duration-200 pb-0"
          >
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-3">
                <Avatar className="h-14 w-14 rounded-full">
                  <AvatarImage src={imageSource} alt={title} sizes="6" />
                  <AvatarFallback>{title}</AvatarFallback>
                </Avatar>
                <div className="block">
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-500">
                    {position}, {company}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3">
              <RatingStar rating={rating} />

              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                "{quote}"
              </p>

              <div className="flex items-center justify-between">
                <StatusBadge status={status} />

                <span className="text-xs text-gray-400">
                  {new Date(createdAt).toLocaleDateString("es-PE")}
                </span>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 px-6 py-3 flex items-center justify-end gap-2 border-t">
              <Button
                variant="link"
                className="cursor-pointer p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => onEdit(item as TestimonialResponseDTO)}
              >
                <Edit className="w-5 h-5" />
              </Button>
              <Button
                variant="link"
                className="cursor-pointer p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                onClick={() => onDelete(item as TestimonialResponseDTO)}
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
