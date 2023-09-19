<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipología de ataques #[i web]
    p.mb-5(data-aos="fade-right") Para las organizaciones en la actualidad es indispensable adquirir aplicaciones web como base tecnológica para darse a conocer, por esta razón muchas empresas y negocios apuestan a incluir estas tecnologías como estrategia para competir en el mercado; estas plataformas son importantes para una empresa, porque automatizan los procesos, simplifican las tareas volviéndose más eficientes al momento de prestar sus servicios al cliente y, lo mejor de todo, es que funcionan solo desde un navegador, por lo que no hace falta instalar paquetes al computador y su acceso es desde cualquier dispositivo con una previa autenticación.
    .row.align-items-center.bg-c1.mb-5(data-aos="fade-left")
      .col-lg.mb-4.mb-lg-0
        p.ms-0.ms-lg-5 La principal función actualmente de las aplicaciones web es que el usuario o cliente realice una tarea, como comprar, realizar pagos a la empresa, realizar una transacción bancaria, editar textos, fotos y muchas más acciones y prestar un sinfín de servicios, por esta razón se han vuelto tan populares. 
          br
          br
          |Entre muchas de sus ventajas, se presenta una desventaja con la que hay que tener mucho cuidado y son las brechas de seguridad y vulnerabilidades.  
      .col-lg-auto
        figure.my-0.my-lg-3
          img(src='@/assets/curso/tema1/img1.svg')
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10.bg-c2.p-4
        .row.justify-content-center.align-items-center
          .col-5.col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img3.svg')
          .col-lg
            p.mb-0 Según el informe #[em Automated Code Analysis: web Application Vulnerabilities in 2017], 94% de las aplicaciones web contienen una vulnerabilidad muy grave y 85% una vulnerabilidad explotable, por ello, hoy día es esencial utilizar una herramienta de escaneo de vulnerabilidades en aplicaciones web. De lo contrario, tu empresa podría ser blanco de ciberdelincuentes (gbadvisors,TechBlog, s. f.). 
    p.mb-5 Para escanear las vulnerabilidades hay que conocer cuáles son, por eso, se muestran y se describen los riesgos más identificados de seguridad a las aplicaciones web, a saber: 
    .row.align-items-center
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 400px").m-auto
      .col-lg-7(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Clickjacking") Estos ataques son muy comunes para atacar y capturar datos confidenciales en páginas como Facebook y Twitter.<br>Suplanta funcionalidades de la página principal y redirecciona al usuario a diferentes dominios, especialmente al diligenciar formularios como el #[i login] y #[i password], enviando la información a un correo electrónico del pirata informático.
          p(numero="2" titulo="Cross Site Scripting (XSS)") Es una vulnerabilidad muy común y bastante utilizada, se encuentra en muchas de las aplicaciones #[i web].<br>Esta vulnerabilidad le permite al pirata informático insertar un código malicioso dentro de las aplicaciones que frecuentan los cibernautas, evitando el acceso al sitio y también es utilizado para la práctica del #[i phishing].
          p(numero="3" titulo="Falsificación de solicitudes entre sitios / CSRF") Este ataque consiste en engañar al usuario al momento de autenticarse en un sitio #[i web] de confianza, se conoce también como #[b ataque con un solo clic] y se abrevia CSRF, utiliza comandos por debajo de las aplicaciones no autorizadas.
          p(numero="4" titulo="Ejecución remota de código") La ejecución remota de código es utilizada por los piratas cibernéticos, para implantar #[i malware] y ejecutar código aprovechando las vulnerabilidades de la aplicación #[i web] y así poder tomar el control de toda la aplicación.
          p(numero="5" titulo="Inclusión de archivos locales (LFI) e inclusión de archivos remotos (RFI)") Es una vulnerabilidad con la que se puede afectar a los servidores #[i web], lo que hace es aprovechar esta vulnerabilidad para adquirir, ubicar, obtener y modificar archivos que se encuentran en el fólder raíz de la aplicación #[i web], también puede hacer ataques para adquirir los usuarios del servidor y obtener todos los privilegios para hacer operaciones maliciosas dentro del servidor.
          p(numero="6" titulo="Ataque de inyección SQL") Este ataque modifica las sentencias SQL y afecta a los datos de toda la aplicación, permitiéndole  al atacante suplantar identificación, manipular información de la base de datos, afectar saldos y transacciones, destruir información o datos, obtener los privilegios del administrador y hasta divulgar la información de la organización, entre muchos otros aspectos.
          p(numero="7" titulo="Redirección de URL") Este ataque engaña al usuario, redireccionándolo de un sitio a otro,  tomando el control de toda la información que se quiera introducir; es muy común en la suplantación de sitios #[i web] en donde se hacen transacciones de dinero, como bancos, entre otros.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
