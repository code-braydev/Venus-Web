import type { ContentDict } from "../i18n/content.en";

type OptionEntry = {
  desc: string;
  values?: readonly { value: string; desc: string }[];
};

/** Turns a list of option names into the items an `OptionCards` grid needs. */
export function optionItems(
  list: readonly { name: string; type: string }[],
  options: ContentDict["cards"]["options"],
  hrefFor: (name: string) => string | undefined,
) {
  return list.map((o) => {
    const entry = (options as Record<string, OptionEntry>)[o.name];
    return {
      name: o.name,
      type: o.type,
      desc: entry.desc,
      values: entry.values,
      href: hrefFor(o.name),
    };
  });
}
