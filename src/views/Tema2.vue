<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clasificación de ataques
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg.mb-4.mb-lg-0
        p En la actualidad la amenaza más grande a la que se deben enfrentar las empresas son los ciberataques, teniendo en cuenta que no solo afecta a las empresas, sino también a los individuos particulares e incluso Estados y sociedades. 
        p Por lo tanto, las medidas que se toman en la seguridad informática se han vuelto prioritarias, sobre todo para las organizaciones que dependen casi en su totalidad para funcionar de internet. Las vulnerabilidades en estas aplicaciones y los métodos utilizados para que los atacantes no sean detectados se han convertido en pan de cada día y la práctica de buscar cómo infiltrarse sigue aumentando a diario. Por eso, es necesario mostrar qué clase de ataques existen para ser detectados e identificar su impacto. 
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 400px").m-auto
    p.mb-5 A continuación, en el siguiente video se exponen los ataques más comunes. 
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/x56FT_OVARQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-4
          .col-12.bg-c3.p-4
            H4 Importante: 
            p Para hacer las pruebas es necesario conocer las anteriores terminologías, pues existen diversas técnicas que son utilizadas para atacar una aplicación #i web y qué datos son sensibles a vulnerabilidades; por ello, es necesario contar con una herramienta adecuada para hacer diagnósticos y detectar cada vulnerabilidad.
            p.mb-0 Por lo anterior y en adelante, se encontrará en este componente formativo una prueba a un sitio web, en la que se utilizará una herramienta de detección de vulnerabilidades a una aplicación.  
        .row
          .col-12.bg-c4.p-4
            .row.justify-content-center.align-items-center
              .col-6.col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img1.svg')
              .col-lg
                .row.mb-4
                  .col-4.bg-c5.p-3
                    h4.mb-0 Nota:
                .row
                  .col-12
                    p.mb-0 En caso de hacer la práctica, deben tener una autorización previa para no llegar a tener problemas legales, dado que se estará ingresando a zonas de datos privados.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width: 500px").m-auto
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
