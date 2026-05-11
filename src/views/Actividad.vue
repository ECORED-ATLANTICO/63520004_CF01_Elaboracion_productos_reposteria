<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Reconociendo mi taller ideal: diagnóstico de BPM, equipos y materias primas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales sobre normativa, identificación de equipos y selección de materias primas en un entorno simulado de producción de repostería, mediante el análisis crítico de un caso y la aplicación de cuestionarios de verificación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'La Ley 9 de 1979 es conocida como el Código Sanitario Nacional y establece normas generales para la higiene en la manipulación de alimentos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre las normas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La harina de fuerza, alta en gluten, es la más recomendada para la elaboración de bizcochos esponjosos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Las grasas sólidas vegetales, también conocidas como manteca, se utilizan en repostería para aportar una textura crujiente a algunas masas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. La manteca también es utilizada en actividades de repostería, para aportarle textura a algunas masas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El bicarbonato de sodio necesita de un ácido (como jugo de limón, yogur o cacao) para activarse y producir gas. El polvo de hornear es el que contiene su propio ácido y se activa con líquido y calor.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente el bicarbonato de sodio necesita de un ácido (como jugo de limón, yogur o cacao) para activarse y producir gas. El polvo de hornear es el que contiene su propio ácido y se activa con líquido y calor.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Los abatidores de temperatura son equipos de refrigeración que enfrían los alimentos lentamente para preservar su sabor.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto, la función del abatidor es enfriar rápidamente los alimentos calientes (de 65°C a 10°C en menos de 90 minutos) para evitar la proliferación bacteriana, no para hacerlo lentamente.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La Resolución 2674 de 2013 es la norma sanitaria vigente en Colombia que establece los requisitos para la elaboración de alimentos y refuerza la obligatoriedad de las Buenas Prácticas de Manufactura (BPM).',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien, tal como se cita en el documento, la Resolución 2674 de 2013 es la norma vigente que establece los requisitos sanitarios y refuerza la implementación de las BPM.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Según el documento, la "<em>Mise en place</em>" se refiere únicamente a la limpieza del área de trabajo después de terminar la producción.',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto la "Mise en place" es una filosofía de trabajo que significa "poner en su lugar" e implica preparar y organizar todos los ingredientes y herramientas antes de comenzar a cocinar.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El riesgo ergonómico en una cocina puede prevenirse con el uso de calzado antideslizante para evitar caídas.',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien el calzado antideslizante previene riesgos físicos (caídas). Los riesgos ergonómicos, como posturas forzadas o movimientos repetitivos, se previenen con pausas activas y superficies de trabajo a la altura adecuada.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La levadura fresca y la levadura seca son ejemplos de leudantes biológicos.',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Bien ambos tipos de levadura son hongos vivos que fermentan los azúcares para producir gas, por lo que se clasifican como agentes leudantes biológicos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La contaminación cruzada se refiere a la mezcla accidental de dos ingredientes dulces, como el azúcar y la miel.',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto la contaminación cruzada es la transferencia de microorganismos patógenos (bacterias, virus) de un alimento contaminado (generalmente crudo) a otro que no lo está.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'La reacción de Maillard es la responsable de que el azúcar <em>glass</em> se disuelva fácilmente en los glaseados.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto la reacción de Maillard es una reacción química entre aminoácidos y azúcares que ocurre con el calor, responsable del color dorado y el sabor tostado en productos horneados. La disolución del azúcar glass es una propiedad física.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Las boquillas o duyas con forma de pétalo se utilizan para crear decoraciones que simulan flores.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'En la clasificación de boquillas, el documento menciona las "especiales: de pétalo para flores".',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Los hornos de convección utilizan un ventilador para distribuir el calor de manera uniforme, lo que los hace ideales para productos como los bizcochos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Bien se describe que el horno de convección, al usar un ventilador, distribuye el calor uniformemente y es ideal para masas batidas como bizcochos y ponqués.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El método PEPS (primero en entrar, primero en salir) es una técnica de decoración para garantizar la uniformidad en los pasteles.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'PEPS es un método de rotación de inventarios que consiste en utilizar primero los productos que ingresaron primero (con fecha de vencimiento más cercana) para evitar su deterioro.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'La mantequilla utilizada en repostería de calidad debe tener un contenido de grasa mínimo del 82 % y, preferiblemente, debe ser con sal para potenciar los sabores dulces.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien si bien es cierto que la mantequilla de calidad debe tener un mínimo de 82% de grasa, el documento especifica que debe ser mantequilla sin sal (a menos que la receta indique lo contrario), no con sal.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El chocolate blanco contiene pasta de cacao, manteca de cacao, leche y azúcar.',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El chocolate blanco contiene manteca de cacao, leche y azúcar, pero no contiene pasta de cacao, lo que lo diferencia de los otros tipos de chocolate.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'El proceso de tamizar la harina no solo elimina grumos, sino que también la oxigena, contribuyendo a una textura más ligera y esponjosa en los bizcochos.',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El documento explica que tamizar cumple dos funciones importantes: eliminar grumos e impurezas, y oxigenar la mezcla, lo que ayuda a lograr una textura más ligera y esponjosa.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'El término "Punto de humeo" se refiere a la temperatura a la cual una preparación, como un merengue, alcanza su punto máximo de esponjosidad.',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto el glosario define el "Punto de humeo" como la temperatura a la cual una grasa o aceite comienza a descomponerse y a desprender humo visible y sustancias tóxicas. No tiene relación con la esponjosidad de un merengue.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Las mangas pasteleras de tela, elaboradas en lona o plástico, son siempre preferibles a las desechables por ser más higiénicas.',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Perfecto. El documento no establece una preferencia absoluta. Menciona que existen mangas desechables o de tela (lona o plástico), pero no indica que unas sean "siempre preferibles" por razones de higiene. De hecho, las desechables pueden ser más higiénicas en ciertos contextos al no requerir lavado y reutilización.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Los POES (Procedimientos Operativos Estandarizados de Saneamiento) son protocolos escritos que describen cómo realizar las tareas de limpieza y desinfección.',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El glosario define claramente los POES como "protocolos escritos que describen cómo llevar a cabo las tareas de limpieza y desinfección."',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
