import type { Dict } from "./en";

/**
 * Spanish dictionary. Typed against `en`, so every key is mandatory
 * (a missing key or a wrong shape breaks the TypeScript build).
 *
 * Snippets de código, firmas y changelog permanecen en inglés
 * a propósito: son contenido técnico.
 */

export const es: Dict = {
  layout: {
    homeTitle: "Venus | HTTP, sin fricción",
    homeDescription:
      "Un cliente HTTP moderno y sin dependencias para JS/TS. Deja de pelearte con fetch.",
    docTitle: "Documentación | Venus SDK",
    docDescription:
      "Venus v3.0.1 desde cero: instalación, los dos modos, cuerpos de petición, resiliencia y la referencia completa de cada método.",
    keywords:
      "venus, networking, librería, javascript, typescript, fetch, api, restful, graphql",
  },

  header: {
    why: "¿Por qué Venus?",
    docs: "Docs",
    github: "Repositorio en GitHub",
    install: "npm install",
    copyTitle: "Copiar comando",
    copied: "¡Copiado!",
    copyFailed: "Error al copiar:",
    language: "Idioma",
    langEn: "EN",
    langEs: "ES",
  },

  footer: {
    tagline:
      'Convertimos <code class="text-accent-soft font-mono">fetch</code> en una experiencia tranquila, predecible y resistente.',
    project: "Proyecto",
    author: "Autor",
    docs: "Docs",
    built: "Hecho con Astro & Love.",
    operational: "Operativo en Vercel",
  },

  hero: {
    badge: "Venus v3 ya está aquí — HTTP, sin fricción",
    titleLine1: "HTTP,",
    titleLine2: "sin fricción.",
    lead:
      'Un cliente HTTP moderno y sin dependencias que convierte los patrones complejos de <code class="text-venus-300 font-mono bg-venus-500/10 px-1 rounded">fetch</code> en una <span class="text-venus-200">experiencia tranquila y predecible</span>.',
    cta: "Comenzar",
    copyTitle: "Copiar comando",
    copyFailed: "Error al copiar:",
  },

  why: {
    title: "¿Por qué Venus?",
    lead:
      "Venus no intenta hacerlo todo. Hace una cosa excepcionalmente bien: que las peticiones de red sean simples, elegantes y fiables.",
    cards: {
      syntax: {
        title: "Sintaxis limpia",
        body: "Código elegante que no se interpone. Céntrate en tu lógica, no en el boilerplate.",
      },
      types: {
        title: "Tipos que se estrechan",
        body: "Comprueba ok y data pasa a ser T. Ante un fallo recibes el código de error y el body del servidor.",
      },
      resilience: {
        title: "Resiliencia segura",
        body: "Timeouts, reintentos con backoff y abort(). Solo se reintentan los métodos idempotentes, así que un POST nunca se duplica.",
      },
      results: {
        title: "Nunca lanza",
        body: "Todo resultado es un objeto predecible: data, ok, error, status y metrics. Sin try/catch para el flujo normal.",
      },
      deps: {
        title: "Cero dependencias",
        body: "fetch nativo por defecto y XMLHttpRequest solo cuando pides progress o metrics. Sin peso muerto.",
      },
      focus: {
        title: "Dos modos, una API",
        body: "Un venus global para apps sencillas o createClient() para varias APIs. Mismos métodos, mismo contrato.",
      },
    },
    learnMore: "Saber más",
  },

  codeExample: {
    title: "Explora la sintaxis",
    badge: "TypeScript",
    lead:
      "Venus convierte las peticiones de red en una experiencia predecible. Una importación, infinitas posibilidades.",
    console: "Consola de salida",
    systemStatus: "Estado del sistema",
    ready: "Listo para orbitar",
  },

  methods: {
    heading: "Referencia de la API",
    thMethod: "Método",
    thFunction: "Función",
    thEffect: "Efecto",
    rows: {
      get: "GET con query params serializados, parsing automático (json/text/blob/stream), timeout y retry seguro",
      send: "POST con bodies autoserializados (JSON, FormData, Blob, streams) y Content-Type puesto por ti",
      update: "Reemplazo completo del recurso (PUT) con body no vacío",
      updateOnly: "Modificación parcial de campos (PATCH)",
      remove: "DELETE con normalización de 204 No Content (data: null)",
      abort: "Cancela todas las peticiones en vuelo del scope (resuelven como ABORTED)",
      config: "Configuración global declarativa: baseURL, headers, timeout, retry, metrics y hooks",
      client: "Cliente independiente e inmutable con sus propios defaults. Mismos métodos que venus",
    },
  },

  explainer: {
    schemaTitle: "¿El Schema es obligatorio?",
    schemaBody:
      "<strong>No.</strong> Si lo omites, <code class=\"text-venus-300\">data</code> es de tipo <code class=\"text-venus-300\">unknown</code>. Aun así, lo <strong>recomendamos encarecidamente</strong>: con <code class=\"text-venus-300\">get&lt;User&gt;</code> tienes Intellisense completo y <code class=\"text-venus-300\">data</code> es un <code class=\"text-venus-300\">User</code> en cuanto compruebas <code class=\"text-venus-300\">ok</code>.",
    optionsTitle: "Opciones unificadas en v3",
    requestControlsTitle: "Control de la petición",
    requestControlsBody:
      "headers, disableHeaders, timeout, signal, params y paramsArrayFormat para manejar la query de forma segura.",
    parsingTitle: "Bodies, parsing + resiliencia",
    parsingBody:
      "body se autoserializa con su Content-Type; responseType: auto/json/text/blob/formData/arrayBuffer/stream; retry con backoff, hooks, metrics y progress.",
    fullRequest: "Petición completa",
  },

  quickStart: {
    steps: {
      baseTitle: "Configura tu API",
      baseBody:
        'Llama a <code class="text-venus-300">venus.config()</code> una sola vez. Cada ruta relativa (por ejemplo <code class="text-venus-300">/users</code>) se resuelve entonces contra tu <code class="text-venus-300">baseURL</code>. Con una <code class="text-venus-300">baseURL</code> configurada el scope queda <strong>cerrado</strong>: las URLs absolutas se rechazan con <code class="text-venus-300">INVALID_URL</code>. Sin ninguna configuración, una URL absoluta pasa directa.',
      baseNote:
        '💡 <strong>Buena práctica:</strong> importa este archivo de configuración desde tu punto de entrada principal (por ejemplo <code class="text-ink">Layout.astro</code> o <code class="text-ink">main.ts</code>) para que se ejecute antes de que se renderice cualquier componente.',

      headersTitle: "Cabeceras globales e inyección de token",
      headersBody:
        "Las cabeceras estáticas van en <code class=\"text-venus-300\">headers</code> y se aplican a <strong>todas</strong> las peticiones. Para un token que cambia, usa un hook <code class=\"text-venus-300\">beforeRequest</code> a nivel de scope: se ejecuta en cada intento, reintentos incluidos, así que siempre lee el token actual.",
      headersNote:
        '⚡ <strong>Precedencia:</strong> una cabecera con el mismo nombre en las opciones de una petición puntual gana a la global, nunca al revés. Quita una cabecera heredada en una petición con <code class="text-ink">disableHeaders</code>.',

      firstTitle: "Tu primera petición",
      firstBody:
        "Todos los métodos se llaman sobre <code class=\"text-venus-300\">venus</code> y devuelven la misma forma: <code class=\"text-venus-300\">data</code>, <code class=\"text-venus-300\">ok</code>, <code class=\"text-venus-300\">error</code>, <code class=\"text-venus-300\">errorCode</code>, <code class=\"text-venus-300\">status</code> y <code class=\"text-venus-300\">metrics</code>. Comprueba <code class=\"text-venus-300\">ok</code> y TypeScript estrecha el resto: <code class=\"text-venus-300\">data</code> pasa a ser tu tipo cuando hay éxito.",

      paramsTitle: "Query params: qué son y cómo se serializan",
      paramsBody:
        "La opción <code class=\"text-venus-300\">params</code> recibe un objeto plano de parámetros de query. Venus lo serializa y lo añade a la URL con el URL-encoding correcto, así que nunca construyes query strings a mano.",
      paramsSub:
        "Cuando un valor es un <strong>array</strong>, eliges cómo se serializa con <code class=\"text-venus-300\">paramsArrayFormat</code>. Cada modo produce una URL distinta y apunta a un tipo de backend diferente:",

      clientTitle: "¿Varias APIs? Usa clientes",
      clientBody:
        "<code class=\"text-venus-300\">createClient()</code> devuelve un cliente independiente e inmutable con su propia <code class=\"text-venus-300\">baseURL</code>, cabeceras, timeout, retry y hooks. Tiene los mismos métodos que <code class=\"text-venus-300\">venus</code>. Los dos modos son <strong>excluyentes</strong>: el primero que uses bloquea al otro.",
    },
    formats: {
      repeat:
        "Repite la clave por cada elemento. Es el estándar de Express, Rails y PHP.",
      comma:
        "Une los elementos con comas bajo una sola clave. Para APIs que esperan listas CSV.",
      brackets:
        "Añade corchetes vacíos. La convención habitual en PHP / Laravel / jQuery.",
      indices:
        "Índices numéricos explícitos. Útil para parsers de objetos anidados (qs, PHP).",
    },
  },

  docMethod: {
    syntax: "Sintaxis",
    expectedStatus: "Status esperado",
    insights: "Curiosidades del método",
    example: "Ejemplo",
  },

  insights: {
    anatomyTitle: "Anatomía de una respuesta",
    anatomyKicker: "Lo que devuelve Venus",
    anatomyBody:
      "Todos los métodos devuelven un contrato predecible y nunca lanzan. Comprueba <code>ok</code> y TypeScript estrecha la respuesta: <code>data</code> es tu tipo cuando hay éxito, y el body de error del servidor (<code>unknown</code>) cuando falla.",
    anatomy: {
      data: "T cuando ok es true. El body de error del servidor (unknown) cuando es false.",
      ok: "true cuando la petición tuvo éxito. Comprobarlo estrecha el resto del objeto.",
      status: "Status HTTP. 0 para fallos de red y de validación.",
      error: "Mensaje legible para logs e interfaz. null si hay éxito.",
      errorCode: "HTTP_ERROR, TIMEOUT, ABORTED, NETWORK_ERROR, RETRY_EXHAUSTED, INVALID_BODY, INVALID_URL, MODE_CONFLICT y más.",
      metrics: "engine, startedAt, durationMs y attempts cuando metrics está activo; si no, null.",
    },
    get: {
      params: {
        title: "params: query strings sin construir URLs a mano",
        body: "Recibe un objeto plano y lo serializa con el URL-encoding correcto. Ej.: params: { category: \"tech\", limit: 5 } produce /news?category=tech&limit=5.",
      },
      arrayFormat: {
        title: "paramsArrayFormat: cómo se serializan los arrays en la query",
        body: "\"repeat\" (por defecto) repite la clave: ?tag=js&tag=ts — el estándar de Express, Rails y PHP. \"comma\" une con comas: ?tag=js,ts para APIs que esperan listas CSV. \"brackets\" añade corchetes vacíos: ?tag[]=js&tag[]=ts (convención PHP/Laravel/jQuery). \"indices\" usa índices numéricos: ?tag[0]=js&tag[1]=ts (parsers estilo qs).",
      },
      auto: {
        title: "responseType \"auto\": autodetección inteligente",
        body: "Inspecciona cabeceras y body: JSON se devuelve como objeto, text/XML/HTML llega como string. Ideal para endpoints mixtos sin configuración extra.",
      },
      modes: {
        title: "Otros modos de respuesta",
        body: "Fuerza el parser con \"json\", \"text\", \"blob\" (archivos y binarios), \"formData\" o \"arrayBuffer\". Usa \"stream\" para obtener response.body como un ReadableStream y leerlo por trozos (solo con el motor fetch).",
      },
      retry: {
        title: "retry: resiliencia segura ante fallos transitorios",
        body: "Reintenta ante errores de red, timeouts, 408, 429 y 5xx, solo en métodos idempotentes (GET, HEAD, OPTIONS, PUT, DELETE). El backoff es exponencial con jitter y una cabecera Retry-After del servidor lo reemplaza. Al agotarse los intentos, errorCode es RETRY_EXHAUSTED y se conservan el último status y body.",
      },
    },
    send: {
      validation: {
        title: "Validación del body antes de salir (INVALID_BODY)",
        body: "Antes de abrir la conexión comprueba si el body es null, undefined, un string vacío, {} o []. Si está vacío devuelve un 400 local con errorCode INVALID_BODY, ahorrando una ida y vuelta inútil al servidor. Un body que no se puede serializar (por ejemplo un objeto circular) devuelve INVALID_BODY en vez de lanzar.",
      },
      contentType: {
        title: "Content-Type puesto por ti",
        body: "Objetos y arrays salen como application/json, strings como text/plain, File/Blob con su propio tipo, ArrayBuffer y typed arrays como application/octet-stream. FormData y URLSearchParams los resuelve el runtime, así que los límites multipart se mantienen. Una cabecera Content-Type explícita siempre gana.",
      },
      serverErrors: {
        title: "Extracción de errores del servidor",
        body: "Cuando la respuesta no es ok, lee el campo message del body del backend y lo devuelve con el prefijo \"Venus: \" para que los errores sigan siendo legibles en la interfaz y los logs.",
      },
      bodies: {
        title: "Bodies admitidos",
        body: "Objetos y arrays (JSON), strings, FormData (multipart), URLSearchParams (urlencoded), File, Blob, ArrayBuffer, typed arrays y ReadableStream. Un body en stream se envía con duplex: \"half\" y nunca se reintenta, porque un stream no se puede reenviar.",
      },
    },
    update: {
      difference: {
        title: "update vs updateOnly: la diferencia clave",
        body: "update envía PUT (reemplazo completo: el body debe contener todo el recurso). updateOnly envía PATCH (modificación parcial: envía solo los campos que cambian). Ambos comparten firma y opciones.",
      },
      validation: {
        title: "Validación del body antes de salir (INVALID_BODY)",
        body: "Igual que send: rechaza bodies null, undefined, string vacío, {} y [] antes de tocar la red, devolviendo 400 con INVALID_BODY y el mensaje \"PUT/PATCH requires a non-empty body\".",
      },
      uploads: {
        title: "El mismo motor de bodies que send",
        body: "Se aplica la misma autodetección: FormData, Blob, binarios y streams conservan su propio Content-Type, así que las actualizaciones con adjuntos funcionan.",
      },
      errors: {
        title: "Errores del servidor normalizados",
        body: "Si el backend responde con error, Venus lee su campo message y lo devuelve como \"Venus: Update failed. ...\", conservando status y errorCode.",
      },
    },
    remove: {
      noContent: {
        title: "Normalización de 204 No Content",
        body: "Las APIs REST responden 204 sin body cuando el borrado funciona. Venus lo resuelve como ok: true, data: null, error: null, errorCode: null. Tipa la llamada como remove<null>(...) para que data sea null.",
      },
      errors: {
        title: "Extracción de errores del servidor",
        body: "Si el borrado falla (4xx/5xx) lee el campo message del body y lo devuelve como \"Venus: Delete operation failed. ...\", conservando status y errorCode.",
      },
      options: {
        title: "Las mismas opciones de siempre",
        body: "Admite params, timeout, signal, responseType, retry y hooks — el mismo modelo de opciones que usan get, send y update. DELETE es idempotente, así que se reintenta por defecto.",
      },
      generic: {
        title: "El genérico <T>",
        body: "Aunque el 204 no devuelve body, la firma sigue siendo genérica por si el backend responde 200 con payload (por ejemplo el recurso borrado o un mensaje de confirmación).",
      },
    },
    descriptions: {
      get: "Obtiene recursos con parsing inteligente, query params, timeout y retry seguro. responseType: auto detecta payloads JSON vs texto; stream te da un ReadableStream.",
      send: "Crea recursos. El body se autoserializa con su Content-Type, con soporte de retry, hooks y abort.",
      update: "Usa update para reemplazo completo (PUT) y updateOnly para cambios parciales (PATCH) con el mismo modelo de opciones.",
      remove: "Borra recursos con manejo del 204 y los mismos controles de timeout/retry/hooks disponibles en el resto.",
    },
  },

  doc: {
    title: "Documentación",
    lead: "Venus v3.0.1 desde cero: instalación, los dos modos, cuerpos de petición, resiliencia y la referencia completa de cada método con todos sus detalles.",
    sidebar: {
      gettingStarted: "Primeros pasos",
      advanced: "Patrones avanzados",
      apiManual: "Manual de la API",
      links: {
        installation: "Instalación",
        firstSteps: "Primeros pasos",
        modes: "Los dos modos",
        advancedExamples: "Ejemplos avanzados",
        retries: "Reintentos",
        hooks: "Hooks y telemetría",
        uploads: "Cuerpos de petición",
        abort: "Cancelar peticiones",
        engine: "Motor y métricas",
        arch: "SPA y SSR",
        anatomy: "Anatomía de la respuesta",
        get: "venus.get<T>",
        send: "venus.send<T>",
        update: "update / updateOnly",
        remove: "venus.remove",
        commonOptions: "Opciones comunes",
        migrating: "Migrar desde v2",
        changelog: "Changelog",
      },
    },
    headings: {
      installation: "Instalación",
      modes: "Dos modos: venus y createClient",
      advanced: "Ejemplos avanzados",
      retries: "Resiliencia y reintentos seguros",
      hooks: "Hooks del ciclo de vida y telemetría",
      uploads: "Cuerpos de petición",
      abort: "Cancelar peticiones",
      engine: "Motor, progress y métricas",
      architecture: "Arquitectura: Frontend (SPA) y Backend (SSR)",
      methodReference: "Referencia de métodos",
      commonOptions: "Opciones comunes",
      migrating: "Migrar desde v2",
      changelog: "Changelog",
      testing: "Testing",
      license: "Licencia",
      frontend: "Frontend (SPA)",
      backend: "Backend (Node / SSR)",
    },
    prose: {
      modes:
        "Venus se puede usar de dos formas, y son <strong>excluyentes</strong>. Usa el <code>venus</code> global cuando tu app habla con una API, o <code>createClient()</code> cuando habla con varias. El primer modo que uses bloquea al otro mientras viva el proceso.",
      advanced:
        "Patrones de producción: políticas de retry, hooks del ciclo de vida, cuerpos de petición, cancelación, el motor dual y arquitectura SPA/SSR.",
      retries:
        "<code>retry</code> recupera peticiones fallidas por motivos transitorios (errores de red, timeouts, 408, 429 y 5xx). Por defecto solo reintentan los métodos <strong>idempotentes</strong> (GET, HEAD, OPTIONS, PUT, DELETE): un POST o un PATCH nunca se repite salvo que lo actives con <code>retryMethods</code> o <code>shouldRetry</code>, así un reintento jamás duplica un pedido o un pago. El backoff es exponencial con jitter y una cabecera <code>Retry-After</code> del servidor lo reemplaza. Al agotarse los intentos, la respuesta indica <code class=\"text-yellow-400\">errorCode: \"RETRY_EXHAUSTED\"</code> y conserva el último status y body.",
      hooks:
        "<code>beforeRequest</code> se ejecuta en cada intento y devuelve un override parcial que se fusiona con la petición (las cabeceras se combinan). <code>afterResponse</code> se ejecuta cuando llega la respuesta, con su duración e intento. <code>onTelemetry</code> emite un evento por intento. Ponlos en <code>venus.config</code> o <code>createClient</code> para aplicarlos a todas las peticiones; los de una petición se ejecutan después de los del scope. Un hook que lanza nunca rompe el contrato: la respuesta es <code class=\"text-yellow-400\">UNKNOWN_ERROR</code>.",
      uploads:
        "Venus detecta el payload y pone el <code>Content-Type</code> por ti. Una cabecera <code>Content-Type</code> explícita siempre gana. Los payloads vacíos (<code>null</code>, <code>\"\"</code>, <code>{}</code>, <code>[]</code>) devuelven <code>INVALID_BODY</code> sin tocar la red.",
      abort:
        "Cancela una petición con un <code>AbortSignal</code> estándar, o todo lo que está en vuelo en un scope con <code>venus.abort()</code> o <code>api.abort()</code>. Las peticiones canceladas resuelven como <code class=\"text-yellow-400\">ABORTED</code> (status 499) y nunca se reintentan.",
      engine:
        "<code>fetch</code> es el motor por defecto. Venus cambia solo a <code>XMLHttpRequest</code> cuando pasas un callback <code>progress</code> o activas <code>metrics</code>: sin flags que configurar. En Node no hay XHR, así que <code>metrics</code> recurre a fetch y <code>progress</code> resuelve como <code class=\"text-yellow-400\">UNSUPPORTED</code>.",
      methodReference:
        "Cada método con su sintaxis, contrato de respuesta y todas sus curiosidades: qué opciones acepta, qué mejora y cómo se comporta en casos límite.",
      commonOptions: "Cada opción documentada con exactamente lo que hace.",
      migrating:
        "¿Vienes de la v2? Estos son los cambios que requieren acción. La lista completa está en el changelog de abajo.",
      changelog:
        "Historial completo hasta la versión actual <strong class=\"text-venus-300\">3.0.1</strong>.",
      testing: "Venus está completamente testeado con Vitest.",
      license: "MIT © code-braydev",
      copyFailed: "Error al copiar:",
    },
  },
};
