/**
 * English dictionary — source of truth for the i18n system.
 * Every other locale is typed against this object (`typeof en`),
 * so a missing key is a TypeScript error at build time.
 *
 * Note: code snippets, function signatures and the changelog
 * intentionally stay in English for every locale (technical content).
 */

export const en = {
  layout: {
    homeTitle: "Venus | Networking without friction",
    homeDescription:
      "A modern, lightweight, type-safe networking library for JS/TS. Stop fighting fetch.",
    docTitle: "Documentation | Venus SDK",
    docDescription:
      "Venus v2.2.2 from scratch: setup, basic requests, advanced examples and the full reference of every method.",
    keywords:
      "venus, networking, library, javascript, typescript, fetch, api, restful, graphql",
  },

  header: {
    why: "Why Venus?",
    docs: "Docs",
    github: "GitHub Repository",
    install: "npm install",
    copyTitle: "Copy command",
    copied: "Copied!",
    copyFailed: "Copy failed:",
    language: "Language",
    langEn: "EN",
    langEs: "ES",
  },

  footer: {
    tagline:
      'Refining <code class="text-purple-200/60 font-mono">fetch</code> into a calm, predictable, and resilient experience.',
    project: "Project",
    author: "Author",
    docs: "Docs",
    built: "Built with Astro & Love.",
    operational: "Operational on Vercel",
  },

  hero: {
    badge: "Venus SDK v2.2.2 is out",
    titleLine1: "Networking,",
    titleLine2: "without the friction.",
    lead:
      'A modern, lightweight networking library that turns complex <code class="text-purple-300 font-mono bg-purple-500/10 px-1 rounded">fetch</code> patterns into a <span class="text-purple-200">calm, predictable experience</span>.',
    cta: "Get Started",
    copyTitle: "Copy command",
    copyFailed: "Copy failed:",
  },

  why: {
    title: "Why Venus?",
    lead:
      "Venus doesn’t try to do everything. It does one thing exceptionally well: making network requests simple, elegant, and reliable.",
    cards: {
      syntax: {
        title: "Clean Syntax",
        body: "Beautiful code that stays out of your way. Focus on your logic, not boilerplate.",
      },
      types: {
        title: "Type-safe by Default",
        body: "Full TypeScript support, from request to response, for predictable data.",
      },
      resilience: {
        title: "Built-in Resilience",
        body: "Handles timeouts and predictable errors, so your app stays robust.",
      },
      results: {
        title: "Consistent Results",
        body: "Predictable outcomes, no matter how a request succeeds or fails.",
      },
      deps: {
        title: "Zero Dependencies",
        body: "Lightweight and fast, powered by native Web APIs, no bloat.",
      },
      focus: {
        title: "Focused Power",
        body: "Venus does one thing exceptionally well: making network requests simple and elegant.",
      },
    },
    learnMore: "Learn more",
  },

  codeExample: {
    title: "Explore the Syntax",
    badge: "TypeScript",
    lead:
      "Venus turns network requests into a predictable experience. One import, infinite possibilities.",
    console: "Output Console",
    systemStatus: "System Status",
    ready: "Ready to orbit",
  },

  methods: {
    heading: "API Reference",
    thMethod: "Method",
    thFunction: "Function",
    thEffect: "Effect",
    rows: {
      get: "GET with serialized query params, JSON/text auto-detection, timeout and retry",
      getRss: "Normalized RSS/Atom with image/enclosure/media resolved for you",
      send: "POST with body validation, FormData/Blob support, retry and hooks",
      update: "Full resource replacement (PUT) with a non-empty body",
      updateOnly: "Partial field modification (PATCH)",
      remove: "DELETE with 204 No Content normalization",
      config: "Base URL and global headers for every request",
    },
  },

  explainer: {
    schemaTitle: "Is the Schema mandatory?",
    schemaBody:
      "<strong>No.</strong> Omitting it returns <code class=\"text-purple-300\">any</code>. However, we <strong>strongly recommend</strong> it for full IDE Intellisense, preventing \"undefined\" errors before they reach production.",
    optionsTitle: "Unified Options in v2.0.0",
    requestControlsTitle: "Request Controls",
    requestControlsBody:
      "headers, timeout, signal, params and paramsArrayFormat for safe URL query handling.",
    parsingTitle: "Parsing + Resilience",
    parsingBody:
      "responseType: auto/json/text/blob/formData/arrayBuffer, retry with backoff, and lifecycle hooks.",
    fullRequest: "Full request",
  },

  quickStart: {
    steps: {
      baseTitle: "Configure the base URL",
      baseBody:
        'Before firing any request, you <strong>must</strong> initialize the base URL. This ensures every relative path (e.g. <code class="text-purple-300">/users</code>) resolves correctly against your server.',
      baseNote:
        '💡 <strong>Best practice:</strong> import this config file from your main entry point (e.g. <code class="text-white">Layout.astro</code> or <code class="text-white">main.ts</code>) so it runs before any component renders.',

      headersTitle: "Global headers (auth, versioning, tracing)",
      headersBody:
        "If your app always sends the same headers — an auth token, an app version, a trace id — define them once and Venus applies them to <strong>every</strong> request automatically.",
      headersNote:
        '⚡ <strong>Precedence:</strong> if you send a header with the same name in a single request’s options, <strong>that one</strong> wins. Per-request headers override global headers, never the other way around.',

      firstTitle: "Your first request",
      firstBody:
        "Venus unifies the options object across all methods and adds smart parsing for JSON or text/RSS payloads. Every response has the same shape: <code class=\"text-purple-300\">data</code>, <code class=\"text-purple-300\">ok</code>, <code class=\"text-purple-300\">error</code>, <code class=\"text-purple-300\">errorCode</code> and <code class=\"text-purple-300\">status</code>.",

      paramsTitle: "Query params: what they are and how they serialize",
      paramsBody:
        "The <code class=\"text-purple-300\">params</code> option takes a plain object of query parameters. Venus serializes it and appends it to the URL with correct URL-encoding, so you never build query strings by hand.",
      paramsSub:
        "When a value is an <strong>array</strong>, you choose how it serializes with <code class=\"text-purple-300\">paramsArrayFormat</code>. Each mode produces a different URL and targets a different kind of backend:",

      rssTitle: "RSS and Atom feeds",
      rssBody:
        "Venus consumes feeds without manual XML parsing. Every item also exposes <code class=\"text-purple-300\">image</code>, <code class=\"text-purple-300\">enclosure</code> and <code class=\"text-purple-300\">media</code> in a normalized shape.",
    },
    formats: {
      repeat:
        "Repeats the key for every element. The standard used by Express, Rails and PHP.",
      comma:
        "Joins the elements with commas under a single key. For APIs that expect CSV lists.",
      brackets:
        "Appends empty brackets. The usual convention in PHP / Laravel / jQuery.",
      indices:
        "Explicit numeric indices. Useful for nested-object parsers (qs, PHP).",
    },
  },

  docMethod: {
    syntax: "Syntax",
    expectedStatus: "Expected status",
    insights: "Method insights",
    example: "Example",
  },

  insights: {
    anatomyTitle: "Anatomy of a Response",
    anatomyKicker: "What Venus returns",
    anatomyBody:
      "Every method in Venus returns a predictable contract. No try/catch is required for normal control flow; check <code>ok</code> and render from there.",
    anatomy: {
      data: "Parsed payload from json/text/blob/formData/arrayBuffer.",
      ok: "True when the request succeeded.",
      status: "HTTP status when available.",
      error: "Human-readable message for logs and UI.",
      errorCode: "HTTP_ERROR, TIMEOUT, ABORTED, NETWORK_ERROR, RETRY_EXHAUSTED and more.",
      exhausted: "Returned when every retry attempt is spent. Keeps the last HTTP status.",
    },
    get: {
      params: {
        title: "params: query strings without building URLs by hand",
        body: "Takes a plain object and serializes it with correct URL-encoding. E.g. params: { category: \"tech\", limit: 5 } produces /news?category=tech&limit=5.",
      },
      arrayFormat: {
        title: "paramsArrayFormat: how arrays serialize into the query",
        body: "\"repeat\" (default) repeats the key: ?tag=js&tag=ts — the standard for Express, Rails and PHP. \"comma\" joins with commas: ?tag=js,ts for APIs expecting CSV lists. \"brackets\" appends empty brackets: ?tag[]=js&tag[]=ts (PHP/Laravel/jQuery convention). \"indices\" uses numeric indices: ?tag[0]=js&tag[1]=ts (qs-style parsers).",
      },
      auto: {
        title: "responseType \"auto\": smart detection",
        body: "Inspects headers and body: JSON is returned as an object, text/XML/HTML comes back as a string. Ideal for mixed endpoints and feeds with zero extra config.",
      },
      modes: {
        title: "Other response modes",
        body: "Force the parser with \"json\", \"text\", \"blob\" (files and binaries), \"formData\" or \"arrayBuffer\" (streaming and binary processing).",
      },
      retry: {
        title: "retry: resilience against transient failures",
        body: "Automatically retries on 408, 429 and 5xx. Accepts a boolean, a number, or an object with attempts, backoffMs, maxBackoffMs, retryOn and shouldRetry. When attempts run out the response reports errorCode RETRY_EXHAUSTED while keeping the last HTTP status.",
      },
    },
    getRss: {
      strict: {
        title: "rssMode \"strict\" (default)",
        body: "Strictly validates the XML structure. If the feed is not a valid RSS or Atom document the request fails immediately with PARSING_ERROR. Best when you control the source.",
      },
      lenient: {
        title: "rssMode \"lenient\"",
        body: "Tolerant mode (best-effort). If the feed has a custom or malformed structure, Venus flattens it and extracts the items anyway, without failing on a non-standard format.",
      },
      image: {
        title: "item.image: auto-resolved thumbnail",
        body: "Detection cascade in order: enclosure (RSS/Atom) → media (media:thumbnail / media:content) → first <img> tag found inside the content or description HTML. Returns a ready-to-use URL.",
      },
      media: {
        title: "item.enclosure and item.media",
        body: "Access to the raw sources: enclosure stores { url, type, length } from the RSS or Atom attachment; media stores arrays of content ({ url, type, medium }) and thumbnail ({ url }) from Media RSS. Useful for podcasts, video and images.",
      },
      fields: {
        title: "Normalized feed fields",
        body: "sourceType (\"rss\" | \"atom\"), title, description, link, language, updatedAt, image and items. Every item exposes title, link, description, content, pubDate, guid, author, categories, enclosure, media and image.",
      },
    },
    send: {
      validation: {
        title: "Pre-flight body validation (INVALID_BODY)",
        body: "Before opening a network connection it checks whether body is null, undefined or an empty object {}. When empty it returns a local 400 with errorCode INVALID_BODY, saving bandwidth and avoiding a pointless server round-trip.",
      },
      contentType: {
        title: "Uploads that keep the Content-Type intact",
        body: "Detects FormData, Blob and URLSearchParams and does NOT force application/json, so the browser can manage multipart boundaries correctly. String and plain-object bodies are still serialized with JSON.stringify.",
      },
      serverErrors: {
        title: "Server error extraction",
        body: "When the response is not ok, it tries to read the message field from the backend body and returns it prefixed with \"Venus: \" so errors stay readable in UI and logs.",
      },
      bodies: {
        title: "Supported bodies",
        body: "Objects (serialized to JSON), strings (raw payloads), FormData (multipart), Blob (binaries) and URLSearchParams (URL-encoded forms).",
      },
    },
    update: {
      difference: {
        title: "update vs updateOnly: the key difference",
        body: "update sends PUT (full replacement: the body must contain the whole resource). updateOnly sends PATCH (partial modification: send only the fields that change). Both share the same signature and options.",
      },
      validation: {
        title: "Pre-flight body validation (INVALID_BODY)",
        body: "Like send: it rejects null, undefined or empty {} bodies before touching the network, returning 400 with INVALID_BODY and the message \"PUT/PATCH requires a non-empty body\".",
      },
      uploads: {
        title: "Same upload handling as send",
        body: "FormData, Blob and URLSearchParams never get a forced application/json, so updates carrying file attachments work without breaking multipart boundaries.",
      },
      errors: {
        title: "Normalized server errors",
        body: "If the backend answers with an error, Venus reads its message field and returns it as \"Venus: Update failed. ...\" along with the original status and errorCode.",
      },
    },
    remove: {
      noContent: {
        title: "204 No Content normalization",
        body: "REST APIs answer 204 with no body on successful deletions. Venus intercepts that status and normalizes the response: ok: true, data: null, error: null, errorCode: null — no try/catch or extra checks required.",
      },
      errors: {
        title: "Server error extraction",
        body: "If the deletion fails (4xx/5xx) it tries to read the message field from the body and returns it as \"Venus: Delete operation failed. ...\", preserving status and errorCode.",
      },
      options: {
        title: "Same options as everywhere else",
        body: "Supports params, timeout, signal, responseType, retry and hooks — the same unified options model used by get, send and update.",
      },
      generic: {
        title: "The <T> generic",
        body: "Even though 204 returns no body, the signature stays generic for backends that answer 200 with a payload (for example the deleted resource or a confirmation message).",
      },
    },
    descriptions: {
      get: "Fetch resources with smart parsing, query params, timeout and retry controls. responseType: auto detects JSON vs text payloads.",
      getRss: "Fetch and normalize RSS/Atom feeds with strict or lenient modes for non-standard XML sources.",
      send: "Create resources with retry policy and hooks support for request/response instrumentation.",
      update: "Use update for full replacement (PUT) and updateOnly for partial changes (PATCH) with the same options model.",
      remove: "Delete resources with 204 handling and the same timeout/retry/hook controls available everywhere.",
    },
  },

  doc: {
    title: "Documentation",
    lead: "Venus v2.2.2 from scratch: setup, basic requests, advanced examples and the full reference of every method with all of its details.",
    sidebar: {
      gettingStarted: "Getting started",
      advanced: "Advanced patterns",
      apiManual: "API manual",
      links: {
        installation: "Installation",
        firstSteps: "First steps",
        advancedExamples: "Advanced examples",
        retries: "Retries",
        hooks: "Hooks & telemetry",
        uploads: "Uploads & binaries",
        arch: "SPA & SSR",
        anatomy: "Response anatomy",
        get: "get<T>",
        send: "send<T>",
        rss: "getRss",
        update: "update / updateOnly",
        remove: "remove",
        commonOptions: "Common options",
        rssAtom: "RSS & Atom",
        changelog: "Changelog",
      },
    },
    headings: {
      installation: "Installation",
      advanced: "Advanced examples",
      retries: "Resilience and retries",
      hooks: "Lifecycle hooks and telemetry",
      uploads: "Uploads and binary bodies",
      rssModes: "RSS parsing modes",
      architecture: "Architecture: Frontend (SPA) and Backend (SSR)",
      methodReference: "Method reference",
      commonOptions: "Common options",
      rss: "RSS and Atom",
      feedFields: "Feed item fields",
      changelog: "Changelog",
      testing: "Testing",
      license: "License",
      frontend: "Frontend (SPA)",
      backend: "Backend (Node / SSR)",
    },
    prose: {
      advanced: "Production patterns: retry policies, lifecycle hooks, file uploads and SPA/SSR architecture.",
      retries: "<code>retry</code> recovers requests that failed due to transient problems (408, 429, 5xx). It accepts <code>true</code>, a number, or an object with full control. When the attempts run out, the response reports <code class=\"text-yellow-400\">errorCode: \"RETRY_EXHAUSTED\"</code> while keeping the last HTTP status.",
      hooks: "<code>beforeRequest</code> intercepts the request before it is sent (token injection, tracing, logging) and may return a modified <code>RequestInit</code>. <code>afterResponse</code> runs once the response arrives, with its duration and attempt. <code>onTelemetry</code> emits an event for every settled request.",
      uploads: "<code>send</code> and <code>update</code> detect <code>FormData</code>, <code>Blob</code> and <code>URLSearchParams</code> and do <strong>not</strong> force <code>application/json</code>, preserving multipart boundaries so real uploads work.",
      rssModes: "Choose between strict validation or a tolerant mode depending on the quality of the feed you consume.",
      methodReference: "Every method with its syntax, response contract and all of its insights: which options it accepts, what it improves and how it behaves in edge cases.",
      commonOptions: "Every option documented with exactly what it does.",
      rss: "Venus consumes feeds without manual XML parsing using <code>getRss</code>. Use <code>rssMode: \"strict\"</code> by default, or <code>\"lenient\"</code> for non-standard XML feeds.",
      feedFields: "Besides <code>title</code>/<code>link</code>/<code>description</code>/<code>content</code>, every item exposes image helpers that are resolved automatically:",
      feedFieldsEnd: "Use <code>item.image</code> as a ready-to-use thumbnail, or inspect <code>enclosure</code>/<code>media</code> for the raw sources (podcast covers, video and image attachments).",
      changelog: "Full history up to the current version <strong class=\"text-purple-300\">2.2.2</strong>.",
      testing: "Venus is fully tested with Vitest.",
      license: "MIT © code-braydev",
      copyFailed: "Copy failed:",
    },
  },
};

export type Dict = typeof en;
