import { en } from "./en";

/** Spanish code samples: only comments and example texts change, the code is identical. */
export const es: typeof en = {
  ...en,
  modesSnippet: `import { venus, createClient } from "@braydev/venus";

// Modo 1: el venus global (una sola API)
venus.config({ baseURL: "https://api.example.com", timeout: 8000 });
await venus.get<User>("/profile");
venus.reset(); // limpia todo (p. ej. al cerrar sesión)

// Modo 2: clientes (varias APIs)
const api = createClient({ baseURL: "https://api.example.com" });
await api.get<User>("/profile");

// Elige uno. Cuando existe un cliente, venus.config() lanza una excepción y
// venus.get(...) resuelve como { ok: false, errorCode: "MODE_CONFLICT" }.`,

  retrySnippet: `import { venus } from "@braydev/venus";

// 1. Booleano o número: se reintentan GET, HEAD, OPTIONS, PUT y DELETE
await venus.get("/status", { retry: true });
await venus.get("/status", { retry: 3 });

// 2. Control total de la política
const res = await venus.get("/report", {
  retry: {
    attempts: 3,        // 3 reintentos después del primer intento
    backoffMs: 200,     // espera inicial: 200ms (exponencial, con jitter)
    maxBackoffMs: 5000, // techo: 5s
    retryOn: [429, 500, 502, 503],
  },
});

// 3. POST y PATCH no se reintentan por defecto: un reintento podría duplicar
//    la operación. Actívalo solo cuando el endpoint sea seguro de repetir.
await venus.send("/events", { type: "click" }, {
  retry: { attempts: 2, retryMethods: ["POST"] },
});

// 4. Decisión propia (reemplaza la política de métodos)
await venus.get("/orders", {
  retry: {
    attempts: 2,
    shouldRetry: ({ attempt, status, errorCode }) =>
      status === 429 || errorCode === "NETWORK_ERROR",
  },
});

// Una cabecera Retry-After del servidor reemplaza al backoff (limitada por maxBackoffMs).
// Cuando se agotan todos los intentos:
if (!res.ok && res.errorCode === "RETRY_EXHAUSTED") {
  console.log("Último status:", res.status, res.data); // se conservan ambos
}`,

  hooksSnippet: `import { createClient } from "@braydev/venus";

export const api = createClient({
  baseURL: "https://api.example.com",
  hooks: {
    // A nivel de scope: se ejecuta en cada intento, reintentos incluidos
    beforeRequest: ({ url, attempt }) => {
      console.log("-> " + url + " (attempt " + attempt + ")");
      return {
        headers: {
          Authorization: "Bearer " + session.token, // siempre el token actual
          "X-Trace-Id": crypto.randomUUID(),
        },
      };
    },
    afterResponse: ({ response, durationMs }) => {
      console.log("<- " + response.status + " in " + durationMs + "ms");
    },
  },
  onTelemetry: ({ url, ok, durationMs, attempt, errorCode }) => {
    analytics.track("request", { url, ok, durationMs, attempt, errorCode });
  },
});

// Una petición puede añadir sus propios hooks: se ejecutan después de los del cliente
await api.get("/profile", {
  hooks: { beforeRequest: () => ({ headers: { "X-Feature": "beta" } }) },
});`,

  uploadSnippet: `import { venus } from "@braydev/venus";

// Objeto / array -> application/json
await venus.send("/users", { name: "Brayan" });

// string -> text/plain;charset=UTF-8
await venus.send("/notes", "plain text");

// FormData -> multipart (el entorno pone el boundary)
const form = new FormData();
form.append("avatar", fileInput.files[0]);
await venus.send<User>("/users/1/avatar", form);

// URLSearchParams -> application/x-www-form-urlencoded
await venus.send("/login", new URLSearchParams({ user: "bray", pass: "1234" }));

// File / Blob -> su propio tipo, o application/octet-stream
await venus.send("/files", fileInput.files[0]);

// ArrayBuffer / typed arrays -> application/octet-stream
await venus.send("/raw", new Uint8Array([1, 2, 3]));

// ReadableStream -> application/octet-stream (se envía con duplex: "half", nunca se reintenta)
await venus.send("/ingest", stream);

// Una cabecera explícita siempre gana
await venus.send("/vendor", { a: 1 }, {
  headers: { "Content-Type": "application/vnd.api+json" },
});

// Respuestas: elige cómo decodificarlas
const csv = await venus.get("/export.csv", { responseType: "text" });
const pdf = await venus.get("/report.pdf", { responseType: "blob" });
const live = await venus.get("/events", { responseType: "stream" });`,

  abortSnippet: `import { venus, createClient } from "@braydev/venus";

// Una petición: un AbortSignal estándar
const controller = new AbortController();
const pending = venus.get("/slow", { signal: controller.signal });
controller.abort();
const res = await pending;
// -> { ok: false, errorCode: "ABORTED", status: 499 }

// Todo lo que está en vuelo en el scope (p. ej. al cambiar de ruta o cerrar sesión)
venus.abort();

// Igual en un cliente
const api = createClient({ baseURL: "https://api.example.com" });
api.abort();`,

  engineSnippet: `import { venus } from "@braydev/venus";

// metrics: true -> response.metrics (XHR en navegadores, fetch en Node)
const res = await venus.get<User>("/profile", { metrics: true });
console.log(res.metrics);
// { engine: "xhr", startedAt: 1795024235363, durationMs: 84, attempts: 1 }

// progress -> XHR. La dirección se detecta sola
await venus.send("/upload", form, {
  progress: ({ direction, loaded, percent }) => {
    console.log(direction + ": " + loaded + " " + percent + "%");
    // "upload: 125.0KB / 523.0KB 24%"
  },
});

// Activa metrics para todo el scope
venus.config({ metrics: true });`,

  frontendSnippet: `// src/api.ts: una API, el venus global
import { venus } from "@braydev/venus";

venus.config({ baseURL: import.meta.env.PUBLIC_API_URL, timeout: 8000 });

// src/news.ts
export async function loadNews() {
  const res = await venus.get<Article[]>("/news", {
    params: { limit: 5 },
    retry: 2,
  });
  return res.ok ? res.data : [];
}`,

  backendSnippet: `// server/clients.ts: varios servicios, un cliente por cada uno
import { createClient } from "@braydev/venus";

export const users = createClient({
  baseURL: process.env.USERS_URL!,
  timeout: 5000,
  retry: 2,
});
export const billing = createClient({
  baseURL: process.env.BILLING_URL!,
  timeout: 10_000,
});

// server/profile.ts
export async function loadProfile(id: string, signal: AbortSignal) {
  const res = await users.get<User>("/users/" + id, { signal });
  if (!res.ok) throw new Error(res.errorCode + ": " + res.error);
  return res.data;
}`,

  timeoutSnippet: `import { venus } from "@braydev/venus";

// 1. Valor por defecto de todo el scope. No existe un valor interno:
//    sin él, Venus espera lo que el servidor (y la red) permitan.
venus.config({ baseURL: "https://api.example.com", timeout: 8000 });

// 2. Una petición sobrescribe el valor del scope (0 lo desactiva)
await venus.get("/reports/annual", { timeout: 30_000 });
await venus.get("/events", { timeout: 0 });

// 3. Nunca lanza: el timeout es un fallo normal
const res = await venus.get("/profile", { timeout: 2000 });
if (!res.ok && res.errorCode === "TIMEOUT") {
  console.log(res.status); // 408
  showToast("El servidor tardó demasiado. Inténtalo de nuevo.");
}

// 4. El temporizador es por intento: con retry, cada intento tiene 2s nuevos
//    (GET: hasta 3 intentos, unos 6s más el backoff en el peor caso)
await venus.get("/profile", { timeout: 2000, retry: 2 });

// 5. Cancelar a mano es otro resultado: ABORTED (499), nunca se reintenta
const ctrl = new AbortController();
const pending = venus.get("/search", { timeout: 5000, signal: ctrl.signal });
ctrl.abort();
await pending; // { ok: false, errorCode: "ABORTED" }`,

  setupSnippet: `import { venus, createClient } from "@braydev/venus";

// ---- Modo 1: venus global (una API) ----
venus.config({ baseURL: "https://api.example.com/", timeout: 8000 });
// la barra final de baseURL se quita por ti

venus.config({ retry: 2 });   // se fusiona: baseURL y timeout se conservan
venus.config({ headers: { Authorization: "Bearer a" } });
venus.config({ headers: { "X-App": "web" } }); // REEMPLAZA headers: Authorization desaparece

console.log(venus.config()); // una copia de la config activa
venus.abort();               // cancela todo lo que está en vuelo (ABORTED)
venus.reset();               // borrón y cuenta nueva: logout, tests

// ---- Modo 2: clientes (varias APIs) ----
// Úsalo en lugar del modo 1: al usar un modo, el otro queda bloqueado.
const billing = createClient({ baseURL: "https://billing.example.com", timeout: 5000 });
const search = createClient({ baseURL: "https://search.example.com", retry: true });

billing.config(); // copia de solo lectura: los clientes son inmutables
billing.abort();  // cancela solo las peticiones de billing`,

  configSnippet: `import { venus } from "@braydev/venus";

venus.config({
  baseURL: "https://api.braydev.xyz",
  timeout: 8000,
});`,

  headersSnippet: `import { venus } from "@braydev/venus";

venus.config({
  baseURL: "https://api.braydev.xyz",
  headers: { "X-App-Version": "1.0.0" },
  hooks: {
    // Se ejecuta en cada intento, reintentos incluidos: siempre el token actual
    beforeRequest: () => ({
      headers: { Authorization: "Bearer " + session.token },
    }),
  },
});

// Lee la config activa
const current = venus.config();`,

  firstRequestSnippet: `import { venus } from "@braydev/venus";

// GET con query params, timeout y parseo automático
const profile = await venus.get<User>("/profile", {
  timeout: 8000,
  params: { include: ["roles", "permissions"] },
  paramsArrayFormat: "repeat",
});

if (profile.ok) {
  console.log(profile.data.name); // User: no hace falta comprobar null
} else {
  console.error(profile.errorCode, profile.error);
}

// POST: el objeto se envía como JSON, con su Content-Type
const created = await venus.send<User>("/users", { name: "Brayan" });`,

  paramsSnippet: `await venus.get("/news", {
  params: { category: "tech", limit: 5 },
});

// Result: /news?category=tech&limit=5`,

  clientSnippet: `import { createClient } from "@braydev/venus";

export const api = createClient({
  baseURL: "https://api.braydev.xyz",
  headers: { "X-App-Version": "1.0.0" },
  timeout: 8000,
});

export const cdn = createClient({
  baseURL: "https://cdn.braydev.xyz",
  timeout: 30_000,
});

const res = await api.get<User[]>("/users");
if (res.ok) console.log(res.data.length);

api.abort(); // cancela todo lo que está en vuelo en este cliente`,

  getCode: `const { data, ok, errorCode } = await venus.get<User>("/profile", {
  params: { include: ["roles"] },
  paramsArrayFormat: "repeat",
  responseType: "auto",
  timeout: 8000,
});

if (!ok) return handleError(errorCode);
console.log(data.name); // acotado a User`,

  sendCode: `// Los objetos y arrays se envían como JSON
await venus.send<User>("/users", { name: "Brayan" });

// Subida de archivo: FormData conserva su boundary multipart
const form = new FormData();
form.append("avatar", file);
await venus.send("/upload", form, {
  progress: ({ direction, loaded, percent }) => {
    console.log(direction, loaded, percent);
  },
});

// Binario crudo: el Content-Type sale del archivo
await venus.send("/files", file);`,

  updateCode: `// PUT: reemplazo completo
await venus.update("/users/1", {
  name: "Brayan",
  email: "bray@dev.com",
  active: true,
});

// PATCH: solo los campos que cambian
await venus.updateOnly("/users/1", { active: false }, {
  timeout: 6000,
});`,

  removeCode: `const res = await venus.remove<null>("/users/10");

// ok es true con 204 No Content, y data es null
if (res.ok) refreshTable(res.status);`,

  fullRequest: `await get<User>("/profile", {
  headers: { Authorization: "Bearer ..." },
  timeout: 5000,
  params: { include: ["roles"] },
  responseType: "auto",
  retry: { attempts: 2, backoffMs: 200 },
});`,

  exampleCode: `import { venus } from "@braydev/venus";

venus.config({ baseURL: "https://api.example.com" });

const res = await venus.get<Post>("/posts/1");

if (res.ok) {
  console.log(res.data); // tipado como Post
} else {
  console.error(res.errorCode, res.error);
}`,

  useCaseToken: `venus.config({
  baseURL: "https://api.example.com",
  hooks: {
    // Se ejecuta en cada llamada, reintentos incluidos
    beforeRequest: () => ({
      headers: { Authorization: "Bearer " + session.token },
    }),
  },
});`,

  useCaseTimeout: `// Sin timeout, un servidor colgado es un spinner eterno
const res = await venus.get<Order[]>("/orders", {
  timeout: 5000,
});

if (!res.ok && res.errorCode === "TIMEOUT") {
  showRetryButton();
}`,

  useCaseRetry: `// ¿Conexión inestable? GET se reintenta solo
const res = await venus.get<Order[]>("/orders", { retry: 3 });

// Un pago nunca se repite por accidente:
// POST no se reintenta salvo que lo permitas expresamente
await venus.send("/payments", { amount: 49 });`,

  useCaseAbort: `let current: AbortController | undefined;

async function search(text: string) {
  current?.abort(); // cancela la búsqueda anterior
  current = new AbortController();

  const res = await venus.get<Result[]>("/search", {
    params: { q: text },
    signal: current.signal,
  });
  if (res.ok) render(res.data); // las viejas: ABORTED
}`,

  useCaseProgress: `await venus.send("/videos", file, {
  progress: ({ loaded, percent }) => {
    bar.value = percent ?? 0;
    label.textContent = loaded; // "125.0KB / 523.0KB"
  },
});`,

  useCaseErrors: `const res = await venus.get<User>("/me");

if (!res.ok) {
  // Sin try/catch: cada fallo trae un código con el que puedes actuar
  if (res.errorCode === "NETWORK_ERROR") return showOffline();
  return showError(res.error);
}

showWelcome(res.data.name); // aquí data es un User`,

};
