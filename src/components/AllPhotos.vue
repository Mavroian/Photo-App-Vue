<template>
  <div>
    <img
      v-for="photo in photos"
      :key="photo"
      :src="'data:img/png;base64,' + photo"
      @click="selectPhoto(photo, 'SinglePhoto')"
    >
  </div>
</template>

<script>
import { listObjects, getSingleObject } from "../../utils";

export default {
  name: "AllPhotos",
  data: () => ({
    photos: []
  }),
  props: ["selectPhoto"],
  methods: {},
  beforeMount() {
    console.log("Hello world!");
    listObjects()
      .then(result => result.slice(0, 10))
      .then(result => {
        console.log(result);
        return result;
      })
      .then(result => {
        return result.map((element, index) =>
          getSingleObject(element.Key).then(photo => {
            this.photos.push(photo);
            // console.log(this.photos);
          })
        );
        // console.log(result);
        // return result;
      });
  }
};
</script>

<style></style>
