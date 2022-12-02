import PrincipalComponent from "@/components/cv/PrincipalComponent.vue";
import ContatoComponent from "@/views/ContatoComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: PrincipalComponent,
    name: "principal",
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
