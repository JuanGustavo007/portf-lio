<template>
  <div>
    <img
      src="@/assets/imgs/certificados/certificadoHtml.jpeg"
      alt=""
      class="img-fluid"
      :class="estilos"
      :style="{ border: borda }"
    />
  </div>
</template>

<style scoped>
img {
  max-height: 600px;
}
</style>
<script>
export default {
  name: "HtmlComponent",
  props: ["estilos", "borda"],
};
</script>
