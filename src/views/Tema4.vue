<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procedimientos para la manipulación correcta de alimentos
    
    img(src="@/assets/curso/tema4/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-up")
        p.banner-text Este capítulo final integra los conocimientos anteriores en la práctica diaria del taller de repostería, centrándose en la preparación previa a la elaboración.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Procedimientos para el manejo higiénico de los alimentos
        
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-right") Mise en place es un término francés que significa poner en su lugar o preparar. En el ámbito culinario, y especialmente en repostería, es una filosofía de trabajo que implica tener todos los ingredientes, herramientas y equipos preparados, medidos y organizados antes de comenzar la producción.
            p.mb-0 Dentro de los beneficios del mise en place en repostería tenemos:
    
    
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/3.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Eficiencia y ahorro de tiempo</b>: al tener todo listo, el flujo de trabajo es continuo y sin interrupciones para buscar un ingrediente o una herramienta.
          .col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-down")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/4.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Prevención de errores</b>: permite verificar que se tienen todas las materias primas antes de empezar y evita olvidar un ingrediente clave.
          .col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/5.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Reducción del estrés</b>: un espacio de trabajo ordenado transmite calma y permite concentrarse en la técnica.
          .col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/6.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Facilita la limpieza</b>: el orden inicial y el hábito de limpiar mientras se trabaja (clean as you go) evita la acumulación de desorden al final.
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-8(data-aos="fade-up")
            p.bg-color-3.p-4.tarjeta.text-center Pasos para una correcta Mise en place
    
    .bg-full-width.bg-fondo-3.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-2
            SlyderF(columnas="col-12 col-lg-6").p-4
              .bg-color-sintesis.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema4/8.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Leer la receta o la orden de producción completamente.
              .bg-color-sintesis.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema4/9.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Revisar el inventario: verificar que se dispone de todas las materias primas en cantidad y calidad suficiente.
              .bg-color-sintesis.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema4/10.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Reunir todos los utensilios y equipos necesarios.
              .bg-color-sintesis.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema4/11.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Pesar y medir cada ingrediente en recipientes individuales (bains-marie o bowls pequeños), siguiendo el orden de la receta.
              .bg-color-sintesis.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema4/12.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Realizar las preparaciones previas: tamizar harinas, picar chocolate, tostar frutos secos, pre-calentar el horno, engrasar moldes.
              .bg-color-sintesis.tarjeta.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema4/13.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                p.text-center Organizar el espacio de trabajo: colocar los ingredientes y herramientas de manera lógica para que el proceso fluya.
          .col-md-8.col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema4/7.png', alt='Descripción de la imagen')
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Criterios para la recepción y almacenamiento seguro de materias primas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .bg-color-1.tarjeta.px-5.py-4
          p.mb-0 Un diagrama de proceso (o flujograma) es una representación gráfica y secuencial de las etapas de un proceso. En la industria alimentaria, es una herramienta clave para estandarizar procedimientos, identificar puntos críticos de control y capacitar al personal. El aprendiz debe ser capaz de interpretarlo para saber qué acciones realizar y en qué orden.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Simbología básica en diagramas de flujo (Norma ANSI/ASME)

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Óvalo (inicio / fin)" :icono="require('@/assets/componentes/15.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Óvalo (inicio / fin)
            p Indica el comienzo o la terminación del proceso.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/15.png', alt='')
      .py-4.py-md-5(titulo="Rectángulo (operación)" :icono="require('@/assets/componentes/16.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Rectángulo (operación)
            p Representa una acción o conjunto de acciones que transforman el producto 
            p <b>Ejemplo</b>: pesar la harina, batir mantequilla y azúcar.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/16.png', alt='')
      .py-4.py-md-5(titulo="Rombo (decisión / punto de control)" :icono="require('@/assets/componentes/17.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Rombo (decisión / punto de control)
            p Indica un punto donde se debe tomar una decisión, generalmente sobre la calidad o condición del insumo. 
            p <b>Ejemplo</b>: ¿La temperatura de la leche es la adecuada? SI / NO.

          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/17.png', alt='')
      .py-4.py-md-5(titulo="Flechas" :icono="require('@/assets/componentes/18.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Flechas
            p Indican la dirección y el flujo del proceso.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema4/18.png', alt='')
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Diagrama de proceso para el alistamiento de insumos, para para un bizcocho básico.
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema4/19.svg", alt="La figura muestra la estructura de un diagrama de proceso, para el alistamiento de los insumos requeridos, para la elaboración de un bizcocho básico.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema4/19-1.svg", alt="La figura muestra la estructura de un diagrama de proceso, para el alistamiento de los insumos requeridos, para la elaboración de un bizcocho básico.")
        figcaption <strong>Fuente:</strong> SENA, 2026.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Medidas para prevenir la contaminación cruzada durante la preparación
    
    img(src="@/assets/curso/tema4/20.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Durante la elaboración de productos de repostería es fundamental aplicar medidas que permitan prevenir la contaminación cruzada, es decir, el contacto de los alimentos con microorganismos o sustancias que puedan afectar su calidad e inocuidad. Esta situación puede ocurrir cuando los alimentos entran en contacto con superficies, utensilios, equipos o manos que no se encuentran adecuadamente limpios. 
        br
        p.banner-text La precisión es el alma de la repostería. Dominar las técnicas de pesaje y medición es fundamental, entre las diferentes estrategias tenemos: 

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Pesaje y medición
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/21.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Pesar siempre que sea posible</b>: para ingredientes secos (harina, azúcar) y sólidos (mantequilla, chocolate, frutas), el uso de la báscula digital es el método más preciso. Las medidas en volumen (tazas) son más inexactas debido a la compactación del ingrediente.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-down")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/22.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Medir líquidos</b>: utilizar jarras medidoras de vidrio o plástico transparente con la escala bien definida. Colocar la jarra sobre una superficie plana y leer la medida a la altura de los ojos para evitar errores de paralaje.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema4/23.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Medir pequeñas cantidades</b>: usar cucharas medidoras estandarizadas (1 cucharada = 15 ml, 1 cucharadita = 5 ml). Para ingredientes como polvo de hornear o especias, nivelar la cuchara con el dorso de un cuchillo para obtener la medida exacta.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Técnicas de pre-preparación
        
        .row.justify-content-center.mb-5
          .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/24.svg' alt='')
              .tarjeta.bg-color-sintesis.box-shadow
                .p-4.text-center
                  h5.bg-color-5.p-2.d-inline-block.mb-3 Tamizar: 
                p Pasar la harina, el polvo de hornear, el cacao en polvo y el azúcar glass por un colador o tamiz. Esto:
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    | Elimina grumos e impurezas.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2
                    | Oxigena la mezcla, lo que contribuye a una textura más ligera y esponjosa en bizcochos.
                
          .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/25.svg' alt='')
              .tarjeta.bg-color-sintesis.box-shadow
                .p-4.text-center
                  h5.bg-color-5.p-2.d-inline-block.mb-3 Temperar: 
                p.mb-0 Llevar ingredientes fríos (huevos, mantequilla, leche) a temperatura ambiente antes de usarlos. Esto es crucial para lograr emulsiones estables (ej. crema de mantequilla, masas batidas donde la mantequilla y el azúcar deben cremarse adecuadamente). La mantequilla demasiado fría no se bate bien; la demasiado caliente se derrite y no atrapa aire.
          .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/26.svg' alt='')
              .tarjeta.bg-color-sintesis.box-shadow
                .p-4.text-center
                  h5.bg-color-5.p-2.d-inline-block.mb-3 Picar y rallar: 
                p.mb-0 Preparar ingredientes como chocolate, frutos secos, frutas o queso en el tamaño deseado (chips, trozos gruesos, ralladura fina). La ralladura de cítricos, por ejemplo, debe ser fina y sin la parte blanca (albura) que amarga.
          .col-md-6.col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
            .tarjeta-avatar
              img(src='@/assets/curso/tema4/27.svg' alt='')
              .tarjeta.bg-color-sintesis.box-shadow
                .p-4.text-center
                  h5.bg-color-5.p-2.d-inline-block.mb-3 Derretir: 
                p.mb-0 Fundir ingredientes como chocolate o mantequilla. El chocolate debe derretirse a baño María o en microondas con sumo cuidado (en intervalos cortos) para evitar que se queme o se corte.



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
