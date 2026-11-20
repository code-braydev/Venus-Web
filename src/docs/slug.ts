/** Anchor id for an option or code name: "retry.attempts" -> "retry-attempts". */
export function anchorId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
