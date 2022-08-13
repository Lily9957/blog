<template>
  <div class="comment-list">
    <div class="com-avatar">
      <div class="avatar">{{ comment.user_name[0] }}</div>
    </div>
    <div class="author-info">
      <span class="author-name">{{ comment.user_name }}</span>
      <span class="author-time">{{ comment.moment }}</span>
      <div class="talk-box">
        {{ comment.com_content
        }}<span @click="handleShowReplay"
          ><i class="el-icon-s-comment"></i>回复</span
        >
      </div>
      <div class="replay-box" v-if="replays.length">
        <p
          style="margin: 10px 0"
          v-for="(item, index) in replays"
          :key="index + 're'"
        >
          {{ item.from_user }} 回复 {{ item.to_user }}:
          {{ item.re_content }}
        </p>
        <!-- <p style="margin: 10px 0">XXXX回复XXXX: content</p> -->
      </div>
      <div class="click-replay" v-if="showReplay">
        <el-input
          type="textarea"
          :placeholder="holder"
          v-model="replay_content"
          rows="3"
          resize="none"
        >
        </el-input>
        <el-button @click="handleAddReplay" class="btn">回复</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getReplay, addReplay } from "@/http/api";

export default {
  name: "CommentItem",
  props: ["comment"],
  data() {
    return {
      holder: "回复",
      showReplay: false,
      replay_content: "",
      replays: [],
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUserInfo;
    },
  },
  methods: {
    handleShowReplay() {
      this.showReplay = !this.showReplay;
    },
    // handleAddReplay() {
    //   this.$parent.sonClick();
    // },
    async handleAddReplay() {
      await addReplay({
        comment_id: this.comment.comment_id,
        from: this.getUser.username,
        to: this.comment.user_name,
        re_content: this.replay_content,
      }).then((res) => {
        if (res.code === "10601") {
          this.showReplay = false;
          this.re_content = "";
          this.handlegetReplay();
          this.$message({
            message: `${res.msg}`,
            type: "success",
          });
        } else {
          this.$message.error(`${res.msg}`);
        }
      });
    },
    async handlegetReplay() {
      await getReplay(this.comment.comment_id).then((res) => {
        if (res.code === "10603") {
          this.replays = res.data;
        } else {
          this.$message.error(`${res.msg}`);
        }
      });
    },
  },

  async mounted() {
    this.handlegetReplay();
  },
};
</script>

<style lang="scss" scoped>
.comment-list {
  padding: 20px;
  display: flex;
  // justify-content: s;
  .com-avatar {
    // float: left;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #409eff;
      line-height: 50px;
      text-align: center;
      font-size: 26px;
      color: white;
    }
  }
  .author-info {
    margin-left: 20px;
    width: 100%;
    // height: 64px;
    border-bottom: 2px solid #f3f3f4;
    .author-name {
      font-size: 16px;
      font-weight: 600;
      color: #586069;
    }
    .author-time {
      font-size: 12px;
      color: #999;
      margin-left: 20px;
    }
    .talk-box {
      margin-top: 10px;
      font-size: 14px;
      margin-bottom: 10px;
      span {
        margin-left: 20px;
        font-size: 14px;
        color: #8a919f;
        cursor: pointer;
        i {
          color: #8a919f;
        }
        &:hover {
          color: #409eff;
          i {
            color: #409eff;
          }
        }
      }
    }
    .replay-box {
      background-color: #efefef;
      width: 80%;
      margin-bottom: 10px;
      overflow: hidden;
      padding-left: 20px;
    }
    .click-replay {
      .btn {
        float: right;
        width: 74px;
        height: 30px !important;
        margin: 8px 0;
        font-size: 12px;
      }
    }
  }
}
</style>
