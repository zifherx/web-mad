"use client";

import { Dispatch, SetStateAction } from "react";
import { Loader2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { TestimonialResponseDTO } from "@/types/models/testimonial.types";

interface DeleteTestimonioDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  testimonial: TestimonialResponseDTO | null;
  onConfirm: () => Promise<void>;
  isDeleting?: boolean;
}

export function DeleteTestimonioDialog({
  open,
  onOpenChange,
  testimonial,
  onConfirm,
  isDeleting = false,
}: DeleteTestimonioDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente el
            testimonio de{" "}
            <span className="font-semibold text-gray-900">
              {testimonial?.title}
            </span>
            .
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} className="cursor-pointer">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            disabled={isDeleting}
            className="cursor-pointer bg-red-600 hover:scale-105 hover:bg-red-700 focus:ring-red-600"
          >
            {isDeleting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Eliminando...
              </>
            ) : (
              "Eliminar"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
