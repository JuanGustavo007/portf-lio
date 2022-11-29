<template>
  <div class="container-fluid bg-dark p-4 d-flex justify-content-between">
    <div
      class="container text-white text-center d-flex align-items-center justify-content-center flex-column"
    >
      <p>Criado e desenvolvido por Juan G.</p>
      <p>juangustavomonteiro@gmail.com</p>
    </div>
    <div class="redes d-flex">
      <a
        href="https://www.linkedin.com/in/juan-gustavo-28048b1b6/"
        target="_blank"
      >
        <img src="@/assets/imgs/link.png" alt="" />
      </a>
      <a href="https://github.com/JuanGustavo007" target="_blank">
        <img src="@/assets/imgs/git.png" alt="" />
      </a>
      <a
        href="https://www.dropbox.com/s/faxx38yl25fw4x4/cv.pdf?dl=0"
        target="_blank"
      >
        <img src="@/assets/imgs/curriculo.png" alt="" />
      </a>
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 50px;
}
p {
  margin-bottom: 0;
}

@media screen and (max-width: 500px) {
  img {
    width: 25px;
  }
  p {
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 310px) {
  img {
    width: 15px;
  }
}
</style>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      nome: "Juan Gustavo",
    };
  },
};
</script>
