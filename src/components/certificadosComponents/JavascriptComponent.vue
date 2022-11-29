<template>
  <div>
    <img
      src="@/assets/imgs/certificados/js.png"
      alt=""
      class="img-fluid"
      :class="estilos"
      :style="{ border: borda }"
    />
  </div>
</template>

<script>
export default {
  name: "JavascriptComponent",
  props: ["estilos", "borda"],
};
</script>

<style scoped>
img {
  max-height: 600px;
}
</style>
