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
  created() {
    listObjects()
      .then(result => result.slice(0, 250))
      .then(result => {
        return result;
      })
      .then(result => {
        return result.map((element, index) =>
          getSingleObject(element.Key).then(photo => {
            this.photos.push(photo); //should make mutation for this change
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
