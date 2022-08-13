<template>
  <div class="right-container">
    <blog-deatil></blog-deatil>
    <widge></widge>
  </div>
</template>

<script>
import BlogDeatil from "../components/BlogDeatil.vue";
import Widge from "../components/Widge.vue";
export default {
  name: "RightAside",
  components: {
    BlogDeatil,
    Widge,
  },
};
</script>
<style lang="scss" scoped>
.right-container {
  width: 100%;
}
</style>
