<template>
  <div class="content">
    <div>
      <div class="search">
        <label for="">添加商品</label>
      </div>
      <div class="info">
        <ul>
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
            <el-button
              type="primary"
              @click="confirm({ s_color, s_name, s_price, s_size })"
              plain
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
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
export default {
  setup() {
    const data = reactive({
      s_name: "",
      s_color: "",
      s_price: "",
      s_size: "",
    });
    function success() {
      ElMessage({
        message: "添加成功",
        type: "success",
      });
    }
    function warning() {
      ElMessage({
        message: "商品数据不能为空",
        type: "warning",
      });
    }
    const store = useStore();
    const router = useRouter();
    async function confirm(data) {
      console.log(data);
      try {
        if (
          data.s_name == "" ||
          data.s_color == "" ||
          data.s_price == "" ||
          data.s_size == ""
        ) {
          warning();
        } else {
          await store.dispatch("goods/addGoodActions", data);
          success();
        }
      } catch (error) {
        alert("商品已存在");
      }
    }
    function cancel() {
      data.s_name == "";
      data.s_color == "";
      data.s_price == "";
      data.s_size == "";
      router.push("/goods");
    }
    return { ...toRefs(data), confirm, success, warning, cancel };
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