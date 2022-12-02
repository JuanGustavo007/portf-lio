<template>
  <div class="container mb-3 p-5" id="certificacoes" @scroll="altura($event)">
    <h1 class="mb-4"><span>Certificações</span></h1>
    <div class="divisao"></div>
    <div class="botoes d-flex justify-content-center gap-4 mb-4 p-3">
      <button
        :to="{ name: 'html' }"
        class="botao html"
        @click="ativo = 'HtmlComponent'"
      >
        Html
      </button>
      <button
        :to="{ name: 'javascript' }"
        class="botao js"
        @click="ativo = 'JavascriptComponent'"
      >
        Javascript
      </button>
      <button
        :to="{ name: 'bootstrap' }"
        class="botao bootstrap"
        @click="ativo = 'BootstrapComponent'"
      >
        Bootstrap
      </button>
      <button
        :to="{ name: 'microsoft' }"
        class="botao ai"
        @click="ativo = 'MicrosoftComponent'"
      >
        AI-900
      </button>
    </div>
    <div class="container d-flex justify-content-center certificados">
      <keep-alive>
        <transition name="fade" mode="out-in">
          <component :is="ativo"></component>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}

img {
  max-width: 100%;
  display: block;
}
.botoes {
  max-height: 600px;
}
.botao {
  padding: 10px;
  background-color: #282a2d;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  width: 150px;
  text-align: center;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.botao:hover {
  transition: ease-in;
  transition-duration: 0.3s;
}
.router-link-exact-active {
  background-color: rgba(70, 235, 97);
  color: black;
}

.animate__animated.animate__fadeIn {
  --animate-duration: 0.3s;
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

.divisao {
  height: 2px;
  background-color: #000;
  margin-bottom: 20px;
}
@media screen and (max-width: 543px) {
  .botao {
    font-size: 0.8rem;
    width: 200px;
  }
  .botoes {
    gap: 10px !important;
    padding: 0 !important;
  }
  #certificacoes {
    padding-top: 50px !important;
    padding-bottom: 50px !important;
  }
}
</style>

<script>
import BootstrapComponent from "../certificadosComponents/BootstrapComponent.vue";
import HtmlComponent from "../certificadosComponents/HtmlComponent.vue";
import JavascriptComponent from "../certificadosComponents/JavascriptComponent.vue";
import MicrosoftComponent from "../certificadosComponents/MicrosoftComponent.vue";
import PadraoComponent from "../certificadosComponents/PadraoComponent.vue";

export default {
  name: "CertificacoesComponent",
  components: {
    JavascriptComponent,
    HtmlComponent,
    BootstrapComponent,
    MicrosoftComponent,
    PadraoComponent,
  },
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
