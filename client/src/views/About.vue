<template>
  <div class="about-me">
    <div class="box-header">
      <header class="about-header">
        <div class="logo" @click="goback">
          <img class="pic" src="../assets/logo.jpg" />
          <!-- <h4 class="title">MYBLOG</h4> -->
        </div>
        <div class="avatar">
          <span class="s">创作者中心</span>
          <!-- <img
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            alt="avatar"
          /> -->
          <div class="avatarimg">{{ getUser.username[0] }}</div>
        </div>
      </header>
    </div>
    <div class="main" style="overflow: hidden">
      <div class="left-nav">
        <navi></navi>
      </div>
      <div class="right-con">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navi from "../components/About/Navi.vue";
export default {
  components: { Navi },
  name: "About",
  methods: {
    goback() {
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.getUserInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.about-me {
  box-sizing: border-box;
  .box-header {
    position: relative;
    height: 70px;
    z-index: 1;
    .about-header {
      position: fixed;
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f1f1f1;
      box-shadow: 0 4px 10px 0px rgba(234, 234, 234, 0.8);
      background-color: #fff;
      .logo {
        height: 70px;
        // padding: 0 15px;
        display: flex;
        align-items: center;
        color: #2b2b2b;
        cursor: pointer;
        .pic {
          height: 74px;
          margin-right: 5px;
          vertical-align: middle;
          border-style: none;
          max-width: 100%;
        }
        .title {
          margin: 0;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
        }
      }
      .avatar {
        display: flex;
        align-items: center;
        padding-right: 15px;
        .s {
          font-size: 16px;
          font-weight: 600;
          color: #1e80ff;
          padding-right: 15px;
        }
        .avatarimg {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #f6d013;
          line-height: 50px;
          text-align: center;
          font-size: 32px;
          color: white;
        }
      }
    }
  }

  .main {
    width: 100vw;
    height: calc(100vh - 70px);
    background-color: #f3f3f4;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    overflow: auto;
    .left-nav {
      width: 300px;
      background-color: #fff;
      margin-right: 15px;
    }
    .right-con {
      width: 60%;
      background-color: #fff;
    }
  }
}
</style>
