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
    homeTitle: "Venus | HTTP, without friction",
    homeDescription:
      "A modern, zero-dependency HTTP client for JS/TS. Stop fighting fetch.",
    docTitle: "Documentation | Venus SDK",
    docDescription:
      "Venus v3.0.1 from scratch: setup, modes, request bodies, resilience and the full reference of every method.",
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
    badge: "Venus v3 is here — HTTP, without friction",
    titleLine1: "HTTP,",
    titleLine2: "without the friction.",
    lead:
      'A modern, zero-dependency HTTP client that turns complex <code class="text-purple-300 font-mono bg-purple-500/10 px-1 rounded">fetch</code> patterns into a <span class="text-purple-200">calm, predictable experience</span>.',
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
        title: "Narrowed Types",
        body: "Check ok and data becomes T. On a failure you get the error code and the server's body.",
      },
      resilience: {
        title: "Safe Resilience",
        body: "Timeouts, retries with backoff and abort(). Only idempotent methods retry, so a POST is never duplicated.",
      },
      results: {
        title: "Never Throws",
        body: "Every outcome is a predictable object: data, ok, error, status and metrics. No try/catch for the normal flow.",
      },
      deps: {
        title: "Zero Dependencies",
        body: "Native fetch by default, XMLHttpRequest only when you ask for progress or metrics. No bloat.",
      },
      focus: {
        title: "Two Modes, One API",
        body: "A global venus for simple apps, or createClient() for several APIs. Same methods, same contract.",
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
      get: "GET with serialized query params, auto parsing (json/text/blob/stream), timeout and safe retry",
      send: "POST with auto-serialized bodies (JSON, FormData, Blob, streams) and a Content-Type set for you",
      update: "Full resource replacement (PUT) with a non-empty body",
      updateOnly: "Partial field modification (PATCH)",
      remove: "DELETE with 204 No Content normalization (data: null)",
      abort: "Cancels every in-flight request of the scope (resolves as ABORTED)",
      config: "Declarative global config: baseURL, headers, timeout, retry, metrics and hooks",
      client: "Independent, immutable client with its own defaults. Same methods as venus",
    },
  },


  explainer: {
    schemaTitle: "Is the Schema mandatory?",
    schemaBody:
      "<strong>No.</strong> Omitting it types <code class=\"text-purple-300\">data</code> as <code class=\"text-purple-300\">unknown</code>. However, we <strong>strongly recommend</strong> it: with <code class=\"text-purple-300\">get&lt;User&gt;</code> you get full IDE Intellisense and <code class=\"text-purple-300\">data</code> is a <code class=\"text-purple-300\">User</code> as soon as you check <code class=\"text-purple-300\">ok</code>.",
    optionsTitle: "Unified Options in v3",
    requestControlsTitle: "Request Controls",
    requestControlsBody:
      "headers, disableHeaders, timeout, signal, params and paramsArrayFormat for safe URL query handling.",
    parsingTitle: "Bodies, Parsing + Resilience",
    parsingBody:
      "body is auto-serialized with its Content-Type; responseType: auto/json/text/blob/formData/arrayBuffer/stream; retry with backoff, hooks, metrics and progress.",
    fullRequest: "Full request",
  },

  quickStart: {
    steps: {
      baseTitle: "Configure your API",
      baseBody:
        'Call <code class="text-purple-300">venus.config()</code> once. Every relative path (e.g. <code class="text-purple-300">/users</code>) then resolves against your <code class="text-purple-300">baseURL</code>. Once a <code class="text-purple-300">baseURL</code> is set the scope is <strong>closed</strong>: absolute URLs are rejected with <code class="text-purple-300">INVALID_URL</code>. With no configuration at all, an absolute URL passes straight through.',
      baseNote:
        '💡 <strong>Best practice:</strong> import this config file from your main entry point (e.g. <code class="text-white">Layout.astro</code> or <code class="text-white">main.ts</code>) so it runs before any component renders.',

      headersTitle: "Global headers and token injection",
      headersBody:
        "Static headers go in <code class=\"text-purple-300\">headers</code> and apply to <strong>every</strong> request. For a token that changes, use a scope-wide <code class=\"text-purple-300\">beforeRequest</code> hook: it runs on every attempt, retries included, so it always reads the current token.",
      headersNote:
        '⚡ <strong>Precedence:</strong> a header with the same name in a single request’s options wins over the global one, never the other way around. Drop an inherited header per request with <code class="text-white">disableHeaders</code>.',

      firstTitle: "Your first request",
      firstBody:
        "Every method is called on <code class=\"text-purple-300\">venus</code> and returns the same shape: <code class=\"text-purple-300\">data</code>, <code class=\"text-purple-300\">ok</code>, <code class=\"text-purple-300\">error</code>, <code class=\"text-purple-300\">errorCode</code>, <code class=\"text-purple-300\">status</code> and <code class=\"text-purple-300\">metrics</code>. Check <code class=\"text-purple-300\">ok</code> and TypeScript narrows the rest: <code class=\"text-purple-300\">data</code> becomes your type on success.",

      paramsTitle: "Query params: what they are and how they serialize",
      paramsBody:
        "The <code class=\"text-purple-300\">params</code> option takes a plain object of query parameters. Venus serializes it and appends it to the URL with correct URL-encoding, so you never build query strings by hand.",
      paramsSub:
        "When a value is an <strong>array</strong>, you choose how it serializes with <code class=\"text-purple-300\">paramsArrayFormat</code>. Each mode produces a different URL and targets a different kind of backend:",

      clientTitle: "Several APIs? Use clients",
      clientBody:
        "<code class=\"text-purple-300\">createClient()</code> returns an independent, immutable client with its own <code class=\"text-purple-300\">baseURL</code>, headers, timeout, retry and hooks. It has the same methods as <code class=\"text-purple-300\">venus</code>. The two modes are <strong>exclusive</strong>: the first one you use locks the other.",
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
      "Every method returns a predictable contract and never throws. Check <code>ok</code> and TypeScript narrows the response: <code>data</code> is your type on success, and the server's error body (<code>unknown</code>) on failure.",
    anatomy: {
      data: "T when ok is true. The server's error body (unknown) when it is false.",
      ok: "True when the request succeeded. Checking it narrows the rest of the object.",
      status: "HTTP status. 0 for network and validation failures.",
      error: "Human-readable message for logs and UI. null on success.",
      errorCode: "HTTP_ERROR, TIMEOUT, ABORTED, NETWORK_ERROR, RETRY_EXHAUSTED, INVALID_BODY, INVALID_URL, MODE_CONFLICT and more.",
      metrics: "engine, startedAt, durationMs and attempts when metrics is enabled; otherwise null.",
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
        body: "Inspects headers and body: JSON is returned as an object, text/XML/HTML comes back as a string. Ideal for mixed endpoints with zero extra config.",
      },
      modes: {
        title: "Other response modes",
        body: "Force the parser with \"json\", \"text\", \"blob\" (files and binaries), \"formData\" or \"arrayBuffer\". Use \"stream\" to get response.body as a ReadableStream and read it chunk by chunk (fetch engine only).",
      },
      retry: {
        title: "retry: safe resilience against transient failures",
        body: "Retries on network errors, timeouts, 408, 429 and 5xx, only for idempotent methods (GET, HEAD, OPTIONS, PUT, DELETE). Backoff is exponential with jitter and a server Retry-After header replaces it. When attempts run out, errorCode is RETRY_EXHAUSTED and the last status and body are kept.",
      },
    },
    send: {
      validation: {
        title: "Pre-flight body validation (INVALID_BODY)",
        body: "Before opening a network connection it checks whether the body is null, undefined, an empty string, {} or []. When empty it returns a local 400 with errorCode INVALID_BODY, saving a pointless server round-trip. A body that cannot be serialized (for example a circular object) returns INVALID_BODY instead of throwing.",
      },
      contentType: {
        title: "Content-Type set for you",
        body: "Objects and arrays go out as application/json, strings as text/plain, File/Blob with their own type, ArrayBuffer and typed arrays as application/octet-stream. FormData and URLSearchParams are left to the runtime, so multipart boundaries stay intact. An explicit Content-Type header always wins.",
      },
      serverErrors: {
        title: "Server error extraction",
        body: "When the response is not ok, it reads the message field from the backend body and returns it prefixed with \"Venus: \" so errors stay readable in UI and logs.",
      },
      bodies: {
        title: "Supported bodies",
        body: "Objects and arrays (JSON), strings, FormData (multipart), URLSearchParams (urlencoded), File, Blob, ArrayBuffer, typed arrays and ReadableStream. A streamed body is sent with duplex: \"half\" and is never retried, because a stream cannot be replayed.",
      },
    },
    update: {
      difference: {
        title: "update vs updateOnly: the key difference",
        body: "update sends PUT (full replacement: the body must contain the whole resource). updateOnly sends PATCH (partial modification: send only the fields that change). Both share the same signature and options.",
      },
      validation: {
        title: "Pre-flight body validation (INVALID_BODY)",
        body: "Like send: it rejects null, undefined, empty string, {} and [] bodies before touching the network, returning 400 with INVALID_BODY and the message \"PUT/PATCH requires a non-empty body\".",
      },
      uploads: {
        title: "Same body engine as send",
        body: "The same auto-detection applies: FormData, Blob, binaries and streams keep their own Content-Type, so updates carrying file attachments work.",
      },
      errors: {
        title: "Normalized server errors",
        body: "If the backend answers with an error, Venus reads its message field and returns it as \"Venus: Update failed. ...\" along with the original status and errorCode.",
      },
    },
    remove: {
      noContent: {
        title: "204 No Content normalization",
        body: "REST APIs answer 204 with no body on successful deletions. Venus resolves it as ok: true, data: null, error: null, errorCode: null. Type the call as remove<null>(...) so data is typed as null.",
      },
      errors: {
        title: "Server error extraction",
        body: "If the deletion fails (4xx/5xx) it reads the message field from the body and returns it as \"Venus: Delete operation failed. ...\", preserving status and errorCode.",
      },
      options: {
        title: "Same options as everywhere else",
        body: "Supports params, timeout, signal, responseType, retry and hooks — the same unified options model used by get, send and update. DELETE is idempotent, so it retries by default.",
      },
      generic: {
        title: "The <T> generic",
        body: "Even though 204 returns no body, the signature stays generic for backends that answer 200 with a payload (for example the deleted resource or a confirmation message).",
      },
    },
    descriptions: {
      get: "Fetch resources with smart parsing, query params, timeout and safe retry. responseType: auto detects JSON vs text; stream gives you a ReadableStream.",
      send: "Create resources. The body is auto-serialized with its Content-Type, with retry, hooks and abort support.",
      update: "Use update for full replacement (PUT) and updateOnly for partial changes (PATCH) with the same options model.",
      remove: "Delete resources with 204 handling and the same timeout/retry/hook controls available everywhere.",
    },
  },

  doc: {
    title: "Documentation",
    lead: "Venus v3.0.1 from scratch: setup, the two modes, request bodies, resilience and the full reference of every method with all of its details.",
    sidebar: {
      gettingStarted: "Getting started",
      advanced: "Advanced patterns",
      apiManual: "API manual",
      links: {
        installation: "Installation",
        firstSteps: "First steps",
        modes: "Two modes",
        advancedExamples: "Advanced examples",
        retries: "Retries",
        hooks: "Hooks & telemetry",
        uploads: "Request bodies",
        abort: "Aborting",
        engine: "Engine & metrics",
        arch: "SPA & SSR",
        anatomy: "Response anatomy",
        get: "venus.get<T>",
        send: "venus.send<T>",
        update: "update / updateOnly",
        remove: "venus.remove",
        commonOptions: "Common options",
        migrating: "Migrating from v2",
        changelog: "Changelog",
      },
    },
    headings: {
      installation: "Installation",
      modes: "Two modes: venus and createClient",
      advanced: "Advanced examples",
      retries: "Resilience and safe retries",
      hooks: "Lifecycle hooks and telemetry",
      uploads: "Request bodies",
      abort: "Aborting requests",
      engine: "Engine, progress and metrics",
      architecture: "Architecture: Frontend (SPA) and Backend (SSR)",
      methodReference: "Method reference",
      commonOptions: "Common options",
      migrating: "Migrating from v2",
      changelog: "Changelog",
      testing: "Testing",
      license: "License",
      frontend: "Frontend (SPA)",
      backend: "Backend (Node / SSR)",
    },
    prose: {
      modes:
        "Venus has two ways to be used, and they are <strong>exclusive</strong>. Use the global <code>venus</code> when your app talks to one API, or <code>createClient()</code> when it talks to several. The first mode you use locks the other for the life of the process.",
      advanced:
        "Production patterns: retry policies, lifecycle hooks, request bodies, aborting, the dual engine and SPA/SSR architecture.",
      retries:
        "<code>retry</code> recovers requests that failed for transient reasons (network errors, timeouts, 408, 429 and 5xx). By default only <strong>idempotent</strong> methods retry (GET, HEAD, OPTIONS, PUT, DELETE): a POST or PATCH is never repeated unless you opt in with <code>retryMethods</code> or <code>shouldRetry</code>, so a retry can never duplicate an order or a payment. Backoff is exponential with jitter, and a server <code>Retry-After</code> header replaces it. When the attempts run out, the response reports <code class=\"text-yellow-400\">errorCode: \"RETRY_EXHAUSTED\"</code> and keeps the last status and body.",
      hooks:
        "<code>beforeRequest</code> runs on every attempt and returns a partial override that is merged into the request (headers combine). <code>afterResponse</code> runs when the response arrives, with its duration and attempt. <code>onTelemetry</code> emits one event per attempt. Put them in <code>venus.config</code> or <code>createClient</code> to apply them to every request; the ones in a request run after the scope ones. A hook that throws never breaks the contract: the response is <code class=\"text-yellow-400\">UNKNOWN_ERROR</code>.",
      uploads:
        "Venus detects the payload and sets the <code>Content-Type</code> for you. An explicit <code>Content-Type</code> header always wins. Empty payloads (<code>null</code>, <code>\"\"</code>, <code>{}</code>, <code>[]</code>) return <code>INVALID_BODY</code> without touching the network.",
      abort:
        "Cancel one request with a standard <code>AbortSignal</code>, or everything in flight in a scope with <code>venus.abort()</code> or <code>api.abort()</code>. Aborted requests resolve as <code class=\"text-yellow-400\">ABORTED</code> (status 499) and are never retried.",
      engine:
        "<code>fetch</code> is the default engine. Venus switches to <code>XMLHttpRequest</code> on its own when you pass a <code>progress</code> callback or enable <code>metrics</code>: no flags to set. In Node there is no XHR, so <code>metrics</code> falls back to fetch and <code>progress</code> resolves as <code class=\"text-yellow-400\">UNSUPPORTED</code>.",
      methodReference:
        "Every method with its syntax, response contract and all of its insights: which options it accepts, what it improves and how it behaves in edge cases.",
      commonOptions: "Every option documented with exactly what it does.",
      migrating:
        "Coming from v2? These are the changes that need action. The full list lives in the changelog below.",
      changelog:
        "Full history up to the current version <strong class=\"text-purple-300\">3.0.1</strong>.",
      testing: "Venus is fully tested with Vitest.",
      license: "MIT © code-braydev",
      copyFailed: "Copy failed:",
    },
  },
};

export type Dict = typeof en;
