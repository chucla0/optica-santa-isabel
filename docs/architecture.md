# Arquitectura del Proyecto

El proyecto utiliza la estructura moderna de **Next.js 15 App Router**, separando las responsabilidades de la siguiente manera:

## Estructura de Carpetas

### `/app`
Contiene las rutas (páginas) y la lógica de la API.
- **`/api`**: Endpoints del servidor (ej. `/api/contact`).
- **`/contacto`**, **`/servicios`**, etc.: Páginas del sitio.
- **`layout.tsx`**: Configuración global, fuentes y componentes persistentes (Header/Footer).

### `/components`
Componentes de React reutilizables.
- **UI Components**: Botones, banners, avisos legales.
- **Animaciones**: Componente `AnimatedSection` que encapsula la lógica de Framer Motion para entradas visuales.

### `/public`
Almacena activos estáticos.
- **`/gallery`**: Imágenes de alta calidad para la visualización de la óptica.
- **`/images`**: Logos y recursos de marca.

## Patrones de Renderizado
- **Server Components**: Utilizados para el SEO y la velocidad de carga inicial en todas las páginas informativas.
- **Client Components**: Utilizados específicamente en formularios (`ContactForm`), animaciones interactivas (`Hero`) y scroll suave (`Lenis`).

## Gestión de Estado
El proyecto se mantiene ligero evitando Redux/Context innecesarios, confiando en el estado local de React (`useState`) y la navegación nativa de Next.js.
