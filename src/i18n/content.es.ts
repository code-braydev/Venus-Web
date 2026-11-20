import type { ContentDict } from "./content.en";

/** Contenido en español de la documentación multipágina y de los casos reales. */
export const contentEs: ContentDict = {
  nav: {
    groups: {
      start: "Primeros pasos",
      guides: "Guías",
      reference: "Referencia",
      project: "Proyecto",
    },
    menu: "Menú de la documentación",
    onThisPage: "En esta página",
    previous: "Anterior",
    next: "Siguiente",
    titleSuffix: "Documentación del cliente HTTP Venus",
    introTitle: "Primeros pasos con Venus: instalación y primera petición",
  },

  pages: {
    intro: {
      label: "Introducción",
      title: "Documentación",
      lead: "Venus v3.0.1 desde cero: instálalo, haz tu primera petición y elige cómo quieres usarlo.",
    },
    config: {
      label: "Configuración",
      title: "Configuración y ciclo de vida",
      lead: "Define los valores por defecto una vez (URL base, cabeceras, timeout...) y controla la vida de Venus: léelo, reinícialo, cancela todo.",
    },
    requests: {
      label: "Métodos",
      title: "Métodos de petición",
      lead: "get, send, update, updateOnly y remove: qué hace cada uno, qué devuelve y qué opciones le puedes dar.",
    },
    retries: {
      label: "Reintentos",
      title: "Resiliencia y reintentos seguros",
      lead: "Recupérate de los fallos que se arreglan solos, sin repetir jamás algo que debe ocurrir una sola vez.",
    },
    timeouts: {
      label: "Timeouts",
      title: "Timeouts: nunca esperes para siempre",
      lead: "Dale a cada petición un límite de tiempo, para que un servidor lento no deje tu pantalla cargando para siempre.",
    },
    hooks: {
      label: "Hooks y telemetría",
      title: "Hooks del ciclo de vida y telemetría",
      lead: "Ejecuta tu propio código antes de que salga una petición y después de que llegue la respuesta: autenticación, logs, trazas.",
    },
    bodies: {
      label: "Cuerpos de petición",
      title: "Cuerpos de petición",
      lead: "Qué puedes enviar (objetos, archivos, formularios, streams) y cómo eliges leer la respuesta.",
    },
    abort: {
      label: "Cancelar peticiones",
      title: "Cancelar peticiones",
      lead: "Cancela una petición, o todo lo que está en vuelo, cuando ya no necesitas la respuesta.",
    },
    engine: {
      label: "Motor y métricas",
      title: "Motor, progress y métricas",
      lead: "Cómo envía Venus las peticiones, cómo mostrar el progreso de una subida y cómo medir cada petición.",
    },
    architecture: {
      label: "SPA y SSR",
      title: "Arquitectura: Frontend (SPA) y Backend (SSR)",
      lead: "Cómo organizar Venus en una app de navegador y en un servidor, con una API o con varias.",
    },
    options: {
      label: "Opciones de petición",
      title: "Opciones de petición",
      lead: "Todo lo que puedes pasar a una petición, con su valor por defecto y cada valor que acepta.",
    },
    errors: {
      label: "Códigos de error",
      title: "Códigos de error",
      lead: "Cada fallo tiene un código estable: esto significa cada uno y si Venus lo reintenta.",
    },
    types: {
      label: "Tipos",
      title: "Referencia de tipos",
      lead: "Todos los tipos de TypeScript que exporta Venus: respuestas, opciones, errores, hooks y métricas, con lo que describe cada uno.",
    },
    glossary: {
      label: "Glosario",
      title: "Glosario",
      lead: "Las palabras técnicas que se usan en esta documentación, explicadas en lenguaje llano.",
    },
    migration: {
      label: "Migrar desde v2",
      title: "Migrar desde v2",
      lead: "Cómo actualizar Venus de la v2 a la v3: los cambios que requieren acción, con un diff del antes y el después del código.",
    },
    changelog: {
      label: "Changelog",
      title: "Changelog",
      lead: "Historial de versiones, además de cómo ejecutar los tests y la licencia.",
    },
  },

  cards: {
    configIntro:
      "<strong>Todo esto se puede poner en <code>venus.config()</code> y en <code>createClient()</code></strong>. Son los valores por defecto del scope; una petición concreta aún puede sobrescribirlos.",
    methodsIntro:
      "Todos los métodos aceptan <strong>todas estas opciones</strong> como último argumento. Pulsa una opción para ver exactamente qué hace. Los reintentos están <strong>desactivados</strong> hasta que actives <code>retry</code>.",
    optionsIntro:
      "Un mapa rápido de cada opción. Las tarjetas con lista muestran todos los valores que puedes usar.",
    labels: {
      type: "Tipo",
      accepts: "Acepta",
      allOptions: "Todas las opciones de petición",
      body: "Body",
      bodyYes: "Sí, segundo argumento",
      bodyNo: "No",
      status: "Status esperado",
      retries: "Si retry está activo",
      retriesYes: "Se reintenta (idempotente)",
      retriesNo: "No se reintenta salvo que lo permitas",
      values: "Valores posibles",
      scopeOnly: "solo scope",
      mapTitle: "De un vistazo",
      detailTitle: "Cada opción en detalle",
    },
    methods: {
      get: "Lee datos. Nunca envía un body.",
      send: "Crea algo nuevo. El body se serializa por ti.",
      update: "Reemplaza un recurso por completo.",
      updateOnly: "Cambia solo algunos campos de un recurso.",
      remove: "Borra un recurso. Una respuesta 204 llega como data: null.",
    },
    options: {
      headers: {
        desc: "Cabeceras que se envían con la petición. Las de la propia petición ganan a las del scope.",
      },
      disableHeaders: {
        desc: "Nombres de cabecera que se quitan de esta petición, como un Authorization heredado.",
      },
      body: {
        desc: "Lo que envías. Venus elige el Content-Type por ti.",
        values: [
          { value: "objeto / array", desc: "JSON (application/json)" },
          { value: "string", desc: "texto plano (text/plain)" },
          { value: "FormData", desc: "multipart, con archivos y campos" },
          { value: "URLSearchParams", desc: "formulario clásico (urlencoded)" },
          { value: "File / Blob", desc: "binario, con el tipo del propio archivo" },
          { value: "ArrayBuffer / typed arrays", desc: "binario crudo (octet-stream)" },
          { value: "ReadableStream", desc: "binario en flujo, nunca se reintenta" },
        ],
      },
      timeout: {
        desc: "Milisegundos máximos por intento antes de fallar como TIMEOUT. 0 lo desactiva.",
      },
      signal: {
        desc: "Un AbortSignal para cancelar esta petición desde fuera.",
      },
      params: {
        desc: "El query string como objeto: { limit: 5 } se convierte en ?limit=5.",
      },
      paramsArrayFormat: {
        desc: "Cómo se escribe en la URL un array dentro de params. Mostrado para tag: [js, ts].",
        values: [
          { value: "repeat (por defecto)", desc: "?tag=js&tag=ts" },
          { value: "comma", desc: "?tag=js,ts" },
          { value: "brackets", desc: "?tag[]=js&tag[]=ts" },
          { value: "indices", desc: "?tag[0]=js&tag[1]=ts" },
        ],
      },
      responseType: {
        desc: "Cómo se lee el cuerpo de la respuesta.",
        values: [
          { value: "auto (por defecto)", desc: "JSON como objeto, lo demás como texto" },
          { value: "json", desc: "fuerza JSON" },
          { value: "text", desc: "un string (HTML, CSV, XML...)" },
          { value: "blob", desc: "archivos e imágenes" },
          { value: "formData", desc: "un objeto FormData" },
          { value: "arrayBuffer", desc: "bytes crudos" },
          { value: "stream", desc: "un ReadableStream, trozo a trozo" },
        ],
      },
      retry: {
        desc: "Reintenta los intentos fallidos que merece la pena repetir.",
        values: [
          { value: "true", desc: "2 reintentos con las esperas por defecto" },
          { value: "un número", desc: "esa cantidad de reintentos, p. ej. retry: 3" },
          { value: "un objeto", desc: "ajusta intentos, esperas, códigos de estado y métodos" },
          { value: "false", desc: "desactivado en esta petición, aunque el scope lo tenga" },
        ],
      },
      hooks: {
        desc: "Tu código antes de cada intento (beforeRequest) y después de cada respuesta (afterResponse).",
      },
      onTelemetry: {
        desc: "Un listener que recibe un evento por intento: url, status, duración, código de error.",
      },
      metrics: {
        desc: "Rellena response.metrics con motor, hora de inicio, duración e intentos.",
      },
      progress: {
        desc: "Un callback con el progreso de transferencia de una subida o descarga.",
      },
    },
  },

  glossary: {
    seeGlossary: "¿Qué significa esto?",
    entries: [
      { id: "idempotent", term: "Idempotente", def: "Una petición que da el mismo resultado sin importar cuántas veces la repitas. Leer un perfil (GET) o borrar un usuario (DELETE) son idempotentes. Crear un pedido (POST) no lo es: repetirlo crea dos pedidos. Por eso Venus solo reintenta por defecto los métodos idempotentes." },
      { id: "backoff", term: "Backoff", def: "La espera entre un reintento y el siguiente, que crece cada vez (200 ms, 400 ms, 800 ms...). Le da tiempo a un servidor en apuros para recuperarse, en vez de bombardearlo." },
      { id: "jitter", term: "Jitter", def: "Un pequeño cambio aleatorio que se suma al backoff. Sin él, mil clientes que fallaron a la vez reintentarían todos en el mismo instante y volverían a saturar el servidor." },
      { id: "retry-after", term: "Retry-After", def: "Una cabecera que algunos servidores envían para decir \"vuelve en 5 segundos\". Si está presente, Venus espera ese tiempo en vez de usar su propio backoff." },
      { id: "timeout", term: "Timeout", def: "El límite de tiempo de una petición. Si el servidor no ha respondido para entonces, Venus se rinde y devuelve un error TIMEOUT en vez de esperar para siempre." },
      { id: "abort-signal", term: "AbortController / AbortSignal", def: "Un estándar de navegadores y Node para cancelar trabajo. Creas un AbortController, le das su signal a una petición y llamas a abort() cuando ya no necesitas la respuesta, por ejemplo cuando el usuario sale de la página." },
      { id: "xhr", term: "XHR (XMLHttpRequest)", def: "La forma más antigua que tienen los navegadores de enviar peticiones. Puede informar del progreso de una subida, algo que fetch no puede, así que Venus solo cambia a él cuando pides progress o metrics." },
      { id: "fetch", term: "fetch", def: "La forma moderna de hacer peticiones, incluida en navegadores y Node. Es el motor por defecto de Venus." },
      { id: "engine", term: "Motor (engine)", def: "Lo que realmente envía la petición por la red: fetch o XHR. Tú nunca lo eliges; Venus escoge el adecuado." },
      { id: "scope", term: "Scope", def: "El lugar donde viven los valores por defecto. Con el venus global hay un scope; cada createClient() tiene el suyo. Lo que pases en una petición concreta gana a su scope." },
      { id: "singleton", term: "Singleton (venus global)", def: "Una instancia compartida para toda la app. Cómoda cuando hablas con una sola API: la configuras una vez y la usas en cualquier sitio." },
      { id: "client", term: "Cliente (instancia)", def: "Una copia independiente creada con createClient(), con su propia URL base, cabeceras y reglas. Usa una por API cuando tu app habla con varias." },
      { id: "hook", term: "Hook / interceptor", def: "Una función que Venus llama en un momento fijo, para que añadas comportamiento sin tocar cada petición. Por ejemplo, poner el token de sesión justo antes de que salga cada petición." },
      { id: "telemetry", term: "Telemetría", def: "Informes automáticos sobre cómo se comportan las peticiones (qué URL, cuánto tardó, si falló). Los envías a tu analítica o a tus logs para detectar endpoints lentos o que fallan." },
      { id: "payload", term: "Payload / body", def: "Los datos que envías al servidor en un POST, PUT o PATCH: un usuario nuevo, un archivo, un formulario." },
      { id: "content-type", term: "Content-Type", def: "Una cabecera que le dice al servidor qué tipo de datos es el body (JSON, texto, un archivo). Venus la pone por ti; si la pones tú, la tuya gana." },
      { id: "query-params", term: "Query params", def: "La parte de una URL después del signo de interrogación: /news?category=tech&limit=5. En Venus los escribes como un objeto y construye la URL por ti." },
      { id: "multipart", term: "multipart / FormData", def: "El formato para enviar archivos y campos de formulario juntos, como un avatar y un nombre. FormData es el objeto que lo construye." },
      { id: "stream", term: "Stream", def: "Datos que llegan (o salen) por trozos en vez de todos de golpe, útil para archivos enormes o flujos en vivo. Un body en stream no se puede repetir, así que nunca se reintenta." },
      { id: "spa", term: "SPA (aplicación de una página)", def: "Una app web que carga una vez y luego cambia la pantalla con JavaScript, como la mayoría de apps de React o Vue. Normalmente habla con una sola API." },
      { id: "ssr", term: "SSR (renderizado en servidor)", def: "Código que corre en un servidor (Node) para construir páginas o servir una API. Suele hablar con varios servicios, así que encaja un cliente por servicio." },
      { id: "no-content", term: "204 No Content", def: "Una respuesta correcta sin cuerpo, típica al borrar algo. Venus la devuelve como ok: true y data: null." },
      { id: "generic", term: "Genérico <T>", def: "El tipo que pones entre ángulos, como en get<User>(). Le dice a TypeScript la forma de los datos que esperas, así obtienes autocompletado y comprobación de errores." },
      { id: "narrowing", term: "Acotar el tipo (narrowing)", def: "Cuando TypeScript sabe más después de una comprobación. Tras if (res.ok) sabe que data es tu tipo; tras una comprobación fallida sabe que tienes un código de error." },
      { id: "endpoint", term: "Endpoint", def: "Una dirección de una API que hace una cosa, como /users o /orders/12." },
      { id: "header", term: "Cabecera (header)", def: "Información extra que viaja con una petición o una respuesta, como el token de sesión (Authorization) o el tipo de dato (Content-Type)." },
    ],
  },

  faq: {
    "title": "Preguntas frecuentes",
    "lead": "Respuestas rápidas sobre qué es Venus y cómo se comporta.",
    "items": [
      {
        "q": "¿Qué es Venus?",
        "a": "Venus es un cliente HTTP sin dependencias para JavaScript y TypeScript. Funciona sobre <code>fetch</code> y añade respuestas tipadas, reintentos seguros, timeouts, cancelación y progreso de subida, para que escribas menos código alrededor de cada petición."
      },
      {
        "q": "¿Venus funciona en el navegador y en Node?",
        "a": "Sí. Usa <code>fetch</code> por defecto en ambos. En el navegador cambia a <code>XMLHttpRequest</code> solo cuando pides <code>progress</code> o <code>metrics</code>; en Node, <code>progress</code> no está disponible y devuelve un error <code>UNSUPPORTED</code>."
      },
      {
        "q": "¿Venus lanza excepciones?",
        "a": "No. Cada petición resuelve a un objeto con <code>ok</code>, <code>data</code>, <code>status</code> y un <code>errorCode</code>. Comprueba <code>ok</code> y TypeScript acota el tipo por ti, así que el flujo normal no necesita try/catch."
      },
      {
        "q": "¿Venus reintenta las peticiones fallidas?",
        "a": "Solo si lo pides: los reintentos están desactivados hasta que defines <code>retry</code>. Entonces reintenta errores de red, timeouts, 408, 429 y 5xx, y solo en métodos idempotentes (GET, PUT, DELETE...), así que un POST como un pago nunca se repite por accidente."
      },
      {
        "q": "¿Puedo usar Venus con más de una API?",
        "a": "Sí. Usa <code>createClient()</code> para crear un cliente independiente por API, cada uno con su URL base, cabeceras, timeout y reglas de reintento. El <code>venus</code> global y los clientes son excluyentes: elige un modo por app."
      },
      {
        "q": "¿Venus incluye tipos de TypeScript?",
        "a": "Sí. Los tipos vienen con el paquete y cada método acepta un genérico, como <code>venus.get&lt;User&gt;()</code>, así <code>data</code> queda tipado cuando compruebas <code>ok</code>."
      },
      {
        "q": "¿Cómo instalo Venus y qué licencia tiene?",
        "a": "Ejecuta <code>npm install @braydev/venus</code>. Venus es gratuito y de código abierto, con licencia MIT."
      }
    ]
  },

  useCases: {
    title: "¿Por qué necesitas un cliente HTTP?",
    lead: "Llamar a una API es fácil. Lo difícil es que funcione todos los días. Estos son los problemas que te vas a encontrar, y cómo los resuelve Venus.",
    cta: "Leer la guía",
    items: [
      { id: "token", guide: "hooks", title: "El token de sesión caduca", problem: "Cada petición necesita el token actual. Escribir la cabecera a mano en cada llamada es como se cuela un token viejo y a los usuarios se les cierra la sesión." },
      { id: "timeout", guide: "timeouts", title: "El servidor se cuelga", problem: "Si un servidor nunca responde, tu pantalla se queda cargando para siempre. Un límite de tiempo lo convierte en un error que puedes mostrar y del que puedes recuperarte." },
      { id: "retry", guide: "retries", title: "La conexión falla de vez en cuando", problem: "Con datos móviles o un Wi-Fi débil una petición puede fallar una vez y funcionar un segundo después. Reintentar lo arregla, siempre que nunca repita un pago." },
      { id: "abort", guide: "abort", title: "El usuario escribe más rápido que el servidor", problem: "En un buscador, las respuestas pueden llegar desordenadas y pintar resultados viejos. Cancela la petición anterior cada vez que empieza una nueva." },
      { id: "progress", guide: "engine", title: "Subir un archivo grande", problem: "La gente quiere una barra de progreso, no un spinner y esperar lo mejor. Necesitas saber cuánto se ha enviado." },
      { id: "errors", guide: "errors", title: "Un error no debe tumbar la app", problem: "Sin conexión, un 500, un JSON roto: todo llega como un valor con un código, nunca como una excepción sorpresa." },
    ],
  },
};
