# Venus Landing (Astro)

Landing y documentacion oficial de Venus, una libreria moderna y ligera para networking en JavaScript/TypeScript.

## Venus v3.0.1

La landing y la documentacion describen la version 3.0.1. Novedades principales:

- API simetrica: `venus.get/send/update/updateOnly/remove` (modo global) y `createClient()` (varios clientes). Los dos modos son excluyentes.
- Respuestas tipadas que se estrechan con `ok`: `data` pasa a ser `T` al comprobarlo.
- Motor dual: `fetch` por defecto y `XMLHttpRequest` automatico con `progress` o `metrics`.
- Bodies autoserializados con su `Content-Type` (JSON, texto, FormData, URLSearchParams, File/Blob/ArrayBuffer y ReadableStream) y `responseType: "stream"`.
- Reintentos seguros: solo metodos idempotentes, `retryMethods`, `Retry-After` y jitter.
- `abort()` por scope, hooks y `onTelemetry` a nivel de `venus.config` y `createClient`.
- Cero dependencias. El soporte RSS/Atom se elimino de Venus.

## Scripts

- npm run dev: inicia entorno local.
- npm run build: genera build de produccion.
- npm run preview: previsualiza la build.

## Estructura principal

- src/pages/index.astro: landing principal.
- src/pages/doc.astro: pagina de documentacion.
- src/components: secciones reutilizables de landing/docs.
- src/styles/global.css: estilos globales.

## Desarrollo

1. Instalar dependencias:

```bash
npm install
```

2. Levantar entorno local:

```bash
npm run dev
```

3. Abrir en navegador:

`http://localhost:4321`

## Referencias

- GitHub: https://github.com/code-braydev/venus
- NPM: https://www.npmjs.com/package/@braydev/venus
