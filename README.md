# Portafolio Gabriel Torrealba

Sitio web personal moderno estilo Silicon Valley: React + Vite, TailwindCSS, Framer Motion, modo oscuro/claro.

## Tecnologías

- **Frontend:** React 18 + Vite
- **Estilos:** TailwindCSS (responsive, modo oscuro)
- **Animaciones:** Framer Motion
- **Rutas:** React Router v6

## Requisitos

- Node.js 18+

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build para producción

```bash
npm run build
```

La salida queda en `dist/`. Puedes desplegar esa carpeta en Netlify, Vercel o cualquier hosting estático.

## Imagen de perfil

Coloca tu foto en:

- `public/images/WhatsApp Image 2026-02-19 at 10.49.10 PM.jpeg`

o actualiza la ruta en `src/data/content.js` (`hero.profileImage`).

## CV descargable

Coloca tu PDF en `public/cv.pdf` para que el botón "Descargar CV" en Sobre mí funcione.

## Estructura

- `src/pages/` — Páginas (Home, About, Skills, Projects, Contact)
- `src/components/` — Navbar, Footer, ThemeToggle, Layout
- `src/data/content.js` — Textos, enlaces y proyectos (fácil de editar)

## Despliegue (Netlify / Vercel)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Variables:** no necesarias para modo estático
