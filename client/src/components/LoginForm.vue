<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="LoginForm"
    label-width="100px"
    label-position="right"
    class="login-form"
  >
    <el-form-item label="用户名:" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码:" prop="password">
      <el-input v-model="ruleForm.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleLogin('LoginForm')"
        class="submit-btn"
        >登录</el-button
      >
      <!-- <el-button @click="resetForm('LoginForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
import { signin } from "../http/api";
export default {
  name: "LoginForm",
  data() {
    var checkPwd = (rule, value, callback) => {
      if (value) {
        if (!/[0-9A-Za-z]/.test(value)) {
          callback(new Error("请输入密码且必须由数字+字母组成！"));
        } else {
          callback();
        }
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            min: 1,
            max: 15,
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            min: 8,
            max: 12,
            required: true,
            validator: checkPwd,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleLogin(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let userinfo = this.ruleForm;
          signin(userinfo).then((res) => {
            console.log(res, "res");
            if (res.code === "10200") {
              this.$message({
                message: `${res.msg}`,
                type: "success",
              });
              this.$store.commit("setUserInfo", res.data[0]);
              this.$router.push({ path: "/" });
            } else {
              this.$message.error(`${res.msg}`);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
</style>
