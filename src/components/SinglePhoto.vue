<template>
  <div id="singlephoto">
    Hello World!!
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
#singlephoto {
  color: pink;
}
</style>
