<template>
  <div id="singlephoto">
    <img :key="selectedPhoto" :src="'data:img/png;base64,' + selectedPhoto">
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  props: ["selectedPhoto"]
};
</script>

<style>
</style>
