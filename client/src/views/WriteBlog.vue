<template>
  <div class="write-container">
    <header class="write-header">
      <input
        type="text"
        placeholder="请输入标题..."
        class="title"
        v-model="title"
        style="border: none"
      />
      <div v-if="!showCategory">
        <el-button type="primary" @click="handleShow">发布文章</el-button>
        <el-button type="primary" plain @click="handleShow2"
          >存入草稿</el-button
        >
      </div>
    </header>
    <mavon-editor class="editor" v-model="content" :ishljs="true" />
    <div v-if="showCategory" class="box">
      <el-select
        v-model="category"
        placeholder="请选择分类"
        filterable
        allow-create
      >
        <el-option
          v-for="item in categoryList"
          :key="item.category_id"
          :label="item.category_name"
          :value="item.category_name"
        >
        </el-option>
      </el-select>
      <el-button type="primary" style="margin-left: 15px" @click="handlePublish"
        >确定</el-button
      >
      <el-button type="primary" plain @click="hideShow">取消</el-button>
    </div>
  </div>
</template>

<script>
import { writeBlog, addCatrgory } from "../http/api";
export default {
  name: "WriteBlog",
  data() {
    return {
      title: "",
      content: "",
      category: "",
      isdraft: false,
      showCategory: false,
      status: false,
    };
  },
  // created() {
  //   console.log(this.categoryList, "categoryList");
  // },
  computed: {
    categoryList() {
      return this.$store.getters.getCategoryList;
    },
    getUser() {
      return this.$store.getters.getUserInfo;
    },
  },
  methods: {
    handleShow() {
      if (!this.title) {
        this.$message.error(`必须输入标题`);
      } else {
        this.showCategory = true;
      }
    },
    handleShow2() {
      this.showCategory = true;
      this.isdraft = true;
    },
    async handlePublish() {
      console.log(
        this.title,
        this.content,
        this.category,
        this.getUser.user_id,
        this.getUser.username,
        this.isdraft,
        this.categoryList,
        "value"
      );
      for (let i of this.categoryList) {
        if (i.category_name == this.category) {
          this.status = true;
        }
      }
      if (this.status) {
        await addCatrgory({ category: this.category });
      }
      await writeBlog({
        title: this.title,
        content: this.content,
        category: this.category,
        user_id: this.getUser.user_id,
        auth: this.getUser.username,
        isdraft: this.isdraft,
      })
        .then((res) => {
          if (res.code === "10401") {
            this.$message({
              message: `${res.msg}`,
              type: "success",
            });
          } else {
            this.$message.error(`${res.msg}`);
          }
        })
        .then(() => {
          this.$router.push({ path: "/" });
        });
    },
    hideShow() {
      this.showCategory = false;
    },
    handChange(data) {
      console.log("bb", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.write-header {
  width: 96%;
  height: 60px;
  display: flex;
  align-items: center;
  .title {
    height: 100%;
    flex: 1 1 auto;
    border: none;
    padding-left: 36px;
    font-size: 22px;
    // color: #757575;
  }
}
.title::-webkit-input-placeholder {
  font-size: 22px;
}
.editor {
  height: calc(100vh - 60px);
}
.box {
  position: fixed;
  top: 15px;
  right: 0;
  // border: 1px solid #f3f3f4;
  z-index: 9999;
}
</style>
