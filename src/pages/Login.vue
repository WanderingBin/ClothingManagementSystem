<template>
  <div class="content">
    <div class="login">
      <h2>登录</h2>
      <ul>
        <li>
          <label for="">账户：</label>
          <el-input
            v-model="data.u_Tel"
            placeholder="请输入电话号码"
            clearable
          />
        </li>
        <li>
          <label for="">密码：</label>
          <el-input
            type="password"
            show-password
            placeholder="请输入密码"
            v-model="data.u_psw"
          />
        </li>
        <li>
          <el-button type="primary" plain @click="login">登录</el-button>
          <el-button type="info" plain @click="clear">取消</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    let data = reactive({
      u_Tel: "",
      u_psw: "",
    });
    const store = useStore();
    function success() {
      ElMessage({
        message: "登录成功",
        type: "success",
      });
    }
    function warning() {
      ElMessage({
        message: "账号密码不为空",
        type: "warning",
      });
    }
    async function login() {
      const { u_Tel, u_psw } = data;
      try {
        if (u_Tel && u_psw) {
          await store.dispatch("user/loginActions", { ...data });
          router.push("/home");
          success();
        } else {
          warning();
        }
      } catch (error) {
        alert(error.message);
      }
    }
    function clear() {
      (data.u_Tel = ""), (data.u_psw = "");
    }
    return { data, login, clear, success, warning };
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: rgb(84, 201, 255);
  border-radius: 5px;
  background-image: url(../../public/images/wallhaven-vgjp2l.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
h2 {
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 100px;
  font-size: 3vh;
}
li {
  list-style: none;
  text-align: center;
  margin-top: 20px;
}
::v-deep.el-input {
  height: 4vh !important;
  width: 20vw !important;
}
::v-deep.el-button {
  height: 4vh !important;
  width: 5vw !important;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
}
label {
  color: white;
}
</style>