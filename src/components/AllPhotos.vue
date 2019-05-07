<template>
  <div>
    <img
      class="allphotos"
      v-for="photo in photos"
      :key="Math.random()"
      :src="'data:img/png;base64,' + photo"
      @click="selectPhoto(photo, 'SinglePhoto')"
    >
  </div>
</template>

<script>
import { listObjects, getSingleObject } from "../../utils";

export default {
  name: "AllPhotos",
  data: () => ({}),
  props: ["selectPhoto", "photos"],
  methods: {},
  created() {
    listObjects()
      .then(result => result.slice(220, Infinity))
      .then(result => {
        return result;
      })
      .then(result => {
        return result.map((element, index) =>
          getSingleObject(element.Key).then(photo => {
            this.photos.push(photo);
          })
        );
      });
  }
};
</script>

<style>
.allphotos {
  width: 300px;
  height: 300px;
  margin: 10px;
}
</style>
