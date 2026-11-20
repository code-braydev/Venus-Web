import { en } from "./en";
import { es } from "./es";

/** Code samples for a locale (comments and example texts are translated). */
export function getSnippets(locale?: string | null) {
  return locale === "es" ? es : en;
}
