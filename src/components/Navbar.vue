<template>
  <div>
    <button @click="selectPhoto('', 'AllPhotos')">Home</button>
    <button @click="uploadPhoto()">Upload</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["selectPhoto", "uploadPhoto"]
};
</script>

<style></style>
