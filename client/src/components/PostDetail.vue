<template>
  <div class="post-detail">
    <div class="content" v-html="markdown"></div>
    <!-- <h2>你好吗</h2>
    <p>我很好</p> -->
    <div class="comment-container">
      <h3 style="padding: 20px">参与评论</h3>
      <div class="box">
        <div class="avatar" v-if="showAvatar">
          <div class="avatarimg">{{ getUser.username[0] }}</div>
        </div>
        <div class="avatar" v-else>
          <div class="avatarimg">N</div>
        </div>
        <div class="com-form">
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="com_content"
            maxlength="10"
            rows="5"
            resize="none"
          >
          </el-input>
          <el-button type="primary" @click="handleComment" class="submit-btn"
            >发布评论</el-button
          >
        </div>
      </div>
      <div v-for="(item, index) in com_list" :key="index + 'com'">
        <comment-item :comment="item"></comment-item>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import { addComment, getComment } from "@/http/api";
import CommentItem from "./comments/CommentItem.vue";
export default {
  name: "PostDetail",
  data() {
    return {
      com_content: "",
      com_list: [],
      showAvatar: false,
    };
  },
  components: {
    CommentItem,
  },
  async created() {
    console.log(this.chooseItem, "hh");
    this.showComments(this.chooseItem.post_id);
  },
  computed: {
    chooseItem() {
      return this.$store.getters.getChoose;
    },
    getUser() {
      return this.$store.getters.getUserInfo;
    },
    markdown() {
      const md = new MarkdownIt();
      const result = md.render(this.chooseItem.content);
      return result;
    },
  },
  methods: {
    async handleComment() {
      if (JSON.stringify(this.getUser) === "{}") {
        this.$message.error(`请先登录`);
      } else {
        this.showAvatar = true;
        await addComment({
          user_name: this.getUser.username,
          com_content: this.com_content,
          post_id: this.chooseItem.post_id,
        }).then((res) => {
          if (res.code === "10501") {
            this.com_content = "";
            this.$message({
              message: `${res.msg}`,
              type: "success",
            });
          } else {
            this.$message.error(`${res.msg}`);
          }
        });
        this.showComments(this.chooseItem.post_id);
      }
    },
    async showComments(post_id) {
      const res = await getComment(post_id);
      if (res.code === "10503") {
        this.com_list = res.data;
      } else {
        this.$message.error(`${res.msg}`);
      }
    },
    // sonClick() {
    //   console.log(
    //     "!this.getUser",
    //     JSON.stringify(this.getUser) === "{}",
    //     this.getUser
    //   );
    // },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.post-detail {
  width: 56%;
  background-color: #f3f3f4;
  margin-top: 20px;
  margin-right: 20px;
  .content {
    width: 96%;
    margin: 0 auto;
    background-color: #fff;
    padding: 25px;
    box-sizing: border-box;
  }
  .comment-container {
    width: 96%;
    // height: 200px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #fff;
    .box {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .avatar {
        // float: left;
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
      .com-form {
        width: 85%;
        // margin-left: 20px;
        .submit-btn {
          float: right;
          width: 108px;
          height: 39px !important;
          margin-top: 8px;
        }
      }
    }
  }
}
</style>
