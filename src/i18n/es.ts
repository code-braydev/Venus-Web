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
    homeTitle: "Venus | Networking sin fricción",
    homeDescription:
      "Una librería de networking moderna, ligera y con tipos para JS/TS. Deja de pelearte con fetch.",
    docTitle: "Documentación | Venus SDK",
    docDescription:
      "Venus v2.2.2 desde cero: instalación, peticiones básicas, ejemplos avanzados y la referencia completa de cada método.",
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
      'Convertimos <code class="text-purple-200/60 font-mono">fetch</code> en una experiencia tranquila, predecible y resistente.',
    project: "Proyecto",
    author: "Autor",
    docs: "Docs",
    built: "Hecho con Astro & Love.",
    operational: "Operativo en Vercel",
  },

  hero: {
    badge: "Venus SDK v2.2.2 ya está disponible",
    titleLine1: "Networking,",
    titleLine2: "sin fricción.",
    lead:
      'Una librería de networking moderna y ligera que convierte los patrones complejos de <code class="text-purple-300 font-mono bg-purple-500/10 px-1 rounded">fetch</code> en una <span class="text-purple-200">experiencia tranquila y predecible</span>.',
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
        title: "Tipos por defecto",
        body: "Soporte completo de TypeScript, de la petición a la respuesta, para datos predecibles.",
      },
      resilience: {
        title: "Resiliencia integrada",
        body: "Gestiona timeouts y errores predecibles para que tu app sea robusta.",
      },
      results: {
        title: "Resultados consistentes",
        body: "Resultados predecibles, ya sea que la petición funcione o falle.",
      },
      deps: {
        title: "Cero dependencias",
        body: "Ligera y rápida, basada en APIs nativas de la web, sin peso muerto.",
      },
      focus: {
        title: "Potencia enfocada",
        body: "Venus hace una cosa excepcionalmente bien: que las peticiones de red sean simples y elegantes.",
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
      get: "GET con query params serializados, autodetección de JSON/text, timeout y retry",
      getRss: "RSS/Atom normalizado con image/enclosure/media resueltos",
      send: "POST con validación de body, soporte de FormData/Blob, retry y hooks",
      update: "Reemplazo completo del recurso (PUT) con body no vacío",
      updateOnly: "Modificación parcial de campos (PATCH)",
      remove: "DELETE con normalización de 204 No Content",
      config: "URL base y cabeceras globales para todas las peticiones",
    },
  },

  explainer: {
    schemaTitle: "¿El Schema es obligatorio?",
    schemaBody:
      "<strong>No.</strong> Si lo omites la respuesta es <code class=\"text-purple-300\">any</code>. Aun así, lo <strong>recomendamos encarecidamente</strong> para disfrutar del Intellisense completo y evitar errores de \"undefined\" antes de que lleguen a producción.",
    optionsTitle: "Opciones unificadas en v2.0.0",
    requestControlsTitle: "Control de la petición",
    requestControlsBody:
      "headers, timeout, signal, params y paramsArrayFormat para manejar la query de forma segura.",
    parsingTitle: "Parsing + resiliencia",
    parsingBody:
      "responseType: auto/json/text/blob/formData/arrayBuffer, retry con backoff y hooks del ciclo de vida.",
    fullRequest: "Petición completa",
  },

  quickStart: {
    steps: {
      baseTitle: "Configura la URL base",
      baseBody:
        'Antes de lanzar cualquier petición <strong>debes</strong> inicializar la URL base. Así, cada ruta relativa (por ejemplo <code class="text-purple-300">/users</code>) se resuelve correctamente contra tu servidor.',
      baseNote:
        '💡 <strong>Buena práctica:</strong> importa este archivo de configuración desde tu punto de entrada principal (por ejemplo <code class="text-white">Layout.astro</code> o <code class="text-white">main.ts</code>) para que se ejecute antes de que se renderice cualquier componente.',

      headersTitle: "Cabeceras globales (auth, versionado, trazas)",
      headersBody:
        "Si tu app envía siempre las mismas cabeceras — un token, una versión de la app, un trace id — defínelas una sola vez y Venus las aplica <strong>automáticamente</strong> a cada petición.",
      headersNote:
        '⚡ <strong>Precedencia:</strong> si envías una cabecera con el mismo nombre en las opciones de una petición puntual, <strong>esa gana</strong>. Las cabeceras de la petición anulan a las globales, nunca al revés.',

      firstTitle: "Tu primera petición",
      firstBody:
        "Venus unifica el objeto de opciones en todos los métodos y añade parsing inteligente para payloads JSON o texto/RSS. Toda respuesta tiene la misma forma: <code class=\"text-purple-300\">data</code>, <code class=\"text-purple-300\">ok</code>, <code class=\"text-purple-300\">error</code>, <code class=\"text-purple-300\">errorCode</code> y <code class=\"text-purple-300\">status</code>.",

      paramsTitle: "Query params: qué son y cómo se serializan",
      paramsBody:
        "La opción <code class=\"text-purple-300\">params</code> recibe un objeto plano de parámetros de query. Venus lo serializa y lo añade a la URL con el URL-encoding correcto, así que nunca construyes query strings a mano.",
      paramsSub:
        "Cuando un valor es un <strong>array</strong>, eliges cómo se serializa con <code class=\"text-purple-300\">paramsArrayFormat</code>. Cada modo produce una URL distinta y apunta a un tipo de backend diferente:",

      rssTitle: "Feeds RSS y Atom",
      rssBody:
        "Venus consume feeds sin parsear XML a mano. Cada item también expone <code class=\"text-purple-300\">image</code>, <code class=\"text-purple-300\">enclosure</code> y <code class=\"text-purple-300\">media</code> en una forma normalizada.",
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
      "Todos los métodos de Venus devuelven un contrato predecible. No necesitas try/catch para el flujo normal: comprueba <code>ok</code> y renderiza desde ahí.",
    anatomy: {
      data: "Payload parseado (json/text/blob/formData/arrayBuffer).",
      ok: "true cuando la petición tuvo éxito.",
      status: "Status HTTP cuando está disponible.",
      error: "Mensaje legible para logs e interfaz.",
      errorCode: "HTTP_ERROR, TIMEOUT, ABORTED, NETWORK_ERROR, RETRY_EXHAUSTED y más.",
      exhausted: "Se devuelve cuando se agotan los reintentos. Conserva el último status HTTP.",
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
        body: "Inspecciona cabeceras y body: JSON se devuelve como objeto, text/XML/HTML llega como string. Ideal para endpoints mixtos y feeds sin configuración extra.",
      },
      modes: {
        title: "Otros modos de respuesta",
        body: "Fuerza el parser con \"json\", \"text\", \"blob\" (archivos y binarios), \"formData\" o \"arrayBuffer\" (streaming y procesamiento binario).",
      },
      retry: {
        title: "retry: resiliencia ante fallos transitorios",
        body: "Reintenta automáticamente en 408, 429 y 5xx. Acepta un booleano, un número u un objeto con attempts, backoffMs, maxBackoffMs, retryOn y shouldRetry. Al agotarse los intentos, la respuesta indica errorCode RETRY_EXHAUSTED conservando el último status HTTP.",
      },
    },
    getRss: {
      strict: {
        title: "rssMode \"strict\" (por defecto)",
        body: "Valida estrictamente la estructura XML. Si el feed no es un documento RSS o Atom válido, la petición falla de inmediato con PARSING_ERROR. Lo mejor cuando controlas la fuente.",
      },
      lenient: {
        title: "rssMode \"lenient\"",
        body: "Modo tolerante (best-effort). Si el feed tiene una estructura propia o mal formada, Venus la aplana y extrae los items igualmente, sin fallar por un formato no estándar.",
      },
      image: {
        title: "item.image: miniatura resuelta automáticamente",
        body: "Cascada de detección en orden: enclosure (RSS/Atom) → media (media:thumbnail / media:content) → la primera etiqueta <img> dentro del HTML de content o description. Devuelve una URL lista para usar.",
      },
      media: {
        title: "item.enclosure y item.media",
        body: "Acceso a las fuentes sin procesar: enclosure guarda { url, type, length } del adjunto RSS o Atom; media guarda arrays de content ({ url, type, medium }) y thumbnail ({ url }) de Media RSS. Útil para podcasts, vídeo e imágenes.",
      },
      fields: {
        title: "Campos del feed normalizados",
        body: "sourceType (\"rss\" | \"atom\"), title, description, link, language, updatedAt, image e items. Cada item expone title, link, description, content, pubDate, guid, author, categories, enclosure, media e image.",
      },
    },
    send: {
      validation: {
        title: "Validación del body antes de salir (INVALID_BODY)",
        body: "Antes de abrir la conexión comprueba si body es null, undefined u un objeto {}. Si está vacío devuelve un 400 local con errorCode INVALID_BODY, ahorrando ancho de banda y una ida y vuelta inútil al servidor.",
      },
      contentType: {
        title: "Subidas que respetan el Content-Type",
        body: "Detecta FormData, Blob y URLSearchParams y NO fuerza application/json, para que el navegador gestione bien los límites multipart. Los bodies string y objeto plano se serializan con JSON.stringify.",
      },
      serverErrors: {
        title: "Extracción de errores del servidor",
        body: "Cuando la respuesta no es ok, intenta leer el campo message del body del backend y lo devuelve con el prefijo \"Venus: \" para que los errores sigan siendo legibles en la interfaz y los logs.",
      },
      bodies: {
        title: "Bodies admitidos",
        body: "Objetos (serializados a JSON), strings (payloads en crudo), FormData (multipart), Blob (binarios) y URLSearchParams (formularios URL-encoded).",
      },
    },
    update: {
      difference: {
        title: "update vs updateOnly: la diferencia clave",
        body: "update envía PUT (reemplazo completo: el body debe contener todo el recurso). updateOnly envía PATCH (modificación parcial: envía solo los campos que cambian). Ambos comparten firma y opciones.",
      },
      validation: {
        title: "Validación del body antes de salir (INVALID_BODY)",
        body: "Igual que send: rechaza bodies null, undefined o vacíos {} antes de tocar la red, devolviendo 400 con INVALID_BODY y el mensaje \"PUT/PATCH requires a non-empty body\".",
      },
      uploads: {
        title: "El mismo manejo de subidas que send",
        body: "FormData, Blob y URLSearchParams nunca reciben application/json forzado, así que las actualizaciones con adjuntos funcionan sin romper los límites multipart.",
      },
      errors: {
        title: "Errores del servidor normalizados",
        body: "Si el backend responde con error, Venus lee su campo message y lo devuelve como \"Venus: Update failed. ...\", conservando status y errorCode.",
      },
    },
    remove: {
      noContent: {
        title: "Normalización de 204 No Content",
        body: "Las APIs REST responden 204 sin body cuando el borrado funciona. Venus intercepta ese status y normaliza la respuesta: ok: true, data: null, error: null, errorCode: null — sin try/catch ni comprobaciones extra.",
      },
      errors: {
        title: "Extracción de errores del servidor",
        body: "Si el borrado falla (4xx/5xx) intenta leer el campo message del body y lo devuelve como \"Venus: Delete operation failed. ...\", conservando status y errorCode.",
      },
      options: {
        title: "Las mismas opciones de siempre",
        body: "Admite params, timeout, signal, responseType, retry y hooks — el mismo modelo de opciones que usan get, send y update.",
      },
      generic: {
        title: "El genérico <T>",
        body: "Aunque el 204 no devuelve body, la firma sigue siendo genérica por si el backend responde 200 con payload (por ejemplo el recurso borrado o un mensaje de confirmación).",
      },
    },
    descriptions: {
      get: "Obtiene recursos con parsing inteligente, query params, timeout y retry. responseType: auto detecta payloads JSON vs texto.",
      getRss: "Obtiene y normaliza feeds RSS/Atom con modos strict o lenient para fuentes XML no estándar.",
      send: "Crea recursos con política de retry y soporte de hooks para instrumentar peticiones y respuestas.",
      update: "Usa update para reemplazo completo (PUT) y updateOnly para cambios parciales (PATCH) con el mismo modelo de opciones.",
      remove: "Borra recursos con manejo del 204 y los mismos controles de timeout/retry/hooks disponibles en el resto.",
    },
  },

  doc: {
    title: "Documentación",
    lead: "Venus v2.2.2 desde cero: instalación, peticiones básicas, ejemplos avanzados y la referencia completa de cada método con todos sus detalles.",
    sidebar: {
      gettingStarted: "Primeros pasos",
      advanced: "Patrones avanzados",
      apiManual: "Manual de la API",
      links: {
        installation: "Instalación",
        firstSteps: "Primeros pasos",
        advancedExamples: "Ejemplos avanzados",
        retries: "Reintentos",
        hooks: "Hooks y telemetría",
        uploads: "Subidas y binarios",
        arch: "SPA y SSR",
        anatomy: "Anatomía de la respuesta",
        get: "get<T>",
        send: "send<T>",
        rss: "getRss",
        update: "update / updateOnly",
        remove: "remove",
        commonOptions: "Opciones comunes",
        rssAtom: "RSS y Atom",
        changelog: "Changelog",
      },
    },
    headings: {
      installation: "Instalación",
      advanced: "Ejemplos avanzados",
      retries: "Resiliencia y reintentos",
      hooks: "Hooks del ciclo de vida y telemetría",
      uploads: "Subidas y cuerpos binarios",
      rssModes: "Modos de parsing de RSS",
      architecture: "Arquitectura: Frontend (SPA) y Backend (SSR)",
      methodReference: "Referencia de métodos",
      commonOptions: "Opciones comunes",
      rss: "RSS y Atom",
      feedFields: "Campos de los items del feed",
      changelog: "Changelog",
      testing: "Testing",
      license: "Licencia",
      frontend: "Frontend (SPA)",
      backend: "Backend (Node / SSR)",
    },
    prose: {
      advanced:
        "Patrones de producción: políticas de retry, hooks del ciclo de vida, subida de archivos y arquitectura SPA/SSR.",
      retries:
        "<code>retry</code> recupera peticiones fallidas por problemas transitorios (408, 429, 5xx). Acepta <code>true</code>, un número u un objeto con control total. Al agotarse los intentos, la respuesta indica <code class=\"text-yellow-400\">errorCode: \"RETRY_EXHAUSTED\"</code> conservando el último status HTTP.",
      hooks:
        "<code>beforeRequest</code> intercepta la petición antes de enviarse (inyección de tokens, trazas, logging) y puede devolver un <code>RequestInit</code> modificado. <code>afterResponse</code> se ejecuta cuando llega la respuesta, con su duración e intento. <code>onTelemetry</code> emite un evento por cada petición finalizada.",
      uploads:
        "<code>send</code> y <code>update</code> detectan <code>FormData</code>, <code>Blob</code> y <code>URLSearchParams</code> y <strong>no</strong> fuerzan <code>application/json</code>, preservando los límites multipart para que las subidas reales funcionen.",
      rssModes:
        "Elige entre validación estricta o un modo tolerante según la calidad del feed que consumas.",
      methodReference:
        "Cada método con su sintaxis, contrato de respuesta y todas sus curiosidades: qué opciones acepta, qué mejora y cómo se comporta en casos límite.",
      commonOptions: "Cada opción documentada con exactamente lo que hace.",
      rss:
        "Venus consume feeds sin parsear XML a mano usando <code>getRss</code>. Usa <code>rssMode: \"strict\"</code> por defecto o <code>\"lenient\"</code> para feeds XML no estándar.",
      feedFields:
        "Además de <code>title</code>/<code>link</code>/<code>description</code>/<code>content</code>, cada item expone ayudantes de imagen que se resuelven automáticamente:",
      feedFieldsEnd:
        "Usa <code>item.image</code> como miniatura lista para usar, o inspecciona <code>enclosure</code>/<code>media</code> para las fuentes sin procesar (portadas de podcast, adjuntos de vídeo e imagen).",
      changelog:
        "Historial completo hasta la versión actual <strong class=\"text-purple-300\">2.2.2</strong>.",
      testing: "Venus está completamente testeado con Vitest.",
      license: "MIT © code-braydev",
      copyFailed: "Error al copiar:",
    },
  },
};
