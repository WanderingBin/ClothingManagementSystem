<template>
  <div class="content">
    <div class="search">&nbsp;&nbsp;&nbsp;出库管理</div>
    <div class="inbound">
      <ul>
        <li>
          <label for="">&nbsp;&nbsp;&nbsp;所出仓库:</label>
          <el-input
            type="text"
            v-model="o_WID"
            placeholder="请输入仓库ID"
            clearable
          />
        </li>
        <li>
          <label for="">经办人ID:</label>
          <el-input
            type="text"
            v-model="o_UID"
            placeholder="请输入经办人ID"
            clearable
          />
        </li>
        <li>
          <label for="">目的地:</label>
          <el-input
            type="text"
            v-model="o_come"
            placeholder="请输入商品去向"
            clearable
          />
        </li>
        <li>
          <el-button
            type="primary"
            @click="confirm({ o_WID, o_UID, o_come })"
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
      o_WID: "",
      o_UID: sessionStorage.getItem("u_ID"),
      o_come: "",
    });
    function warning() {
      ElMessage({
        message: "输入信息不为空",
        type: "warning",
      });
    }
    const router = useRouter();
    function confirm(params) {
      if (data.o_WID == "" || data.o_UID == "" || data.o_come == "") {
        warning();
      } else {
        router.push({ name: "addOutBound", params });
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