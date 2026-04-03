"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { StartRating } from "@/components/shared/Start-Rating";

import {
  UpdateTestimonialInput,
  updateTestimonialSchema,
} from "@/lib/validations/testimonial.validation";
import { TestimonialResponseDTO } from "@/types/models/testimonial.types";
import { ImageUpload } from "@/components/shared/Image-Upload";

interface EditTestimonialDialogProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  testimonial: TestimonialResponseDTO | null;
  onSubmit: (data: UpdateTestimonialInput) => Promise<void>;
  isSubmitting?: boolean;
}

export function EditTestimonioDialog({
  open,
  onOpenChange,
  testimonial,
  onSubmit,
  isSubmitting = false,
}: EditTestimonialDialogProps) {
  const isEditing = !!testimonial?.id;

  const formUpdateTestimonio = useForm<UpdateTestimonialInput>({
    resolver: zodResolver(updateTestimonialSchema),
    defaultValues: {
      title: "",
      quote: "",
      position: "",
      company: "",
      rating: 5,
      status: "draft",
      imageSource: "",
      // featured: false,
    },
  });

  useEffect(() => {
    if (testimonial) {
      formUpdateTestimonio.reset({
        title: testimonial.title,
        quote: testimonial.quote,
        position: testimonial.position,
        company: testimonial.company || "",
        rating: testimonial.rating,
        status: testimonial.status,
        imageSource: testimonial.imageSource,
      });
    } else {
      formUpdateTestimonio.reset({
        title: "",
        quote: "",
        position: "",
        company: "",
        rating: 5,
        status: "draft",
        imageSource: "",
      });
    }
  }, [testimonial, open]);

  const handleForSubmit = async (data: UpdateTestimonialInput) => {
    await onSubmit(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            {isEditing ? "Editar Testimonio" : "Nuevo Testimonio"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Actualiza la información del testimonio"
              : "Completa los datos del nuevo testimonio"}
          </DialogDescription>
        </DialogHeader>

        <Form {...formUpdateTestimonio}>
          <form
            onSubmit={formUpdateTestimonio.handleSubmit(handleForSubmit)}
            className="space-y-4 mt-3"
          >
            {/* Author */}
            <FormField
              control={formUpdateTestimonio.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Autor</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Juan Pérez"
                      {...field}
                      onChange={(e) => {
                        console.log("📝 Title cambiado:", e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Posicion */}
              <FormField
                control={formUpdateTestimonio.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Posición</FormLabel>
                    <FormControl>
                      <Input placeholder="COE" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Compañia */}
              <FormField
                control={formUpdateTestimonio.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Compañia (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="TechCorp" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Testimonio */}
            <FormField
              control={formUpdateTestimonio.control}
              name="quote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Testimonio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escribe el testimonio..."
                      className="min-h-[80px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Rating */}
              <FormField
                control={formUpdateTestimonio.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <StartRating
                        value={field.value!}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Estado */}
              <FormField
                control={formUpdateTestimonio.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue placeholder="Selecciona estado" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="published">Publicado</SelectItem>
                        <SelectItem value="draft">Borrador</SelectItem>
                        <SelectItem value="archived">Archivado</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* URL Imagen */}
            <FormField
              control={formUpdateTestimonio.control}
              name="imageSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagen del autor</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      disabled={isSubmitting}
                      variant="button"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Sube una imagen del autor del testimonio (máx. 4MB)
                  </FormDescription>
                </FormItem>
              )}
            />

            {/* Acciones */}
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer hover:bg-redCustom hover:text-white"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 m-5 animate-spin" />
                    Guardando
                  </>
                ) : (
                  <>{isEditing ? "Actualizar" : "Crear"}</>
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
