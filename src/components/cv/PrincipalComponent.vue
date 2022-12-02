<template>
  <div>
    <section>
      <MenuComponent></MenuComponent>
    </section>
    <section>
      <FotoComponent></FotoComponent>
    </section>
    <section data-anime="right">
      <SobreComponent></SobreComponent>
    </section>
    <section data-anime="left">
      <ProjetosComponent></ProjetosComponent>
    </section>
    <section data-anime="right">
      <CertificacoesComponentVue></CertificacoesComponentVue>
    </section>
    <section data-anime="left">
      <FooterComponent></FooterComponent>
    </section>
  </div>
</template>

<script>
import MenuComponent from "./MenuComponent.vue";
import FotoComponent from "./FotoComponent.vue";
import SobreComponent from "./SobreComponent.vue";
import ProjetosComponent from "./ProjetosComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import CertificacoesComponentVue from "./CertificacoesComponent.vue";

export default {
  name: "PrincipalComponent",
  components: {
    MenuComponent,
    FotoComponent,
    SobreComponent,
    ProjetosComponent,
    FooterComponent,
    CertificacoesComponentVue,
  },

  // },
};
</script>

<style scoped></style>
