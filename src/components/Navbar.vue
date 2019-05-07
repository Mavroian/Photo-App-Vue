<template>
  <div>
    <button @click="selectPhoto('', 'AllPhotos')">Home</button>
    <upload
      :selectPhoto="selectPhoto"
      :uploadPhoto="uploadPhoto"
      :uploadPercentage="uploadPercentage"
    />
  </div>
</template>

<script>
import Upload from "./Upload";
export default {
  name: "Navbar",
  components: {
    upload: Upload
  },
  props: ["selectPhoto", "uploadPhoto", "uploadPercentage"]
};
</script>

<style></style>
