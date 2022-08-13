<template>
  <div class="personal">
    <h2>个人资料</h2>
    <div class="detail">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="github">
          <el-input v-model="form.github"></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="introduction">
          <el-input v-model="form.intro"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">更新信息</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      form: {
        github: "",
        email: "",
        intro: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
