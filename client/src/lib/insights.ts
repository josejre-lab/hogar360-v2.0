/*
  Hogar360 Insights editorial data: practical, agent-facing education with source-aware claims.
  Every research-based statement is deliberately qualified so the content never promises sales outcomes.
*/
export type InsightArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  introduction: string;
  sections: { heading: string; paragraphs: string[] }[];
  sources: { label: string; url: string }[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "la-visita-empieza-antes-de-la-visita",
    category: "GUÍA",
    title: "La visita empieza antes de la visita",
    summary: "Un recorrido 3D no reemplaza la experiencia presencial: ayuda a que esa visita llegue con mejor contexto.",
    image: "/manus-storage/hogar360-insight-virtual-visit_6482ce3e.jpg",
    introduction: "Antes de coordinar una visita, la mayoría de las preguntas son espaciales: cómo se conectan los ambientes, qué tan cerca está una habitación de otra o si la distribución tiene sentido para la vida diaria. Un recorrido 3D le da al interesado una manera más clara de empezar esa conversación.",
    sections: [
      { heading: "No es una sustitución", paragraphs: ["Una buena visita presencial sigue siendo importante. La función del recorrido no es cerrar la decisión desde una pantalla, sino permitir que la persona llegue con expectativas más realistas y preguntas más útiles.", "La National Association of REALTORS® explica que las experiencias virtuales dan contexto sobre cómo se conectan las habitaciones y permiten evaluar la distribución antes de agendar una visita. Esa es una expectativa razonable y útil para un agente: facilitar la exploración inicial."] },
      { heading: "Más información, no promesas", paragraphs: ["Un análisis de Harvard Business School de más de 75,000 ventas en Los Ángeles encontró que, una vez que se considera la calidad de fotos y descripciones, los tours virtuales no demostraron una mejora universal en precio de cierre. El valor más consistente está en ayudar a algunos compradores a descartar opciones que no encajan antes de la visita.", "Por eso, el mensaje correcto no es “un tour garantiza una venta”. Es: “esta propiedad se puede entender mejor antes de perder tiempo coordinando una visita”."] },
      { heading: "La oportunidad para el agente", paragraphs: ["Cuando la información está organizada en un solo enlace —recorrido, galería, detalles y una forma clara de contacto— el agente puede presentar con una narrativa más profesional. El prospecto explora a su ritmo y el agente conserva el siguiente paso: responder una consulta o coordinar una visita."] },
    ],
    sources: [
      { label: "National Association of REALTORS® — Your Virtual Tour Playbook Is Here", url: "https://www.nar.realtor/news/real-estate-news/technology/create-a-virtual-tour-real-estate" },
      { label: "Harvard Business School — Are Virtual Tours Still Worth It in Real Estate?", url: "https://www.library.hbs.edu/working-knowledge/are-virtual-tours-still-worth-it-in-real-estate-evidence-from-75000-home-sales" },
    ],
  },
  {
    slug: "que-esta-cambiando-en-otros-mercados",
    category: "MERCADOS",
    title: "Qué está cambiando en otros mercados inmobiliarios",
    summary: "Las plataformas inmobiliarias han convertido la exploración digital en una parte visible de la primera impresión de una propiedad.",
    image: "/manus-storage/hogar360-insight-global-markets_9c17a113.jpg",
    introduction: "En mercados donde la búsqueda de vivienda ocurre principalmente desde una pantalla, los recursos visuales ya no se limitan a una secuencia de fotos. Los tours 3D y los planos interactivos se usan para dar una sensación más clara de distribución, escala y recorrido antes de hablar con un agente.",
    sections: [
      { heading: "Una señal que vale la pena observar", paragraphs: ["Zillow, una plataforma inmobiliaria de Estados Unidos, integra tours 3D y planos interactivos dentro de sus listados. En sus propios datos de los 50 mercados metropolitanos con mayor volumen, los anuncios con plano interactivo obtuvieron más visualizaciones, guardados y compartidos que los anuncios sin ese recurso.", "Es importante no trasladar esos porcentajes directamente a Santiago: son datos de una plataforma específica, un país específico y un periodo concreto. Lo relevante para nuestro mercado es la dirección del comportamiento: cuando una propiedad se puede explorar con mejor contexto, el contenido deja de ser solo una imagen estática."] },
      { heading: "El estándar no es la tecnología por sí sola", paragraphs: ["La lección no es que toda propiedad necesite la misma producción. La lección es que el material debe resolver la pregunta que tiene el prospecto: “¿entiendo esta propiedad lo suficiente como para dar el próximo paso?”. Un tour 3D funciona mejor cuando está acompañado por una landing clara, una selección de fotos y una ruta de contacto sencilla."] },
      { heading: "Una oportunidad local", paragraphs: ["Para agentes inmobiliarios en Santiago, una experiencia más completa puede ayudar a diferenciar cómo se presenta el inventario sin adoptar un tono exagerado. La meta es ofrecer una primera exploración más profesional y dejar que la visita presencial confirme lo que el interesado ya empezó a comprender."] },
    ],
    sources: [
      { label: "Zillow — 3D Home tours and interactive floor plans", url: "https://www.zillow.com/3d-home/" },
      { label: "National Association of REALTORS® — Your Virtual Tour Playbook Is Here", url: "https://www.nar.realtor/news/real-estate-news/technology/create-a-virtual-tour-real-estate" },
    ],
  },
  {
    slug: "como-preparar-una-propiedad-para-un-recorrido-3d",
    category: "PREPARACIÓN",
    title: "Cómo preparar una propiedad para un recorrido 3D",
    summary: "Una preparación sencilla ayuda a que la experiencia sea más clara, ordenada y representativa de la propiedad.",
    image: "/manus-storage/hogar360-insight-preparation_63dd8cee.jpg",
    introduction: "La captura es una parte del trabajo. La otra parte es preparar el espacio para que el recorrido muestre una versión ordenada, fiel y fácil de entender de la propiedad. No se trata de aparentar algo que no existe; se trata de reducir distracciones.",
    sections: [
      { heading: "Antes de la captura", paragraphs: ["Recorre cada espacio como lo haría un visitante. Guarda artículos personales, despeja superficies y retira objetos que bloqueen pasos o puertas. Revisa que las luces principales funcionen y deja accesibles las áreas que quieres incluir.", "Si hay inquilinos, mascotas o tiempos de acceso limitados, coordina esos detalles con anticipación. La investigación académica sobre marketing virtual destaca que estas herramientas pueden ser especialmente útiles cuando una propiedad es más difícil de mostrar; una buena coordinación hace que ese beneficio sea más aprovechable."] },
      { heading: "Piensa en el recorrido", paragraphs: ["La experiencia debe sentirse natural: entrada, espacios sociales, habitaciones, baños y áreas especiales. Identifica desde antes los puntos que dan contexto, como una galería, patio, balcón o estacionamiento. Esto ayuda a crear una estructura lógica para el visitante digital."] },
      { heading: "Define el siguiente paso", paragraphs: ["Antes de publicar, verifica que el enlace incluya información esencial y una forma directa de contactar al agente. Cuando un prospecto entiende el espacio, debe ser fácil pasar a la conversación. Una buena presentación no reemplaza el seguimiento: lo prepara."] },
    ],
    sources: [
      { label: "National Association of REALTORS® — Your Virtual Tour Playbook Is Here", url: "https://www.nar.realtor/news/real-estate-news/technology/create-a-virtual-tour-real-estate" },
      { label: "Anderson, Freybote & Manis (2022) — The Impact of Virtual Marketing Strategies on the Price–TOM Relation", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9243859/" },
    ],
  },
];

export const getInsightArticle = (slug: string) => insightArticles.find((article) => article.slug === slug);
