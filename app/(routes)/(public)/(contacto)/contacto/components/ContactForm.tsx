/** @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { ConctactFormValues, contactFormSchema } from "@/forms";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ConctactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      servicio: "",
      presupuesto: "",
      mensaje: "",
      acepta_terminos: false,
      acepta_marketing: false,
    },
  });

  const onSubmit = async (values: ConctactFormValues) => {
    try {
      console.log({ values });
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="md:col-span-2">
      <Card className="shadow-xl border-0 transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
          <CardDescription>
            Completa el formulario y nos pondremos en contacto contigo en menos
            de 24 horas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre *</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Apellido */}
                <FormField
                  control={form.control}
                  name="apellido"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido *</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu apellido..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Celular */}
                <FormField
                  control={form.control}
                  name="celular"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Celular *</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="924696325"
                          maxLength={9}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Servicio */}
                <FormField
                  control={form.control}
                  name="servicio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Servicio de interés *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="marketing-estrategico">
                            Marketing Estratégico
                          </SelectItem>
                          <SelectItem value="planes-marketing">
                            Planes de Marketing
                          </SelectItem>
                          <SelectItem value="modelos-negocio">
                            Modelos de Negocio
                          </SelectItem>
                          <SelectItem value="customer-experience">
                            Customer Experience
                          </SelectItem>
                          <SelectItem value="conferencias">
                            Conferencias
                          </SelectItem>
                          <SelectItem value="desarrollo-web">
                            Desarrollo Web
                          </SelectItem>
                          <SelectItem value="capacitacion">
                            Capacitación
                          </SelectItem>
                          <SelectItem value="publicidad">
                            Publicidad Estratégica
                          </SelectItem>
                          <SelectItem value="consultoria-general">
                            Consultoría General
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Presupuesto */}
                <FormField
                  control={form.control}
                  name="presupuesto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Presupuesto estimado *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un rango" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="menos-5k">
                            Menos de $5,000
                          </SelectItem>
                          <SelectItem value="5k-15k">
                            $5,000 - $15,000
                          </SelectItem>
                          <SelectItem value="15k-30k">
                            $15,000 - $30,000
                          </SelectItem>
                          <SelectItem value="30k-50k">
                            $30,000 - $50,000
                          </SelectItem>
                          <SelectItem value="mas-50k">
                            Más de $50,000
                          </SelectItem>
                          <SelectItem value="por-definir">
                            Por definir
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos sobre tu proyecto, necesidades específicas, objetivos, plazos o cualquier información relevante que nos ayude a entender mejor cómo podemos ayudarte..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {field.value?.length || 0}/1000 caracteres
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                {/* Acepta Términos */}
                <FormField
                  control={form.control}
                  name="acepta_terminos"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border border-orangeCustom data-[state=checked]:bg-orangeCustom data-[state=checked]:border-orangeCustom data-[state=checked]:text-white"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Acepto los términos y condiciones</FormLabel>
                        <FormDescription>
                          Al enviar este formulario, acepto que Marketing Al Día
                          procese mis datos para responder a mi consulta.
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                {/* Acepta Marketing */}
                <FormField
                  control={form.control}
                  name="acepta_marketing"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border border-orangeCustom data-[state=checked]:bg-orangeCustom data-[state=checked]:border-orangeCustom data-[state=checked]:text-white"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Quiero recibir información sobre servicios y novedades
                        </FormLabel>
                        <FormDescription>
                          Recibirás contenido de valor, casos de éxito y ofertas
                          especiales (opcional).
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
                <Button className="bg-orangeCustom hover:bg-redCustom text-white transition-all duration-300 hover:scale-110 w-full sm:w-auto md:w-1/3 mx-auto">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
