import { SITE } from "./site";
import { docPath, type DocPageId } from "./nav";
import { localizePath } from "../i18n";
import type { ContentDict } from "../i18n/content.en";

type Locale = "en" | "es";

const CONTEXT = "https://schema.org";
/** Absolute URL, with the trailing slash the canonical links and the sitemap use. */
const abs = (path: string) => {
  const url = new URL(path, SITE.url);
  if (!/\.[a-z0-9]+$/i.test(url.pathname) && !url.pathname.endsWith("/")) {
    url.pathname += "/";
  }
  return url.toString();
};
const plain = (html: string) => html.replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const author = { "@type": "Person", name: SITE.author.name, url: SITE.author.url };

/** Structured data of the landing: the site, the software and the FAQ. */
export function homeJsonLd(locale: Locale, c: ContentDict, description: string) {
  const url = abs(localizePath("/", locale));
  return [
    {
      "@context": CONTEXT,
      "@type": "WebSite",
      name: SITE.name,
      url,
      inLanguage: locale,
      publisher: author,
    },
    {
      "@context": CONTEXT,
      "@type": "SoftwareApplication",
      name: SITE.name,
      alternateName: SITE.packageName,
      description,
      url,
      image: abs(SITE.ogImage.path),
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      programmingLanguage: "TypeScript",
      softwareVersion: SITE.version,
      downloadUrl: SITE.npm,
      license: SITE.license,
      sameAs: [SITE.github, SITE.npm],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author,
    },
    {
      "@context": CONTEXT,
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: c.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: plain(item.a) },
      })),
    },
  ];
}

/** Structured data of a docs page: the article and its breadcrumb trail. */
export function docJsonLd(
  locale: Locale,
  c: ContentDict,
  id: DocPageId,
  headline: string,
  description: string,
) {
  const home = abs(localizePath("/", locale));
  const docs = abs(localizePath(docPath("intro"), locale));
  const page = abs(localizePath(docPath(id), locale));

  const trail = [
    { name: SITE.name, item: home },
    { name: c.pages.intro.title, item: docs },
    ...(id === "intro" ? [] : [{ name: c.pages[id].label, item: page }]),
  ];

  return [
    {
      "@context": CONTEXT,
      "@type": "TechArticle",
      headline,
      description,
      url: page,
      inLanguage: locale,
      image: abs(SITE.ogImage.path),
      author,
      publisher: author,
      isPartOf: { "@type": "WebSite", name: SITE.name, url: home },
      about: { "@type": "SoftwareApplication", name: SITE.name },
    },
    {
      "@context": CONTEXT,
      "@type": "BreadcrumbList",
      itemListElement: trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name,
        item: t.item,
      })),
    },
  ];
}
