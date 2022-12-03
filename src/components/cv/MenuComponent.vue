<template>
  <header id="header" class="p-5">
    <a id="logo" href="" class="nome">&lt;Juan G./&gt;</a>
    <nav id="nav">
      <button
        aria-label="Abrir Menu"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="menu"
        id="btn-mobile"
        @click="toggleMenu"
      >
        <span id="hamburger"></span>
      </button>
      <ul id="menu" role="menu">
        <li><a href="/" @click="ir">Sobre</a></li>
        <li><a href="#projetos" @click="ir">Projeto</a></li>
        <li><a href="#certificacoes" @click="ir">Certificações</a></li>
        <li><router-link to="/ContatoComponent">Mensagem</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a:hover {
  color: #07e66d;
  background-color: white;
  text-shadow: 1px 1px black;
}
.nome {
  color: #07e66d;
  text-shadow: 2px 2px #214446;
  text-decoration: none;
}
.nome:hover {
  color: white;
}

body,
ul {
  margin: 0px;
  padding: 0px;
}

a {
  color: white;
  text-decoration: none;
  font-family: sans-serif;
  text-transform: uppercase;
}
li {
  display: flex;
  align-items: center;
}

#logo {
  font-size: 1.5rem;
}

#header {
  box-sizing: border-box;
  height: 70px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(40, 42, 45);
}

#menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

#menu a {
  display: block;
  padding: 0.5rem;
}

#btn-mobile {
  display: none;
}

li {
  border: 1px solid white;
}
@media (max-width: 600px) {
  #menu {
    display: block;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background-color: white;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
  #nav.active #menu {
    height: calc(100vh - 70px);
    visibility: visible;
    overflow-y: auto;
  }
  #menu a {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    color: black;
  }
  li {
    border-bottom: 1px solid black;
  }
  #btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
  #hamburger {
    border-top: 2px solid;
    width: 20px;
  }
  #hamburger::after,
  #hamburger::before {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  #nav.active #hamburger {
    border-top-color: transparent;
  }
  #nav.active #hamburger::before {
    transform: rotate(135deg);
  }
  #nav.active #hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
</style>

<script>
export default {
  methods: {
    toggleMenu(event) {
      const btnMobile = document.getElementById("btn-mobile");
      console.log(btnMobile);
      const button = event.currentTarget;
      const nav = document.getElementById("nav");
      if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
          nav.classList.remove("active");
          button.setAttribute("aria-expanded", "false");
          button.setAttribute("aria-label", "Abrir Menu");
        } else {
          nav.classList.add("active");
          button.setAttribute("aria-expanded", "true");
          button.setAttribute("aria-label", "Fechar Menu");
        }
      }
    },
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

  mounted() {},
};
</script>
