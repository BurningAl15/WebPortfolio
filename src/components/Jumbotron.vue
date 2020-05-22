<template>
  <section class="banner">
    <b-jumbotron>
      <div class="texto-banner">
        <h1 class="display-3">Aldhair Vera</h1>

        <p class="lead">Front-End Developer</p>

        <p class="specilities">HTML / CSS / JS / React JS / Vue JS</p>
      </div>
    </b-jumbotron>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner {
  width: 100%;
  position: relative;
}

.jumbotron {
  //
  width: 100%;
  height: 100vh;
  background-image: url(../assets/body/jumbotron.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: auto;
  .texto-banner {
    display: inline-block;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.61);

    padding: 25px 0;

    .display-3 {
      font-size: 6.0625rem;
      font-weight: 700;
      line-height: 90px;
      margin-bottom: 30px;
    }
    .lead {
      font-size: 3rem;
    }
    .specilities {
      font-size: 2rem;
    }
  }
}

@media (max-width: 1400px) {
  .jumbotron {
    .texto-banner {
      width: 90%;
    }
  }
}
</style>
