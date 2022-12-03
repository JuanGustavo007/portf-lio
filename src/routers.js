import PrincipalComponent from "@/components/cv/PrincipalComponent.vue";
import ContatoComponent from "@/views/ContatoComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import HtmlComponent from "@/components/certificadosComponents/HtmlComponent.vue";
import JavascriptComponent from "@/components/certificadosComponents/JavascriptComponent.vue";
import BootstrapComponent from "@/components/certificadosComponents/BootstrapComponent.vue";
import MicrosoftComponent from "@/components/certificadosComponents/MicrosoftComponent.vue";
import CertificacoesComponent from "@/components/cv/CertificacoesComponent.vue";

const routes = [
  {
    path: "/",
    component: PrincipalComponent,
    name: "principal",
    children: [
      {
        path: "",
        name: "certificacoes",
        component: CertificacoesComponent,
        children: [
          {
            path: "",
            name: "html",
            component: HtmlComponent,
          },
          {
            path: "",
            name: "javascript",
            component: JavascriptComponent,
          },
          {
            path: "",
            name: "bootstrap",
            component: BootstrapComponent,
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
