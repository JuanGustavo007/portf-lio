import PrincipalComponent from "@/components/cv/PrincipalComponent.vue";
import ContatoComponent from "@/views/ContatoComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import CerticacoesComponent from "@/components/cv/CertificacoesComponent.vue";
import BoostrapComponent from "@/components/certificadosComponents/BootstrapComponent.vue";
import HtmlComponent from "@/components/certificadosComponents/HtmlComponent.vue";
import JavascriptComponent from "@/components/certificadosComponents/JavascriptComponent.vue";
import MicrosoftComponent from "@/components/certificadosComponents/MicrosoftComponent.vue";

const routes = [
  {
    path: "/",
    component: PrincipalComponent,
    name: "principal",
    children: [
      {
        path: "",
        name: "certificacoes",
        component: CerticacoesComponent,
        children: [
          {
            path: "html",
            name: "html",
            component: HtmlComponent,
          },
          {
            path: "",
            name: "bootstrap",
            component: BoostrapComponent,
          },

          {
            path: "",
            name: "javascript",
            component: JavascriptComponent,
          },
          {
            path: "",
            name: "microsoft",
            component: MicrosoftComponent,
          },
        ],
      },
    ],
  },
  {
    path: "/ContatoComponent",
    component: ContatoComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    console.log(to.hash);
  },
  routes,
});

export default router;
