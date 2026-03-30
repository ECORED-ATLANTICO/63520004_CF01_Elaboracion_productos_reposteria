<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") A lo largo de este componente formativo, se ha realizado un recorrido exhaustivo por los cimientos del oficio de la repostería. Se inició comprendiendo el marco normativo y la filosofía de las BPM como garantes de la inocuidad y la calidad, destacando el perfil de responsabilidad que debe caracterizar al profesional repostero. Acto seguido, se profundizó en el conocimiento y manejo de la maquinaria y herramientas, desde los grandes equipos de cocción, batido y refrigeración hasta los más pequeños y especializados utensilios como boquillas y moldes, enfatizando la importancia de consultar los manuales de procedimiento y aplicar protocolos de mantenimiento y desinfección.
        p En un segundo gran bloque, centrado en las materias primas, se analizó la naturaleza y función de los ingredientes base (harinas, azúcares, grasas, leudantes) y los insumos complementarios (lácteos, chocolates, frutas), estableciendo criterios sensoriales y el uso de fichas técnicas para una selección acertada. Finalmente, se integró todo el conocimiento en la fase de alistamiento, adoptando el concepto de mise en place como metodología de trabajo, aprendiendo a interpretar diagramas de flujo para la organización de tareas y dominando las técnicas precisas de pesaje y pre-preparación de ingredientes.
        p En conclusión, este componente formativo ha sentado las bases para que el aprendiz comprenda que un producto de repostería exitoso no nace en el horno, sino en la meticulosa preparación de su entorno, sus herramientas y sus ingredientes. El dominio de estos elementos es el primer y más crucial paso para avanzar hacia las técnicas de elaboración más complejas, siempre bajo el paraguas de la calidad, la seguridad y la normativa vigente.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
