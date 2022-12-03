<template>
  <div class="pintar">
    <div class="segurar">
      <h1 class="titulo">Curso de Bootstrap</h1>
      <p>
        O curso de booststrap realizado na Origamid me capacitou a utilizar os
        principais conceitos que a ferramenta utiliza, como: criação de modal,
        galeria de imagens, formulários, grid layout, navbar e carousel.
      </p>
      <p class="texto">
        As aulas eram iniciadas explicando os conceitos e a maneira correta em
        como se utilizar o bootstrap, posteriormente esses conceitos eram
        exercidos na prática com exercícios e ao final do curso um projeto
        prático.
      </p>
      <h3 class="mt-4">Instituição: <span>Origamid</span></h3>
      <h4 class="mt-4">Carga horária: <span>10 Horas</span></h4>
      <h3 class="mt-4">
        Início: <span>22/06/2022</span> - Conclusão: <span>03/09/2022</span>
      </h3>

      <a href="https://www.origamid.com/certificate/54daf362" target="_blank"
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

<script>
export default {
  name: "BootstrapComponent",
  props: ["borda", "estilos"],
};
</script>
