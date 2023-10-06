<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prueba de seguridad orientada a aplicaciones web  
    p.mb-5(data-aos="fade-up") Con miras a la ejecución de una prueba de seguridad es necesario observar el video tutorial que se presenta a continuación, el cual brinda los elementos para utilizar la herramienta OWASP ZAP, de manera correcta.
    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sZxqI_F30OY?si=YIfxFbYlTVIsI8F7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Instalación OWASP ZAP
    .row.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        p A continuación, se muestra una forma práctica de identificar vulnerabilidades. Aunque no se sepa cómo explotarlas, es seguro que hay quien sí lo hará, en perjuicio de una persona, un cliente o sus reputaciones. Por razones de seguridad con las empresas testeadas, los ejemplos que se presentarán han sido tomados de alguna página web de una entidad del Estado, de la cual se reservará el nombre y sus datos. Además, la imagen gráfica será editada para no comprometer la reputación de la entidad. 
        p.mb-0 Para iniciar, se debe instalar la aplicación OWASP ZAP en un sistema Windows 10. Este aplicativo tiene como propósito hacer pruebas de vulnerabilidad en aplicaciones y requiere la instalación de JDK de JAVA como prerrequisito. Para realizar estas instalaciones, se debe recurrir al material complementario de este componente formativo, específicamente al denominado #[b “OWASP ZAP, audita la seguridad de webs y evita vulnerabilidades” (De Luz, 2021).] Allí se encuentran los enlaces de los manuales, en caso de que no se tengan estas dos aplicaciones en el computador. 
      .col-lg-auto(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png')
    .tarjeta.tarjeta--gris.p-4.p-lg-5.mb-5(data-aos="fade-right")
      PasosB.color-acento-contenido
        .row.justify-content-center(titulo="")
          .col-10.p-4
            ul.lista-ul--color.lista-ul.mb-4
              li.mb-3
                i.fas.fa-play(style="color: #294DDC")
                | 
                p.mb-0 Una vez instalado el #[em JDK] puede continuar.
              li
                i.fas.fa-play(style="color: #294DDC")
                | 
                p.mb-0 Diríjase a la página principal de Zaproxy.org y busque el botón de descarga.
            figure
              img(src='@/assets/curso/tema3/img2.png' alt="Captura de pantalla de la página principal ZAP indicando el botón de descarga.")
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img3.png' alt="Captura de pantalla en la que se muestran las opciones de instalador de acuerdo al sistema operativo.")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Descargue la versión compatible con su sistema operativo, si no está seguro use la de 32 bits ya que sirve en sistemas operativos de 32 bits y 64 bits.
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img4.png' alt="Ventana emergente en la que se piden acceso para la instalación de la aplicación.")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Una vez lo descargue, debe proceder a instalarlo, seguramente le pedirá permisos para realizar la instalación en su sistema, tenga confianza y de clic en #[b Sí].
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img5.png' alt="Ventana emergente para iniciar proceso de instalación. ")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Dé clic en #[b Siguiente].
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img6.png' alt="Ventana en la que se solicita el consentimiento de los términos de la licencia.")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Acepte los términos y dé clic en #[b Siguiente].
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img7.png' alt="Ventana en la que se debe seleccionar el tipo de instalación a realizar.")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Verifique que el botón de selección se encuentre en #[b Instalación estándar], sino selecciónela y dé clic en el botón #[b Siguiente] dos veces.
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img8.png' alt="Logotipo de la aplicación una vez instalada.")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Después de instalar la aplicación hay que ejecutarla, para ello, busque en aplicaciones recientes o en el menú de inicio y dé clic en ella.
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img9.png' alt="Captura de pantalla cuando se inicia la aplicación.")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 El programa le pregunta si quiere continuar con esta sesión de la aplicación, se contesta #[b “Sí, yo quiero continuar…”]
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img10.png' alt="Captura de pantalla de inicio en el que se indica dar clic en la opción Automated Scan.")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li.mb-3
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Ahora se verá cómo hacer el escaneo más básico, es el de #[i test] sin credenciales de acceso. Porque se puede configurar un #[i proxy] que capture y genere un #[i script] de inicio de sesión, para pruebas más completas, pero es un tema más avanzado que no está al alcance en este momento por ahora.
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Haga #[i clic] en #[b #[i Automated Scan]] (escaneo automático).
        .row.justify-content-center(titulo="")
          .col-10.p-4
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema3/img11.png' alt="Captura de pantalla de la opción Automated Scan.")
              .col-lg
                ul.lista-ul--color.lista-ul.mb-4
                  li
                    i.fas.fa-play(style="color: #294DDC")
                    |
                    p.mb-0 Por temas de tiempo no solo se toma un pantallazo los 6 minutos, seguramente si la prueba dura unos 20 minutos encontraría más vulnerabilidades.
    p.mb-5.text-center(data-aos="fade-down") En el anterior ejercicio práctico de identificación de vulnerabilidades, se hallaron dos vulnerabilidades, que a continuación se detallarán:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img1.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-5
              h4.text-center.fst-italic Absence of Anti-CSRF Tokens
              p Según el reporte en la imagen, la página web tiene 208 formularios vulnerables a ataques de SCRF.
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-5
              h4.text-center.fst-italic Cookie No HttpOnly Flag
              p Esta vulnerabilidad trata que otras webs pueden acceder a los datos de usuario o datos de sesión basados en #[i cookies]. Se resuelve de varias maneras, tal vez la más sencilla es agregando una configuración en el servidor.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-8.p-4.bg-c6
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema3/img3.svg')
          .col
            p.mb-0 Para conocer cómo resolver los dos anteriores hallazgos, se debe remitir al material complementario de este componente formativo. 
    p.text-center.mb-5(data-aos="fade-right") El siguiente es otro ejemplo de un caso también crítico y fácilmente explotable. 
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-8
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso//tema3/img12.png', alt='Captura de pantalla de un caso crítico en el que se está usando la versión de una librería con vulnerabilidades detectadas y pide ser actualizada.')
          div(x="47%" y="37%" numero="")
            figure
              img(src='@/assets/curso/tema3/img14.png')
          div(x="17%" y="68%" numero="")
            figure
              img(src='@/assets/curso/tema3/img15.png')
    .row
      .col-lg-12.col-xl-6.mb-4.mb-xl-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img13.png')
      .col-lg(data-aos="fade-left")
        p Este sitio web utiliza la librería jQuery Mobile en su versión 1.4.5. Sin embargo, esta versión tiene vulnerabilidades detectadas por la comunidad jQuery, las cuales podrían ser aprovechadas por atacantes. En la imagen se propone una solución: actualizar la librería a la versión más reciente. 
        p.mb-0 Si se observa en el resultado de las pruebas, los ataques que hace la herramienta a los sitios web que se van a probar son los mencionados uno a uno en el primer tema de este componente formativo. 
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
