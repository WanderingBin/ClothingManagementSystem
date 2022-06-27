<template>
  <div class="content">
    <div>
      <div class="search">
        <label for="">查询用户：</label>
        <el-input
          type="text"
          placeholder="请输入电话号码"
          v-model="U_Tel"
          clearable
        />
        <el-button type="primary" @click="findUser(U_Tel)" plain
          >查询</el-button
        >
      </div>
      <div class="info">
        <el-table :data="userDate" stripe style="width: 100%" height="100%">
          <el-table-column fixed prop="u_ID" label="用户ID" />
          <el-table-column prop="u_RID" label="用户角色ID" />
          <el-table-column prop="u_name" label="用户名" />
          <el-table-column prop="u_email" label="用户邮箱" />
          <el-table-column prop="u_Tel" label="用户电话" />
          <el-table-column prop="u_psw" label="用户密码" />
          <el-table-column prop="u_status" label="用户状态" />
          <el-table-column prop="options" label="禁用/启用该用户">
            <template v-slot="scope">
              <el-button @click="trigger(scope.row)">{{
                scope.row.u_status == 0 ? "点击启用" : "点击禁用"
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, reactive, toRefs, watch } from "vue";
import { useStore } from "vuex";
import { enableUser, forbiddenUser } from "../api";
export default {
  name: "User",
  setup() {
    const data = reactive({
      U_Tel: "",
      value: "",
      userDate: [],
    });

    const store = useStore();
    // 获取用户数据
    async function getDate() {
      try {
        await store.dispatch("user/getUserActions");
        data.userDate = store.state.user.allUser;
      } catch (error) {
        alert(error.message);
      }
    }
    //禁用/启用用户
    async function trigger(row) {
      if (row.u_status == 1) {
        await forbiddenUser(`U_ID=${row.u_ID}`);
        nextTick(() => {
          getDate();
        });
      } else {
        await enableUser(`U_ID=${row.u_ID}`);
        nextTick(() => {
          getDate();
        });
      }
    }
    async function findUser(U_Tel) {
      try {
        await store.dispatch("user/findUserActions", { U_Tel });
        data.userDate = [];
        data.userDate = store.state.user.user;
      } catch (error) {
        alert(error.message);
      }
    }
    onMounted(() => {
      getDate();
    });
    watch(
      () => data.U_Tel,
      () => {
        if (data.U_Tel == "") {
          getDate();
        }
      }
    );
    return { ...toRefs(data), trigger, findUser };
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
label {
  margin: 0 10px;
}
.info {
  margin: 2vh auto;
  width: 95%;
  height: 68vh;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
}
::v-deep.el-input {
  width: 20vw;
  height: 5vh;
  margin-left: 5px;
}
::v-deep.el-button {
  width: 6vw;
  height: 5vh;
  margin-left: 5px;
}
a {
  text-decoration: none;
}
</style>