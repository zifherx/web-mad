# 🚀 Marketing Al Día — Web Platform

> Plataforma web oficial de **Marketing Al Día**, comunidad latinoamericana líder en Marketing, Ventas, Negocios y Transformación Digital.

---

## 📋 Descripción

**Marketing Al Día** es una comunidad que reúne a los referentes más importantes de Latinoamérica y Europa en áreas de Marketing, Ventas, Negocios, Liderazgo, Economía, Innovación, Finanzas, Psicología, Customer Experience y Experiencia de Usuario.

Esta plataforma web está construida con **Next.js 16** y desplegada en **Vercel**, ofreciendo servicios de consultoría, conferencias, desarrollo web y customer experience a empresas de toda la región.

---

## 🛠 Tech Stack

| Categoría | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript 5 |
| UI | React 19 + Tailwind CSS v4 |
| Componentes | Radix UI + shadcn/ui |
| Autenticación | Stack Auth (`@stackframe/stack`) |
| Base de datos | MongoDB + Mongoose |
| Server State | TanStack Query v5 |
| Formularios | React Hook Form + Zod |
| Uploads | UploadThing |
| Animaciones | Framer Motion |
| Deploy | Vercel |
| Package Manager | pnpm |

---

## 📁 Estructura del Proyecto

```
web-mad/
├── app/                    # App Router — rutas y layouts
│   ├── (public)/           # Páginas públicas (home, servicios, contacto)
│   ├── dashboard/          # Panel administrativo (protegido)
│   ├── api/                # Route Handlers (REST API)
│   └── layout.tsx          # Layout raíz
├── components/             # Componentes reutilizables
├── data/                   # Datos estáticos y configuración
├── fonts/                  # Fuentes locales (Geist)
├── lib/                    # Utilidades y conexión a BD
├── providers/              # Providers globales (QueryProvider, etc.)
├── stack/                  # Configuración de Stack Auth
├── utils/                  # Funciones globales y metadata
├── public/                 # Assets estáticos
├── middleware.ts           # Protección de rutas
├── next.config.ts          # Configuración de Next.js
├── eslint.config.mjs       # Configuración de ESLint (Flat Config)
└── tsconfig.json           # Configuración de TypeScript
```

---

## ⚙️ Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Base de datos
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/<db>

# Stack Auth
NEXT_PUBLIC_STACK_PROJECT_ID=
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=
STACK_SECRET_SERVER_KEY=

# UploadThing
UPLOADTHING_TOKEN=
```

> ⚠️ Nunca subas el archivo `.env.local` al repositorio. Está incluido en `.gitignore`.

---

## 🚀 Instalación y Desarrollo

### Requisitos

- Node.js `>= 18.x`
- pnpm `>= 9.x`

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/web-mad.git
cd web-mad

# 2. Instalar dependencias
pnpm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus credenciales

# 4. Iniciar servidor de desarrollo (con Turbopack)
pnpm dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 📦 Scripts Disponibles

```bash
pnpm dev      # Servidor de desarrollo con Turbopack
pnpm build    # Build de producción
pnpm start    # Servidor de producción
pnpm lint     # Análisis estático con ESLint
```

---

## 🔐 Autenticación y Rutas Protegidas

La autenticación está implementada con **Stack Auth**. El middleware protege automáticamente cualquier ruta bajo `/dashboard/*`, redirigiendo a `/auth/signin` si el usuario no está autenticado.

```
/                   → Pública
/servicios/*        → Pública
/contacto           → Pública
/auth/*             → Pública (Stack Auth)
/dashboard/*        → 🔒 Protegida (requiere sesión)
```

---

## 🌐 Deploy en Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel desde la rama principal.

### Consideraciones importantes

- El `distDir` está configurado como `dist`. En Vercel, asegúrate de configurar el **Output Directory** como `dist` en **Settings → General → Output Directory**.
- Las variables de entorno deben cargarse desde el panel de Vercel en **Settings → Environment Variables**.

---

## 📞 Contacto

| Canal | Información |
|---|---|
| 🌐 Web | [marketingaldia.net](https://marketingaldia.net) |
| 📧 Email | info@marketingaldia.net |
| 📱 WhatsApp | +51 963 454 290 |
| 📍 Ubicación | Latinoamérica & Europa |

---

## 🤝 Socios Estratégicos

Microsoft · Campus Romero · CX Latam Group · Doppler · Consumer Truth · Municipalidad de Lima · y más de 20 socios regionales.

---

<p align="center">
  Desarrollado por <a href="https://ziphonex.com" target="_blank"><strong>Ziphonex</strong></a> · © 2025 Marketing Al Día. Todos los derechos reservados.
</p>