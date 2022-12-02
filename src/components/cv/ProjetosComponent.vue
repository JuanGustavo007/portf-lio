<template>
  <div class="container-fluid p-5" id="projetos">
    <div class="container pt-5">
      <h1 class="mb-4"><span>Projetos</span></h1>
      <div class="divisao"></div>
    </div>
    <div class="container projs d-flex justify-content-between">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img
              src="@/assets/imgs/api.png"
              class="card-img-top"
              alt="valorant api"
            />
            <div class="card-body">
              <h5 class="card-title">Valorant</h5>
              <p class="card-text">
                O projeto usa uma api do jogo valorant, ele consiste em buscar
                informações sobre os personagens do jogo e também suas
                habilidades.Além disso, criei um filtro para buscar o personagem
                desejado e cada card leva para uma outra rota, que mostra mais
                sobre o personagem e em cada card tem a opção de retorno para a
                home do site.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Tecnologias: Html, Css, Booststrap, Vue(Vue router).
              </li>
            </ul>
            <div class="card-body d-flex align-items-end">
              <a
                href="https://thunderous-duckanoo-258987.netlify.app/"
                class="card-link btn btn-dark"
                target="_blank"
                >Visualizar</a
              >
              <a
                href="https://github.com/JuanGustavo007/valorantApi"
                class="card-link btn btn-dark"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="@/assets/imgs/projetos/loja.png"
              class="card-img-top"
              alt="Loja"
            />
            <div class="card-body">
              <h5 class="card-title">Loja</h5>
              <p class="card-text">
                Nesse projeto o intuito é simular uma loja de pedidos online. Eu
                estava estudando vuex no período da realização desse projeto, e
                achei interessante criar essa loja usando um estado global.
                Temos um carrinho que mostra os itens adicionados e que pode
                redirecionar (vue router) para outra página de finalização da
                compra (não tem api de pagamento é apenas uma simulação de uma
                loja).
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Tecnologias: Html, Css, Booststrap, Vue(Vue router e vuex).
              </li>
            </ul>
            <div class="card-body d-flex align-items-end">
              <a
                href="https://transcendent-biscotti-836802.netlify.app/"
                class="card-link btn btn-dark"
                target="_blank"
                >Visualizar</a
              >
              <a
                href="https://github.com/JuanGustavo007/loja"
                class="card-link btn btn-dark"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img
              src="@/assets/imgs/projetos/finance.png"
              class="card-img-top"
              alt="controle financeiro"
            />
            <div class="card-body">
              <h5 class="card-title">Controle financeiro</h5>
              <p class="card-text">
                Parecido com uma to-do list, o projeto tem como base calcular os
                custos dependendo da entrada do usuário, adicionando esses dados
                em uma lista to-do list e em cada valor adicionado dependendo do
                seu tipo (entrada ou saída) ele vai para o seu respectivo total.
                Além disso, existe um campo chamado "total" que faz o cálculo
                entre os valores positivos (entrada) e os negativos (saídas),
                sendo o calculo entrada - saídas = total.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Tecnologias: Html, Css, Booststrap, Vue.
              </li>
            </ul>
            <div class="card-body d-flex align-items-end">
              <a
                href="https://cheery-tapioca-0dd321.netlify.app/"
                class="card-link btn btn-dark"
                target="_blank"
                >Visualizar</a
              >
              <a
                href="https://github.com/JuanGustavo007/controle"
                class="card-link btn btn-dark"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="col">
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

        <div class="col">
          <div class="card h-100">
            <img
              src="@/assets/imgs/projetos/cep.png"
              class="card-img-top h-100"
              alt="localizador"
            />
            <div class="card-body">
              <h5 class="card-title">Localizador geográfico</h5>
              <p class="card-text">
                Criação de um localizador de CEP usando uma api.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Tecnologias: Html, Css, Javascript, Bootstrap.
              </li>
            </ul>
            <div class="card-body d-flex align-items-end">
              <a
                href="https://roaring-moxie-69fe11.netlify.app/"
                class="card-link btn btn-dark"
                target="_blank"
                >Visualizar</a
              >
              <a
                href="https://github.com/JuanGustavo007/apiCep"
                class="card-link btn btn-dark"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

span {
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
  background-color: #2f3136;
  color: white;
  text-shadow: 1px 1px 1px #000, -1px 1px 1px #000, 1px -1px 1px #000,
    -1px -1px 1px #000;
}

button {
  border-radius: 5px;
  padding: 5px 10px;
}

.container-fluid {
  background-color: #434242;
}
.divisao {
  height: 2px;
  background-color: #000;
  margin-bottom: 20px;
}
img {
  max-height: 380px;
  border-bottom: 3px solid black;
}

.arrumar {
  max-height: 300px;
}

@media screen and (max-width: 414px) {
  .card-text {
    font-size: 0.75rem;
  }
  .container-fluid {
    padding: 10px !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 991px) {
  p {
    font-size: 0.6rem;
  }
  img {
    height: 217px !important;
  }
  #projetos {
    padding: 30px 10px 30px 10px !important;
  }
}
</style>

<script>
export default {
  name: "ProjetosComponent",
  data() {
    return {};
  },
};
</script>
