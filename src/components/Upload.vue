
<template>
  <div>
    <!-- <form onInputCapture="uploadPhoto(photo)"> -->
    <input type="file" id="file" ref="file" v-on:change="uploadPhoto" style="display:none">
    <br>
    <progress max="100" :value.prop="uploadPercentage" id="progressbar" style="width:1000px;"></progress>
    <button @click="clickInput">Upload</button>
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  // element: "p",
  name: "Upload",
  props: ["selectPhoto", "uploadPhoto", "uploadPercentage"],
  methods: {
    clickInput: function() {
      this.$refs.file.click();
    }
  }
};
</script>

<style></style>
