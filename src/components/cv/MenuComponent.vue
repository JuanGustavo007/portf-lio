<template>
  <header class="menu">
    <nav
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: rgb(40, 42, 45)"
    >
      <div class="container-fluid p-4">
        <h2 class="navbar-brand nome" href="#">&lt;Juan G./&gt;</h2>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <div class="d-flex menu-burger">
            <ul class="d-flex">
              <li>
                <a href="#sobre" class="bordinha" @click="ir">Sobre</a>
              </li>
              <li>
                <a href="#projetos" class="bordinha" @click="ir">Projetos</a>
              </li>
              <li>
                <a href="#certificacoes" class="bordinha" @click="ir"
                  >Certificações</a
                >
              </li>

              <router-link to="/ContatoComponent">
                <li class="contato">
                  <a href="" class="mensagem">Mensagem</a>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nome {
  color: #07e66d;
  text-shadow: 2px 2px #214446;
  text-decoration: none;
}
.nome:hover {
  color: white;
  cursor: pointer;
}
.menu {
  border-bottom: 3px solid black;
}
ul {
  list-style: none;
  gap: 5px;
}
li {
  padding: 5px 10px;
  border: 1px solid black;
}

a {
  color: white;
  text-decoration: none;
}
.bordinha {
  text-decoration: none;
  color: white;
}
.bordinha:hover {
  border-bottom: 1px solid white;
}

.contato {
  background-color: red;
  border: 2px solid black;
  color: white;
}
.contato a {
  text-shadow: 1px 1px 1px #000, -1px 1px 1px #000, 1px -1px 1px #000,
    -1px -1px 1px #000;
}

.contato:hover {
  cursor: pointer;
}
.mensagem {
  color: white;
}
.mensagem:hover {
  border-bottom: 1px solid white;
}
@media screen and (max-width: 768px) {
  ul {
    display: flex;
    flex-direction: column;
  }
  .menu-burger {
    display: flex;
    justify-content: center;
  }
  .menu-burger ul {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: end;
  }
  a {
    font-size: 10px;
  }
  li {
    height: 100%;
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 310px) {
  img {
    width: 15px;
  }
  a {
    font-size: 7px;
  }
  body {
    overflow-x: hidden;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: ["nome"],
  methods: {
    ir(e) {
      e.preventDefault();
      const element = e.target;
      const id = element.getAttribute("href");
      const sessao = document.querySelector(id).offsetTop;
      console.log(sessao);

      window.scroll({
        top: sessao - 10,
        behavior: "smooth",
      });

      // function scrollToSection(e) {
      //   e.preventDefault();
      //
      //   console.log(element);
      // }

      // menuLinks.forEach((link) => {
      //   link.addEventListener("click", scrollToSection);
      // });
      // console.log(menuLinks);
    },
  },
};
</script>
