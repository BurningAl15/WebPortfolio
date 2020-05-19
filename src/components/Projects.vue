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
          icon: "https://i.imgur.com/5ATWUDj.jpg",
          alt: "Camacho's Resort",
          url: "https://burningal15.github.io/landing-page-resort/",
          description: "Web Page made with simple HTML, CSS"
        },
        {
          id: 1,
          icon: "https://i.imgur.com/9Z6O8J3.png",
          alt: "Fat Cat Game Studio",
          url: "https://burningal15.github.io/FatCatGameStudioWebPage/#/",
          description:
            "Web Page made with Vue.JS and a really simple backend that calls data from a json in heroku"
        },
        {
          id: 2,
          icon: "https://i.imgur.com/By6mTMS.jpg",
          alt: "Sabor a Perú",
          url: "https://burningal15.github.io/sabor_a_peru/",
          description: "Web Page made with simple HTML, CSS and bootstrap"
        },
        {
          id: 3,
          icon: "https://i.imgur.com/nynUaHM.jpg",
          alt: "Visit Tulúm",
          url: "http://fundajs-aldhairvera.surge.sh/",
          description: "Web Page made with simple HTML, CSS and Javascript"
        },
        {
          id: 4,
          icon: "https://i.imgur.com/9ZiQuQc.jpg",
          alt: "Coffee and Cake",
          url: "https://burningal15.github.io/CakeNCoffee-JS/",
          description: "Web Page made with simple HTML, CSS and Javascript"
        },
        {
          id: 5,
          icon: "https://i.imgur.com/0oigOYw.png",
          alt: "Healthy Recipees",
          url: "https://burningal15.github.io/RecipeApp/",
          description: "Web Page made with React.JS"
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