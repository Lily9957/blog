<template>
  <el-form
    :model="registerForm"
    :rules="rules"
    ref="RegisterForm"
    label-width="100px"
    label-position="right"
    class="register-form"
  >
    <el-form-item label="用户名:" prop="username">
      <el-input v-model="registerForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码:" prop="pass">
      <el-input
        type="password"
        v-model="registerForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码:" prop="checkPass">
      <el-input
        type="password"
        v-model="registerForm.checkPass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleRegister('RegisterForm')"
        class="submit-btn"
        >注册</el-button
      >
      <!-- <el-button @click="resetForm('registerForm')">重置</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
import { signup } from "../http/api";
export default {
  name: "RegisterForm",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: "",
        password: "",
        checkPass: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleRegister(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { username, password } = this.registerForm;
          signup({ username, password }).then((res) => {
            console.log(res, "res");
            if (res.code === "10205") {
              this.$message({
                message: `${res.msg}`,
                type: "success",
              });
              this.$parent.signUpMode = false;
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
.register-form {
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
