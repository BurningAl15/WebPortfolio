<template>
  <section class="about-me">
    <div class="titulo-seccion">
      <h2>About Me</h2>
      <!-- <p></p> -->
    </div>
    <div class="container">
      <div class="info-left">
        <div class="contenido-info">
          <div class="icono-info">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div class="texto-info-base">
            <h4>Computer Science Student</h4>
            <p>At Universidad Peruana de Ciencias Aplicadas</p>
          </div>
        </div>
        <div class="contenido-info">
          <div class="icono-info">
            <i class="fas fa-award"></i>
          </div>
          <a
            class="link"
            href="https://platzi.com/@AldhairVera/curso/1657-beca-fb/diploma/detalle/"
            target="_blank"
          >
            <div class="texto-info">
              <h4>Front-End program</h4>
              <p>Facebook Developer Circle y Platzi</p>
            </div>
          </a>
        </div>
      </div>
      <div class="foto-right"></div>
    </div>

    <div class="container">
      <div class="foto-left"></div>
      <div class="info-right">
        <div class="contenido-info">
          <div class="icono-info">
            <i class="fas fa-code"></i>
          </div>
          <div class="texto-info-base">
            <h4>Experience working on multidisciplinary teams</h4>
            <p>
              I worked in some multidisciplinary teams and led some others, game
              development teams specially.
            </p>
          </div>
        </div>
        <div class="contenido-info">
          <div class="icono-info">
            <i class="fas fa-gamepad"></i>
          </div>
          <a class="link" href="https://aldhairvera.studio" target="_blank">
            <div class="texto-info">
              <h4>Self-Taught Game Developer</h4>
              <p>More than 3 years programming and designing videogames.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-me {
  background: #191919;
  padding: 50px 0;
  color: white;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    color: #fff;

    margin-bottom: 30px;

    .info-left {
      width: 50%;
      margin-right: 2.5%;
      .contenido-info {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;

        width: 100%;

        &:first-child {
          margin-bottom: 30px;
        }

        .icono-info {
          width: 5%;
          margin-right: 5%;
          i {
            font-size: 1.5rem;
            color: #fff;
          }
        }
        .texto-info-base {
          margin-left: 3%;

          h4 {
            font-size: 1.7rem;
            line-height: 24px;
            color: #fff;
            font-weight: 500;
            margin-bottom: 15px;
          }

          p {
            color: #979797;
            font-size: 1rem;
            font-weight: 400;
          }
        }
        .link {
          margin-left: 3%;
          text-decoration: none;
          transition: 0.3s ease;

          //   color: #fff;
          .texto-info {
            // width: 100%;
            h4 {
              font-size: 1.7rem;
              line-height: 30px;
              color: #fff;
              font-weight: 500;
              margin-bottom: 15px;
              transition: 0.3s ease;
            }
            p {
              color: #979797;
              font-size: 1rem;
              font-weight: 400;
              transition: 0.3s ease;
            }
          }

          &:hover {
            .texto-info {
              h4 {
                color: var(--purple);
              }
              p {
                color: #5e3f96;
              }
            }
          }
        }
      }
    }
    .foto-right {
      width: 40%;
      margin-left: 5%;

      height: 300px;
      box-shadow: 0px 9px 32px -1px rgba(0, 0, 0, 0.5);
      background-image: url(https://i.imgur.com/qJCTnZ2.jpg?2);
      background-position: center;
      background-size: cover;
    }
    .info-right {
      width: 50%;
      margin-right: 2.5%;
      .contenido-info {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;

        width: 100%;

        &:first-child {
          margin-bottom: 30px;
        }

        .icono-info {
          width: 5%;
          margin-left: 5%;
          i {
            font-size: 1.5rem;
            color: #fff;
          }
        }
        .texto-info-base {
          margin-left: 3%;

          h4 {
            font-size: 1.7rem;
            line-height: 24px;
            color: #fff;
            font-weight: 500;
            margin-bottom: 15px;
          }

          p {
            color: #979797;
            font-size: 1rem;
            font-weight: 400;
          }
        }
        .link {
          margin-left: 3%;
          text-decoration: none;
          transition: 0.3s ease;

          //   color: #fff;
          .texto-info {
            // width: 100%;
            h4 {
              font-size: 1.7rem;
              line-height: 30px;
              color: #fff;
              font-weight: 500;
              margin-bottom: 15px;
              transition: 0.3s ease;
            }
            p {
              color: #979797;
              font-size: 1rem;
              font-weight: 400;
              transition: 0.3s ease;
            }
          }

          &:hover {
            .texto-info {
              h4 {
                color: var(--purple);
              }
              p {
                color: #5e3f96;
              }
            }
          }
        }
      }
    }
    .foto-left {
      width: 40%;
      margin-right: 5%;

      height: 300px;
      box-shadow: 0px 9px 32px -1px rgba(0, 0, 0, 0.5);
      background-image: url(https://i.imgur.com/PIPRuiH.jpg?1);
      background-position: center;
      background-size: cover;
    }
  }

  .titulo-seccion {
    h2 {
      font-size: 3.125rem;
      margin-bottom: 3rem;
    }
  }
}
</style>
