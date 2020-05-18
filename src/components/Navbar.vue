<template>
  <header>
    <div class="navbar">
      <a class="logo" href="#">
        <img :src="require('../assets/AldhairVeraIconNoBG.png')" alt />
      </a>
      <b-nav align="center">
        <b-nav-item active>Inicio</b-nav-item>
        <b-nav-item>Proyectos</b-nav-item>
        <b-nav-item>Sobre mí</b-nav-item>
        <b-nav-item>Contacto</b-nav-item>
      </b-nav>
      <div class="redes">
        <a href="https://github.com/BurningAl15" target="_blank">
          <i class="fab fa-codepen"></i>
        </a>
        <a href="https://codepen.io/burningal15" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navbar {
  width: 100%;
  min-height: 68px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0 36px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
  .logo {
    display: inline-block;
    width: 50px;
    img {
      width: 100%;
    }
  }
  .nav {
    .nav-item {
      a {
        color: rgb(192, 192, 192);

        display: inline-block;
        padding: 0 10px;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.3rem;
        letter-spacing: 0;
        line-height: 1.5em;
        transition: all 0.3s ease;

        &:hover {
          color: white;
          transform: scale(1.25, 1.25);
        }
      }
    }
  }
  .redes {
    width: 5%;
    display: flex;
    margin-right: 1%;
    flex-direction: row;
    justify-content: space-between;

    i {
      color: rgb(202, 202, 202);
      transition: all 0.3s ease;

      &:hover {
        color: white;
        transform: scale(1.5, 1.5);
      }
    }
  }
}
</style>
