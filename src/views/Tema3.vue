<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Requisitos de higiene y salud del personal manipulador
    
    .bloque-texto-g.color-secundario.bg-color-9.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la elaboración de productos de repostería es fundamental que el personal manipulador de alimentos cumpla con adecuados requisitos de higiene y salud, con el fin de garantizar la inocuidad y calidad de las preparaciones. Mantener hábitos como el lavado correcto de manos, el uso de uniforme limpio, la adecuada presentación personal y el cuidado en la manipulación de los alimentos contribuye a prevenir la contaminación y a asegurar procesos de producción más seguros.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Caracterización de ingredientes base: harinas, azúcares, grasas y leudantes
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-9.order-1
        p.mb-0(data-aos="fade-right") Cada uno de estos ingredientes cumple una función específica en las preparaciones, influyendo en aspectos como la textura, el sabor, el volumen y la consistencia de los productos finales. Comprender sus propiedades y su correcta utilización permite obtener mejores resultados en la elaboración de diferentes productos de repostería.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Harinas
    
    .bg-color-4.tarjeta.p-4.mb-5
      p.mb-0 Las harinas son uno de los ingredientes fundamentales en la repostería, ya que constituyen la base de muchas preparaciones como tortas, galletas, panes y otros productos horneados. Se obtienen a partir de la molienda de diferentes cereales o semillas y su función principal es aportar estructura y consistencia a las mezclas durante el proceso de elaboración. Entre las más comunes tenemos:
    
    .bg-fondo-slider.bg-full-width.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/3.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Harina de trigo
              p.mb-0 La más utilizada. Su calidad depende del contenido y calidad de las proteínas (gluten). Este ingrediente contiene proteínas que, al mezclarse con líquidos y someterse al amasado o batido, forman el gluten, una red que ayuda a retener gases durante la cocción. Gracias a esta propiedad, las preparaciones logran volumen, textura y estabilidad, aspectos fundamentales para obtener productos de repostería de buena calidad.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/4.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Harina de fuerza (alta en gluten)
              p.mb-0 Ideal para masas que requieren mucha estructura, como panes, hojaldre y masas fermentadas. Se caracteriza por tener un mayor contenido de proteínas, lo que favorece la formación de gluten durante la preparación de las masas. Esta característica permite obtener masas más elásticas, resistentes y con mayor capacidad para retener los gases producidos durante la fermentación o cocción.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/5.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Harina floja (baja en gluten)
              p.mb-0 Es un tipo de harina de trigo que se caracteriza por tener un menor contenido de proteínas y, por lo tanto, formar menos gluten durante la preparación de las masas. Perfecta para masas batidas, bizcochos, galletas y pasteles, donde se busca una textura tierna y esponjosa.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/6.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Harina todo uso
              p.mb-0 La harina de todo uso es un tipo de harina de trigo versátil que se caracteriza por tener un contenido de proteínas intermedio, lo que permite utilizarla en una amplia variedad de preparaciones. Gracias a este equilibrio, puede emplearse tanto en productos de repostería como en algunas elaboraciones de panadería.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/7.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Otras harinas
              p Estas harinas pueden variar en sabor, textura y valor nutricional, lo que permite diversificar las recetas y adaptarlas a distintas necesidades o preferencias alimentarias.
              p.mb-0 Entre las más utilizadas se encuentran la harina de maíz, la harina de arroz, la harina de avena y la harina de almendra. Cada una aporta propiedades particulares a las masas y mezclas, por lo que su uso adecuado permite obtener productos con sabores, texturas y características diferentes dentro de la repostería.

    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Azúcares

    p.mb-5 Los azúcares son ingredientes fundamentales en la repostería, ya que aportan dulzor, color y textura a las diferentes preparaciones. Además de endulzar, cumplen funciones importantes durante el proceso de elaboración, como ayudar a mejorar la consistencia de las mezclas, favorecer el dorado de los productos durante la cocción y contribuir a la conservación de algunos alimentos. Se utilizan diferentes tipos de azúcares, cada uno con características particulares que influyen en el sabor y la textura del producto final. Conocer su uso adecuado permite lograr preparaciones más equilibradas y mejorar la calidad de tortas, galletas, cremas y otros productos dulces.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Azúcar blanco (sacarosa)")
            h4 Azúcar blanco (sacarosa)
            p.mb-0 Se obtiene principalmente de la caña de azúcar mediante procesos de refinamiento que permiten obtener cristales blancos y de sabor dulce.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Azúcar granulada")
            h4 Azúcar granulada
            p.mb-0 Es un tipo de azúcar refinada que se presenta en pequeños cristales secos y sueltos, lo que facilita su manejo y disolución en diferentes preparaciones. Es uno de los tipos de azúcar más comunes en la cocina y la repostería debido a su versatilidad y facilidad de uso.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Azúcar glass (impalpable)")
            h4 Azúcar glass (impalpable)
            p También conocido como azúcar pulverizada o azúcar en polvo, es un tipo de azúcar que ha sido molido hasta obtener una textura muy fina. 
            p.mb-0 En repostería, se utiliza principalmente para preparar glaseados, cremas, coberturas y para decorar productos como tortas, galletas y postres.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Azúcares morenos ")
            h4 Azúcares morenos 
            p.mb-0 Es un tipo de azúcar que conserva parte de la melaza natural de la caña de azúcar, lo que le da su color oscuro, un sabor más intenso y una textura ligeramente húmeda. Estas características la diferencian de la azúcar blanca refinad, Ideales para brownies, galletas de chispas de chocolate y pasteles de especias.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Miel y otros edulcorantes")
            h4 Miel y otros edulcorantes
            p La miel es un producto natural elaborado por las abejas a partir del néctar de las flores, y se caracteriza por su sabor particular, su textura líquida y su capacidad para aportar humedad a las mezclas.
            p.mb-0 Además de la miel, existen otros edulcorantes que pueden emplearse en algunas recetas de repostería, dependiendo del tipo de preparación y del resultado que se desea obtener.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Grasas
    
    .bg-color-4.mb-5
      .row.align-items-center
        .col-lg-auto.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/9.png", style="max-width: 167px").mx-auto
        .col-lg.order-1.mb-3.mb-lg-0
          p.mb-0.p-4 Las grasas son ingredientes importantes en la repostería, ya que contribuyen a mejorar la textura, el sabor y la suavidad de las preparaciones. Su presencia en las recetas ayuda a aportar humedad a las masas, facilita el mezclado de los ingredientes y permite obtener productos más tiernos y agradables al paladar.


</template>

<script>
export default {
  name: 'Tema3',
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
