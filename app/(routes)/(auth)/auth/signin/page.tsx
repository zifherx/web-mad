"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AtSign, Eye, EyeOff, KeyRound, Loader2, Zap } from "lucide-react";
import { useStackApp } from "@stackframe/stack";

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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { loginFormSchema, LoginFormValues } from "@/forms";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CustomSignInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(true);
  const appStack = useStackApp();
  const router = useRouter();

  const formLogin = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsSubmitting(true);
    console.log(values);
    const result = await appStack.signInWithCredential({
      email: values.email,
      password: values.password,
    });
    if (result.status == "error") {
      toast("Error en el formulario");
    } else if (result.status == "ok") {
      setIsSubmitting(false);
      toast("Bienvenido");
      //   router.push("/dashboard");
    }
  };

  return (
    <Card className="w-full max-w-md border-none shadow-none space-y-4">
      <CardHeader>
        <CardTitle className="text-3xl">Login</CardTitle>
        <CardDescription className="text-xl">
          Ingresa tu email y contraseña para loguearte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...formLogin}>
          <form
            onSubmit={formLogin.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Email */}
            <FormField
              control={formLogin.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <AtSign className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        {...field}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-12 pl-10 bg-white transition-all duration-200 ${
                          focusedField === "email"
                            ? "ring-1 focus-visible:ring-redCustom"
                            : ""
                        }`}
                        placeholder="tu-email@dominio.com"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={formLogin.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Contraseña</FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <KeyRound className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        {...field}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-12 pl-10 bg-white transition-all duration-200 ${
                          focusedField === "password"
                            ? "ring-1 focus-visible:ring-redCustom"
                            : ""
                        }`}
                        placeholder="tu-password"
                        type={showPassword ? "password" : "text"}
                      />
                      {showPassword ? (
                        <Eye
                          className="absolute right-3 top-4 w-5 h-5 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <EyeOff
                          className="absolute right-3 top-4 w-5 h-5 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isSubmitting}
              className="w-full cursor-pointer bg-gradient-to-r from-redCustom to-orangeCustom hover:scale-105 text-white py-6 text-xl font-bold rounded-2xl group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-3 w-6 h-6 animate-spin" />
                  Iniciando...
                </>
              ) : (
                <>
                  Log in
                  <Zap className="ml-3 h-7 w-7 group-hover:rotate-12 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
