# Deploy a GitHub Pages (branch `main` + `/root`)

Este proyecto es **estático** (no hay build). GitHub Pages puede servirlo tal cual desde la rama `main`.

## 1) Configurar Pages
En el repo:

- `Settings -> Pages`
- **Source**: `Deploy from a branch`
- **Branch**: `main`
- **Folder**: `/ (root)`

Al guardar, GitHub mostrará la URL final.

Para este repo:
- **GitHub Pages**: `https://viktordev96.github.io/hungryfeast-landing/`

## 2) Checklist post-deploy (recomendado)
- **Probar assets**: que carguen `assets/optimized/*` e `icons/*`.
- **Revisar SEO básico**:
  - `link[rel="canonical"]` apunta a la URL pública.
  - `meta[property="og:url"]` coincide con la URL pública.
  - `meta[property="og:image"]` es accesible públicamente (ideal: URL absoluta).
  - JSON-LD incluye `url` correcto.
- **Cache**: si no ves cambios, prueba hard refresh o espera 1-2 minutos (Pages suele cachear).

## 3) Optimización de imágenes (si cambias assets)
Si reemplazas `assets/slider1.jpg`, `assets/slider2.jpg` o `assets/logo.png`:

```bash
npm install
npm run optimize:all
```

Luego commitea los archivos generados en `assets/optimized/`, `icons/` y `site.webmanifest`.

