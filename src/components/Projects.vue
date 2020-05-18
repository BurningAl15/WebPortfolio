<template>
  <section class="projects">
    <div class="titulo-seccion">
      <h2>Últimos Proyectos Web</h2>
      <p>Somos especialistas en entregar los mejores trabajos y la más alta calidad</p>
    </div>
    <div class="container-fluid">
      <Card v-for="page in pages" :key="page.id" :game="page" />
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      pages: [
        {
          id: 0,
          icon: "CamachosResort.png",
          alt: "Camacho's Resort",
          url: "https://burningal15.github.io/landing-page-resort/",
          description:
            "Play in a incredible kitten world and unlock all the kittens!"
        },
        {
          id: 1,
          icon: "FatCatGameStudio.png",
          alt: "Camacho's Resort",
          url: "https://burningal15.github.io/landing-page-resort/",
          description:
            "Survive in the space until you can found someone to help you!"
        },
        {
          id: 2,
          icon: "SaborAPeru.png",
          alt: "Camacho's Resort",
          url: "https://burningal15.github.io/landing-page-resort/",
          description:
            "Play in a incredible kitten world and unlock all the kittens!"
        },
        {
          id: 3,
          icon: "Tulum.png",
          alt: "Camacho's Resort",
          url: "https://burningal15.github.io/landing-page-resort/",
          description:
            "Survive in the space until you can found someone to help you!"
        },
        {
          id: 4,
          icon: "CoffeeNCake.png",
          alt: "Camacho's Resort",
          url: "https://burningal15.github.io/landing-page-resort/",
          description:
            "Play in a incredible kitten world and unlock all the kittens!"
        },
        {
          id: 5,
          icon: "Main.png",
          alt: "Camacho's Resort",
          url: "https://burningal15.github.io/landing-page-resort/",
          description:
            "Survive in the space until you can found someone to help you!"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.titulo-seccion {
  text-align: center;
  margin-bottom: 40px;
  h2 {
    // color: var(--var-color);
    font-size: 3.125rem;
    margin-bottom: 15px;
    font-weight: 500;
  }
  p {
    color: #979797;
    font-size: 1rem;
    font-weight: 400;
  }
}

.container-fluid {
  width: 90%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>