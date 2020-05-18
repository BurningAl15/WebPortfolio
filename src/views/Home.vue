<template>
  <section class="main">
    <Jumbotron></Jumbotron>
    <Projects></Projects>
  </section>
</template>

<script>
// @ is an alias to /src
import Jumbotron from "@/components/Jumbotron.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
    Projects
  }
};
</script>

<style lang="scss">
.main {
  width: 100%;
  margin-top: -100px;
}
</style>
