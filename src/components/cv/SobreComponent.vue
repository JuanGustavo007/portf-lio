<template>
  <div class="container-fluid mt-5 diga" id="sobre">
    <div class="container mt-4" :style="estilo">
      <div class="row container-espaco">
        <div class="col-md-4 col-sm-12 col-m-12 loop-espaco coluna-foto">
          <img
            src="@/assets/imgs/euloop.jpeg"
            alt="Esse é o loop"
            class="rounded loop"
          />
        </div>
        <div class="col align-self-center">
          <h1>Sobre</h1>
          <p>
            Atualmente sou estudante de gestão da tecnologia na FATEC de Jundiaí
            e gostaria muito de conseguir uma oportunidade na área de
            desenvolvimento de sistemas (Front-End). Acredito que a tecnologia é
            a fonte para o meu futuro e da sociedade de modo geral, pois ela
            proporciona a acessibilidade das informações que muitas das vezes
            poderiamos nao ter sem ela.
          </p>
          <p>Amo animais :D</p>
          <h1 class="mt-5">Hobbies e lazer</h1>
          <ul>
            <li>Musculação</li>
            <li>Viajar</li>
            <li>Games</li>
            <li>Séries e animes</li>
            <li>Dedicar meu tempo ao lado da minha família</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.digas {
  visibility: hidden;
}
h1,
p,
li {
  font-family: "Rubik", sans-serif;
}
.container-fluid {
  border-top: 3px solid black;
  background-color: rgb(40, 42, 45);
  border-bottom: 3px solid black;
}

h1 {
  color: rgb(0, 255, 242);
  font-family: "IBM Plex Sans", sans-serif;
  text-shadow: 1px 1px 1px #000, -1px 1px 1px #000, 1px -1px 1px #000,
    -1px -1px 1px #000;
  text-transform: uppercase;
  font-size: 2rem;
}
p {
  font-size: 1.2rem;
  color: white;
}

img {
  max-width: 100%;
  display: block;
  height: 500px;
  border: 3px solid black;
}
li {
  color: white;
}

/*Responsividade */
@media screen and (max-width: 767px) {
  .loop-espaco {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 474px) {
  img {
    max-height: 400px;
  }
}
@media screen and (min-width: 768px) and (max-width: 990px) {
  img {
    height: 300px;
  }
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>

<script>
export default {
  name: "SobreComponent",
  data() {
    return {
      estilo: {
        padding: "2rem",
      },
    };
  },
};
</script>
