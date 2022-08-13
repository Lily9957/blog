<template>
  <div class="navi-container">
    <div class="avatar-box">
      <!-- <img
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        alt="avatar"
      /> -->
      <div class="avatar">{{ getUser.username[0] }}</div>
      <span class="name">{{ getUser.username }}</span>
    </div>
    <el-button type="primary" style="width: 84%; margin: 0 20px"
      >发布文章</el-button
    >
    <el-menu
      default-active="/posts"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#4f6174"
      :router="true"
    >
      <el-menu-item v-for="(item, i) in items" :key="i" :index="item.url">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navi",
  data() {
    return {
      items: [
        { name: "文章管理", url: "/posts" },
        { name: "草稿箱", url: "/draft" },
        { name: "个人中心", url: "/personal" },
      ],
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUserInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.navi-container {
  box-sizing: border-box;
  .avatar-box {
    width: 100%;
    height: 50px;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #f6d013;
      line-height: 60px;
      text-align: center;
      font-size: 32px;
      color: white;
    }
    .name {
      font-size: 16px;
      font-weight: 600;
      margin-left: 20px;
    }
  }
}
</style>
