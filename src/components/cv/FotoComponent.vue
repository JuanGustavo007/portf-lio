<template>
  <div class="container mt-5">
    <div class="row linha">
      <div class="col-4 d-flex justify-content-center loop-espaco coluna-eu">
        <img src="@/assets/imgs/eu.jpeg" alt="" class="eu img-fluid" />
      </div>
      <div class="col-sm-7 col-lg-8 area-desenvolvedor">
        <h1>DESENVOLVEDOR <span class="efeito1">FRONT-END</span></h1>
        <p>Prazer, eu sou o Juan, tudo certo?</p>
        <div class="tech-icones">
          <img
            src="@/assets/imgs/techs/html5-plain.svg"
            alt=""
            class="icones icon1"
          />
          <img
            src="@/assets/imgs/techs/css3-plain.svg"
            alt=""
            class="icones icon2"
          />
          <img
            src="@/assets/imgs/techs/bootstrap-plain.svg"
            alt=""
            class="icones icon3"
          />
          <img
            src="@/assets/imgs/techs/javascript-plain.svg"
            alt=""
            class="icones icon4"
          />
          <img
            src="@/assets/imgs/techs/jquery-plain.svg"
            alt=""
            class="icones icon5"
          />

          <img
            src="@/assets/imgs/techs/typescript-plain.svg"
            alt=""
            class="icones icon6"
          />
          <img
            src="@/assets/imgs/certificados/badge.png"
            alt=""
            class="icones"
          />
        </div>
        <p class="mt-3 frase-motivacional">"{{ fraseFinal }}"</p>
        <br />
        <p class="artista">-A sociedade dos poetas mortos, o filme.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}
.tech-icones {
  display: flex;
  gap: 5px;
}
.eu {
  max-width: 100%;
  border-radius: 50%;
  border: 2px solid black;
  display: block;
}
.icones {
  width: 50px;
  height: 50px;
}
.area-desenvolvedor {
  align-self: center;
}
.frase-motivacional {
  font-size: 2rem;
  color: black;
  margin-bottom: 0;
  font-style: italic;
}

/*Responsividade */

@media screen and (max-width: 575px) {
  .row {
    display: flex;
    justify-content: center;
  }
  img {
    width: 400px;
    margin-bottom: 20px;
  }
  h1,
  p {
    font-size: 20px;
    text-align: center;
  }
  .coluna-eu {
    width: 100%;
  }
}

@media screen and (min-width: 410px) and (max-width: 575px) {
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 350px;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 408px) {
  .linha {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 1200px) {
  img {
    display: block;
    max-width: 100%;
  }
}

@media screen and (min-width: 769px) and (max-width: 991px) {
  .coluna-eu {
    display: flex;
    align-items: center;
  }
  img {
    height: 250px;
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .coluna-eu {
    display: flex;
    align-items: center;
  }
  img {
    height: 200px;
  }
}

@media screen and (max-width: 400px) {
  .icones {
    width: 40px;
  }
  .tech-icones {
    display: flex;
    justify-content: center;
  }
}

@media screen and (min-width: 576px) and (max-width: 619px) {
  .icones {
    width: 40px;
  }
  .row {
    grid-template-columns: 3;
    grid-auto-rows: 2;
  }
}
</style>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "FotoComponent",
  data() {
    return {
      frase: "Se não eu, quem? Se não agora, quando?",
      fraseFinal: "",
    };
  },
  beforeUnmount() {
    this.frase = "";
  },
  methods: {
    maquinaEscrever() {
      const textoArray = this.frase.split(""); //Criacao de um array com cada letra, para que cada uma tenha sua aniamação.
      textoArray.forEach((letra, i) => {
        setTimeout(() => {
          this.fraseFinal += letra;
        }, 30 * i);
      });
    },
  },

  mounted() {
    this.maquinaEscrever();
  },
};
</script>
