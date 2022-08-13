<template>
  <div class="post-container">
    <el-card class="box-card">
      <div class="auth">
        <el-popover
          placement="top-start"
          width="200"
          title="李大哈"
          trigger="click"
        >
          <div>自我介绍: 我是李大哈, 专攻前端, 励志成为全栈！</div>
          <div>github: https://github.com/Lily9957</div>
          <div>email: 1554679603@qq.com</div>
          <el-button
            slot="reference"
            style="width: 50px; border: none; text-align: left"
            v-if="!smore"
            >{{ item.auth }}</el-button
          >
        </el-popover>
        <!-- <span style="margin-right: 8px">{{ item.auth }}</span> -->
        <span>{{ item.publish_time }}</span>
        <i
          class="el-icon-more"
          style="float: right; font-size: 18px; cursor: pointer"
          @click="showMore"
          v-if="smore"
        ></i>
        <ul class="more" v-if="more">
          <li>编辑</li>
          <li @click="handelDelete(item)">删除</li>
        </ul>
      </div>
      <h4 @click="seeBlog(item)">{{ item.title }}</h4>
      <div class="floor">
        <span><i class="el-icon-location-outline"></i>{{ item.category }}</span>
        <span><i class="el-icon-view"></i>{{ item.preview }}</span>
        <span><i class="el-icon-chat-dot-round"></i>{{ item.comments }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import { addPv, deletePost } from "../http/api";
export default {
  name: "PostItem",
  props: {
    item: {
      type: Object,
      default: () => [],
    },
    smore: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      more: false,
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUserInfo;
    },
  },
  methods: {
    async seeBlog(item) {
      await addPv({ post_id: item.post_id }).then(() => {
        this.$store.commit("setChoose", item);
        this.$router.push({ path: "/detail" });
      });
    },
    showMore() {
      console.log("click");
      this.more = !this.more;
    },
    async handelDelete(item) {
      await deletePost({ post_id: item.post_id }).then((res) => {
        if (res.code === "10414") {
          this.$message({
            message: `${res.msg}`,
            type: "success",
          });
          //this.getUser.user_id
          this.$parent.getOwnBlogs(this.getUser.user_id);
        } else {
          this.$message.error(`${res.msg}`);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.post-container {
  .box-card {
    // padding: 20px;

    .auth {
      position: relative;
      font-size: 13px;
      color: #777;
      margin-bottom: 10px;
      span {
        margin-right: 30px;
      }
      .more {
        position: absolute;
        top: 17px;
        right: 0;
        width: 52px;
        list-style: none;
        background: #fff;
        border: 1px solid #e5e6eb;
        box-shadow: 0 4px 10px #e5e6eb;
        border-radius: 4px;
        li {
          box-sizing: border-box;
          font-size: 14px;
          line-height: 36px;
          color: #4e5969;
          padding: 0 12px;
          min-width: 54px;
          cursor: pointer;
          &:hover {
            color: #3f95f1;
          }
        }
      }
    }
    h4 {
      color: #444;
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        color: #3f95f1;
      }
    }
    .floor {
      width: 170px;
      display: flex;
      justify-content: space-between;
      color: #777;
      font-size: 15px;
    }
  }
}
</style>
