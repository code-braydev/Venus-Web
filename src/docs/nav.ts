/** Docs structure: one entry per page. The order here is the reading order. */
export type DocGroup = "start" | "guides" | "reference" | "project";

export type DocPageId =
  | "intro"
  | "config"
  | "requests"
  | "retries"
  | "timeouts"
  | "hooks"
  | "bodies"
  | "abort"
  | "engine"
  | "architecture"
  | "options"
  | "errors"
  | "types"
  | "glossary"
  | "migration"
  | "changelog";

export const docPages: { id: DocPageId; group: DocGroup }[] = [
  { id: "intro", group: "start" },
  { id: "config", group: "start" },
  { id: "requests", group: "start" },
  { id: "retries", group: "guides" },
  { id: "timeouts", group: "guides" },
  { id: "hooks", group: "guides" },
  { id: "bodies", group: "guides" },
  { id: "abort", group: "guides" },
  { id: "engine", group: "guides" },
  { id: "architecture", group: "guides" },
  { id: "migration", group: "project" },
  { id: "changelog", group: "project" },
  { id: "options", group: "reference" },
  { id: "errors", group: "reference" },
  { id: "types", group: "reference" },
  { id: "glossary", group: "reference" },
];

export const docGroups: DocGroup[] = ["start", "guides", "project", "reference"];

/** Site path of a docs page (without locale prefix): "intro" -> "/doc". */
export function docPath(id: DocPageId): string {
  return id === "intro" ? "/doc" : `/doc/${id}`;
}

/** Slugs that need a `[slug]` route (everything except the intro). */
export const docSlugs = docPages.filter((p) => p.id !== "intro").map((p) => p.id);

/** Request options shared by every method, with their TypeScript type. */
export const requestOptionTypes = [
  { name: "headers", type: "HeadersInit" },
  { name: "disableHeaders", type: "string[]" },
  { name: "body", type: "unknown" },
  { name: "timeout", type: "number (ms)" },
  { name: "signal", type: "AbortSignal" },
  { name: "params", type: "object" },
  { name: "paramsArrayFormat", type: "string" },
  { name: "responseType", type: "string" },
  { name: "retry", type: "boolean | number | object" },
  { name: "hooks", type: "{ beforeRequest, afterResponse }" },
  { name: "onTelemetry", type: "(event) => void" },
  { name: "metrics", type: "boolean" },
  { name: "progress", type: "(progress) => void" },
] as const;

/** The request methods, with the facts that do not depend on the language. */
export const methodFacts = [
  { name: "get", http: "GET", sig: "get<T>(path, options?)", body: false, status: "200", retries: true, anchor: "get" },
  { name: "send", http: "POST", sig: "send<T>(path, body, options?)", body: true, status: "201", retries: false, anchor: "send" },
  { name: "update", http: "PUT", sig: "update<T>(path, body, options?)", body: true, status: "200", retries: true, anchor: "update" },
  { name: "updateOnly", http: "PATCH", sig: "updateOnly<T>(path, body, options?)", body: true, status: "200", retries: false, anchor: "update" },
  { name: "remove", http: "DELETE", sig: "remove<T>(path, options?)", body: false, status: "204", retries: true, anchor: "remove" },
] as const;
