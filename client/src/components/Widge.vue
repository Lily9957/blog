<template>
  <div class="widge-container">
    <div class="title">热门博客</div>
    <ul class="content">
      <li class="detail" v-for="(item, index) in hotList" :key="index + 'h'">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { hotPosts } from "../http/api";
export default {
  name: "Widge",
  data() {
    return {
      hotList: [],
    };
  },
  async created() {
    const res = await hotPosts();
    if (res.code === "10412") {
      this.hotList = res.data;
    } else {
      this.$message.error(`${res.msg}`);
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.widge-container {
  box-sizing: border-box;
  width: 310px;

  padding: 20px 22px;
  background-color: #fff;
  margin: 25px auto 0 auto;
  .title {
    font-size: 16px;
    height: 30px;
    line-height: 17px;
    border-bottom: 2px solid #f3f3f4;
  }
  .content {
    list-style: none;
    .detail {
      line-height: 20px;
      margin: 8px 0;
      border-bottom: 1px solid #f3f3f4;
      padding: 3px 0;
    }
  }
}
</style>
