<template>
  <section class="contacto">
    <b-jumbotron>
      <div class="container">
        <div class="contenedor-formulario">
          <div class="formulario">
            <h2>Tell me about your project!</h2>
            <p>
              It's incredible to know people who shares their ideas or wishes to
              create some things, so contact me, i'll be glad to talk.
            </p>
            <!-- Default form contact -->
            <form @submit.prevent="sendEmail" name="contact" method="POST">
              <!-- Default input name -->
              <span>
                <i class="fas prefix fa-user"></i>
                <label for="defaultFormContactNameEx" class="grey-text">Your name</label>
              </span>

              <input
                type="text"
                name="name"
                id="defaultFormContactNameEx"
                class="form-control"
                placeholder="Aldhair Vera Camacho"
                v-model="name"
              />

              <br />

              <!-- Default input email -->

              <span>
                <i class="fas prefix fa-envelope"></i>
                <label for="defaultFormContactEmailEx" class="grey-text">Your email</label>
              </span>
              <input
                type="email"
                name="email"
                id="defaultFormContactEmailEx"
                class="form-control"
                placeholder="aldhair@aldhair.com"
                v-model="email"
              />

              <br />

              <!-- Default input subject -->
              <span>
                <i class="fas prefix fa-tag"></i>
                <label for="defaultFormContactSubjectEx" class="grey-text">Subject</label>
              </span>
              <input
                type="text"
                name="subject"
                id="defaultFormContactSubjectEx"
                class="form-control"
                placeholder="Cool message"
                v-model="subject"
              />

              <br />

              <!-- Default textarea message -->
              <span>
                <i class="fas fa-comment-dots"></i>
                <label for="defaultFormContactMessageEx" class="grey-text">Your message</label>
              </span>
              <textarea
                type="text"
                name="message"
                id="defaultFormContactMessageEx"
                class="form-control"
                rows="3"
                v-model="message"
              ></textarea>

              <div class="text-center mt-4">
                <button class="btn btn-outline-warning" type="submit">
                  Send
                  <i class="far fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
            <!-- Default form contact -->
          </div>
          <div class="foto"></div>
        </div>
      </div>
    </b-jumbotron>
  </section>
</template>

<script>
let emailjs = require("emailjs-com");
// import emailjs from 'emailjs-com';

export default {
  name: "Basic",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    sendEmail: e => {
      emailjs
        .sendForm(
          "gmail",
          "template_4gPAxasr_clone",
          e.target,
          "user_AkoqA7VBu4uVHrRTNQThf"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style lang="scss">
.contacto {
  width: 100%;
  position: relative;

  .jumbotron {
    background-image: url(../assets/body/jumbotron.jpg);
    padding: 160px 0;
    margin: 0px;

    .contenedor-formulario {
      background: rgba(0, 0, 0, 0.596);
      min-height: 485px;
      border-radius: 3px;
      box-shadow: 0px 9px 32px -1px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-between;
      .formulario {
        width: 50%;

        padding: 30px;

        h2 {
          font-size: 1.375rem;
          line-height: 24px;
          color: var(--purple);
          font-weight: 500;
          margin-bottom: 10px;
        }
        p {
          // color: #979797;
          color: #dfdfdf;

          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 30px;
        }

        form {
          color: #dfdfdf;

          i {
            margin-right: 10px;
          }

          label {
            margin-right: 0 !important;
            // font-size: 1.25rem !important;
          }

          .btn-outline-warning {
            color: var(--white);
            border-color: var(--white);
          }

          .btn-outline-warning:hover {
            color: var(--purple);
            background: var(--white);
          }
        }
      }
    }
    .foto {
      width: 50%;
      background-image: url(../assets/body/foto-contacto.jpg);
      background-size: cover;
    }
  }
}

.boton {
  width: 100%;
  border: none;
  border: 1px solid var(--purple);
  padding: 8px;
  background: var(--purple);
  color: #fff;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.7s ease;
}

// @media (max-width: 1400px) {
//   .jumbotron {

//   }
// }
</style>
