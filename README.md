# Venus Landing (Astro)

Landing y documentacion oficial de Venus, una libreria http moderna y ligera para JavaScript/TypeScript.

## Venus v3.0.1

La landing y la documentacion describen la version 3.0.1. Novedades principales:

- API simetrica: `venus.get/send/update/updateOnly/remove` (modo global) y `createClient()` (varios clientes). Los dos modos son excluyentes.
- Respuestas tipadas que se estrechan con `ok`: `data` pasa a ser `T` al comprobarlo.
- Motor dual: `fetch` por defecto y `XMLHttpRequest` automatico con `progress` o `metrics`.
- Bodies autoserializados con su `Content-Type` (JSON, texto, FormData, URLSearchParams, File/Blob/ArrayBuffer y ReadableStream) y `responseType: "stream"`.
- Reintentos seguros: solo metodos idempotentes, `retryMethods`, `Retry-After` y jitter.
- `abort()` por scope, hooks y `onTelemetry` a nivel de `venus.config` y `createClient`.
- Cero dependencias. El soporte RSS/Atom se elimino de Venus.

## Referencias

- GitHub: https://github.com/code-braydev/venus
- NPM: https://www.npmjs.com/package/@braydev/venus
