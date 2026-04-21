# Óptica Santa Isabel — Landing Premium

Implementación en Next.js App Router de una web corporativa de lujo para Óptica Santa Isabel, inspirada en `meikl-optik.at`.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS
- Framer Motion
- Lenis
- TypeScript

## Características principales

- Hero full screen con ilustración SVG de gafas y pupilas que siguen el cursor.
- Navegación superior minimalista y paleta visual premium.
- Secciones animadas al entrar en viewport (fade-in + slide-up).
- Smooth scroll con Lenis y cursor personalizado interactivo.
- Imagen optimizada con `next/image`.
- SEO local con JSON-LD para negocio tipo `Optician`.

## Desarrollo

```bash
npm install
npm run dev
```

Si `localhost:3000` muestra pantalla en blanco por caché vieja de service worker:

```bash
npm run dev:3001
```

## Producción

```bash
npm run build
npm run start
```

## Nota

La imagen principal de "Sobre Nosotros" se sirve desde `public/images/sobre-nosotros.jpg`.

## Solución de caché Workbox (Dev)

Si ves errores como `workbox Precaching did not find a match` o `entry.async.js 404`:

1. En DevTools → Application → Service Workers, pulsa **Unregister** para `localhost:3000`.
2. En DevTools → Application → Storage, ejecuta **Clear site data**.
3. Recarga con `Ctrl+Shift+R`.
4. Si persiste, levanta el proyecto en otro puerto con `npm run dev:3001`.

Además, esta plantilla incluye `components/DevServiceWorkerReset.tsx`, que en modo desarrollo desregistra service workers y limpia caché automáticamente una vez por sesión.