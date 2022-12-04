<template>
  <div class="pintar">
    <div class="segurar">
      <h1 class="titulo">Curso de Javascript & Jquery</h1>
      <p>
        O curso de Javascript & Jquery realizado na origamid, mostra como usar o
        Javascript de forma mais simplificada que o Jquery tem como conceito, ou
        seja, simplificar o que a linguagem JS oferece.
      </p>
      <p class="texto">
        As aulas eram iniciadas explicando os conceitos e posteriormente eram
        realizadas atividades práticas, como: animações de scroll, slide,
        menu-mobile, eventos e manipulação do DOM.
      </p>
      <h3 class="mt-4">Instituição: <span>Origamid</span></h3>
      <h4 class="mt-4">Carga horária: <span>18 Horas</span></h4>
      <h3 class="mt-4">
        Início: <span>22/06/2022</span> - Conclusão: <span>03/09/2022</span>
      </h3>

      <a href="https://www.origamid.com/certificate/083ac18b" target="_blank"
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
    font-size: 1rem !important;
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
