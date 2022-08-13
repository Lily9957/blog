<template>
  <div class="category-container">
    <el-menu
      default-active="all"
      class="el-menu-vertical-demo"
      background-color="#f3f3f4"
      text-color="#4f6174"
      @select="handleSelect"
    >
      <el-menu-item index="all">
        <i class="el-icon-star-on"></i>
        <span slot="title">全部文章</span>
      </el-menu-item>
      <el-menu-item
        v-for="(item, i) in lists"
        :key="i + 'ca'"
        :index="item.category_name"
      >
        <i class="el-icon-star-on"></i>
        <span slot="title">{{ item.category_name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { getCategory } from "@/http/api";
export default {
  name: "CategoryList",
  data() {
    return {
      lists: [],
    };
  },
  async mounted() {
    const result = await getCategory();
    if (result.code === "10301") {
      this.lists = result.data;
      this.$store.commit("setCategoryList", result.data);
    } else {
      this.$message.console.error(`${result.msg}`);
    }
  },
  methods: {
    handleSelect(item) {
      console.log("click", item);
      this.$store.commit("setCategoryName", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.category-container {
  width: 83%;
}
//设置了默认左边框为白色
.el-menu-item {
  // border-radius: 10px 0 0 10px;
  // border-left: #fff solid 6px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #4f6174;
  font-weight: 500;
  padding-left: 40px !important;
  // background-color: rgb(243, 243, 244);
  border-radius: 10px 0px 0px 10px;
  // i {
  //   font-size: 20px;
  //   color: #b5797c;
  // }
}
//设置鼠标悬停时el-menu-item的样式
.el-menu-item:hover {
  // border-left: #33a2ef solid 6px !important;
  background-color: #fff !important;
  color: #00bb9c !important;
  // color: #38b2ff !important;
  //less语法，实现鼠标悬停时icon变色
  i {
    font-size: 25px;
    color: #00bb9c;
  }
  box-shadow: 0 6px 10px 0px rgba(234, 234, 234, 0.8);
  transform: translateX(-3px);
  // filter: grayscale(1);
  transition: all 0.4s;
}
//设置选中el-menu-item时的样式
.el-menu-item.is-active {
  background-color: #fff !important;
  // color: #38b2ff !important;
  color: #00bb9c !important;
}
</style>
