<template>
  <div class="content">
    <div class="search">&nbsp;&nbsp;&nbsp;修改密码</div>
    <div class="update">
      <ul>
        <li>
          <el-input
            type="text"
            v-model="psw"
            placeholder="请输入原密码"
            clearable
          />
        </li>
        <li>
          <el-input
            type="password"
            v-model="newpsw"
            placeholder="请输入新密码"
            clearable
          />
        </li>
        <li>
          <el-input
            type="password"
            v-model="repsw"
            placeholder="请确认新密码"
            clearable
          />
        </li>
        <li>
          <el-button
            type="primary"
            plain
            @click="confirm({ u_ID, u_name, u_email, u_psw: newpsw, u_Tel })"
            >确认</el-button
          >
          <el-button type="info" plain>取消</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { ElMessage } from "element-plus";
import { updateUser } from "../api";
import { useRouter } from "vue-router";
export default {
  name: "Auxiliary",
  setup() {
    const data = reactive({
      psw: "",
      newpsw: "",
      repsw: "",
      u_ID: "",
      u_name: "",
      u_email: "",
      u_Tel: "",
    });
    const router = useRouter();
    function warning() {
      ElMessage({
        message: "输入信息不为空",
        type: "warning",
      });
    }
    function warning1() {
      ElMessage({
        message: "两次输入的密码不一致",
        type: "warning",
      });
    }
    function success() {
      ElMessage({
        message: "修改成功,请重新登录",
        type: "success",
      });
    }
    onMounted(() => {
      data.u_ID = sessionStorage.getItem("u_ID");
      data.u_name = sessionStorage.getItem("u_name");
      data.u_email = sessionStorage.getItem("u_email");
      data.u_Tel = sessionStorage.getItem("u_Tel");
    });
    async function confirm(params) {
      if (data.psw == "" || data.newpsw == "" || data.repsw == "") {
        warning();
      } else if (data.newpsw != data.repsw) {
        warning1();
      } else {
        updateUser(params);
        success();
        router.push("/login");
      }
    }
    return { ...toRefs(data), warning, warning1, success, confirm };
  },
};
</script>

<style scoped>
.search {
  margin: 2vh auto;
  width: 95%;
  height: 6vh;
  background-color: #1c68ff;
  border-radius: 5px;
  line-height: 6vh;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
}
.update {
  margin: 0 auto;
  border-radius: 5px;
  width: 95%;
  height: 68vh;
  background-color: rgb(210, 210, 210);
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
}
ul {
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
}
li {
  list-style: none;
  padding-bottom: 20px;
  text-align: center;
}
</style>