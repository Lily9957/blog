<template>
  <div class="auth">
    <div class="avatar-box">
      <div class="avatarimg">{{ this.getUser.username[0] }}</div>
      <span class="name">{{ this.getUser.username }}</span>
    </div>
    <div class="s"><i class="el-icon-message-solid ic"></i>参与讨论 0</div>
    <div class="s">
      <i class="el-icon-video-camera-solid ic"></i>文章被阅读 0
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  computed: {
    getUser() {
      return this.$store.getters.getUserInfo;
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  padding: 30px 20px;
  background-color: #fff;

  .avatar-box {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #f3f3f4;
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
    .name {
      font-size: 16px;
      font-weight: 600;
      margin-left: 20px;
    }
  }
  .s {
    padding: 10px 0;
    .ic {
      width: 30px;
      height: 30px;
      font-size: 20px;
      color: #7bb9ff;
      margin-right: 10px;
      background-color: #e1efff;
      text-align: center;
      line-height: 30px;
      border-radius: 50%;
    }
    // vertical-align: middle;
    // .el-icon-chat-line-round {
    //   width: 20px;
    //   height: 20px;
    //   background-color: aqua;
    // }
  }
}
</style>
