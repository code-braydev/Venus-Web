/**
 * English content for the multi-page docs and the use-case section:
 * navigation, page headings, option cards, glossary and real-world cases.
 */
export const contentEn = {
  nav: {
    groups: {
      start: "Getting started",
      guides: "Guides",
      reference: "Reference",
      project: "Project",
    },
    menu: "Docs menu",
    onThisPage: "On this page",
    previous: "Previous",
    next: "Next",
    titleSuffix: "Venus HTTP client docs",
    introTitle: "Getting started with Venus: install and first request",
  },

  pages: {
    intro: {
      label: "Introduction",
      title: "Documentation",
      lead: "Venus v3.0.1 from scratch: install it, make your first request and pick how you want to use it.",
    },
    config: {
      label: "Configuration",
      title: "Configuration and lifecycle",
      lead: "Set the defaults once (base URL, headers, timeout...) and control the life of Venus: read it, reset it, cancel everything.",
    },
    requests: {
      label: "Methods",
      title: "Request methods",
      lead: "get, send, update, updateOnly and remove: what each one does, what it returns and which options you can give it.",
    },
    retries: {
      label: "Retries",
      title: "Resilience and safe retries",
      lead: "Recover from failures that fix themselves, without ever repeating something that must happen only once.",
    },
    timeouts: {
      label: "Timeouts",
      title: "Timeouts: never wait forever",
      lead: "Give every request a time limit, so a slow server never leaves your screen loading for good.",
    },
    hooks: {
      label: "Hooks & telemetry",
      title: "Lifecycle hooks and telemetry",
      lead: "Run your own code before a request leaves and after the answer arrives: authentication, logging, tracing.",
    },
    bodies: {
      label: "Request bodies",
      title: "Request bodies",
      lead: "What you can send (objects, files, forms, streams) and how you choose how to read the answer.",
    },
    abort: {
      label: "Aborting",
      title: "Aborting requests",
      lead: "Cancel one request, or everything in flight, when the answer is no longer needed.",
    },
    engine: {
      label: "Engine & metrics",
      title: "Engine, progress and metrics",
      lead: "How Venus sends requests, how to show upload progress and how to measure each request.",
    },
    architecture: {
      label: "SPA & SSR",
      title: "Architecture: Frontend (SPA) and Backend (SSR)",
      lead: "How to organize Venus in a browser app and in a server, with one API or several.",
    },
    options: {
      label: "Request options",
      title: "Request options",
      lead: "Everything you can pass to a request, with its default and every value it accepts.",
    },
    errors: {
      label: "Error codes",
      title: "Error codes",
      lead: "Every failure has a stable code: this is what each one means and whether Venus retries it.",
    },
    types: {
      label: "Types",
      title: "Types reference",
      lead: "All the TypeScript types that Venus exports: responses, options, errors, hooks and metrics, with what each one describes.",
    },
    glossary: {
      label: "Glossary",
      title: "Glossary",
      lead: "The technical words used in these docs, explained in plain language.",
    },
    migration: {
      label: "Migrating from v2",
      title: "Migrating from v2",
      lead: "Upgrading Venus from v2 to v3: the breaking changes that need action, with a before-and-after diff of the code.",
    },
    changelog: {
      label: "Changelog",
      title: "Changelog",
      lead: "Venus version history, from v2.0.0 to the current release, plus how to run the tests and the MIT license.",
    },
  },

  cards: {
    configIntro:
      "<strong>All of this can go in <code>venus.config()</code> and in <code>createClient()</code></strong>. They are the defaults of the scope; a single request can still override them.",
    methodsIntro:
      "Every method accepts <strong>all of these options</strong> as its last argument. Click an option to see exactly what it does. Retries are <strong>off</strong> until you turn on <code>retry</code>.",
    optionsIntro:
      "A quick map of every option. Cards with a list show all the values you can use.",
    labels: {
      type: "Type",
      accepts: "Accepts",
      allOptions: "All the request options",
      body: "Body",
      bodyYes: "Yes, second argument",
      bodyNo: "No",
      status: "Expected status",
      retries: "If retry is on",
      retriesYes: "Retried (idempotent)",
      retriesNo: "Not retried unless you allow it",
      values: "Possible values",
      scopeOnly: "scope only",
      mapTitle: "At a glance",
      detailTitle: "Every option in detail",
    },
    methods: {
      get: "Read data. Never sends a body.",
      send: "Create something new. The body is serialized for you.",
      update: "Replace a resource completely.",
      updateOnly: "Change only some fields of a resource.",
      remove: "Delete a resource. A 204 answer comes back as data: null.",
    },
    options: {
      headers: {
        desc: "Headers sent with the request. The request's own headers win over the scope's.",
      },
      disableHeaders: {
        desc: "Header names to remove from this request, like an inherited Authorization.",
      },
      body: {
        desc: "What you send. Venus picks the Content-Type for you.",
        values: [
          { value: "object / array", desc: "JSON (application/json)" },
          { value: "string", desc: "plain text (text/plain)" },
          { value: "FormData", desc: "multipart, with files and fields" },
          { value: "URLSearchParams", desc: "classic form (urlencoded)" },
          { value: "File / Blob", desc: "binary, with the file's own type" },
          { value: "ArrayBuffer / typed arrays", desc: "raw binary (octet-stream)" },
          { value: "ReadableStream", desc: "streamed binary, never retried" },
        ],
      },
      timeout: {
        desc: "Maximum milliseconds per attempt before it fails as TIMEOUT. 0 turns it off.",
      },
      signal: {
        desc: "An AbortSignal to cancel this request from outside.",
      },
      params: {
        desc: "Query string as an object: { limit: 5 } becomes ?limit=5.",
      },
      paramsArrayFormat: {
        desc: "How an array inside params is written in the URL. Shown for tag: [js, ts].",
        values: [
          { value: "repeat (default)", desc: "?tag=js&tag=ts" },
          { value: "comma", desc: "?tag=js,ts" },
          { value: "brackets", desc: "?tag[]=js&tag[]=ts" },
          { value: "indices", desc: "?tag[0]=js&tag[1]=ts" },
        ],
      },
      responseType: {
        desc: "How the answer body is read.",
        values: [
          { value: "auto (default)", desc: "JSON as an object, anything else as text" },
          { value: "json", desc: "force JSON" },
          { value: "text", desc: "a string (HTML, CSV, XML...)" },
          { value: "blob", desc: "files and images" },
          { value: "formData", desc: "a FormData object" },
          { value: "arrayBuffer", desc: "raw bytes" },
          { value: "stream", desc: "a ReadableStream, chunk by chunk" },
        ],
      },
      retry: {
        desc: "Retries failed attempts that are worth repeating.",
        values: [
          { value: "true", desc: "2 retries with the default waits" },
          { value: "a number", desc: "that many retries, e.g. retry: 3" },
          { value: "an object", desc: "tune attempts, waits, status codes and methods" },
          { value: "false", desc: "off for this request, even if the scope has it" },
        ],
      },
      hooks: {
        desc: "Your code before each attempt (beforeRequest) and after each answer (afterResponse).",
      },
      onTelemetry: {
        desc: "A listener that receives one event per attempt: url, status, duration, error code.",
      },
      metrics: {
        desc: "Fills response.metrics with engine, start time, duration and attempts.",
      },
      progress: {
        desc: "A callback with the transfer progress of an upload or download.",
      },
    },
  },

  glossary: {
    seeGlossary: "What does this mean?",
    entries: [
      { id: "idempotent", term: "Idempotent", def: "A request that gives the same result no matter how many times you repeat it. Reading a profile (GET) or deleting a user (DELETE) are idempotent. Creating an order (POST) is not: repeating it creates two orders. That is why Venus only retries idempotent methods by default." },
      { id: "backoff", term: "Backoff", def: "The wait between one retry and the next, which grows each time (200 ms, 400 ms, 800 ms...). It gives a struggling server time to recover instead of hammering it." },
      { id: "jitter", term: "Jitter", def: "A small random change added to the backoff. Without it, a thousand clients that failed together would all retry at the very same moment and overload the server again." },
      { id: "retry-after", term: "Retry-After", def: "A header some servers send to say \"come back in 5 seconds\". When it is present, Venus waits that long instead of using its own backoff." },
      { id: "timeout", term: "Timeout", def: "The time limit of a request. If the server has not answered by then, Venus gives up and returns a TIMEOUT error instead of waiting forever." },
      { id: "abort-signal", term: "AbortController / AbortSignal", def: "A browser and Node standard to cancel work. You create an AbortController, give its signal to a request and call abort() when you no longer need the answer, for example when the user leaves the page." },
      { id: "xhr", term: "XHR (XMLHttpRequest)", def: "The older way browsers send requests. It can report upload progress, which fetch cannot, so Venus switches to it only when you ask for progress or metrics." },
      { id: "fetch", term: "fetch", def: "The modern way to make requests, built into browsers and Node. It is Venus's default engine." },
      { id: "engine", term: "Engine", def: "What actually sends the request on the network: fetch or XHR. You never choose it; Venus picks the right one." },
      { id: "scope", term: "Scope", def: "The place where defaults live. With the global venus there is one scope; each createClient() has its own. Anything you pass to a single request wins over its scope." },
      { id: "singleton", term: "Singleton (global venus)", def: "One shared instance for the whole app. Handy when you talk to a single API: configure it once and use it anywhere." },
      { id: "client", term: "Client (instance)", def: "An independent copy created with createClient(), with its own base URL, headers and rules. Use one per API when your app talks to several." },
      { id: "hook", term: "Hook / interceptor", def: "A function Venus calls at a fixed moment, so you can add behavior without touching each request. For example, adding the login token right before every request leaves." },
      { id: "telemetry", term: "Telemetry", def: "Automatic reports about how requests behave (which URL, how long, did it fail). You send them to your analytics or logs to spot slow or failing endpoints." },
      { id: "payload", term: "Payload / body", def: "The data you send to the server in a POST, PUT or PATCH: a new user, a file, a form." },
      { id: "content-type", term: "Content-Type", def: "A header that tells the server what kind of data the body is (JSON, text, a file). Venus sets it for you; if you set it yourself, yours wins." },
      { id: "query-params", term: "Query params", def: "The part of a URL after the question mark: /news?category=tech&limit=5. In Venus you write them as an object and it builds the URL for you." },
      { id: "multipart", term: "multipart / FormData", def: "The format used to send files and form fields together, such as an avatar plus a name. FormData is the object that builds it." },
      { id: "stream", term: "Stream", def: "Data that arrives (or leaves) in pieces instead of all at once, useful for huge files or live feeds. A streamed body cannot be repeated, so it is never retried." },
      { id: "spa", term: "SPA (single-page app)", def: "A web app that loads once and then changes the screen with JavaScript, like most React or Vue apps. It usually talks to one API." },
      { id: "ssr", term: "SSR (server-side rendering)", def: "Code that runs on a server (Node) to build pages or serve an API. It often talks to several services, so it fits one client per service." },
      { id: "no-content", term: "204 No Content", def: "A successful answer with no body, typical after deleting something. Venus returns it as ok: true and data: null." },
      { id: "generic", term: "Generic <T>", def: "The type you put in angle brackets, as in get<User>(). It tells TypeScript the shape of the data you expect, so you get autocomplete and error checks." },
      { id: "narrowing", term: "Narrowing", def: "When TypeScript knows more after a check. After if (res.ok), it knows data is your type; after a failed check, it knows you have an error code instead." },
      { id: "endpoint", term: "Endpoint", def: "One address of an API that does one thing, like /users or /orders/12." },
      { id: "header", term: "Header", def: "Extra information sent with a request or an answer, like the login token (Authorization) or the data type (Content-Type)." },
    ],
  },

  faq: {
    "title": "Frequently asked questions",
    "lead": "Quick answers about what Venus is and how it behaves.",
    "items": [
      {
        "q": "What is Venus?",
        "a": "Venus is a zero-dependency HTTP client for JavaScript and TypeScript. It runs on <code>fetch</code> and adds typed responses, safe retries, timeouts, cancellation and upload progress, so you write less code around every request."
      },
      {
        "q": "Does Venus work in the browser and in Node?",
        "a": "Yes. It uses <code>fetch</code> by default in both. In the browser it switches to <code>XMLHttpRequest</code> only when you ask for <code>progress</code> or <code>metrics</code>; in Node, <code>progress</code> is not available and returns an <code>UNSUPPORTED</code> error."
      },
      {
        "q": "Does Venus throw exceptions?",
        "a": "No. Every request resolves to an object with <code>ok</code>, <code>data</code>, <code>status</code> and an <code>errorCode</code>. Check <code>ok</code> and TypeScript narrows the type for you, so the normal flow needs no try/catch."
      },
      {
        "q": "Does Venus retry failed requests?",
        "a": "Only if you ask for it: retries are off until you set <code>retry</code>. Then it retries network errors, timeouts, 408, 429 and 5xx, and only for idempotent methods (GET, PUT, DELETE...), so a POST such as a payment is never repeated by accident."
      },
      {
        "q": "Can I use Venus with more than one API?",
        "a": "Yes. Use <code>createClient()</code> to create one independent client per API, each with its own base URL, headers, timeout and retry rules. The global <code>venus</code> and clients are exclusive: pick one mode per app."
      },
      {
        "q": "Does Venus include TypeScript types?",
        "a": "Yes. The types ship with the package and every method takes a generic, like <code>venus.get&lt;User&gt;()</code>, so <code>data</code> is typed once you check <code>ok</code>."
      },
      {
        "q": "How do I install Venus, and what is its license?",
        "a": "Run <code>npm install @braydev/venus</code>. Venus is free and open source under the MIT license."
      }
    ]
  },

  useCases: {
    title: "Why do you need an HTTP client?",
    lead: "Calling an API is easy. Making it work every single day is the hard part. These are the problems you will meet, and how Venus handles each one.",
    cta: "Read the guide",
    items: [
      { id: "token", guide: "hooks", title: "The login token expires", problem: "Every request needs the current token. Writing the header by hand in each call is how a stale token slips in and users get logged out." },
      { id: "timeout", guide: "timeouts", title: "The server hangs", problem: "If a server never answers, your screen stays loading forever. A time limit turns that into an error you can show and recover from." },
      { id: "retry", guide: "retries", title: "The connection fails now and then", problem: "On mobile data or weak Wi-Fi a request can fail once and work a second later. Retrying fixes it, as long as it never repeats a payment." },
      { id: "abort", guide: "abort", title: "The user types faster than the server", problem: "In a search box, answers can arrive out of order and paint old results. Cancel the previous request whenever a new one starts." },
      { id: "progress", guide: "engine", title: "Uploading a big file", problem: "People want a progress bar, not a spinner and a prayer. You need to know how much has been sent." },
      { id: "errors", guide: "errors", title: "An error must not crash the app", problem: "Offline, a 500, a broken JSON: all of them come back as a value with a code, never as a surprise exception." },
    ],
  },
};

export type ContentDict = typeof contentEn;
