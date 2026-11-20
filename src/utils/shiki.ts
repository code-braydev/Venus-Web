import type { ShikiTransformer } from "shiki";

/** Tags every rendered code line with `data-line` so CSS can draw its number. */
export const lineNumbers: ShikiTransformer = {
  line(node, line) {
    node.properties = { ...node.properties, "data-line": line };
  },
};
