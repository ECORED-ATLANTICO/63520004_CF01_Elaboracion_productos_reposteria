<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Maquinaria y herramientas en repostería
    
    img(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Este capítulo se enfoca en el primer Resultado de Aprendizaje (RAP), dotando al aprendiz del conocimiento técnico para identificar, operar y mantener los equipos y herramientas propios de la repostería.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5

        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Clasificación técnica de la maquinaria: equipos de cocción, batido y refrigeración
        
        .bloque-texto-g.color-secundario.bg-color-4.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En los procesos de repostería, la maquinaria se puede clasificar técnicamente según la función que cumple dentro de la preparación de los productos. Entre los principales grupos se encuentran los equipos de cocción, utilizados para hornear y transformar las mezclas; los equipos de batido, que permiten integrar los ingredientes y lograr masas homogéneas; y los equipos de refrigeración, destinados a conservar ingredientes y preparaciones en condiciones adecuadas de temperatura. Conocer esta clasificación facilita el uso correcto de la maquinaria y contribuye a un proceso de elaboración más eficiente y organizado.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Equipos de cocción
    
    p.mb-5 Cumplen un papel fundamental, ya que permiten transformar las mezclas en preparaciones con la textura, el sabor y la apariencia adecuados. Estos equipos proporcionan el calor necesario para que los ingredientes reaccionen y se desarrollen procesos como el levado, la caramelización y la cocción uniforme de las masas. Conocer el funcionamiento, uso adecuado y control de temperatura de estos equipos es esencial para garantizar resultados de calidad, optimizar los tiempos de preparación y mantener las condiciones de seguridad e higiene durante el proceso productivo. Los equipos más comunes son los siguientes.

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-3")
          div(titulo="Horno de convección")
            p.ms-5 Utiliza un ventilador para distribuir el calor de manera uniforme, ideal para masas batidas (ponqués, bizcochos) y galletería.
          div(titulo="Horno rotatorio")
            p.ms-5 Los carros con las bandejas giran en su interior, garantizando una cocción homogénea, utilizado en producciones de gran volumen.
          div(titulo="Horno de pisos (o de solera)")
            p.ms-5 Con piedra refractaria, ideal para panes y masas fermentadas, proporciona un calor seco y concentrado.
          div(titulo="Estufas")
            p.ms-5 Se utilizan para la elaboración de cremas, almíbares, salsas y cocciones en seco (tostar frutos secos). Pueden ser a gas o de inducción.
          div(titulo="Freidoras")
            p.ms-5 Empleadas para la elaboración de masas fritas como buñuelos, hojuelas o churros. Deben contar con un sistema de termostato para controlar la temperatura del aceite.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Equipos de batido y mezclado
    
    p.mb-5 Son fundamentales para integrar correctamente los ingredientes y lograr preparaciones con la textura y consistencia adecuadas. A través del batido y la mezcla se incorporan aire, líquidos y sólidos, permitiendo obtener masas homogéneas que facilitan el desarrollo adecuado de los productos durante la cocción. El uso correcto de estos equipos permite optimizar el tiempo de preparación, mejorar la calidad de las masas y asegurar que los productos de repostería, como tortas, cremas y batidos, alcancen las características deseadas.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Batidora de pedestal(o amasadora)" :icono="require('@/assets/componentes/7.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Batidora de pedestal(o amasadora)
            p La más común. consta de un <em>bowl</em> y varios accesorios (globo, pala, gancho) que realizan diferentes funciones. Fundamental para elaborar merengues, cremas, masas batidas y masas pesadas (pan, pasta).
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/4.png', alt='')
      .py-4.py-md-5(titulo="Batidora de mano (o de inmersión)" :icono="require('@/assets/componentes/8.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Batidora de mano (o de inmersión)
            p Útil para pequeñas cantidades, emulsionar o montar claras a punto de nieve.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/5.png', alt='')
      .py-4.py-md-5(titulo="Batidora de brazo (o robot de cocina)" :icono="require('@/assets/componentes/9.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Batidora de brazo (o robot de cocina)
            p Versátil, con múltiples accesorios para picar, rallar, batir y amasar en pequeñas cantidades.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/6.png', alt='')
      .py-4.py-md-5(titulo="Ralladores y procesadores" :icono="require('@/assets/componentes/10.svg')")
        .row.justify-content-center.align-items-center.p-4.p-lg-0
          .col-lg-8.mb-4.mb-lg-0
            h4 Ralladores y procesadores
            p Agilizan la preparación de ingredientes como queso, chocolate, frutos secos o vegetales.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/7.png', alt='')
     
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Equipos de refrigeración
    
    p.mb-5 Son esenciales para conservar adecuadamente los ingredientes y mantener la calidad de los productos elaborados. Estos equipos permiten controlar la temperatura para evitar el deterioro de materias primas como lácteos, huevos, cremas y frutas, así como para preservar preparaciones que requieren mantenerse frías antes o después de su elaboración.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/9.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Neveras (refrigeradores)
            p.mb-0 Indispensables para conservar materias primas perecederas (lácteos, huevos, frutas frescas) y productos terminados o en proceso (cremas, masas quebradas, postres fríos). La temperatura ideal de refrigeración oscila entre 2 °C y 5 °C.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/10.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Congeladores (<em>freezers</em>) 
            p.mb-0 Permiten la conservación a largo plazo de materias primas (mantequilla, frutas congeladas) y de productos semiterminados o terminados (masas congeladas, helados). Su temperatura debe ser de -18 °C o inferior.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/11.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Abatidores de temperatura
            p.mb-0 Equipos de alta gama que reducen rápidamente la temperatura de un producto caliente (de 65 °C a 10 °C en menos de 90 minutos). Esto evita la proliferación bacteriana y preserva la textura y sabor de preparaciones como cremas pasteleras o bizcochos.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Herramientas de mano y utensilios especializados: moldes, boquillas y básculas
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-4.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la repostería, las herramientas de mano y los utensilios especializados son fundamentales para facilitar la preparación, el moldeado y la decoración de los productos. Elementos como los moldes, las boquillas y las básculas permiten trabajar con mayor precisión, dar forma a las preparaciones, realizar decoraciones y medir correctamente los ingredientes. El conocimiento y uso adecuado de estos utensilios contribuye a mejorar la calidad, presentación y uniformidad de los productos elaborados.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Medición y pesaje
        
        p.mb-5 La medición y el pesaje de los ingredientes son procesos fundamentales para lograr preparaciones equilibradas y de buena calidad. A diferencia de otras áreas de la cocina, la repostería requiere mayor precisión en las cantidades, ya que pequeñas variaciones pueden afectar la textura, el sabor y el resultado final del producto.

        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
          .col-lg-9
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Básculas digitales")
                .row.justify-content-center.align-items-center
                  .col-lg-8.mb-3.mb-lg-0
                    h4 Básculas digitales
                    p.mb-0 Precisas y fáciles de leer, ideales para pequeñas y grandes cantidades.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/15.png', alt='')
              .tarjeta.color-acento-botones--borde.p-4(titulo="Básculas mecánicas (de resorte)")
                .row.justify-content-center.align-items-center
                  .col-lg-8.mb-3.mb-lg-0
                    h4 Básculas mecánicas (de resorte)
                    p.mb-0 Robustas y no requieren batería, aunque menos precisas que las digitales.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/14.png', alt='')
              .tarjeta.color-acento-botones--borde.p-4(titulo="Termómetros")
                .row.justify-content-center.align-items-center
                  .col-lg-8.mb-3.mb-lg-0
                    h4 Termómetros
                    p.mb-0 De cocina (para almíbares y aceites) y de sonda (para controlar la temperatura interna de los productos horneados o cremas).
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/16.png', alt='')
              .tarjeta.color-acento-botones--borde.p-4(titulo="Jarras y cucharas medidoras")
                .row.justify-content-center.align-items-center
                  .col-lg-8.mb-3.mb-lg-0
                    h4 Jarras y cucharas medidoras
                    p.mb-0 Para líquidos y pequeñas cantidades de sólidos o especias.
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema2/17.png', alt='')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Herramientas de corte y manipulación
    
    p.mb-5 Son indispensables para trabajar adecuadamente las masas, dividir preparaciones y manejar los ingredientes durante las diferentes etapas de elaboración. Estas herramientas permiten realizar cortes precisos y manipular los productos de forma segura y ordenada, contribuyendo a mantener la calidad y presentación de las preparaciones. El uso adecuado de estas herramientas permite optimizar el trabajo en la cocina, mejorar la uniformidad de las preparaciones y garantizar mayor eficiencia en la elaboración de productos de repostería.

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/18.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Cuchillos y espátulas
            p.mb-0 Desde cuchillos de sierra para cortar bizcochos, hasta espátulas rectas y acodadas para alisar y decorar.
    
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/19.png", alt="alt")
          .crd_hover_txt--body.w-100
            h4.mb-3 Tijeras y cortadores de pasta
            p.mb-0  Para cortar y dar forma a masas.
           
    
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/20.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Raspadores de mesa (<em>cornés</em>)
            p.mb-0 Indispensables para limpiar la superficie de trabajo, dividir masas y recoger ingredientes.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/21.png", alt="alt")
          .crd_hover_txt--body.w-100
            h4.mb-3 Brochas y pinceles
            p.mb-0 Para pintar con huevo, almíbar o mantequilla derretida.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Moldes
    
    img(src="@/assets/curso/tema2/22.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Son utensilios fundamentales en la elaboración de productos de repostería, ya que permiten dar forma y estructura a las preparaciones durante el proceso de cocción. Gracias a su uso, es posible obtener tortas, ponqués, galletas y otros productos con tamaños, formas y presentaciones definidas.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
      .col-lg-6
        p(data-aos="fade-right") <b>Materiales</b>: pueden ser de aluminio (antiadherente o no), acero inoxidable, silicona (flexible y antiadherente) o desechables (papel o aluminio).
        p.mb-0(data-aos="fade-right") <b>Formas y usos</b>: existen moldes para:
        ul.lista-ul--color.ms-3
          li.mb-1.d-flex
            i.fas.fa-circle.fa-xs.mt-2
            p.mb-0 Bizcochos: redondos, rectangulares (tipo <em>brownie</em>), <em>cake pops</em>. 
          li.mb-1.d-flex
            i.fas.fa-circle.fa-xs.mt-2
            p.mb-0 Ponqués: alargados (<em>pound cake</em>), redondos con hueco central (tipo ángel <em>food</em>).
          li.mb-1.d-flex
            i.fas.fa-circle.fa-xs.mt-2
            | Postres individuales: flaneras, aros de emplatar.
          li.mb-1.d-flex
            i.fas.fa-circle.fa-xs.mt-2
            | Tartas y pasteles: aros ajustables, moldes de fondo removible.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-xl-3.mb-3.mb-lg-0
            .bg-color-8.p-3.tarjeta 
              p.mb-0 <b>Herramientas de decoración</b>: permiten mejorar la presentación y el acabado final de los productos elaborados. A través de estas herramientas es posible aplicar diferentes técnicas para decorar tortas, <em>cupcakes</em>, galletas y otros postres, logrando preparaciones más atractivas y creativas. Entre las diferentes herramientas de decoración, tenemos:
          .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema2/24.png", data-aos="zoom-in")
          .col-xl-6
            .bg-color-9.p-3.tarjeta
              p <b>Mangas pasteleras:</b> desechables o de tela (lona o plástico), se usan para dosificar y decorar.
              p.mb-0 <b>Boquillas (duyas):</b> son la clave para la decoración. Se clasifican por su forma y el diseño que generan:
              ul.lista-ul--color.ms-3
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Lisos: para escribir, hacer bordes, rellenar o dosificar puntos.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Estrellados: abiertos o cerrados, para crear dibujos en relieve, rosetones y cenefas.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Rizados: para conchas y bordes ondulados.
                li.mb-1.d-flex
                  i.fas.fa-circle.fa-xs.mt-2
                  | Especiales: de pétalo para flores, de cesta, de césped.

        separador
        
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.3 Manuales de procedimiento: operación, ensamble y seguridad técnica de los equipos
        
        img(src="@/assets/curso/tema2/25.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Todo equipo industrial o semiindustrial debe venir acompañado de un manual de procedimiento. Este documento técnico es de obligatoria consulta antes de la puesta en marcha de cualquier máquina. Su estructura típica incluye:
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/26.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Especificaciones técnicas:</b> voltaje, potencia, capacidad, dimensiones, materiales de construcción.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-down")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/27.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Instrucciones de instalación:</b> requisitos de espacio, nivelación, conexiones eléctricas/de gas/agua.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.h-100(data-aos="fade-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/28.svg' alt='')
              .tarjeta.tarjeta--azul.h-100
                .p-3
                  p.mb-0 <b>Diagrama de partes y ensamble:</b> identifica cada componente de la máquina (<em>bowl</em>, batidor, protector, etc.) e indica cómo se ensamblan y desensamblan correctamente para su uso y limpieza.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        .bg-color-6.tarjeta.mb-5
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/29.svg", style="max-width: 90px").mx-auto
            .col-lg.px-4.pb-4.pb-lg-0
              p.mb-0 <b>Ejemplo</b>: en una batidora de pedestal, es crucial saber cómo acoplar el <em>bowl</em>, cómo insertar el batidor (globo, pala o gancho) hasta que encaje en el eje y cómo subir o bajar la plataforma.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.h-100(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/30.svg' alt='')
          .tarjeta.tarjeta--azul.h-100
            .p-3
              p.mb-0 <b>Guía de operación</b>: describe paso a paso cómo encender el equipo, seleccionar velocidades, temporizadores y funciones especiales.
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.h-100(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/31.svg' alt='')
          .tarjeta.tarjeta--azul.h-100
            .p-3
              p.mb-0 <b>Normas de seguridad</b>: advertencias críticas para evitar accidentes. Por ejemplo: nunca introducir las manos o utensilios en el <em>bowl</em> mientras la batidora esté en funcionamiento o apagar y desconectar el equipo antes de realizar cualquier limpieza.
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta-avatar-b.h-100(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/32.svg' alt='')
          .tarjeta.tarjeta--azul.h-100
            .p-3
              p.mb-0 <b>Solución de problemas comunes</b>: una guía básica de fallas (ej. el horno no calienta, la batidora hace ruido) y cómo proceder, generalmente contactando al servicio técnico autorizado.
      
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Diagrama de las partes de una batidora de pedestal
        img.mb-2.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema2/33.png", alt="La figura muestra el diagrama de partes o ensamble de una batidora de pedestal.")
        img.mb-2.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema2/33-1.png", alt="La figura muestra el diagrama de partes o ensamble de una batidora de pedestal.")
        figcaption Nota. SENA, (2026).
  
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Protocolos de mantenimiento preventivo y desinfección de herramientas
    
    img(src="@/assets/curso/tema2/34.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Para garantizar la vida útil de los equipos y la inocuidad de los alimentos, se deben seguir rigurosos protocolos de mantenimiento y desinfección.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Mantenimiento preventivo
    
    p.mb-5 El mantenimiento preventivo es el conjunto de acciones que se realizan de forma periódica para conservar en buen estado los equipos, herramientas y utensilios utilizados en la elaboración de productos de repostería. Su objetivo es prevenir fallas, garantizar el correcto funcionamiento de los equipos y asegurar que los procesos de preparación se desarrollen de manera eficiente y segura. Aplicar prácticas de mantenimiento preventivo, como la limpieza, revisión y cuidado adecuado de los equipos, permite prolongar su vida útil, evitar daños inesperados y mantener condiciones adecuadas de higiene y calidad durante la producción de los productos de repostería.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Acciones comunes
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.h-100.p-4
              h5 Limpieza diaria: 
              p Después de cada uso, desmontar las partes removibles y lavarlas con agua y jabón. Limpiar las superficies externas con un paño húmedo.
        
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-10.h-100.p-4
              h5 Lubricación: 
              p  Aplicar lubricante apto para uso alimentario (grado alimenticio) en las partes móviles (ej. eje de la batidora, bisagras de las puertas de hornos) según la frecuencia indicada en el manual.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.h-100.p-4
              h5 Calibración: 
              p Verificar periódicamente la precisión de las básculas y termostatos. Un horno con temperatura incorrecta arruinará una producción.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.h-100.p-4
              h5 Revisión técnica:  
              p Realizar inspecciones periódicas por parte de un técnico especializado para revisar el estado de cables, correas, resistencias y sistemas de refrigeración.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Desinfección de herramientas
        
        .row.mb-5.justify-content-center.align-items-center
          .col-md-8.col-lg-6.mb-3.mb-lg-0
            .bg-color-4.tarjeta.p-4.p-lg-5
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  p <b>Limpieza:</b> proceso que elimina la suciedad visible (restos de masa, grasa, crema) mediante agua, jabón y acción mecánica (frotar).
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-11 
                  p <b>Desinfección:</b> proceso que elimina microorganismos (bacterias, virus, hongos) después de la limpieza.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-11
                  | Protocolo paso a paso para herramientas pequeñas (moldes, espátulas, boquillas):
          .col-lg-6
            TabsA.color-acento-botones
              .tarjeta.color-acento-botones--borde.p-4(titulo="Prelavado")
                h4 Prelavado
                p.mb-0 Retirar los residuos sólidos con una espátula o bajo un chorro de agua.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Lavado")
                h4 Lavado
                p.mb-0 Sumergir en agua caliente (45 °C - 50 °C) con detergente desengrasante. Frotar con una esponja suave para no dañar las superficies (especialmente las antiadherentes).
              .tarjeta.color-acento-botones--borde.p-4(titulo="Enjuague")
                h4 Enjuague
                p.mb-0 Eliminar completamente los residuos de jabón con abundante agua caliente.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Desinfección")
                h4 Desinfección
                p.mb-0 Sumergir en una solución desinfectante apta para alimentos (ej. hipoclorito de sodio en concentración adecuada: 50 - 100 ppm para superficies en contacto con alimentos) durante el tiempo recomendado (generalmente 5 - 10 minutos). También se puede usar un desinfectante en <em>spray</em> aprobado.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Secado")
                h4 Secado
                p.mb-0 Secar al aire sobre una rejilla limpia o con paños de un solo uso (toallas de papel) para evitar la re-contaminación.

        .row.justify-content-center.mb-5
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema2/35.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Diario
                p.mb-0 Limpieza y desinfección superficial: lavar <em>bowl</em> y batidores; limpiar puerta del horno; vaciar y limpiar nevera.

        
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema2/36.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Semanal
                p.mb-0 Limpieza profunda: revisar y limpiar juntas de goma (neveras, hornos); limpiar interior del horno con producto específico; verificar calibración de básculas.
        
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema2/37.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Mensual / trimestral
                p.mb-0 Mantenimiento técnico: lubricar partes móviles; revisar fugas de gas; verificar carga de gas refrigerante.

</template>

<script>
export default {
  name: 'Tema2',
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
