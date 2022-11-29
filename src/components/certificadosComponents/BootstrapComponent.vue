<template>
  <div>
    <img
      src="@/assets/imgs/certificados/bootstrap.png"
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
  name: "BootstrapComponent",
  props: ["borda", "estilos"],
};
</script>
