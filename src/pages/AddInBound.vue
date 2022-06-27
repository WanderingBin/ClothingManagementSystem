<template>
  <div class="content">
    <div class="search">&nbsp;&nbsp;&nbsp;入库明细</div>
    <div class="inbound">
      <ul>
        <li>
          <label for="">&nbsp;&nbsp;&nbsp;入库的商品ID:</label>
          <el-input
            type="text"
            v-model="im_SID"
            placeholder="请输入入库的商品ID"
            clearable
          />
        </li>
        <li>
          <label for="">商品数量:</label>
          <el-input
            type="text"
            v-model="im_num"
            placeholder="请输入入库的商品数量"
            clearable
          />
        </li>
        <li>
          <el-button type="primary" @click="confirm({ im_SID, im_num })" plain
            >确定</el-button
          >
          <el-button type="info" plain @click="cancel">取消</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { inputAdd, inputmessageAdd } from "../api";
export default {
  setup() {
    const data = reactive({
      im_SID: "",
      im_num: "",
      routeParams: {},
    });
    const route = useRoute();
    data.routeParams = route.params;
    function warning() {
      ElMessage({
        message: "输入信息不为空",
        type: "warning",
      });
    }
    function success() {
      ElMessage({
        message: "添加成功",
        type: "success",
      });
    }
    function confirm(params) {
      if (data.im_SID == "" || data.im_num == "") {
        warning();
      } else {
        inputAdd(data.routeParams);
        inputmessageAdd(params);
        success();
        router.push("/inventory");
      }
    }
    function cancel() {}
    const router = useRouter();
    return { ...toRefs(data), cancel, confirm, cancel };
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