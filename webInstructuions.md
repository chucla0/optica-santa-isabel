# Especificaciones del Proyecto: Óptica Santa Isabel (Web Premium)

Este documento detalla la implementación de una web corporativa de lujo para "Óptica Santa Isabel", inspirada en el estilo minimalista de alta gama de `meikl-optik.at`. El objetivo es una web moderna, limpia, con el azul cian como protagonista y animaciones interactivas avanzadas.

## 1. Stack Tecnológico
- **Framework:** Next.js 14/15 (App Router).
- **Estilos:** Tailwind CSS.
- **Animaciones:** Framer Motion (para micro-interacciones y revelado).
- **Scroll:** Lenis (para Smooth Scrolling).
- **Tipografías:** - *Serif:* Playfair Display o Cormorant Garamond (Elegancia/Autoridad).
  - *Sans:* Inter o Montserrat (Claridad/Modernidad).

## 2. Identidad Visual y Colores
El diseño debe basarse en el "Minimalismo Cálido" evitando el aspecto clínico frío.
- **Fondo Primario:** `#F8F7F5` (Blanco roto / Crema muy suave).
- **Acento Principal:** `#4EDCDF` (Azul Cian vibrante del logo).
- **Texto y Líneas:** `#1A1A1A` (Charcoal / Negro suave).
- **Botones (CTA):** Fondo Cian con texto blanco o viceversa.

## 3. Estructura de la Web (Landing Page Estilo Multipágina)

### A. Hero Section (Pantalla de Bienvenida)
- **Concepto:** 100vh (Pantalla completa).
- **Elemento Central:** Ilustración en formato SVG de unas gafas (basadas en el logo).
  - **Interacción Especial:** "El ojo que te sigue". Los cristales de las gafas deben contener dos puntos (pupilas) que sigan las coordenadas `x` e `y` del cursor del usuario mediante un Hook de React.
- **Título:** "ÓPTICA SANTA ISABEL" en tipografía Serif, tamaño grande, con `letter-spacing` amplio, superpuesto parcialmente a la ilustración.
- **Eslogan:** "Tu mirada, nuestra obra de arte".
- **Navegación:** Header transparente con los enlaces: *Equipo, Gafas de Sol, Monturas, Lentes de Contacto, Contacto*.

### B. Secciones de Contenido (Scroll)
Al bajar, se activarán las siguientes secciones mediante `framer-motion` (efecto fade-in y slide-up):
1. **Servicios:** Grid minimalista de 4 bloques (Examen Visual, Contactología, Óptica Infantil, Asesoramiento).
2. **Marcas:** Slider o grid de logos en blanco y negro que se vuelven Cian al hacer hover.
3. **Sobre Nosotros:** Layout de dos columnas con fotografía de alta calidad (luz natural) y texto editorial.
4. **Contacto y Cita:** Sección con botón flotante circular en la esquina inferior derecha que diga "PEDIR CITA".

## 4. Animaciones y UX Requerida
- **Smooth Scroll:** Implementar Lenis para que el desplazamiento no sea brusco.
- **Custom Cursor:** Un círculo pequeño en color Cian que reaccione al pasar sobre elementos clicables (expandiéndose o cambiando de forma).
- **Text Reveal:** Los títulos principales deben "emerger" desde una máscara invisible al entrar en el viewport.
- **Hover Effects:** Transiciones suaves (mínimo 500ms) en todos los enlaces y botones usando el color de acento.

## 5. Instrucciones para la IA de Implementación
1. **Configuración de Tailwind:** Definir los colores personalizados en `tailwind.config.js`.
2. **Layout Principal:** Crear un `layout.js` que incluya el Smooth Scroll de Lenis y el Custom Cursor.
3. **Componente Hero:** Crear un componente `Hero.tsx` que gestione la lógica de seguimiento del ratón para las pupilas de las gafas.
4. **Optimización de Imágenes:** Utilizar `next/image` para todas las fotografías para asegurar un rendimiento óptimo (WebP).
5. **SEO Local:** Incluir metadatos JSON-LD para negocio local (Óptica) en la configuración de Next.js.