/** English code samples shown in the docs and the landing. */
export const en = {
  modesSnippet: `import { venus, createClient } from "@braydev/venus";

// Mode 1: the global venus (one API)
venus.config({ baseURL: "https://api.example.com", timeout: 8000 });
await venus.get<User>("/profile");
venus.reset(); // clear everything (e.g. on logout)

// Mode 2: clients (several APIs)
const api = createClient({ baseURL: "https://api.example.com" });
await api.get<User>("/profile");

// Pick one. Once a client exists, venus.config() throws and
// venus.get(...) resolves as { ok: false, errorCode: "MODE_CONFLICT" }.`,

  retrySnippet: `import { venus } from "@braydev/venus";

// 1. Boolean or number: GET, HEAD, OPTIONS, PUT and DELETE retry
await venus.get("/status", { retry: true });
await venus.get("/status", { retry: 3 });

// 2. Full control over the policy
const res = await venus.get("/report", {
  retry: {
    attempts: 3,        // 3 retries after the first attempt
    backoffMs: 200,     // initial wait: 200ms (exponential, with jitter)
    maxBackoffMs: 5000, // ceiling: 5s
    retryOn: [429, 500, 502, 503],
  },
});

// 3. POST and PATCH never retry by default: a retry could duplicate
//    the operation. Opt in only when the endpoint is safe to repeat.
await venus.send("/events", { type: "click" }, {
  retry: { attempts: 2, retryMethods: ["POST"] },
});

// 4. Custom decision (takes over the method policy)
await venus.get("/orders", {
  retry: {
    attempts: 2,
    shouldRetry: ({ attempt, status, errorCode }) =>
      status === 429 || errorCode === "NETWORK_ERROR",
  },
});

// A server Retry-After header replaces the backoff (capped by maxBackoffMs).
// When every attempt is spent:
if (!res.ok && res.errorCode === "RETRY_EXHAUSTED") {
  console.log("Last status:", res.status, res.data); // both preserved
}`,

  hooksSnippet: `import { createClient } from "@braydev/venus";

export const api = createClient({
  baseURL: "https://api.example.com",
  hooks: {
    // Scope-wide: runs on every attempt, retries included
    beforeRequest: ({ url, attempt }) => {
      console.log("-> " + url + " (attempt " + attempt + ")");
      return {
        headers: {
          Authorization: "Bearer " + session.token, // always the current token
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

// A request can add its own hooks: they run after the client ones
await api.get("/profile", {
  hooks: { beforeRequest: () => ({ headers: { "X-Feature": "beta" } }) },
});`,

  uploadSnippet: `import { venus } from "@braydev/venus";

// Object / array -> application/json
await venus.send("/users", { name: "Brayan" });

// string -> text/plain;charset=UTF-8
await venus.send("/notes", "plain text");

// FormData -> multipart (the runtime sets the boundary)
const form = new FormData();
form.append("avatar", fileInput.files[0]);
await venus.send<User>("/users/1/avatar", form);

// URLSearchParams -> application/x-www-form-urlencoded
await venus.send("/login", new URLSearchParams({ user: "bray", pass: "1234" }));

// File / Blob -> its own type, or application/octet-stream
await venus.send("/files", fileInput.files[0]);

// ArrayBuffer / typed arrays -> application/octet-stream
await venus.send("/raw", new Uint8Array([1, 2, 3]));

// ReadableStream -> application/octet-stream (sent with duplex: "half", never retried)
await venus.send("/ingest", stream);

// An explicit header always wins
await venus.send("/vendor", { a: 1 }, {
  headers: { "Content-Type": "application/vnd.api+json" },
});

// Responses: choose how to decode them
const csv = await venus.get("/export.csv", { responseType: "text" });
const pdf = await venus.get("/report.pdf", { responseType: "blob" });
const live = await venus.get("/events", { responseType: "stream" });`,

  abortSnippet: `import { venus, createClient } from "@braydev/venus";

// One request: a standard AbortSignal
const controller = new AbortController();
const pending = venus.get("/slow", { signal: controller.signal });
controller.abort();
const res = await pending;
// -> { ok: false, errorCode: "ABORTED", status: 499 }

// Everything in flight in the scope (e.g. on route change or logout)
venus.abort();

// Same on a client
const api = createClient({ baseURL: "https://api.example.com" });
api.abort();`,

  engineSnippet: `import { venus } from "@braydev/venus";

// metrics: true -> response.metrics (XHR in browsers, fetch in Node)
const res = await venus.get<User>("/profile", { metrics: true });
console.log(res.metrics);
// { engine: "xhr", startedAt: 1795024235363, durationMs: 84, attempts: 1 }

// progress -> XHR. The direction is detected for you
await venus.send("/upload", form, {
  progress: ({ direction, loaded, percent }) => {
    console.log(direction + ": " + loaded + " " + percent + "%");
    // "upload: 125.0KB / 523.0KB 24%"
  },
});

// Enable metrics for the whole scope
venus.config({ metrics: true });`,

  frontendSnippet: `// src/api.ts: one API, the global venus
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

  backendSnippet: `// server/clients.ts: several services, one client each
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

  migrationSnippet: `- import { venusConfig, get, getRss } from "@braydev/venus";
+ import { venus } from "@braydev/venus";

- venusConfig.setBaseURL("https://api.example.com");
+ venus.config({ baseURL: "https://api.example.com", timeout: 8000 });

- const res = await get("/users");
+ const res = await venus.get<User[]>("/users");

- onUploadProgress / onDownloadProgress / useXHR
+ progress: ({ direction, loaded, percent }) => {}

Behavior changes
- POST and PATCH no longer retry by default (opt in with retryMethods)
- string bodies are sent as text/plain, not application/json
- failures type data as unknown: narrow it before reading the error body
- once a baseURL is set, absolute URLs return INVALID_URL
- venus and createClient are exclusive: pick one per process
- the standalone get/send/update/updateOnly/remove exports are gone
- RSS/Atom support (getRss) was removed from Venus`,

  changelogSnippet: `## 3.0.1

3.0.0 was retracted. 3.0.1 is the first supported release of v3.

### Added
- venus (config, reset, abort, get, send, update, updateOnly, remove) and createClient().
- Dual engine: fetch by default, XMLHttpRequest for progress and metrics.
- Auto-serialized bodies with their Content-Type, and responseType "stream".
- metrics, abort(), scope-wide hooks and onTelemetry.
- Responses narrowed by ok (VenusSuccess | VenusFailure).
- retryMethods, Retry-After support and jitter on the backoff.

### Changed
- POST and PATCH no longer retry by default.
- Once a baseURL is set, only relative paths are accepted.
- String bodies are sent as text/plain.
- A throwing hook resolves as UNKNOWN_ERROR instead of throwing.

### Removed (breaking)
- RSS/Atom support and the fast-xml-parser dependency.
- venusConfig, the standalone get/send/update/updateOnly/remove exports,
  useXHR, onUploadProgress and onDownloadProgress.
- PARSING_ERROR (renamed to JSON_PARSE_ERROR) and the baseUrl request option.

## 2.2.2

### Changed
- Documentation and consistency: README aligned with the changelog (MIT License).

## 2.2.1

### Added
- Official MIT License file and updated package configuration.

## 2.2.0

### Added
- RSS/Atom item images: VenusRssItem now exposes enclosure, media and image
  (RSS/Atom enclosure -> media:thumbnail/media:content -> first <img> in HTML).
- RETRY_EXHAUSTED error code: when retries run out the response reports a
  stable errorCode while keeping the last HTTP status.

### Fixed
- Retry on last attempt: a request that succeeded exactly on its final retry
  is no longer reported as RETRY_EXHAUSTED.
- Content-Type for uploads: send/update no longer force application/json on
  FormData, Blob or URLSearchParams bodies.

## 2.1.0

### Added
- Global headers: venusConfig.setGlobalHeaders() and getGlobalHeaders().
  Per-request headers still take precedence.

## 2.0.1

### Added
- Full ESM support ("type": "module" + exports map).
- Fixed named export resolution in ESM-first frameworks like Astro 5.

## 2.0.0

### Added
- Unified API: get, send, update, updateOnly, remove, getRss.
- Timeout + AbortSignal, retry with backoff, hooks and telemetry.
- Multi-format parsing: json, text, blob, formData, arrayBuffer.
- Normalized response contract with errorCode and optional status.

### Breaking
- Signature: methods now take a unified options object.
- Response: wrapped in the contract that includes errorCode.`,

  timeoutSnippet: `import { venus } from "@braydev/venus";

// 1. Default for the whole scope. There is no built-in default:
//    without it Venus waits as long as the server (and the network) allow.
venus.config({ baseURL: "https://api.example.com", timeout: 8000 });

// 2. One request overrides the scope default (0 turns it off)
await venus.get("/reports/annual", { timeout: 30_000 });
await venus.get("/events", { timeout: 0 });

// 3. It never throws: the timeout is a normal failure
const res = await venus.get("/profile", { timeout: 2000 });
if (!res.ok && res.errorCode === "TIMEOUT") {
  console.log(res.status); // 408
  showToast("The server took too long. Try again.");
}

// 4. The timer is per attempt: with retry, every attempt gets a fresh 2s
//    (GET: up to 3 attempts, about 6s plus backoff in the worst case)
await venus.get("/profile", { timeout: 2000, retry: 2 });

// 5. Cancelling by hand is a different outcome: ABORTED (499), never retried
const ctrl = new AbortController();
const pending = venus.get("/search", { timeout: 5000, signal: ctrl.signal });
ctrl.abort();
await pending; // { ok: false, errorCode: "ABORTED" }`,

  setupSnippet: `import { venus, createClient } from "@braydev/venus";

// ---- Mode 1: global venus (one API) ----
venus.config({ baseURL: "https://api.example.com/", timeout: 8000 });
// the trailing slash of baseURL is removed for you

venus.config({ retry: 2 });   // merged: baseURL and timeout are kept
venus.config({ headers: { Authorization: "Bearer a" } });
venus.config({ headers: { "X-App": "web" } }); // REPLACES headers: Authorization is gone

console.log(venus.config()); // a copy of the active config
venus.abort();               // cancels everything in flight (ABORTED)
venus.reset();               // clean slate: logout, tests

// ---- Mode 2: clients (several APIs) ----
// Use it instead of mode 1: once one mode is used, the other is locked.
const billing = createClient({ baseURL: "https://billing.example.com", timeout: 5000 });
const search = createClient({ baseURL: "https://search.example.com", retry: true });

billing.config(); // read-only copy: clients are immutable
billing.abort();  // cancels only billing's requests`,

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
    // Runs on every attempt, retries included: always the current token
    beforeRequest: () => ({
      headers: { Authorization: "Bearer " + session.token },
    }),
  },
});

