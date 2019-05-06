<template>
  <div id="app" v-on:selectPhoto="currentView='SinglePhoto'">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <navbar :selectPhoto="selectPhoto" :uploadPhoto="uploadPhoto"/>
    <allPhotos v-if="currentView === 'AllPhotos'" :selectPhoto="selectPhoto"/>
    <singlePhoto v-if="currentView === 'SinglePhoto'" :selectedPhoto="selectedPhoto"/>
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
    currentView: "AllPhotos",
    selectedPhoto: ""
  }),
  methods: {
    selectPhoto: function(photo, newView) {
      this.selectedPhoto = photo;
      this.currentView = newView;
    },
    uploadPhoto: function() {
      //
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
