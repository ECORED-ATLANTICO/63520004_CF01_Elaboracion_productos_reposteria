<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img(src="@/assets/curso/intro/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La repostería, también conocida como pastelería, es un arte culinario que requiere de precisión, técnica y un profundo conocimiento de los elementos que intervienen en el proceso productivo. La calidad del producto final no es fruto de la casualidad, sino el resultado de una meticulosa planificación y ejecución que comienza mucho antes de encender un horno o batir una mezcla. Este componente formativo, titulado Herramientas y materias primas para la producción de productos de repostería, se erige como el cimiento fundamental sobre el cual se construirá la pericia técnica del futuro tecnólogo en gastronomía.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-3.tarjeta
          p.mb-0 En el marco del programa de formación Elaboración de productos de repostería este documento guiará al aprendiz en la exploración de dos pilares esenciales: el conocimiento y manejo adecuado de la maquinaria y herramientas, y la correcta identificación, selección y alistamiento de las materias primas e insumos. Se abordará la importancia de las Buenas Prácticas de Manufactura (BPM) como eje transversal que garantiza la inocuidad y la calidad, y nos sumergiremos en la normativa vigente que rige la manipulación de alimentos en Colombia.
        p A través de un recorrido estructurado por cuatro capítulos, el aprendiz no solo adquirirá la capacidad de reconocer los equipos de cocción, batido y refrigeración, o de distinguir entre los diferentes tipos de harinas y grasas, sino que también desarrollará la habilidad crítica de interpretar manuales de procedimiento y diagramas de flujo. El objetivo final es incorporar el concepto de <em>mise en place</em> como una filosofía de trabajo, donde el orden, la limpieza y la preparación anticipada se convierten en los mejores aliados para alcanzar la excelencia en la elaboración de productos de repostería, cumpliendo con los estándares técnicos y las expectativas del cliente.
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OiopQy4KOh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Herramientas y materias primas para la producción de productos de repostería
   
</template>

<script>
export default {
  name: 'Introduccion',
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
