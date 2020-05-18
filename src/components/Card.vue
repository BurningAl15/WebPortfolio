<template>
  <article class="card mb-4">
    <img
      :src="require(`@/assets/body/webProjects/${currentGame.icon}`)"
      :alt="`${currentGame.alt}`"
      class="card-img-top"
    />
    <div class="card-body">
      <h4 class="card-title">{{currentGame.alt}}</h4>
      <p class="card-text">{{currentGame.description}}</p>

      <a
        role="button"
        tabindex="0"
        :href="`${currentGame.url}`"
        target="_blank"
        class="btn btn-primary"
      >Check Me</a>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    game: Object
  },
  data() {
    return {
      currentGame: this.game
    };
  }
};
</script>

<style lang="scss">
.card {
  max-width: 30rem;
  background: #dbdbdb;
  //   box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.726);
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.726);
  transition: 0.3s ease;

  &:hover {
    background: #f1f1f1;
    transform: translate(0, -20px);
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.726);
  }
}
</style>
