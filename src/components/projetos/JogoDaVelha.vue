<template>
  <div>
    <div class="card h-100">
      <img
        src="@/assets/imgs/projetos/jogo.png"
        class="card-img-top arrumar"
        alt="jogo da velha"
      />
      <div class="card-body">
        <h5 class="card-title">Jogo da velha</h5>
        <p class="card-text">Jogo da velha usando Javascript e Vue.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Tecnologias: Html, Css, Javascript, Vue.
        </li>
      </ul>
      <div class="card-body d-flex align-items-end">
        <a
          href="https://vocal-toffee-6ecebb.netlify.app/"
          class="card-link btn btn-dark"
          target="_blank"
          >Visualizar</a
        >
        <a
          href="https://github.com/JuanGustavo007/jogo-da-velha"
          class="card-link btn btn-dark"
          target="_blank"
          >Github</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JogoDaVelha",
};
</script>
