# Diseño y Animaciones

La identidad visual del proyecto se basa en el equilibrio entre el espacio en blanco y componentes interactivos de alta fidelidad.

## Sistema de Diseño

### Paleta de Colores
- **Charcoal (#121212)**: Utilizado para textos principales y bloques de información densa.
- **Cream / Bone (#F2F0EC)**: Color de fondo principal que aporta calidez y suavidad visual.
- **Cyan Deep**: Color de acento para llamadas a la acción y elementos clave.

### Tipografía
- **Serif**: Para encabezados (`h1`, `h2`), reforzando el aspecto editorial y clásico de la óptica.
- **Sans-Serif**: Para cuerpos de texto, priorizando la legibilidad en pantallas retina.

## Animaciones e Interactividad

### AnimatedSection
Es el motor principal de movimiento del sitio. Utiliza `Framer Motion` y la API `Intersection Observer` para:
- Detectar cuando un elemento entra en el viewport.
- Aplicar transformaciones (slide-up, slide-left, fade-in) con una curva de easing tipo "spring" para máxima naturalidad.

### Smooth Scroll (Lenis)
Se ha implementado un scroll virtual que reduce el "jerkiness" del scroll nativo del navegador, permitiendo que las animaciones de parallax y entrada se perciban de forma más fluida.

### Componentes Rive
La animación del "Ojo" en la sección Hero no es un video ni un GIF, sino un motor vectorial en tiempo real que reacciona a la posición del ratón mediante máquinas de estado integradas.
– [Documentación de Rive](https://rive.app/)
