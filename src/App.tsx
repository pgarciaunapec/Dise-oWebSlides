import { useState, useEffect, useCallback } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Monitor,
  Server,
  Code,
  ShieldCheck,
  Zap,
  Layers,
  Users,
  Database,
  Globe,
  Menu,
  X,
  Cpu,
  Layout,
  GitBranch,
  Cloud,
  Lock,
  Terminal,
  ArrowRightCircle,
  Maximize2,
} from "lucide-react";

// --- DATA: Contenido Técnico y Extenso (>100 palabras por sub-tema) ---
const slides = [
  {
    id: 0,
    type: "hero",
    title: "Ambiente para el Desarrollo de Aplicaciones Web",
    subtitle: "Infraestructura, Ciclo de Vida y Herramientas",
    speaker: "Tema General",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2000",
    icon: <Globe className="w-20 h-20 text-blue-500" />,
    extraText:
      "Una inmersión profunda en la arquitectura técnica que sostiene la web moderna.",
  },
  {
    id: 1,
    type: "team",
    title: "Nuestro Equipo",
    subtitle: "Ingeniería de Software",
    speaker: "Presentación",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
    members: [
      {
        id: 1,
        role: "Expositor #1",
        name: "Roberto Marte",
        matricula: "A00115040",
        icon: <Monitor size={24} />,
      },
      {
        id: 2,
        role: "Expositor #2",
        name: "Carlos Yael De Los Santos",
        matricula: "A00121730",
        icon: <Server size={24} />,
      },
      {
        id: 3,
        role: "Expositor #3",
        name: "Marcos Javier Colón Rosario",
        matricula: "A00120607",
        icon: <Code size={24} />,
      },
      {
        id: 4,
        role: "Expositor #4",
        name: "Cristofer De La Mota",
        matricula: "A00122561",
        icon: <ShieldCheck size={24} />,
      },
      {
        id: 5,
        role: "Expositor #5",
        name: "Pedro García",
        matricula: "A00121080",
        icon: <Users size={24} />,
      },
    ],
  },
  {
    id: 2,
    type: "content",
    title: "El Ciclo de los Entornos",
    speaker: "Roberto Marte",
    image:
      "https://images.unsplash.com/photo-1607799275518-d58665d096c1?auto=format&fit=crop&q=80&w=2000",
    objective:
      "Comprender la segregación de entornos para garantizar la integridad del software.",
    content: [
      {
        title: "1. Desarrollo (Local)",
        icon: <Monitor className="text-blue-400" />,
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000",
        desc: "El entorno de desarrollo local constituye el 'sandbox' o caja de arena inicial donde nace el software. En esta etapa, el código reside exclusivamente en la máquina del programador, aislada de los usuarios finales y de otros desarrolladores. Aquí se configuran servidores locales utilizando herramientas como XAMPP, WAMP, o tecnologías de contenedorización más modernas como Docker, que permiten replicar la infraestructura del servidor en una computadora personal. La principal ventaja de este entorno es la libertad total: el desarrollador puede romper el código, probar nuevas librerías y experimentar con la arquitectura sin riesgo alguno de afectar la operatividad del negocio. Es el momento de la escritura creativa de código fuente, la configuración inicial de bases de datos locales y la ejecución de las primeras pruebas unitarias manuales.",
      },
      {
        title: "2. Pruebas (Testing/QA)",
        icon: <ShieldCheck className="text-red-400" />,
        image:
          "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=2000",
        desc: "Una vez que el desarrollador confirma que su código funciona localmente, este se migra al entorno de Pruebas o QA (Quality Assurance). Este es un servidor compartido donde el equipo de calidad ejecuta baterías de pruebas exhaustivas. Aquí se busca romper la aplicación intencionalmente para encontrar 'bugs', errores de lógica, problemas de rendimiento o fallos de seguridad. Se ejecutan pruebas de integración para asegurar que los nuevos módulos no entren en conflicto con el sistema existente, y pruebas automatizadas (usando herramientas como Selenium o Jest). Es un entorno crítico que actúa como el primer filtro de defensa; ningún código debería salir de aquí si no cumple con los estándares de calidad definidos, garantizando que los errores se detecten antes de que sean visibles para el cliente.",
      },
      {
        title: "3. Staging (Pre-Producción)",
        icon: <Layers className="text-purple-400" />,
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
        desc: "El entorno de Staging es, idealmente, un espejo exacto del entorno de producción. Utiliza la misma configuración de hardware, las mismas versiones de software, y una copia anonimizada de la base de datos real. Su propósito principal es validar el comportamiento de la aplicación en un escenario 'casi real'. Aquí es donde se realizan las pruebas de aceptación del usuario (UAT), donde el cliente o los stakeholders finales navegan por la aplicación para dar su visto bueno. Si la aplicación funciona correctamente en Staging, se tiene una altísima certeza de que funcionará en Producción. Este entorno minimiza el temido efecto 'funcionaba en mi máquina', asegurando que la infraestructura de red, balanceadores de carga y configuraciones de seguridad sean idénticas al destino final.",
      },
      {
        title: "4. Producción (Live)",
        icon: <Globe className="text-green-400" />,
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
        desc: "Producción es el entorno final, el 'Live', donde la aplicación está disponible para los usuarios finales. Aquí es donde ocurre la magia del negocio y donde la estabilidad es la prioridad absoluta. Cualquier cambio que llegue a este entorno debe haber pasado exitosamente por todos los filtros anteriores (Desarrollo, QA, Staging). La gestión de este entorno requiere monitoreo constante 24/7 utilizando herramientas de observabilidad para rastrear tiempos de respuesta, tasas de error y uso de recursos. A diferencia de los entornos anteriores, en producción no se 'prueba'; se opera. Las actualizaciones se realizan mediante estrategias de despliegue cuidadosas (como Blue-Green deployment o Canary releases) para asegurar cero tiempo de inactividad y una experiencia de usuario fluida e ininterrumpida.",
      },
    ],
  },
  {
    id: 3,
    type: "content",
    title: "Componentes del Ambiente",
    speaker: "Carlos Yael De Los Santos",
    image:
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=2000",
    objective: "Anatomía técnica: Hardware, Software y Stack Tecnológico.",
    content: [
      {
        title: "Hardware y Sistema Operativo",
        icon: <Cpu className="text-gray-400" />,
        image:
          "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=2000",
        desc: "El hardware constituye la capa física (o virtualizada en la nube) sobre la que se ejecuta todo el ambiente. En el desarrollo web moderno, esto abarca desde las estaciones de trabajo de los desarrolladores (usualmente laptops de alto rendimiento con 16GB+ RAM) hasta los clústeres de servidores en data centers. El Sistema Operativo actúa como el intermediario crucial. Mientras que Windows y macOS son predominantes para el diseño y la codificación debido a su interfaz de usuario, Linux (distribuciones como Ubuntu Server, CentOS o Debian) es el rey indiscutible en los servidores de producción. La razón es su estabilidad, seguridad, gestión eficiente de recursos y su naturaleza de código abierto, lo que permite a los administradores de sistemas configurar el entorno con precisión milimétrica sin la sobrecarga de interfaces gráficas innecesarias.",
      },
      {
        title: "Frontend (Lado Cliente)",
        icon: <Layout className="text-blue-300" />,
        image:
          "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=2000",
        desc: "El Frontend es la cara de la aplicación, todo aquello con lo que el usuario interactúa directamente en su navegador. Se construye sobre la tríada fundamental de la web: HTML5 para la estructura semántica y contenido, CSS3 para el diseño visual, maquetación y adaptabilidad (responsive design), y JavaScript para la lógica interactiva y dinamismo. Hoy en día, el desarrollo frontend ha evolucionado hacia el uso de frameworks robustos y librerías como React.js, Vue.js o Angular. Estas herramientas permiten crear 'Single Page Applications' (SPAs) que ofrecen una experiencia de usuario fluida similar a una aplicación de escritorio, gestionando el estado de la aplicación y actualizando el DOM virtualmente sin necesidad de recargar la página completa, optimizando así el consumo de ancho de banda y mejorando la percepción de velocidad.",
      },
      {
        title: "Backend (Lado Servidor)",
        icon: <Server className="text-orange-400" />,
        image:
          "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=2000",
        desc: "El Backend es el motor oculto que impulsa la aplicación, encargado de la lógica de negocio, la seguridad y el procesamiento de datos. Aquí es donde se ejecutan las operaciones que el usuario no ve: autenticación de credenciales, cálculos complejos, procesamiento de pagos y orquestación de servicios. Los lenguajes más comunes incluyen Python (con Django/Flask), JavaScript (con Node.js), PHP (con Laravel), Java (con Spring) o Go. El backend expone 'endpoints' a través de APIs (RESTful o GraphQL) que permiten al Frontend solicitar y enviar datos. Un buen backend debe ser escalable, capaz de manejar miles de peticiones concurrentes, y seguro, validando cada entrada de datos para prevenir ataques como inyecciones SQL o Cross-Site Scripting, actuando como el guardián de la integridad del sistema.",
      },
      {
        title: "Base de Datos",
        icon: <Database className="text-green-400" />,
        image:
          "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=2000",
        desc: "La Base de Datos es el componente de persistencia donde se almacena toda la información vital de la aplicación de manera organizada. Existen dos paradigmas principales: las bases de datos Relacionales (SQL) como MySQL, PostgreSQL o Oracle, que organizan los datos en tablas estructuradas con relaciones estrictas, ideales para sistemas financieros o transaccionales donde la integridad de los datos es crítica (ACID). Por otro lado, las bases de datos No Relacionales (NoSQL) como MongoDB, Cassandra o Redis, ofrecen flexibilidad de esquema y alta velocidad de lectura/escritura, siendo perfectas para manejar grandes volúmenes de datos no estructurados, contenido en tiempo real o Big Data. La elección entre SQL y NoSQL define la arquitectura de datos del proyecto y su capacidad futura de escalado.",
      },
    ],
  },
  {
    id: 4,
    type: "content",
    title: "Herramientas: Local vs Nube",
    speaker: "Marcos Javier Colón Rosario",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    objective: "Evolución del espacio de trabajo: De la PC al Cloud Computing.",
    content: [
      {
        title: "Entornos en la Nube (Cloud IDEs)",
        icon: <Cloud className="text-cyan-400" />,
        image:
          "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=2000",
        desc: "Los entornos de desarrollo en la nube (Cloud IDEs) como GitHub Codespaces, AWS Cloud9 o Replit están revolucionando la forma de trabajar al desacoplar el desarrollo del hardware local. Todo el entorno (editor, terminal, compiladores) se ejecuta en servidores remotos accesibles a través del navegador. Esto elimina los problemas de configuración inicial ('setup hell'), ya que se pueden aprovisionar entornos estandarizados para todo el equipo en segundos. Permiten la colaboración en tiempo real (similar a Google Docs pero para código), facilitan el trabajo remoto desde dispositivos con pocos recursos (como una tablet) y garantizan que todos los desarrolladores estén utilizando exactamente las mismas versiones de librerías y herramientas, eliminando inconsistencias entre el equipo.",
      },
      {
        title: "Entornos Locales (IDEs Clásicos)",
        icon: <Terminal className="text-yellow-400" />,
        image:
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000",
        desc: "A pesar del auge de la nube, los entornos locales siguen siendo el estándar de oro para el desarrollo intensivo. Herramientas como Visual Studio Code, IntelliJ IDEA o Sublime Text instaladas directamente en el sistema operativo ofrecen una latencia cero, acceso total al sistema de archivos y capacidades de personalización infinitas mediante extensiones y plugins. Trabajar localmente permite el desarrollo 'offline', el uso intensivo de recursos de hardware (GPU/CPU) para compilaciones pesadas y una integración profunda con herramientas del sistema operativo. La clave del éxito en entornos locales modernos es el uso de contenedores (Docker), que permiten encapsular las dependencias del proyecto para simular un entorno de servidor dentro de la máquina local, obteniendo lo mejor de ambos mundos.",
      },
      {
        title: "Control de Versiones (Git)",
        icon: <GitBranch className="text-orange-500" />,
        image:
          "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=2000",
        desc: "Git es el sistema de control de versiones distribuido que actúa como la columna vertebral de cualquier proyecto de software colaborativo. Permite rastrear cada cambio realizado en el código fuente, quién lo hizo y cuándo. Plataformas como GitHub, GitLab o Bitbucket alojan estos repositorios en la nube, facilitando el flujo de trabajo mediante 'Branches' (ramas). Esto permite a los desarrolladores trabajar en nuevas características o correcciones de errores en ramas aisladas sin afectar el código principal (Main/Master). Una vez completado el trabajo, se realiza un 'Merge Request' o 'Pull Request', donde el código es revisado por pares antes de integrarse. Git es fundamental no solo para la colaboración, sino como red de seguridad, permitiendo revertir el proyecto a cualquier estado anterior en caso de errores críticos.",
      },
    ],
  },
  {
    id: 5,
    type: "content",
    title: "Características de Calidad",
    speaker: "Cristofer De La Mota",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=2000",
    objective: "Atributos no funcionales que definen la excelencia técnica.",
    content: [
      {
        title: "Accesibilidad y Compatibilidad",
        icon: <Users className="text-indigo-400" />,
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000",
        desc: "Un buen ambiente de desarrollo debe priorizar la universalidad del acceso. La compatibilidad Cross-Browser asegura que la aplicación se renderice y funcione idénticamente en Chrome, Firefox, Safari y Edge, lidiando con las peculiaridades de cada motor de renderizado. Más importante aún es la accesibilidad (a11y), que implica seguir las pautas WCAG para asegurar que personas con discapacidades visuales, motoras o cognitivas puedan usar la web. Esto significa usar HTML semántico, etiquetas ARIA correctas, contrastes de color adecuados y navegación por teclado. Desarrollar con la accesibilidad en mente no es solo una obligación ética y legal, sino que mejora la usabilidad general, el SEO y amplía el alcance de mercado del producto final.",
      },
      {
        title: "Escalabilidad",
        icon: <Zap className="text-yellow-400" />,
        image:
          "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80&w=2000",
        desc: "La escalabilidad es la capacidad del sistema para manejar un crecimiento exponencial en la carga de trabajo sin comprometer el rendimiento. Existen dos tipos: la escalabilidad vertical (añadir más RAM/CPU a un servidor existente) y la horizontal (añadir más servidores al clúster para distribuir la carga). Un buen ambiente de desarrollo prepara la arquitectura para esto mediante el uso de balanceadores de carga, caché distribuida (como Redis) y código 'stateless' (sin estado). Si una aplicación pasa de 100 usuarios a 1 millón de la noche a la mañana, una arquitectura escalable permitirá activar nuevos recursos automáticamente (Auto-scaling en la nube) para absorber el tráfico, mientras que un sistema rígido colapsaría, causando denegación de servicio y pérdida de reputación.",
      },
      {
        title: "Seguridad Robusta",
        icon: <Lock className="text-red-500" />,
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000",
        desc: "La seguridad no es una característica añadida al final, sino un componente integral del ambiente desde el día uno (DevSecOps). Esto implica proteger la aplicación contra las vulnerabilidades del OWASP Top 10, como inyecciones SQL, Cross-Site Scripting (XSS) y exposición de datos sensibles. Un entorno seguro implementa HTTPS mediante certificados SSL/TLS para encriptar la comunicación, gestiona las contraseñas mediante algoritmos de hash fuertes (como bcrypt o Argon2) y nunca almacena credenciales o claves API en el código fuente (utilizando variables de entorno). Además, incluye firewalls de aplicaciones web (WAF), limitación de tasas (rate limiting) para prevenir ataques DDoS y auditorías de seguridad periódicas de las dependencias de terceros para parchear vulnerabilidades conocidas.",
      },
    ],
  },
  {
    id: 6,
    type: "content",
    title: "Funciones Diarias",
    speaker: "Pedro García",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    objective: "Operaciones críticas: De la maquetación al mantenimiento.",
    content: [
      {
        title: "Implementación de UI/UX",
        icon: <Layout className="text-pink-400" />,
        image:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2000",
        desc: "Esta función es el puente entre el diseño gráfico y la ingeniería. El desarrollador toma los prototipos de alta fidelidad creados en herramientas como Figma o Adobe XD y los traduce a código vivo. No se trata solo de que se vea bonito, sino de la Experiencia de Usuario (UX). Implica optimizar el 'Critical Rendering Path' para que la página cargue en milisegundos, implementar animaciones suaves a 60fps que guíen la atención del usuario, y asegurar que los elementos interactivos respondan instantáneamente. También abarca el diseño responsivo, asegurando que la interfaz se reorganice fluidamente desde una pantalla de móvil de 5 pulgadas hasta un monitor ultrawide de 34 pulgadas, manteniendo la legibilidad y la funcionalidad intactas.",
      },
      {
        title: "Lógica de Negocio",
        icon: <Code className="text-blue-400" />,
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
        desc: "Es el cerebro de la aplicación. Aquí se programan las reglas que definen cómo funciona el negocio. Por ejemplo, en una tienda en línea, la lógica de negocio decide qué pasa cuando un usuario hace clic en 'Comprar': verificar inventario en la base de datos, calcular impuestos según la ubicación del usuario, procesar el pago con la pasarela bancaria de forma segura, generar una factura PDF y enviar un correo de confirmación. Todo esto ocurre en milisegundos en el servidor. Esta función requiere un pensamiento algorítmico sólido para manejar estructuras de datos complejas y asegurar que las transacciones sean atómicas (o se completan todas o no se hace ninguna) para evitar inconsistencias financieras o de datos.",
      },
      {
        title: "Mantenimiento y Debugging",
        icon: <ShieldCheck className="text-green-400" />,
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000",
        desc: "El lanzamiento de una aplicación es solo el comienzo. La función de mantenimiento implica el monitoreo constante de la salud del sistema. Cuando ocurre un error en producción, comienza el proceso de 'Debugging' (depuración). Los desarrolladores actúan como detectives digitales, utilizando logs del servidor y herramientas de rastreo de errores (como Sentry o Datadog) para reconstruir los pasos que llevaron al fallo. Esto puede implicar analizar el stack trace, inspeccionar el tráfico de red en las DevTools o replicar el error en un entorno local. El mantenimiento también incluye la actualización de librerías para cerrar brechas de seguridad, la refactorización de código deuda técnica para mejorar la legibilidad y la optimización de consultas a la base de datos que se han vuelto lentas con el tiempo.",
      },
    ],
  },
  {
    id: 7,
    type: "hero",
    title: "Conclusión",
    subtitle: "Integración Total",
    speaker: "Cierre",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    icon: <Globe className="w-20 h-20 text-green-400" />,
    extraText: `"Un entorno de desarrollo bien configurado elimina el caos, asegura la calidad y permite que Frontend y Backend trabajen en perfecta armonía."`,
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // -1 indica que estamos en la vista general del slide.
  // 0 o mayor indica que estamos viendo un sub-tema específico.
  const [subSlideIndex, setSubSlideIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const totalSlides = slides.length;
  const slide = slides[currentSlide];
  const hasSubSlides = slide.type === "content";

  const handleNext = useCallback(() => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      // Lógica de Navegación Profunda (Drill-down)
      if (hasSubSlides) {
        // Si estamos en la vista general, entramos al primer sub-tema
        if (subSlideIndex === -1) {
          setSubSlideIndex(0);
        }
        // Si hay más sub-temas, avanzamos al siguiente
        else if (subSlideIndex < (slide as any).content.length - 1) {
          setSubSlideIndex((prev) => prev + 1);
        }
        // Si se acabaron los sub-temas, pasamos al siguiente slide principal
        else {
          setSubSlideIndex(-1);
          if (currentSlide < totalSlides - 1) {
            setCurrentSlide((prev) => prev + 1);
          }
        }
      } else {
        // Si no es un slide de contenido (es Hero o Team), comportamiento normal
        if (currentSlide < totalSlides - 1) {
          setCurrentSlide((prev) => prev + 1);
        }
      }
      setAnimating(false);
    }, 500); // Duración de la transición
  }, [
    currentSlide,
    subSlideIndex,
    hasSubSlides,
    totalSlides,
    animating,
    slide,
  ]);

  const handlePrev = useCallback(() => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      if (hasSubSlides) {
        // Si estamos en un sub-tema > 0, retrocedemos uno
        if (subSlideIndex > 0) {
          setSubSlideIndex((prev) => prev - 1);
        }
        // Si estamos en el primer sub-tema (0), volvemos a la vista general (-1)
        else if (subSlideIndex === 0) {
          setSubSlideIndex(-1);
        }
        // Si estamos en la vista general, vamos al slide anterior
        else {
          if (currentSlide > 0) {
            const prevSlide = slides[currentSlide - 1] as any;
            // Si el anterior tiene sub-temas, vamos al último de ellos
            if (prevSlide.type === "content") {
              setCurrentSlide((prev) => prev - 1);
              setSubSlideIndex(prevSlide.content.length - 1);
            } else {
              setCurrentSlide((prev) => prev - 1);
            }
          }
        }
      } else {
        // Comportamiento normal para slides sin sub-temas
        if (currentSlide > 0) {
          const prevSlide = slides[currentSlide - 1] as any;
          if (prevSlide.type === "content") {
            setCurrentSlide((prev) => prev - 1);
            setSubSlideIndex(prevSlide.content.length - 1);
          } else {
            setCurrentSlide((prev) => prev - 1);
          }
        }
      }
      setAnimating(false);
    }, 500);
  }, [currentSlide, subSlideIndex, hasSubSlides, animating]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Renderizado del contenido específico (Sub-slide vs Main Slide)
  const isDetailView = subSlideIndex >= 0 && hasSubSlides;
  const currentContent = isDetailView
    ? (slide as any).content[subSlideIndex]
    : null;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950 text-white font-sans flex flex-col selection:bg-blue-500 selection:text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
        <div className="flex items-center space-x-4 pointer-events-auto backdrop-blur-md bg-slate-900/50 px-4 py-2 rounded-full border border-slate-700">
          <div
            className={`h-3 w-3 rounded-full ${
              isDetailView ? "bg-green-500 animate-pulse" : "bg-blue-500"
            }`}
          ></div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white">
              {isDetailView && currentContent
                ? `Detalle: ${currentContent.title}`
                : slide.speaker}
            </h1>
          </div>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="pointer-events-auto p-3 hover:bg-white/10 rounded-full transition-colors text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Main Container */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Transition Wrapper */}
        <div
          className={`w-full h-full transition-all duration-500 ease-in-out ${
            animating
              ? "opacity-0 scale-95 blur-sm"
              : "opacity-100 scale-100 blur-0"
          }`}
        >
          {/* VISTA 1: HERO / PORTADA */}
          {slide.type === "hero" && (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-slate-950/80 z-10" />
                <img
                  src={slide.image}
                  className="w-full h-full object-cover"
                  alt="Hero BG"
                />
              </div>
              <div className="relative z-20 text-center max-w-5xl px-6">
                <div className="flex justify-center mb-8">{slide.icon}</div>
                <h1 className="text-6xl text-white font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <p className="text-2xl text-white mb-6">{slide.subtitle}</p>
                {(slide as any).extraText && (
                  <p className="text-lg text-white/80 italic mb-8">
                    {(slide as any).extraText}
                  </p>
                )}
                <button
                  onClick={handleNext}
                  className="mt-12 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto transition-transform hover:scale-105"
                >
                  Comenzar <ChevronRight />
                </button>
              </div>
            </div>
          )}

          {/* VISTA 2: EQUIPO */}
          {slide.type === "team" && (
            <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center pt-20 px-12">
              <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
              <div className="grid grid-cols-5 gap-6 w-full max-w-7xl mt-12">
                {(slide as any).members.map((m: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-slate-800 p-6 rounded-2xl text-center border border-slate-700"
                  >
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      {m.icon}
                    </div>
                    <h3 className="font-bold text-lg">{m.name}</h3>
                    <p className="text-sm text-slate-400">{m.matricula}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VISTA 3: CONTENIDO GENERAL (Resumen de tarjetas) */}
          {slide.type === "content" && !isDetailView && (
            <div className="w-full h-full flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-slate-950 flex flex-col justify-center p-16">
                <h2 className="text-6xl font-black mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-xl text-slate-300 border-l-4 border-blue-500 pl-6">
                  {slide.objective}
                </p>
                <p className="mt-8 text-sm text-blue-400 uppercase tracking-widest font-bold flex items-center gap-2 animate-bounce">
                  <ArrowRightCircle size={16} /> Presiona Siguiente para ver
                  detalles
                </p>
              </div>
              <div className="lg:w-1/2 bg-slate-900 p-12 grid grid-cols-1 gap-4 content-center">
                {(slide as any).content.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 opacity-60"
                  >
                    <div className="text-slate-400">{item.icon}</div>
                    <h3 className="text-xl font-bold text-slate-300">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VISTA 4: DETALLE PROFUNDO (Drill-down View) */}
          {isDetailView && currentContent && (
            <div className="w-full h-full flex flex-col lg:flex-row relative">
              {/* Lado Izquierdo: Texto Técnico Extenso */}
              <div className="lg:w-[45%] h-full bg-slate-950 p-12 lg:p-16 overflow-y-auto custom-scrollbar flex flex-col justify-center relative z-20 shadow-2xl">
                <div className="mb-6 flex items-center gap-3 text-blue-400">
                  {currentContent.icon}
                  <span className="text-sm font-bold uppercase tracking-widest">
                    Detalle Técnico {subSlideIndex + 1}/
                    {(slide as any).content.length}
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                  {currentContent.title}
                </h2>

                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-slate-300 leading-relaxed text-lg text-justify">
                    {currentContent.desc}
                  </p>
                </div>

                <div className="mt-8 flex gap-2">
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{
                        width: `${
                          ((subSlideIndex + 1) /
                            (slide as any).content.length) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Lado Derecho: Imagen Inmersiva */}
              <div className="lg:w-[55%] h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent z-10"></div>
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s] ease-linear"
                />

                {/* Etiqueta Flotante */}
                <div className="absolute top-12 right-12 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl max-w-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Maximize2 size={16} className="text-blue-400" />
                    <span className="text-xs font-bold uppercase text-slate-300">
                      Objetivo del Tema
                    </span>
                  </div>
                  <p className="text-white font-medium italic">
                    "{slide.objective}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Controles de Navegación */}
      <div className="absolute bottom-0 w-full z-40 px-8 py-6 flex justify-between items-center pointer-events-none group">
        <div className="pointer-events-auto flex gap-4 ml-auto bg-slate-950/50 backdrop-blur-md p-2 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handlePrev}
            className="p-4 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-all hover:scale-105"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Menú Full Screen */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950/98 backdrop-blur-xl p-12 overflow-y-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Mapa de Navegación</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {slides.map((s, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setIsMenuOpen(false);
                  setCurrentSlide(idx);
                  setSubSlideIndex(-1);
                }}
                className="p-6 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 cursor-pointer transition-all hover:border-blue-500"
              >
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500">
                  {s.subtitle || s.speaker}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
      `}</style>
    </div>
  );
}
