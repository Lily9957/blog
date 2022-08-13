<template>
  <div class="detail-container">
    <div class="title">博客简介</div>
    <div class="content">
      <span
        >博客时间 是基于Vue开发的个人博客系统。本系统采用 Vue2 + axios + Koa
        技术栈，创建时间于2022年3月15日，作者李某某</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetail",
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.detail-container {
  padding: 20px 23px;
  background-color: #fff;
  width: 310px;
  height: 200px;
  box-sizing: border-box;
  margin: 0 auto;
  .title {
    font-size: 16px;
    height: 30px;
    line-height: 17px;
    border-bottom: 2px solid #f3f3f4;
  }
  .content {
    padding-top: 15px;
    height: 160px;
    line-height: 20px;
    text-align: start;
  }
}
</style>
