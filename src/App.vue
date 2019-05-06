<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <navbar/>
    <allphotos/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    allphotos: AllPhotos
  },
  data: () => ({
    title: "Photo Upload App"
  })
};
</script>

<style>
#app {
  text-align: center;
}
</style>
