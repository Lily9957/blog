<template>
  <div id="h-container">
    <div class="logo" @click="goback">
      <img class="pic" src="../assets/logo.jpg" />
      <!-- <h4 class="title">MYBLOG</h4> -->
    </div>

    <div class="nav">
      <ul @click="handleClick">
        <li id="write">
          <i class="el-icon-s-data ic"></i>
          写博客
        </li>
        <li id="comments">
          <i class="el-icon-s-order ic"></i>
          留言
        </li>

        <li id="login" v-if="JSON.stringify(getUser) === '{}'">
          <i class="el-icon-s-custom ic"></i>去登陆
        </li>
        <li id="me" v-else><i class="el-icon-s-custom ic"></i>关于</li>
        <!-- <li><i class="el-icon-moon-night imax"></i></li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  methods: {
    handleClick(e) {
      console.log(e.target.id, "item");
      let name = e.target.id;
      this.$router.push({ path: `/${name}` });
    },
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
* {
  margin: 0;
  padding: 0;
}
// .c {
//   width: 100vw;
//   height: 100vh;
//   background-color: #5b5b5b;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 12;
// }
#h-container {
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
  .nav {
    position: relative;
    top: 0;
    right: 0;
    ul {
      height: 100%;
      list-style: none;
      display: flex;
      align-items: center;
      li {
        height: 100%;
        margin: 0 15px;
        color: #5b5b5b;
        cursor: pointer;
      }
      li:hover {
        color: #ff7317;
        border-bottom: 2px solid #ff7317;
        border-radius: 0 0 2px 2px;
        .ic,
        .imax {
          color: #ff7317;
        }
      }
    }
  }
}
.ic {
  font-size: 20px;
  color: #5b5b5b;
}
.imax {
  font-size: 30px;
  color: #5b5b5b;
  margin-top: 20px;
}
</style>
