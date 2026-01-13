Guion de Presentación: Funciones Diarias Expositor: Pedro García

## Introducción

Hola a todos, Mi nombre es Pedro García. y en esta noche les estaré hablando acerca de las funciones diarias del desarrollador. Cuando pensamos en desarrollo de software, a menudo imaginamos líneas de código interminable en una pantalla negra. Pero, ¿qué significa eso en el día a día?

Mi objetivo de hoy no es hablarles de sintaxis, sino de operaciones críticas. Vamos a desde que maquetamos una idea visual, pasando por la lógica que hace que el negocio funcione, hasta la realidad a la que todos nosostros nos vamos a ver expuestos, el mantenimiento cuando las cosas se rompen.

## Implementación de UI/UX

A día de hoy mucha gente cree que esto es solo 'hacer que se vea bonito', pero este trabajo va más allá de eso. Nosotros tomamos esos diseños perfectos que vienen de Figma o Adobe. XD —que son imágenes estáticas— y los convertimos en algo vivo.

El reto aquí no es la paleta de colores, es el rendimiento. a nadie le sirve un diseño precioso si tarda 30 segundos en cargar. por lo que la fase del Critical Rendering Path (optimizar cada milisegundo para que la página vuele.) es sumamente crucial.

Estamos hablando de lograr animaciones fluidas a 60 cuadros por segundo para guiar la vista del usuario, y sobre todo, la adaptabilidad. Tenemos que asegurar que esa interfaz que se ve genial en un monitor ultrawide de 34 pulgadas, no se rompa ni pierda funcionalidad cuando alguien la abra en un móvil de 5 pulgadas en el autobús. Eso es verdadera experiencia de usuario."

## Lógica de Negocio

"Ahora, vamos a lo que no se ve, pero que es mucho más vital: la Lógica de Negocio. Este es el cerebro de la aplicación.

Piénsenlo así: el botón de 'Comprar' es solo un dibujo en la pantalla (eso es UI), pero lo que sucede después del clic es lógica de negocio.

(Enumera con los dedos para dar peso a la complejidad) En ese instante, en cuestión de milisegundos, el código tiene que ir a la base de datos y verificar por ejemplo si hay inventario, calcular los impuestos, hablar con el banco para procesar pagos, etc...

Aquí es donde aplicamos un pensamiento algorítmico riguroso. Necesitamos que las transacciones sean atómicas: o se completan todos esos pasos perfectamente, o no se hace ninguno. No podemos cobrarle al cliente y no enviarle el producto. Aquí es donde protegemos la integridad del negocio."

## Mantenimiento y Debugging

Finalmente, llegamos a la realidad de todo desarrollador de software: el Mantenimiento y Debugging.

Lanzar la aplicación es solo el primer día de su vida. El verdadero trabajo es mantenerla sana. Cuando ocurre un error en producción —y créanme, ocurrirán— nos convertiremos en detectives digitales.

No debemos adivinar qué pasó; debemos de usar herramientas de rastreo como Sentry o Datadog. Analizamos el stack trace, miramos el tráfico de red y tratamos de reconstruir la escena del crimen para entender por qué falló.

Pero mantener no es solo arreglar errores. tambien debemos estar al pendiente de actualizar librerías para evitar brechas de seguridad, reescribir código para que sea más legible y optimizar consultas a la base de datos que, con el tiempo y miles de usuarios, se van volviendo cada vez más lentas. en esencia. un ciclo de mejora continua.\*

Cierre (Mirada a la audiencia, tono conclusivo) \*Como ven, ser desarrollador no es solo escribir código. Es ser diseñador de experiencias, arquitecto de reglas de negocio y, finalmente, guardianes de la estabilidad del sistema.

Muchas gracias."
