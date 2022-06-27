<template>
  <div class="content">
    <div>
      <div class="search">
        <label for="">修改商品</label>
      </div>
      <div class="info">
        <ul>
          <li>
            <label for="">&nbsp;&nbsp;&nbsp;商品ID:</label>
            <el-input
              type="text"
              v-model="s_ID"
              placeholder="请输入商品ID"
              clearable
            />
          </li>
          <li>
            <label for="">&nbsp;&nbsp;&nbsp;商品名:</label>
            <el-input
              type="text"
              v-model="s_name"
              placeholder="请输入商品名"
              clearable
            />
          </li>
          <li>
            <label for="">商品颜色:</label>
            <el-input
              type="text"
              v-model="s_color"
              placeholder="请输入商品颜色"
              clearable
            />
          </li>
          <li>
            <label for="">商品价格:</label>
            <el-input
              type="text"
              v-model="s_price"
              placeholder="请输入商品价格"
              clearable
            />
          </li>
          <li>
            <label for="">商品尺寸:</label>
            <el-input
              type="text"
              v-model="s_size"
              placeholder="请输入商品尺寸"
              clearable
            />
          </li>
          <li>
            <el-button type="primary" @click="updateGoods()" plain
              >确认</el-button
            >
            <el-button type="info" plain @click="cancel">取消</el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { updateGood } from "../api";
import { ElMessage } from "element-plus";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const data = reactive({
      s_ID: route.params.s_ID,
      s_name: route.params.s_name,
      s_color: route.params.s_color,
      s_price: route.params.s_price,
      s_size: route.params.s_size,
    });
    function success() {
      ElMessage({
        message: "修改成功",
        type: "success",
      });
    }
    function warning() {
      ElMessage({
        message: "修改失败,信息不能为空",
        type: "warning",
      });
    }

    async function updateGoods() {
      try {
        if (
          data.s_ID == "" ||
          data.s_name == "" ||
          data.s_color == "" ||
          data.s_price == "" ||
          data.s_size == ""
        ) {
          warning();
        } else {
          await updateGood(data);
          success();
          router.push("/goods");
        }
      } catch (error) {}
    }
    function cancel() {
      router.push("/goods");
    }
    return { ...toRefs(data), updateGoods, success, warning, cancel };
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
ul {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  padding-top: 50px;
}
li {
  list-style: none;
  padding-top: 30px;
  text-align: center;
}
</style>