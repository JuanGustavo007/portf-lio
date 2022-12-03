<template>
  <div class="pintar">
    <div class="segurar">
      <h1 class="titulo">Curso de HTML & CSS3</h1>
      <p>
        O curso de Html e Css foi o primeiro contato que eu tive com o
        front-end. Realizado na B7web, esse curso me mostrou como funciona uma
        página web e como las construi.
      </p>
      <p class="texto">
        As aulas eram dinâmicas, com teoria e prática logo em seguida. Durante o
        curso, foram realizados alguns projetos e um deles foi o clone de uma
        das páginas do Starbucks, usando as tags semânticas e a foi explicado o
        conceito de mobile-first (responsividade).
      </p>
      <h3 class="mt-4">Instituição: <span>B7web</span></h3>
      <h4 class="mt-4">Carga horária: <span>89 Horas</span></h4>
      <h3 class="mt-4">Conclusão: <span>15/01/2022</span></h3>

      <a
        href="https://alunos.b7web.com.br/media/certificates/certificado_2420898.jpg"
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

<script>
export default {
  name: "HtmlComponent",
  props: ["estilos", "borda"],
};
</script>
