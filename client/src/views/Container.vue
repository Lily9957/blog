<template>
  <div id="container">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-container>
        <el-aside width="280px" class="left-aside">
          <category-list></category-list>
        </el-aside>
        <el-main>
          <post-list></post-list>
        </el-main>
        <el-aside width="350px">
          <right-aside></right-aside>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
import CategoryList from "@/components/CategoryList.vue";
import PostList from "./PostList.vue";
import RightAside from "./RightAside.vue";
export default {
  name: "Container",
  components: {
    MyHeader,
    CategoryList,
    PostList,
    RightAside,
  },
  created() {
    console.log(this.$store.getters.getUserInfo, "userinfo");
  },
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
#container {
  width: 100vw;
  height: 100vh;
}
.el-header {
  position: relative;
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 70px !important;
}
.el-container {
  height: 100vh;
  overflow-y: auto;
  background-color: #f3f3f4;
}

.el-aside {
  background-color: #f3f3f4;
  color: #333;
  // text-align: center;
  line-height: 200px;
  // margin-top: 20px;
  padding-top: 25px;
}
.left-aside {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  height: calc(100vh - 70px) !important;
}

.el-main {
  background-color: #f3f3f4;
  color: #333;
  // text-align: center;
  padding-top: 25px;
  // line-height: 160px;
  margin-left: 280px;
  // height: calc(100vh - 70px);
  // overflow: hidden;
  // height: calc(100vh - 70px) !important;
}
</style>
