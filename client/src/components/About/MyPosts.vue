<template>
  <div class="my-posts">
    <header
      style="
        height: 56px;
        color: #409eff;
        border-bottom: 2px solid #f3f3f4;
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 56px;
        padding-left: 20px;
      "
    >
      已发布文章
    </header>
    <div v-if="!items.length">
      <el-empty description="暂时还没有内容哦~"></el-empty>
    </div>
    <template v-else>
      <div v-for="(item, index) of items" :key="index + 'my'">
        <post-item :item="item" :smore="showMore"></post-item>
      </div>
    </template>
  </div>
</template>

<script>
import { ownerBlogs } from "@/http/api";
import PostItem from "../PostItem.vue";
export default {
  name: "MyPosts",
  data() {
    return {
      items: [],
      showMore: true,
    };
  },
  components: {
    PostItem,
  },
  mounted() {
    this.getOwnBlogs(this.getUser.user_id);
  },
  computed: {
    getUser() {
      return this.$store.getters.getUserInfo;
    },
  },
  methods: {
    async getOwnBlogs(data) {
      await ownerBlogs(data).then((result) => {
        if (result.code === "10405") {
          this.items = result.data;
        } else {
          this.$message.console.error(`${result.msg}`);
        }
      });
    },
  },
};
</script>

<style></style>
