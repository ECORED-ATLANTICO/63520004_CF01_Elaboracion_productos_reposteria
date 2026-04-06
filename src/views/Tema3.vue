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
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
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
            .col-lg-8.mb-4.mb-lg-0.order-1
              h4 Harina de trigo
              p.mb-0 La más utilizada. Su calidad depende del contenido y calidad de las proteínas (gluten). Este ingrediente contiene proteínas que, al mezclarse con líquidos y someterse al amasado o batido, forman el gluten, una red que ayuda a retener gases durante la cocción. Gracias a esta propiedad, las preparaciones logran volumen, textura y estabilidad, aspectos fundamentales para obtener productos de repostería de buena calidad.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/4.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-lg-0.order-1
              h4 Harina de fuerza (alta en gluten)
              p.mb-0 Ideal para masas que requieren mucha estructura, como panes, hojaldre y masas fermentadas. Se caracteriza por tener un mayor contenido de proteínas, lo que favorece la formación de gluten durante la preparación de las masas. Esta característica permite obtener masas más elásticas, resistentes y con mayor capacidad para retener los gases producidos durante la fermentación o cocción.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/5.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-lg-0.order-1
              h4 Harina floja (baja en gluten)
              p.mb-0 Es un tipo de harina de trigo que se caracteriza por tener un menor contenido de proteínas y, por lo tanto, formar menos gluten durante la preparación de las masas. Perfecta para masas batidas, bizcochos, galletas y pasteles, donde se busca una textura tierna y esponjosa.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/6.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-lg-0.order-1
              h4 Harina todo uso
              p.mb-0 La harina de todo uso es un tipo de harina de trigo versátil que se caracteriza por tener un contenido de proteínas intermedio, lo que permite utilizarla en una amplia variedad de preparaciones. Gracias a este equilibrio, puede emplearse tanto en productos de repostería como en algunas elaboraciones de panadería.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/7.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-lg-0.order-1
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
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Mantequilla" :icono="require('@/assets/componentes/11.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Mantequilla
            p La grasa reina en la repostería de calidad. Aporta sabor, textura, ternura y ayuda al hojaldrado. Debe ser mantequilla sin sal (a menos que la receta indique lo contrario) y con un alto contenido de grasa (mínimo 82 %).
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/10.png', alt='')
      .py-4.py-md-5(titulo="Margarina" :icono="require('@/assets/componentes/12.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Margarina
            p Alternativa más económica, elaborada a partir de aceites vegetales. Puede tener un sabor y comportamiento diferente a la mantequilla. Existen margarinas especiales para hojaldre y para cremas.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/11.png', alt='')
      .py-4.py-md-5(titulo="Aceites vegetales" :icono="require('@/assets/componentes/13.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 (girasol, canola, maíz)
            p Son grasas líquidas de origen vegetal usados en bizcochos húmedos (como el de zanahoria o yogur) y masas fritas. No aportan sabor y mantienen los productos más húmedos por más tiempo.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/12.png', alt='')
      .py-4.py-md-5(titulo="Grasas sólidas vegetales (manteca)" :icono="require('@/assets/componentes/14.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Grasas sólidas vegetales (manteca)
            p Su origen es a partir de aceites vegetales que han sido procesados para adquirir una consistencia sólida, lo que facilita su incorporación en diferentes mezclas y masas. Se utilizan en repostería tradicional y en algunas masas para aportar textura crujiente.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/13.png', alt='')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Leudantes

    p.mb-5 Los leudantes son ingredientes utilizados en repostería para generar esponjosidad y volumen en las preparaciones. Su función principal es producir o liberar gases durante el proceso de mezcla o cocción, lo que permite que las masas se expandan y adquieran una textura más ligera y aireada.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Bicarbonato de sodio")
            h4 Bicarbonato de sodio
            p.mb-0 Utilizado en repostería para ayudar a que las masas se expandan y adquieran una textura más esponjosa. Necesita un ácido (jugo de limón, yogur, leche, cacao) para activarse.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Polvo de hornear ")
            h4 Polvo de hornear 
            p.mb-0 Contiene bicarbonato y un ácido en polvo (cremor tártaro) que se activa con el líquido y con el calor (doble acción), permitiendo que las preparaciones se expandan durante la cocción.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Levadura fresca (prensada)")
            h4 Levadura fresca (prensada)
            p.mb-0 Es un hongo vivo que fermenta los azúcares de la masa produciendo CO2. Se usa en panes, brioches, roscas
          .tarjeta.color-acento-botones--borde.p-4(titulo="Levadura seca (granulada)")
            h4 Levadura seca (granulada)
            p.mb-0 La misma levadura, pero deshidratada. Debe rehidratarse antes de usar (o mezclarse con la harina, según el tipo). Tiene mayor duración que la fresca.
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Clasificación de insumos complementarios: lácteos, chocolates, frutas y aditivos
    
    img(src="@/assets/curso/tema3/15.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text En la repostería, además de los ingredientes básicos como harinas, azúcares y grasas, existen insumos complementarios que aportan sabor, aroma, color, textura y valor nutricional a las preparaciones. Estos ingredientes permiten enriquecer las recetas y ampliar la variedad de productos que se pueden elaborar, contribuyendo a mejorar la calidad y presentación de los postres. Estos insumos enriquecen las preparaciones, aportando sabor, color, textura y valor nutricional.
    
    .bg-fondo-slider.bg-full-width.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/16.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Lácteos
              p <b>Leche</b>: entera, semidesnatada o desnatada. La grasa de la leche entera aporta sabor y terneza. Se puede usar en polvo (rehidratada) para mayor duración.
              p <b>Crema de leche (o nata)</b>: fundamental para ganaches, mousses, cremas chantilly y salsas. Según su contenido de grasa (35-40 %) para montar), puede batirse para aumentar su volumen.
              p <b>Huevos</b>: un ingrediente multifuncional. Las claras aportan estructura y esponjosidad (al batirlas). Las yemas aportan grasa, color, sabor y actúan como emulsionantes.
              p <b>Quesos</b>: crema (tipo Philadelphia) para cheesecakes, mascarpone para tiramisú, ricotta para tartas y pastas.

          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/17.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Chocolate
              p <b>Chocolate blanco</b>: contiene manteca de cacao, leche y azúcar, pero no pasta de cacao. Es muy dulce y delicado.

              p <b>Chocolate con leche</b>: mezcla de pasta de cacao, manteca de cacao, leche y azúcar.

              p <b>Chocolate oscuro (amargo, semi-amargo, bitter)</b>: contiene pasta de cacao, manteca de cacao y azúcar. A mayor porcentaje de cacao (>70 %), más intenso y menos dulce.

              p <b>Formatos</b>: en cobertura (tabletas de alta calidad, con mayor contenido de manteca de cacao, ideales para templar y fundir), en polvo (para mezclar o decorar), en gotas (para galletas).

          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/18.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Frutas
              p <b>Frescas</b>: frutas de temporada (fresas, frambuesas, moras, manzanas, peras, duraznos) para decorar, rellenar, hacer compotas o coulis.

              p <b>Deshidratadas</b>: pasas, ciruelas, orejones, arándanos, dátiles. Aportan dulzor concentrado y textura.

              p <b>En conservas</b>: (o almíbar o pulpas): Para rellenos y elaboración de mermeladas o jaleas.

          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema3/19.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Aditivos
              p <b>Estabilizantes y espesantes</b>: gelatina (en polvo o láminas, para dar firmeza a mousses y postres fríos), pectina (para espesar mermeladas), almidón de maíz (maicena).

              p <b>Saborizantes</b>: extractos (vainilla, almendra, menta), esencias, licores (ron, brandy, licor de naranja), especias (canela, nuez moscada, jengibre, clavo).

              p <b>Colorantes</b>: naturales (remolacha, cúrcuma, espirulina) o artificiales (en gel, pasta o líquido).

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Criterios de calidad y fichas técnicas de las materias primas
    
    .bg-color-1.tarjeta.mb-5
      .row.align-items-center
        .col-lg-auto.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/20.png", style="max-width: 160px").mx-auto
        .col-lg.order-1.mb-3.mb-lg-0
          p.mb-0.px-4 El seleccionar una materia prima de calidad es el primer paso para un producto final excelente. Los criterios de calidad se basan en la observación sensorial y la información del proveedor.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Criterios sensoriales
    
    .bg-color-12.tarjeta.p-4.mb-5
      p.mb-0 Son aspectos que permiten evaluar la calidad de los productos de repostería a través de los sentidos. Estos criterios ayudan a analizar características como el sabor, el aroma, la textura, el color y la apariencia de las preparaciones, elementos que influyen en la aceptación del producto por parte de los consumidores.

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Aspecto")
            h4 Aspecto
            p Debe ser uniforme, sin manchas, moho, magulladuras o signos de deterioro. 
            p <b>Ejemplo</b>: las fresas deben ser firmes, de color rojo brillante y sin partes blandas. La harina debe ser blanca o ligeramente crema, sin grumos ni bichos.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Olor")
            h4 Olor
            p Característico del producto, fresco y agradable. No debe tener olores rancios (grasas), a humedad o a químicos. 
            p <b>Ejemplo</b>: la mantequilla fresca tiene un olor lácteo suave; si huele a rancio, está descompuesta.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Textura")
            h4 Textura
            p Consistencia apropiada para el tipo de producto. 
            p <b>Ejemplo</b>: La mantequilla debe ser firme pero maleable a temperatura ambiente. El chocolate debe ser brillante y quebrarse con un chasquido limpio.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Sabor (en caso de ser posible)")
            h4 Sabor (en caso de ser posible)
            p.mb-0 Puro y característico. Las materias primas en mal estado pueden tener sabores agrios, metálicos o amargos no deseados.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Fichas Técnicas
    
    .bg-color-12.tarjeta.p-4.mb-5
      p.mb-0 Es un documento del proveedor que especifica las características, composición, propiedades y condiciones de manejo de un producto. Es una herramienta de aseguramiento de la calidad.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Información clave que debe contener
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Identificación del producto") Nombre comercial, nombre genérico, código interno.
          
          p(numero="2" titulo="Descripción del producto") Características organolépticas, físicas y químicas.
          
          p(numero="3" titulo="Ingredientes y composición") Lista de ingredientes y aditivos, tabla nutricional.
          
          p(numero="4" titulo="Información de alérgenos") Debe indicar si contiene o pudo haber contacto cruzado con alérgenos como gluten, leche, huevo, soja, frutos secos, etc. (Crucial para la seguridad del consumidor).

          p(numero="5" titulo="Condiciones de conservación y transporte") Temperatura, humedad, protección de la luz.
          
          p(numero="6" titulo="Vida útil (fecha de vencimiento)") Tiempo durante el cual el producto mantiene sus propiedades óptimas si se conserva adecuadamente
          
          p(numero="7" titulo="Instrucciones de uso y preparación (si aplica)") Corresponden a las indicaciones que describen de forma clara cómo utilizar o preparar un producto o ingrediente dentro de una receta.
          
          p(numero="8" titulo="Presentación y empaque") Tipo de envase, peso neto, unidades por caja.

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
