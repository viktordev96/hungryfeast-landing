# Hungry Feast Landing

Landing page estática (HTML/CSS/JS) enfocada en **rendimiento** y **SEO** para Hungry Feast (buffet & grill), con **selector de idioma EN/ES**.

## Demo (GitHub Pages)
- **URL**: `https://viktordev96.github.io/hungryfeast-landing/`

## Características
- **Stack simple**: HTML + CSS + JavaScript (sin framework)
- **Bilingüe**: inglés por defecto + toggle a español
- **SEO**: meta tags + Open Graph + JSON-LD (`Restaurant`)
- **Imágenes optimizadas**: AVIF/WebP generadas con scripts
- **Responsive y móvil**:
  - Tipografía fluida (`clamp`), rejillas que pasan a una columna en pantallas medianas/pequeñas
  - **Safe areas** (`viewport-fit=cover`, `env(safe-area-inset-*)`) para notch y barras del sistema
  - **Menú móvil** a pantalla completa, cierre con enlace / `Escape` / resize a escritorio; bloqueo de scroll con el menú abierto
  - **Galería** en móvil: scroll horizontal con **scroll-snap**
  - **Hero**: `100svh` / `100dvh`, preloads de imagen según ancho (`≤768px` vs escritorio)
  - **Mapa**: contenedor con `aspect-ratio` para menos layout shift
  - **Accesibilidad**: `aria-controls` / `aria-expanded` en el botón del menú, `:focus-visible` en controles

## Requisitos
- **Node.js**: recomendado **>= 18** (por compatibilidad de `sharp` y scripts)

## Ejecutar en local
Puedes abrir `index.html` directamente, pero para una experiencia más “real” (y evitar restricciones del navegador con archivos locales) es mejor levantar un servidor estático:

```bash
# opción 1 (Node)
npx http-server . -p 5173

# opción 2 (Python)
python -m http.server 5173
```

Luego abre `http://localhost:5173`.

## Scripts (optimización de assets)
Este repo incluye scripts para generar variantes AVIF/WebP y favicons.

```bash
npm install
npm run optimize:all
```

## Estructura del proyecto
- `index.html`: layout, contenido, meta (`theme-color`, viewport con `viewport-fit=cover`), preloads del hero
- `styles.css`: estilos, breakpoints (~900px / ~720px / ~380px), comportamiento móvil del nav y la galería
- `main.js`: scroll del header, reveal, i18n EN/ES, menú móvil (clase `menu-open` en `body`)
- `assets/`: imágenes originales (logo + sliders)
- `assets/optimized/`: AVIF/WebP generados
- `icons/`: favicons / app icons generados
- `site.webmanifest`: manifest (PWA)
- `tools/`: scripts de optimización (Node + sharp)

## Despliegue a GitHub Pages (desde `main`)
En este proyecto se despliega directamente el contenido del repo (carpeta raíz).

1. Ve a `Settings -> Pages`
2. **Source**: `Deploy from a branch`
3. **Branch**: `main`
4. **Folder**: `/ (root)`
5. Guarda los cambios

La web quedará publicada en:
`https://viktordev96.github.io/hungryfeast-landing/`

## Documentación adicional
- `docs/DEPLOY_GITHUB_PAGES.md`: guía rápida de Pages + checklist de SEO