// Read the active config back
const current = venus.config();`,

  firstRequestSnippet: `import { venus } from "@braydev/venus";

// GET with query params, timeout and auto parsing
const profile = await venus.get<User>("/profile", {
  timeout: 8000,
  params: { include: ["roles", "permissions"] },
  paramsArrayFormat: "repeat",
});

if (profile.ok) {
  console.log(profile.data.name); // User: no null check needed
} else {
  console.error(profile.errorCode, profile.error);
}

// POST: the object is sent as JSON, Content-Type included
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

api.abort(); // cancel everything in flight on this client`,

  getCode: `const { data, ok, errorCode } = await venus.get<User>("/profile", {
  params: { include: ["roles"] },
  paramsArrayFormat: "repeat",
  responseType: "auto",
  timeout: 8000,
});

if (!ok) return handleError(errorCode);
console.log(data.name); // narrowed to User`,

  sendCode: `// Objects and arrays are sent as JSON
await venus.send<User>("/users", { name: "Brayan" });

// File upload: FormData keeps its multipart boundary
const form = new FormData();
form.append("avatar", file);
await venus.send("/upload", form, {
  progress: ({ direction, loaded, percent }) => {
    console.log(direction, loaded, percent);
  },
});

// Raw binary: the Content-Type comes from the file
await venus.send("/files", file);`,

  updateCode: `// PUT: full replacement
await venus.update("/users/1", {
  name: "Brayan",
  email: "bray@dev.com",
  active: true,
});

// PATCH: only the fields that change
await venus.updateOnly("/users/1", { active: false }, {
  timeout: 6000,
});`,

  removeCode: `const res = await venus.remove<null>("/users/10");

// ok is true on 204 No Content, and data is null
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
  console.log(res.data); // typed as Post
} else {
  console.error(res.errorCode, res.error);
}`,

  useCaseToken: `venus.config({
  baseURL: "https://api.example.com",
  hooks: {
    // Runs on every call, retries included
    beforeRequest: () => ({
      headers: { Authorization: "Bearer " + session.token },
    }),
  },
});`,

  useCaseTimeout: `// Without a timeout, a hung server means an endless spinner
const res = await venus.get<Order[]>("/orders", {
  timeout: 5000,
});

if (!res.ok && res.errorCode === "TIMEOUT") {
  showRetryButton();
}`,

  useCaseRetry: `// Flaky connection? GET retries on its own
const res = await venus.get<Order[]>("/orders", { retry: 3 });

// A payment is never repeated by accident:
// POST does not retry unless you explicitly allow it
await venus.send("/payments", { amount: 49 });`,

  useCaseAbort: `let current: AbortController | undefined;

async function search(text: string) {
  current?.abort(); // cancel the previous search
  current = new AbortController();

  const res = await venus.get<Result[]>("/search", {
    params: { q: text },
    signal: current.signal,
  });
  if (res.ok) render(res.data); // old ones: ABORTED
}`,

  useCaseProgress: `await venus.send("/videos", file, {
  progress: ({ loaded, percent }) => {
    bar.value = percent ?? 0;
    label.textContent = loaded; // "125.0KB / 523.0KB"
  },
});`,

  useCaseErrors: `const res = await venus.get<User>("/me");

if (!res.ok) {
  // No try/catch: every failure has a code you can act on
  if (res.errorCode === "NETWORK_ERROR") return showOffline();
  return showError(res.error);
}

showWelcome(res.data.name); // data is a User here`,

};
