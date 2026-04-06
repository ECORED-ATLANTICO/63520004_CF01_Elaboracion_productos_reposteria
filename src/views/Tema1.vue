<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades y normativa en la elaboración de repostería

    img(src="@/assets/curso/tema1/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-10(data-aos="fade-up")
        p.banner-text En esta parte se sientan las bases conceptuales y legales para el ejercicio profesional de la repostería. No se concibe un producto de calidad sin un profundo respeto por las normas de higiene, seguridad e inocuidad. El aprendiz comprenderá que su rol va más allá de la creación; implica ser un garante de la salud pública y un custodio de su propio bienestar en el entorno laboral.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Importancia de las Buenas Prácticas de Manufactura (BPM) en el taller de repostería
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-4.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p Las Buenas Prácticas de Manufactura (BPM) constituyen el conjunto de principios y procedimientos fundamentales que se deben aplicar en la manipulación de alimentos para garantizar que estos se produzcan en condiciones sanitarias adecuadas y, por ende, sean seguros para el consumo humano. En el contexto de un taller de repostería, las BPM son la primera barrera contra la contaminación física (ej. cabellos, fragmentos de metal), química (ej. residuos de desinfectantes) y, la más común, biológica (ej. bacterias, hongos).
            br
            br
            p.mb-0 La implementación rigurosa de las BPM impacta directamente en:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-sintesis.box-shadow.h-100.p-4
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema1/3.svg', alt='Texto que describa la imagen')
        
              h3.bg-color-5.p-2.mb-4.text-center Inocuidad del producto
              p.text-center Al prevenir la proliferación de microorganismos patógenos como Salmonella o E. coli, que pueden encontrar en cremas, huevos o leche un medio propicio para su desarrollo.
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-sintesis.box-shadow.h-100.p-4
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema1/4.svg', alt='Texto que describa la imagen')
        
              h3.bg-color-5.p-2.mb-4.text-center Calidad consistente
              p.text-center U entorno de trabajo ordenado y limpio permite seguir las recetas al pie de la letra, reduciendo la variabilidad y asegurando un producto final uniforme.
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-sintesis.box-shadow.h-100.p-4
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema1/5.svg', alt='Texto que describa la imagen')
        
              h3.bg-color-5.p-2.mb-4.text-center Imagen y confianza
              p.text-center Un taller que cumple con las BPM proyecta profesionalismo y genera confianza en los clientes y autoridades sanitarias.
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-sintesis.box-shadow.h-100.p-4
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema1/6.svg', alt='Texto que describa la imagen')
        
              h3.bg-color-5.p-2.mb-4.text-center Reducción de pérdidas
              p.text-center  Al manipular y almacenar correctamente los insumos, se minimiza el deterioro y el desperdicio de alimentos.

        
        p.bg-color-6.p-4.tarjeta.text-center Las BPM abarcan aspectos como la higiene personal (uniforme limpio, manos lavadas, uñas cortas, ausencia de joyas), la limpieza y desinfección de superficies y equipos, el manejo adecuado de residuos, el control de plagas y la correcta recepción y almacenamiento de materias primas.
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-3")
          div(titulo="Instalaciones internas y mobiliario")
            .row.justify-content-center.p-3
              .col-xl-8
                p.ms-5 Se refiere a las condiciones estructurales de la planta procesadora, incluyendo paredes, pisos, techos, puertas, ventanas, iluminación, ventilación y áreas de almacenamiento. Estas deben estar construidas con materiales lisos, impermeables, no tóxicos y de fácil limpieza, que permitan mantener condiciones higiénicas y prevenir la contaminación cruzada, su diseño debe facilitar el flujo adecuado del proceso productivo, desde la recepción de materias primas hasta el producto final, garantizando inocuidad.
              .col-xl-4
                figure
                  img(src="@/assets/curso/tema1/8.png", alt="")
          div(titulo="Equipos, recipientes y utensilios")
            .row.justify-content-center.p-3
              .col-xl-8
                p.ms-5 Incluye todos los elementos que entran en contacto directo con los alimentos durante su procesamiento. Deben estar fabricados con materiales resistentes, lisos, no absorbentes y no reactivos, que permitan su fácil limpieza y desinfección..
              .col-xl-4
                figure
                  img(src="@/assets/curso/tema1/9.png", alt="")
          div(titulo="Instalaciones sanitarias")
            .row.justify-content-center.p-3
              .col-xl-8
                p.ms-5 Comprende el sistema de abastecimiento de agua potable, tuberías, drenajes, manejo de desechos sólidos y líquidos, servicios sanitarios, estaciones de lavado de manos y pediluvios, estas instalaciones deben garantizar condiciones higiénicas adecuadas, prevenir la contaminación del alimento y asegurar el correcto manejo de residuos dentro de la planta.
              .col-xl-4
                figure
                  img(src="@/assets/curso/tema1/9-1.png", alt="")
          div(titulo="Control de plagas y residuos")
            .row.justify-content-center.p-3
              .col-xl-8
                p.ms-5 Consiste en la prevención, monitoreo y erradicación de insectos, roedores y otros animales que puedan contaminar los alimentos. Incluye barreras físicas, trampas, inspecciones periódicas y programas documentados de control, este pilar protege la planta de riesgos biológicos externos que afectan la inocuidad.
              .col-xl-4
                figure
                  img(src="@/assets/curso/tema1/10.png", alt="")
          div(titulo="Equipos y utensilios")
            .row.justify-content-center.p-3
              .col-xl-8
                p.ms-5 Regula la limpieza, desinfección y mantenimiento de utensilios, tablas de corte, maquinaria y superficies de contacto con alimentos, asegurando que sean seguros y fáciles de higienizar.
              .col-xl-4
                figure
                  img(src= "@/assets/curso/tema1/11.png", alt="")
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Marco normativo: higiene, seguridad e inocuidad alimentaria
    
    p.mb-5 En Colombia, la normativa sanitaria para la elaboración de alimentos está principalmente regida por las resoluciones y decretos del Ministerio de Salud y Protección Social. Para el sector de la repostería, es fundamental conocer y aplicar:

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-7
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Ley 9 de 1979 (Código Sanitario Nacional)") Establece las normas generales para la protección del medio ambiente, el suministro de agua, la salud ocupacional y la higiene en la manipulación de alimentos.
          
          div(numero="2" titulo="Decreto 3075 de 1997") 
            p Reglamenta parcialmente la Ley 9 de 1979 y dicta las disposiciones sobre la manipulación de alimentos. Es el pilar fundamental que define las condiciones básicas de las fábricas de alimentos, incluyendo:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                | Instalaciones físicas (pisos, paredes, techos, iluminación, ventilación).
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                | Servicios sanitarios y vestieres.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                | Abastecimiento de agua potable.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                | Manejo y disposición de residuos sólidos y líquidos.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                | Limpieza y desinfección.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2.bg-color-7
                | Control de plagas.
          
          p(numero="3" titulo="Resolución 2674 de 2013") Actualmente, es la norma sanitaria vigente que establece los requisitos sanitarios que deben cumplir las personas que elaboran, distribuyen y comercializan alimentos. Deroga el Capítulo I del Título II del Decreto 3075 de 1997 y refuerza la obligatoriedad de implementar un sistema de aseguramiento de la calidad, basado en los principios de BPM..
          
          p(numero="4" titulo="Resolución 2827 de 2006") Establece los requisitos para la certificación en BPM para fabricantes de alimentos.  
    
    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Además de la normativa nacional, se deben considerar las normas técnicas como la NTC (Norma Técnica Colombiana) 5842 (Buenas prácticas de higiene para el control de Listeria monocytogenes en alimentos) y la NTC-ISO 22000 (Sistema de gestión de la inocuidad de los alimentos), que ofrecen estándares internacionales de gestión de calidad.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 El perfil del repostero y la seguridad en el área de trabajo
    
    img(src="@/assets/curso/tema1/13.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El repostero no es solo un cocinero de postres; es un profesional que conjuga creatividad, técnica y responsabilidad. Su perfil debe estar alineado con las exigencias de la industria. Las cualidades fundamentales incluyen:
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/14.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 Responsabilidad y compromiso con la higiene: entiende que su labor impacta directamente en la salud de los consumidores.
          .col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-down")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/15.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 Precisión y atención al detalle: en repostería, las proporciones son leyes. Una mínima variación puede alterar el resultado final.
          .col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/16.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 Organización y planificación: capaz de gestionar su tiempo y recursos eficientemente (mise en place).
          .col-lg-3.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-down")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/17.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 Trabajo en equipo: la cocina es un espacio colaborativo donde la comunicación es vital.
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-8(data-aos="fade-up")
            p.bg-color-3.p-4.tarjeta.text-center En cuanto a la seguridad en el área de trabajo, se deben prevenir los riesgos inherentes a la actividad:

        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Físico" :icono="require('@/assets/componentes/2.svg')")
            .row.justify-content-center.align-items-center.p-4.p-lg-0
              .col-lg-8.mb-4.mb-lg-0
                h4 Físico
                p Pisos resbaladizos (grasa, agua), caídas de objetos, cortes con cuchillos o bordes de latas.
                p <b>Medida preventiva</b>: uso de calzado antideslizante, mantener pisos secos y libres de obstáculos, uso correcto de guantes de malla o técnicas seguras de corte.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/18.png', alt='')
          .py-4.py-md-5(titulo="Térmico" :icono="require('@/assets/componentes/3.svg')")
            .row.justify-content-center.align-items-center.p-4.p-lg-0
              .col-lg-8.mb-4.mb-lg-0
                h4 Térmico
                p Quemaduras por hornos, estufas, vapor, azúcar caliente o aceite.
                p <b>Medida preventiva</b>: uso de guantes térmicos (manoplas), delantales, mangas largas y extremar la precaución al manipular líquidos calientes
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/19.png', alt='')
          .py-4.py-md-5(titulo="Eléctrico" :icono="require('@/assets/componentes/4.svg')")
            .row.justify-content-center.align-items-center.p-4.p-lg-0
              .col-lg-8.mb-4.mb-lg-0
                h4 Eléctrico
                p Contacto con cables en mal estado, enchufes cerca de fuentes de agua.
                p <b>Medida preventiva</b>: revisión periódica de instalaciones, no sobrecargar tomas, mantener los equipos alejados del agua.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/20.png', alt='')
          .py-4.py-md-5(titulo="Ergonómico" :icono="require('@/assets/componentes/5.svg')")
            .row.justify-content-center.align-items-center.p-4.p-lg-0
              .col-lg-8.mb-4.mb-lg-0
                h4 Ergonómico
                p Posturas forzadas al amasar, movimientos repetitivos al decorar o batir.
                p <b>Medida preventiva</b>: pausas activas, usar superficies de trabajo a la altura adecuada, alternar tareas.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/21.png', alt='')
          .py-4.py-md-5(titulo="Químico" :icono="require('@/assets/componentes/6.svg')")
            .row.justify-content-center.align-items-center.p-4.p-lg-0
              .col-lg-8.mb-4.mb-lg-0
                h4 Químico
                p Contacto con productos de limpieza altamente concentrados.
                p <b>Medida preventiva</b>: almacenar los productos de limpieza en un lugar separado y claramente etiquetado, usar guantes de vinilo o nitrilo para su manipulación.
              .col-lg-3
                figure
                  img(src='@/assets/curso/tema1/22.png', alt='')
    
    
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
