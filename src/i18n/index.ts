import { en, type Dict } from "./en";
import { es } from "./es";

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dict> = { en, es };

/**
 * Merge `partial` over `en` so any missing key falls back to English
 * instead of rendering `undefined`. Keys are one level deep per namespace,
 * plus two for nested objects (`why.cards.*`, `insights.*.*`).
 */
function merge(base: unknown, override: unknown): unknown {
  if (override === undefined || override === null) return base;
  if (typeof base !== "object" || base === null) return override;
  if (typeof override !== "object" || override === null) return override;
  if (Array.isArray(base) || Array.isArray(override)) return override;

  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override as Record<string, unknown>)) {
    out[key] = merge(out[key], value);
  }
  return out;
}

/** Translation dictionary for a locale, safely merged over English. */
export function getDict(locale?: string | null): Dict {
  const l: Locale = locale === "es" ? "es" : "en";
  if (l === "en") return en;
  return merge(en, dictionaries.es) as Dict;
}

/** `isLocale("es")` → true */
export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "es";
}

/** Locale derived from the URL: `/es`, `/es/doc` → "es", everything else → "en". */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

/**
 * Locale used by a component: `Astro.currentLocale` when available,
 * falling back to the URL so the wrong locale can never be rendered.
 */
export function resolveLocale(
  current: string | undefined,
  pathname: string,
): Locale {
  return isLocale(current) ? current : localeFromPath(pathname);
}

/**
 * Prefix a site path with the target locale (an existing `/es` prefix
 * is always stripped first, so this is safe for both directions).
 *
 * localizePath("/doc", "es")   → "/es/doc"
 * localizePath("/es/doc", "en")→ "/doc"
 * localizePath("/#why", "es")  → "/es/#why"
 */
export function localizePath(path: string, locale?: string | null): string {
  const target: Locale = locale === "es" ? "es" : "en";

  const [rawPath, hash] = path.split("#");
  const suffix = hash ? `#${hash}` : "";

  let pathname = rawPath || "/";
  if (pathname === "/es") pathname = "/";
  else if (pathname.startsWith("/es/")) pathname = pathname.slice(3);

  if (target === "en") return `${pathname === "/" ? "/" : pathname}${suffix}`;
  return `${pathname === "/" ? "/es/" : `/es${pathname}`}${suffix}`;
}

/**
 * Opposite locale for the switcher: "/doc" → "/es/doc", "/es/doc" → "/doc".
 */
export function alternatePath(path: string, current?: string | null): string {
  const target: Locale = current === "es" ? "en" : "es";
  return localizePath(path, target);
}
