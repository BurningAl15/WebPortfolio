<template>
  <section class="main">
    <Jumbotron></Jumbotron>
    <Projects id="Proyectos"></Projects>
    <AboutMe id="SobreMi"></AboutMe>
    <!-- <Carousel></Carousel> -->
    <Contacto id="Contacto"></Contacto>
    <Footer></Footer>
  </section>
</template>

<script>
// @ is an alias to /src
import Jumbotron from "@/components/Jumbotron.vue";
import Projects from "@/components/Projects.vue";
// import Carousel from "@/components/Carousel.vue";
import AboutMe from "@/components/AboutMe.vue";
import Contacto from "@/components/Contacto.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
    Projects,
    AboutMe,
    Contacto,
    Footer

    // Carousel
  }
};
</script>

<style lang="scss">
.main {
  width: 100%;
  margin-top: -100px;
}
</style>
