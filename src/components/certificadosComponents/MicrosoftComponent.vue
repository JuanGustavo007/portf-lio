<template>
  <div class="pintar">
    <div class="segurar">
      <h1 class="titulo">Certificação AI-900</h1>
      <p>
        O curso de Introdução a inteligencia artificial foi proporcionado pela
        parceria da minha faculdade Fatec com o instituto Senai. Neste curso,
        foi mostrado os principais conceitos da inteligencia artificial na
        plataforma Azure.
      </p>
      <p class="texto">
        Foram 2 semanas de estudo intensivo, onde o professor mostro diversos
        tópicos da inteligencia artificial e como utiliza-la dentro da
        plataforma Azure. As aulas eram iniciadas com a teoria e depois iamos
        para a pratica.
      </p>
      <h3 class="mt-4">Instituição: <span>Microsoft</span></h3>
      <h4 class="mt-4">Carga horária: <span>40 Horas</span></h4>
      <h3 class="mt-4">
        Início: <span>03/10/2022</span> - Conclusão: <span>18/10/2022</span>
      </h3>

      <a
        href="https://www.credly.com/badges/09b2d2e0-8953-45aa-9735-7baa3b2ef7b8/linked_in_profile"
        target="_blank"
        ><img src="@/assets/imgs/export.png" alt="" width="20px" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.pintar {
  background-color: yellow;
  padding: 40px;
  border: 2px solid black;
}
.titulo {
  border-bottom: 1px solid black;

  font-family: "Poppins", sans-serif !important;
  text-transform: uppercase !important;
}
.segurar {
  padding: 5px;
  border: 2px solid black;
}
span {
  padding: 2px;
  background-color: purple;
  border: 2px solid black;
  color: white;
}
.texto {
  border-bottom: 1px solid black;
}
span {
  font-size: 1rem;
}

h3,
h4 {
  font-size: 1.2rem;
  border-bottom: 1px solid black;
  padding: 5px;
}

@media screen and (min-width: 375px) and (max-width: 463px) {
  .titulo {
    font-size: 1.2rem !important;
    text-align: center;
  }
  .pintar {
    padding: 20px;
  }

  span {
    font-size: 0.6rem;
  }
  h3,
  h4 {
    font-size: 0.8rem;
  }
  p {
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 375px) {
  .titulo {
    font-size: 1.2rem;
  }
}
</style>

<style scoped>
img {
  max-height: 600px;
}
</style>
