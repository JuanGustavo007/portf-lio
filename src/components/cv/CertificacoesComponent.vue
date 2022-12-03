<template>
  <div class="container-fluid">
    <div class="container" id="certificacoes" @scroll="altura($event)">
      <h1 class="mb-4"><span>Certificações</span></h1>
      <div class="divisao"></div>
      <div class="row mt-5">
        <div
          class="col-2 botoes gap-4 mb-4 p-3 d-flex flex-column justify-content-center"
        >
          <ul class="d-flex flex-column justify-content-center">
            <router-link :to="{ name: 'html' }" class="botao html w-100">
              Html
            </router-link>
            <router-link :to="{ name: 'javascript' }" class="botao js w-100">
              Javascript
            </router-link>
            <router-link
              :to="{ name: 'bootstrap' }"
              class="botao bootstrap w-100"
            >
              Bootstrap
            </router-link>
            <router-link :to="{ name: 'microsoft' }" class="botao ai w-100">
              AI-900
            </router-link>
          </ul>
        </div>
        <div class="col">
          <div>
            <keep-alive>
              <transition
                name="fade"
                mode="out-in"
                enter-active-class="animate__animated animate__fadeInRight"
                leave-active-class="animate__animated animate__fadeOutLeft"
              >
                <router-view class="rota"></router-view>
              </transition>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rota {
  max-height: 100%;
}
.botoes {
  max-height: 600px;
}
.botao {
  padding: 10px;
  background-color: yellow;
  border: 2px solid black;
  border-radius: 8px;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  width: 150px;
  text-align: center;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.botao:hover {
  transition: ease-in;
  transition-duration: 0.3s;
}

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
ul {
  padding: 0;
  gap: 20px;
}

#certificacoes {
  padding-bottom: 4rem;
  padding-top: 4rem;
}

.container-fluid {
  background-color: rgb(128, 0, 128);
  border-bottom: 4px solid black;
  border-top: 4px solid black;
  overflow-x: hidden;
  overflow-y: hidden;
}
.botao-ativo {
  background-color: #2f3136;
}
.router-link-active {
  background-color: #2f3136;
  border-color: rgba(0, 128, 0, 0.3);
  color: white;
}

@media screen and (max-width: 992px) {
  .row {
    display: flex;
    flex-direction: column;
  }
  ul {
    display: flex;
    flex-direction: row !important;
  }
  .botoes {
    width: 100%;
  }
}
@media screen and (max-width: 500px) {
  .botao {
    font-size: 0.8rem;
    padding: 5px;
  }
  .botoes {
    margin-bottom: 0 !important;
  }
  ul {
    gap: 5px;
  }
}
</style>

<script>
export default {
  name: "CertificacoesComponent",
  components: {},
  data() {
    return {
      ativo: "HtmlComponent",
      carregado: true,
    };
  },
  methods: {
    mudar(e) {
      e.preventDefault();
    },
  },
};
</script>
