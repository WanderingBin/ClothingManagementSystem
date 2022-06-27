<template>
  <div class="content">
    <div class="search">&nbsp;&nbsp;&nbsp;入库管理</div>
    <div class="inbound">
      <ul>
        <li>
          <label for="">&nbsp;&nbsp;&nbsp;所入仓库:</label>
          <el-input
            type="text"
            v-model="i_WID"
            placeholder="请输入仓库ID"
            clearable
          />
        </li>
        <li>
          <label for="">经办人ID:</label>
          <el-input
            type="text"
            v-model="i_UID"
            placeholder="请输入经办人ID"
            clearable
          />
        </li>
        <li>
          <label for="">来源:</label>
          <el-input
            type="text"
            v-model="i_come"
            placeholder="请输入商品来源"
            clearable
          />
        </li>
        <li>
          <el-button
            type="primary"
            @click="confirm({ i_WID, i_UID, i_come })"
            plain
            >下一步</el-button
          >
          <el-button type="info" plain @click="cancel">取消</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const data = reactive({
      i_WID: "",
      i_UID: sessionStorage.getItem("u_ID"),
      i_come: "",
    });
    function warning() {
      ElMessage({
        message: "输入信息不为空",
        type: "warning",
      });
    }
    const router = useRouter();
    function confirm(params) {
      if (data.i_WID == "" || data.i_UID == "" || data.i_come == "") {
        warning();
      } else {
        router.push({ name: "addInBound", params });
      }
    }
    function cancel() {
      router.push("/inventory");
    }
    return { ...toRefs(data), cancel, confirm, warning };
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
.inbound {
  margin: 0 auto;
  border-radius: 5px;
  width: 95%;
  height: 68vh;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
}
ul {
  width: 70%;
  margin: 0 auto;
}
li {
  text-align: center;
  list-style: none;
  padding-top: 8vh;
}
::v-deep.el-input {
  width: 20vw;
  height: 5vh;
  margin-left: 5px;
}
::v-deep.el-button {
  margin-right: 3vh;
}
</style>