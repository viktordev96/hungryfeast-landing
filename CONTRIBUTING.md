# Contribuir

Gracias por querer mejorar este proyecto.

## Requisitos
- Node.js (recomendado >= 18)
- npm

## Flujo recomendado
1. Crea una rama desde `main`.
2. Haz cambios pequeños y enfocados.
3. Si modificas imágenes en `assets/`, vuelve a generar los optimizados:

```bash
npm install
npm run optimize:all
```

4. Verifica en local con un servidor estático (recomendado):

```bash
npx http-server . -p 5173
```

5. Abre un PR describiendo:
   - Qué cambió y por qué
   - Capturas (si hay cambios visuales), idealmente **escritorio y móvil**
   - Checklist de deploy (si tocaste SEO/metadata)

## Estilo
- Mantén el proyecto sin frameworks (HTML/CSS/JS).
- Prioriza rendimiento (imágenes optimizadas, `loading="lazy"`, etc.).
- Si cambias layout o componentes, comprueba **~900px, ~720px y un móvil real o emulador** (safe areas, menú, galería).
- Mantén el i18n consistente: si agregas texto en UI, añade sus claves EN/ES en `main.js`.

