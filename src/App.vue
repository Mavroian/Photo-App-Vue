<template>
  <div id="app" v-on:selectPhoto="currentView='SinglePhoto'">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <navbar/>
    <allPhotos v-if="currentView === 'AllPhoto'" :selectPhoto="selectPhoto"/>
    <singlePhoto v-if="currentView === 'SinglePhoto'" :currentView="currentView"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
export default {
  name: "App",
  components: {
    navbar: Navbar,
    allPhotos: AllPhotos,
    singlePhoto: SinglePhoto
  },
  data: () => ({
    title: "Photo Upload App",
    currentView: "AllPhoto",
    selectedPhoto: ""
  }),
  methods: {
    selectPhoto: function(photo) {
      this.selectedPhoto = photo;
      this.currentView = "SinglePhoto";
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
