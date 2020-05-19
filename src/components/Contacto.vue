<template>
  <section class="contacto">
    <b-jumbotron>
      <div class="container">
        <div class="contenedor-formulario">
          <div class="formulario">
            <h2>Cuéntame sobre tu proyecto</h2>
            <p>Es increíble conocer gente que comparte sus ideas o sus deseos de crear cosas así que contactame sin miedo.</p>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-2" label="Tú nombre:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Aldhair Vera Camacho"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Tú email:"
                label-for="input-1"
                description="No voy a compartir tu correo con nadie"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="aldhair@aldhair.com"
                ></b-form-input>
              </b-form-group>

              <b-button class="boton" ype="submit" variant="primary">Envíar</b-button>
            </b-form>
          </div>
          <div class="foto"></div>
        </div>
      </div>
    </b-jumbotron>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
    }
  }
};
</script>

<style lang="scss">
.contacto {
  width: 100%;
  position: relative;
  .jumbotron {
    //

    background-image: url(../assets/body/jumbotron.jpg);
    padding: 190px 0;
    .contenedor-formulario {
      background: #fff;
      min-height: 485px;
      border-radius: 3px;
      box-shadow: 0px 9px 32px -1px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-between;
      .formulario {
        width: 50%;
        padding: 70px;
        h2 {
          font-size: 1.375rem;
          line-height: 24px;
          color: var(--purple);
          font-weight: 500;
          margin-bottom: 10px;
        }
        p {
          color: #979797;
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 30px;
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