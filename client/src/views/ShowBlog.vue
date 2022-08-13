<template>
  <div class="show">
    <div class="show-header">
      <my-header></my-header>
    </div>
    <article class="art">
      <post-detail></post-detail>
      <div class="right-model">
        <auth></auth>
        <widge></widge>
      </div>
    </article>
  </div>
</template>

<script>
import Auth from "../components/Auth.vue";
import PostDetail from "../components/PostDetail.vue";
import Widge from "../components/Widge.vue";
import MyHeader from "./Header.vue";
export default {
  name: "ShowBlog",
  components: {
    MyHeader,
    PostDetail,
    Auth,
    Widge,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.show {
  width: 100vw;
  height: 100vh;
  .show-header {
    height: 70px;
  }
  .art {
    // height: calc(100vh - 70px);
    background-color: #f3f3f4;
    padding-top: 1px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    // margin-top: 70px;
  }
  .right-model {
    width: 300px;
    height: 100%;
    // background-color: #fff;
    margin-top: 20px;
  }
}
</style>
