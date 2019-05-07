<template>
  <div id="app" v-on:selectPhoto="currentView='SinglePhoto'">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <navbar :selectPhoto="selectPhoto" :uploadPhoto="uploadPhoto"/>
    <allPhotos v-if="currentView === 'AllPhotos'" :selectPhoto="selectPhoto" :photos="photos"/>
    <singlePhoto v-if="currentView === 'SinglePhoto'" :selectedPhoto="selectedPhoto"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
import { saveObject } from "../utils";

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
    selectedPhoto: "",
    photos: []
  }),
  methods: {
    selectPhoto: function(photo, newView) {
      this.selectedPhoto = photo;
      this.currentView = newView;
    },
    uploadPhoto: function(event) {
      event.preventDefault();
      let file = event.target.files[0];
      saveObject(file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result, "helloooooo", typeof reader.result);
        let base64 = reader.result.slice(22, Infinity);
        this.photos.push(base64);
      };
    }
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
