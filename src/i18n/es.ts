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
    homeTitle: "Venus: cliente HTTP para TypeScript sin dependencias",
    homeDescription:
      "Cliente HTTP tipado y sin dependencias para JavaScript y TypeScript: reintentos seguros, timeouts, cancelación y progreso de subida. Nunca lanza.",
    ogAlt:
      "Logo de Venus, una esfera dorada de malla, con el texto: cliente HTTP, sin fricción",
    docTitle: "Documentación de Venus | Cliente HTTP para JavaScript",
    docDescription:
      "Venus v3.0.1 desde cero: instalación, los dos modos, cuerpos de petición, resiliencia y la referencia completa de cada método.",
    keywords:
      "venus, cliente http, typescript, javascript, wrapper de fetch, cliente api, reintentos, timeout, cancelar peticiones, progreso de subida, sin dependencias, xhr",
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

  name: {
    kicker: "El nombre",
    title: "¿Por qué el nombre Venus?",
    p1: "Siempre me ha gustado el espacio. Venus me llamó la atención porque es la discreta: un planeta apartado pero bonito, con un nombre corto, y el planeta más brillante de nuestro cielo. Lo confieso: al principio hasta lo confundí con el planeta de los anillos.",
    p2: "Quería un cliente HTTP que destacara igual: por su claridad y agilidad. Potente, pero ultraligero y amigable, y sin la fricción de escribir un try/catch en cada petición.",
    signature: "— Braydev, autor de Venus",
    traits: {
      clarity: {
        title: "Claridad",
        body: "El planeta más brillante del cielo nocturno. Una API clara y una respuesta predecible: nada oculto.",
      },
      agility: {
        title: "Agilidad",
        body: "Cero dependencias y fetch nativo por defecto. Potencia real, ultraligera.",
      },
      connection: {
        title: "Conexión",
        body: "En la mitología romana, Venus es la diosa del amor y la armonía. HTTP es la forma en que los sistemas se conectan; Venus lo hace armonioso.",
      },
      calm: {
        title: "Calma",
        body: "Venus esconde una atmósfera densa bajo nubes de aspecto sereno. Reintentos, timeouts y casos límite se quedan dentro; tú recibes una respuesta tranquila.",
      },
    },
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
        body: "Admite params, timeout, signal, responseType, retry y hooks — el mismo modelo de opciones que usan get, send y update. DELETE es idempotente, así que puede reintentarse cuando retry está activo.",
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
        setupApi: "Configuración y ciclo de vida",
        timeouts: "Timeouts",
        errorCodes: "Códigos de error",
        types: "Tipos",
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
      timeouts: "Timeouts: nunca esperes para siempre",
      setupApi: "API de configuración y ciclo de vida",
      configOptions: "Opciones de configuración",
      errorCodes: "Códigos de error",
      types: "Referencia de tipos",
      frontend: "Frontend (SPA)",
      backend: "Backend (Node / SSR)",
    },
    prose: {
      modes:
        "Venus se puede usar de dos formas, y son <strong>excluyentes</strong>. Usa el <code>venus</code> global cuando tu app habla con una API, o <code>createClient()</code> cuando habla con varias. El primer modo que uses bloquea al otro mientras viva el proceso.",
      advanced:
        "Patrones de producción: políticas de retry, hooks del ciclo de vida, cuerpos de petición, cancelación, el motor dual y arquitectura SPA/SSR.",
      retries:
        "Los reintentos están <strong>desactivados</strong> hasta que defines <code>retry</code> (<code>true</code> son 2 reintentos). Una vez activo, recupera peticiones fallidas por motivos transitorios (errores de red, timeouts, 408, 429 y 5xx). Por defecto solo reintentan los métodos <strong><a class=\"term\" href=\"/es/doc/glossary#idempotent\">idempotentes</a></strong> (GET, HEAD, OPTIONS, PUT, DELETE): un POST o un PATCH nunca se repite salvo que lo actives con <code>retryMethods</code> o <code>shouldRetry</code>, así un reintento jamás duplica un pedido o un pago. El <a class=\"term\" href=\"/es/doc/glossary#backoff\">backoff</a> es exponencial con <a class=\"term\" href=\"/es/doc/glossary#jitter\">jitter</a> y una cabecera <a class=\"term\" href=\"/es/doc/glossary#retry-after\"><code>Retry-After</code></a> del servidor lo reemplaza. Al agotarse los intentos, la respuesta indica <code class=\"text-yellow-400\">errorCode: \"RETRY_EXHAUSTED\"</code> y conserva el último status y body.",
      hooks:
        "<code>beforeRequest</code> se ejecuta en cada intento y devuelve un override parcial que se fusiona con la petición (las cabeceras se combinan). <code>afterResponse</code> se ejecuta cuando llega la respuesta, con su duración e intento. <a class=\"term\" href=\"/es/doc/glossary#telemetry\"><code>onTelemetry</code></a> emite un evento por intento. Ponlos en <code>venus.config</code> o <code>createClient</code> para aplicarlos a todas las peticiones; los de una petición se ejecutan después de los del scope. Un hook que lanza nunca rompe el contrato: la respuesta es <code class=\"text-yellow-400\">UNKNOWN_ERROR</code>.",
      uploads:
        "Venus detecta el <a class=\"term\" href=\"/es/doc/glossary#payload\">payload</a> y pone el <a class=\"term\" href=\"/es/doc/glossary#content-type\"><code>Content-Type</code></a> por ti. Una cabecera <code>Content-Type</code> explícita siempre gana. Los payloads vacíos (<code>null</code>, <code>\"\"</code>, <code>{}</code>, <code>[]</code>) devuelven <code>INVALID_BODY</code> sin tocar la red.",
      abort:
        "Cancela una petición con un <a class=\"term\" href=\"/es/doc/glossary#abort-signal\"><code>AbortSignal</code></a> estándar, o todo lo que está en vuelo en un scope con <code>venus.abort()</code> o <code>api.abort()</code>. Las peticiones canceladas resuelven como <code class=\"text-yellow-400\">ABORTED</code> (status 499) y nunca se reintentan.",
      engine:
        "<a class=\"term\" href=\"/es/doc/glossary#fetch\"><code>fetch</code></a> es el motor por defecto. Venus cambia solo a <a class=\"term\" href=\"/es/doc/glossary#xhr\"><code>XMLHttpRequest</code></a> cuando pasas un callback <code>progress</code> o activas <code>metrics</code>: sin flags que configurar. En Node no hay XHR, así que <code>metrics</code> recurre a fetch y <code>progress</code> resuelve como <code class=\"text-yellow-400\">UNSUPPORTED</code>.",
      methodReference:
        "Cada método con su sintaxis, contrato de respuesta y todas sus curiosidades: qué opciones acepta, qué mejora y cómo se comporta en casos límite.",
      commonOptions: "Cada opción documentada con exactamente lo que hace.",
      migrating:
        "¿Vienes de la v2? Estos son los cambios que requieren acción. La lista completa está en el changelog de abajo.",
      changelog:
        "Historial completo hasta la versión actual <strong class=\"text-venus-300\">3.0.1</strong>.",
      testing: "Venus está completamente testeado con Vitest.",
      license: "MIT © code-braydev",
      timeouts:
        "<code>timeout</code> es el tiempo máximo, en milisegundos, que puede tardar una petición antes de que Venus se rinda y la cancele. <strong>No tiene valor por defecto</strong>: si nunca lo defines, la petición espera lo que el servidor y la red permitan, así que un servidor colgado puede dejar tu interfaz cargando para siempre. Defínelo una vez en <code>venus.config</code> o <code>createClient</code> como valor por defecto del <a class=\"term\" href=\"/es/doc/glossary#scope\">scope</a>, y sobrescríbelo en una petición cuando un endpoint necesite más (o menos) tiempo. <code>timeout: 0</code> lo desactiva para esa petición. Al agotarse el tiempo Venus nunca lanza: recibes <code class=\"text-yellow-400\">{ ok: false, errorCode: \"TIMEOUT\", status: 408 }</code>.",
      setupApi:
        "Estos miembros configuran Venus y controlan su ciclo de vida. Usa <code>venus</code> (una API, config global) <strong>o</strong> <code>createClient()</code> (varias APIs, clientes inmutables): el primero que uses bloquea al otro. Un <code>config</code>, <code>reset</code>, <code>abort</code> o <code>createClient</code> bloqueado lanza una excepción; un método de petición bloqueado (<code>get</code>, <code>send</code>...) resuelve como <code class=\"text-yellow-400\">MODE_CONFLICT</code>.",
      configOptions:
        "Las mismas claves funcionan en <code>venus.config()</code> y en <code>createClient()</code>. Son los valores por defecto del scope: lo que pases en una petición concreta tiene prioridad.",
      requestOptions:
        "Opciones que acepta cada método de petición, con sus valores por defecto y exactamente lo que hacen. Las marcadas como <em>scope</em> usan el valor definido en <code>venus.config</code> o <code>createClient</code>.",
      errorCodes:
        "Cada fallo trae un <code>errorCode</code> estable: úsalo, no el mensaje, para decidir qué hacer (reintentar, mostrar un aviso, cerrar sesión). <code>status</code> es el estado HTTP cuando existe y <code>0</code> cuando la petición nunca recibió respuesta. \"Reintenta\" solo aplica si <code>retry</code> está activo y el método puede reintentarse.",
      types:
        "Todo lo de abajo se exporta desde <code>@braydev/venus</code> como tipo, para que anotes tus propios helpers.",
      timeoutPoints: [
        "<strong>Por intento.</strong> Con <code>retry</code>, cada intento tiene un temporizador nuevo y la espera del backoff entre intentos no cuenta. <code>timeout: 2000</code> con <code>retry: 2</code> puede tardar unos 6 s más el backoff en el peor caso.",
        "<strong>Qué abarca.</strong> Desde que empieza el intento hasta que el cuerpo de la respuesta se lee y se parsea, hooks incluidos.",
        "<strong>Se reintenta como un error de red.</strong> <code>TIMEOUT</code> se reintenta si <code>retry</code> está activo y el método lo permite (GET, PUT, DELETE...; nunca POST ni PATCH por defecto). Si el último intento también agota el tiempo recibes <code>TIMEOUT</code>, no <code>RETRY_EXHAUSTED</code>.",
        "<strong>No es lo mismo que cancelar.</strong> <code>signal</code>, <code>venus.abort()</code> y <code>api.abort()</code> resuelven como <code>ABORTED</code> (499) y nunca se reintentan. Si ocurren las dos cosas, gana la cancelación externa.",
        "<strong>Elegir un valor.</strong> Lecturas interactivas: de 5 000 a 10 000 ms. Subidas grandes e informes lentos: un valor mayor, o <code>0</code> más un <code>signal</code> para que el usuario pueda cancelar."
      ],
      tables: {
        "setup": {
          "headers": [
            "Miembro",
            "Modo",
            "Qué hace"
          ],
          "rows": [
            [
              "venus.config(options)",
              "venus",
              "Fusiona en la config global las claves que pases; las omitidas conservan su valor. <code>headers</code> se reemplaza completo, no se fusiona. Se quita la barra final de <code>baseURL</code>. No devuelve nada."
            ],
            [
              "venus.config()",
              "venus",
              "Devuelve una copia de la config global activa. Modificar la copia no tiene efecto."
            ],
            [
              "venus.reset()",
              "venus",
              "Limpia <code>baseURL</code>, <code>headers</code>, <code>timeout</code>, <code>retry</code>, <code>metrics</code>, <code>hooks</code> y <code>onTelemetry</code>. Úsalo al cerrar sesión o entre tests. Venus sigue en modo global."
            ],
            [
              "venus.abort()",
              "venus",
              "Cancela todas las peticiones globales en vuelo; resuelven como <code>ABORTED</code>."
            ],
            [
              "venus.get / send / update / updateOnly / remove",
              "venus",
              "Los métodos de petición, con la config global aplicada. Mira la referencia de métodos."
            ],
            [
              "createClient(defaults)",
              "client",
              "Crea un cliente independiente e inmutable con sus propios valores (las mismas claves que <code>venus.config</code>). Lanza si ya se usó <code>venus.config()</code>."
            ],
            [
              "api.get / send / update / updateOnly / remove",
              "client",
              "Mismos métodos y opciones que <code>venus</code>, usando solo los valores de este cliente. Nunca leen la config global."
            ],
            [
              "api.config()",
              "client",
              "Copia de solo lectura de los valores del cliente. No hay setter: crea otro cliente."
            ],
            [
              "api.abort()",
              "client",
              "Cancela únicamente las peticiones en vuelo de este cliente."
            ]
          ]
        },
        "config": {
          "headers": [
            "Opción",
            "Tipo",
            "Por defecto",
            "Qué hace"
          ],
          "rows": [
            [
              "baseURL",
              "string",
              "\"\"",
              "Prefijo de cada ruta relativa, para escribir <code>/users</code>. Al definirla, el scope queda <strong>cerrado</strong>: las URLs absolutas devuelven <code>INVALID_URL</code>."
            ],
            [
              "headers",
              "Record<string, string>",
              "{}",
              "Se envían en cada petición. Los <code>headers</code> de la petición ganan cabecera por cabecera, y <code>disableHeaders</code> quita alguna."
            ],
            [
              "timeout",
              "number (ms)",
              "ninguno",
              "Tiempo máximo por intento antes de <code>TIMEOUT</code>. Mira Timeouts."
            ],
            [
              "retry",
              "boolean | number | object",
              "desactivado",
              "Política de reintentos por defecto. <code>true</code> son 2 reintentos, un número son esos reintentos, un objeto ajusta cada detalle. <code>retry: false</code> en una petición lo desactiva."
            ],
            [
              "metrics",
              "boolean",
              "false",
              "Rellena <code>response.metrics</code> (engine, startedAt, durationMs, attempts) en cada respuesta."
            ],
            [
              "hooks",
              "{ beforeRequest, afterResponse }",
              "ninguno",
              "Interceptores que se ejecutan en cada intento, antes de los hooks de la propia petición."
            ],
            [
              "onTelemetry",
              "(event) => void",
              "ninguno",
              "Recibe un evento por intento: url, method, ok, status, durationMs, attempt, errorCode. Se ejecuta antes del listener de la petición; los errores que lance se ignoran."
            ]
          ]
        },
        "options": {
          "headers": [
            "Opción",
            "Tipo",
            "Por defecto",
            "Qué hace"
          ],
          "rows": [
            [
              "headers",
              "HeadersInit",
              "scope",
              "Cabeceras de esta petición. Ganan a las del scope, cabecera por cabecera."
            ],
            [
              "disableHeaders",
              "string[]",
              "ninguno",
              "Nombres de cabecera (sin distinguir mayúsculas) que se quitan de esta petición, p. ej. un <code>Authorization</code> heredado."
            ],
            [
              "body",
              "unknown",
              "ninguno",
              "El payload. En <code>send</code>, <code>update</code> y <code>updateOnly</code> es el segundo argumento. Se serializa con su Content-Type; los cuerpos vacíos devuelven <code>INVALID_BODY</code>."
            ],
            [
              "timeout",
              "number (ms)",
              "scope, si no ninguno",
              "Tiempo máximo por intento antes de <code>TIMEOUT</code>. <code>0</code> lo desactiva para esta petición."
            ],
            [
              "signal",
              "AbortSignal",
              "ninguno",
              "Cancela la petición desde fuera. Resuelve como <code>ABORTED</code> (499) y nunca se reintenta."
            ],
            [
              "params",
              "object",
              "ninguno",
              "Query params, codificados y añadidos a la URL."
            ],
            [
              "paramsArrayFormat",
              "\"repeat\" | \"comma\" | \"brackets\" | \"indices\"",
              "\"repeat\"",
              "Cómo se serializan los arrays dentro de <code>params</code>."
            ],
            [
              "responseType",
              "\"auto\" | \"json\" | \"text\" | \"blob\" | \"formData\" | \"arrayBuffer\" | \"stream\"",
              "\"auto\"",
              "Qué parser lee el cuerpo de la respuesta. <code>auto</code> detecta JSON o texto."
            ],
            [
              "retry",
              "boolean | number | object",
              "scope, si no desactivado",
              "Política de reintentos de esta petición. La forma objeto se detalla en las filas siguientes."
            ],
            [
              "retry.attempts",
              "number",
              "2",
              "Reintentos después del primer intento, una vez activo retry (3 intentos en total)."
            ],
            [
              "retry.backoffMs",
              "number",
              "200",
              "Espera inicial. Se duplica en cada intento, con jitter."
            ],
            [
              "retry.maxBackoffMs",
              "number",
              "2000",
              "Techo de la espera. También limita el <code>Retry-After</code> del servidor."
            ],
            [
              "retry.retryOn",
              "number[]",
              "408, 429, 500, 502, 503, 504",
              "Códigos HTTP que merece la pena reintentar. Los errores de red y los timeouts siempre cuentan."
            ],
            [
              "retry.retryMethods",
              "string[]",
              "GET, HEAD, OPTIONS, PUT, DELETE",
              "Métodos que pueden reintentarse. Añade <code>\"POST\"</code> o <code>\"PATCH\"</code> solo si repetirlos es seguro."
            ],
            [
              "retry.shouldRetry",
              "(ctx) => boolean",
              "ninguno",
              "Decisión propia con <code>{ attempt, status, errorCode }</code>. Reemplaza a <code>retryMethods</code> y <code>retryOn</code>."
            ],
            [
              "hooks",
              "{ beforeRequest, afterResponse }",
              "ninguno",
              "Hooks de la petición. Se ejecutan después de los del scope."
            ],
            [
              "onTelemetry",
              "(event) => void",
              "ninguno",
              "Listener de telemetría de esta petición."
            ],
            [
              "metrics",
              "boolean",
              "scope, si no false",
              "Rellena <code>response.metrics</code> en esta petición."
            ],
            [
              "progress",
              "({ direction, loaded, percent }) => void",
              "ninguno",
              "Progreso de la transferencia. Cambia la petición a XHR; en Node resuelve como <code>UNSUPPORTED</code>."
            ]
          ]
        },
        "errors": {
          "headers": [
            "Código",
            "Status",
            "Reintenta",
            "Cuándo ocurre"
          ],
          "rows": [
            [
              "HTTP_ERROR",
              "el del servidor",
              "si está en retryOn",
              "El servidor respondió con un estado de error (4xx/5xx). <code>data</code> conserva el cuerpo del error."
            ],
            [
              "TIMEOUT",
              "408",
              "sí",
              "El intento superó <code>timeout</code>."
            ],
            [
              "ABORTED",
              "499",
              "nunca",
              "<code>signal</code>, <code>venus.abort()</code> o <code>api.abort()</code> cancelaron la petición."
            ],
            [
              "NETWORK_ERROR",
              "0",
              "sí",
              "La petición falló antes de recibir respuesta: sin conexión, DNS, CORS, conexión cortada."
            ],
            [
              "JSON_PARSE_ERROR",
              "el del servidor",
              "no",
              "El servidor respondió, pero el cuerpo JSON no es válido."
            ],
            [
              "INVALID_BODY",
              "400",
              "nunca",
              "El cuerpo está vacío (<code>null</code>, <code>undefined</code>, <code>\"\"</code>, <code>{}</code>, <code>[]</code>) o no se puede serializar. No se hace ninguna llamada de red."
            ],
            [
              "INVALID_URL",
              "0",
              "nunca",
              "Se usó una URL absoluta con una <code>baseURL</code> configurada."
            ],
            [
              "MODE_CONFLICT",
              "0",
              "nunca",
              "Se hizo una petición con <code>venus</code> después de que <code>createClient()</code> tomara el proceso."
            ],
            [
              "UNSUPPORTED",
              "0",
              "nunca",
              "Se usó <code>progress</code> donde no hay XMLHttpRequest (Node)."
            ],
            [
              "RETRY_EXHAUSTED",
              "el último (503 si no hay)",
              "n/a",
              "Todos los reintentos fallaron. Se conservan el último status y body."
            ],
            [
              "UNKNOWN_ERROR",
              "0",
              "nunca",
              "Un hook <code>beforeRequest</code> o <code>afterResponse</code> lanzó una excepción."
            ]
          ]
        },
        "types": {
          "headers": [
            "Tipo",
            "Qué describe"
          ],
          "rows": [
            [
              "VenusResponse<T>",
              "Lo que devuelve cada método: <code>VenusSuccess&lt;T&gt;</code> o <code>VenusFailure</code>. Comprueba <code>ok</code> para acotarlo."
            ],
            [
              "VenusSuccess<T>",
              "<code>ok: true</code>, <code>data: T</code>, <code>status</code>, <code>error: null</code>, <code>errorCode: null</code>, <code>metrics</code>."
            ],
            [
              "VenusFailure",
              "<code>ok: false</code>, <code>data: unknown</code>, <code>status?</code>, <code>error: string</code>, <code>errorCode</code>, <code>metrics</code>."
            ],
            [
              "VenusErrorCode",
              "Unión de los 11 códigos de error de la tabla anterior."
            ],
            [
              "VenusOptions",
              "Opciones de una petición concreta (la tabla de opciones de petición)."
            ],
            [
              "VenusConfigInput",
              "Claves que aceptan <code>venus.config()</code> y <code>createClient()</code>."
            ],
            [
              "VenusClient",
              "Lo que devuelve <code>createClient()</code>."
            ],
            [
              "VenusRetryOptions",
              "Forma objeto de <code>retry</code>."
            ],
            [
              "VenusHooks",
              "<code>beforeRequest</code> y <code>afterResponse</code>."
            ],
            [
              "VenusRequestOverride",
              "Lo que puede devolver <code>beforeRequest</code>: un <code>RequestInit</code> parcial más <code>disableHeaders</code>."
            ],
            [
              "VenusTelemetryEvent",
              "Payload de <code>onTelemetry</code>."
            ],
            [
              "VenusMetrics",
              "<code>{ engine, startedAt, durationMs, attempts }</code>."
            ],
            [
              "VenusProgress",
              "<code>{ direction, loaded, percent }</code>, con <code>VenusProgressCallback</code> como su callback."
            ],
            [
              "VenusResponseType",
              "Valores que acepta <code>responseType</code>."
            ],
            [
              "VenusQueryParams",
              "Forma de <code>params</code>; <code>ParamsArrayFormat</code> lista los formatos de array."
            ],
            [
              "InferData<R>",
              "Extrae el tipo de <code>data</code> de un <code>VenusResponse</code>."
            ],
            [
              "VenusNormalizedError",
              "<code>ok</code>, <code>status</code>, <code>error</code> y <code>errorCode</code>: la forma de un fallo."
            ]
          ]
        }
      },
      copyFailed: "Error al copiar:",
    },
  },
};
