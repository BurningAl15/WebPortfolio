<template>
  <footer>
    <div class="copy">
      <p>All rights reserved 2020.</p>
    </div>
    <div class="container">
      <div class="footer-redes">
        <a href="https://github.com/BurningAl15" target="_blank">
          <i class="fab fa-codepen"></i>
        </a>
        <a href="https://codepen.io/burningal15" target="_blank">
          <i class="fab fa-github"></i>
        </a>

        <a href="https://aldhairvera.studio" target="_blank">
          <i class="far fa-user-circle"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  background: #f3f4fa;
  padding: 54px 0;
  text-align: center;

  .copy {
    color: #979797;
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 15px;
  }
  .footer-redes {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    i {
      color: rgb(202, 202, 202);
      transition: all 0.3s ease;

      &:hover {
        color: rgb(155, 155, 155);
        transform: scale(1.5, 1.5);
      }
    }
  }
}
</style>
