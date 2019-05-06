
<template>
  <div>
    <!-- <form onInputCapture="uploadPhoto(photo)"> -->
    <input type="file" id="file" ref="file" v-on:change="uploadPhoto">
    <button @click="clickInput">Upload</button>
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  // element: "p",
  name: "Upload",
  props: ["selectPhoto", "uploadPhoto"],
  methods: {
    // setInputRef: function(elt) {
    //   console.log("Set Input Ref working", elt);
    //   // element = elt;
    // },
    clickInput: function() {
      console.log("clickInput working!");
      this.$refs.file.click();
    }
  }
};
</script>

<style></style>
