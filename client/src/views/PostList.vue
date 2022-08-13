<template>
  <div class="post-list">
    <div v-if="!items.length">
      <el-empty description="暂时还没有该分类文章哦~"></el-empty>
    </div>
    <template v-else>
      <div class="num">文章总共有{{ items.length }}</div>
      <div v-for="(item, index) of items" :key="index + 'b'">
        <post-item :item="item"></post-item>
      </div>
    </template>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import { allBlogs, categoryBlogs } from "@/http/api";
export default {
  name: "PostList",
  components: {
    PostItem,
  },
  data() {
    return {
      items: [],
      lists: [],
    };
  },
  async mounted() {
    const result = await allBlogs();
    if (result.code === "10403") {
      this.items = result.data;
      this.lists = result.data;
    } else {
      this.$message.console.error(`${result.msg}`);
    }
  },
  computed: {
    category() {
      return this.$store.getters.getCategoryName;
    },
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
  },
  watch: {
    category: async function (newVal) {
      console.log(newVal, "newValue");
      if (newVal === "all") {
        this.items = this.lists;
      } else {
        let res = await categoryBlogs(newVal);
        this.items = res.data;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.post-list {
  // width: 80%;
  // padding: 20px;
  width: calc(100vw - 660px) !important;

  overflow: hidden;
}
.num {
  // position: fixed;
  // right: 0;
  // width: 30px;
  height: 30px;
  background-color: #fff;
}
</style>
