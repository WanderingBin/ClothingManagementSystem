<template>
  <div class="content">
    <div class="search">
      <label for="">仓库查询：</label>
      <el-input
        type="text"
        placeholder="请输入仓库名"
        clearable
        v-model="W_name"
      />
      <el-button type="primary" plain @click="getWarehouseDate(W_name)"
        >查询</el-button
      >
    </div>
    <!-- 仓库表格 -->
    <div class="warehouse">
      <el-table :data="warehouseData" stripe style="width: 100%" height="100%">
        <el-table-column fixed prop="w_ID" label="仓库ID" width="100%" />
        <el-table-column prop="w_name" label="仓库名" width="200%" />
        <el-table-column prop="w_address" label="仓库地址" />
        <el-table-column prop="w_size" label="仓库大小" width="150%" />
      </el-table>
    </div>
    <div class="search">
      <label for="">商品查询：</label>
      <el-select v-model="T_WID" placeholder="请选择仓库">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-input type="text" placeholder="请输入商品名" v-model="S_name" />
      <el-button type="primary" plain @click="getGoodsDate(T_WID, S_name)"
        >查询</el-button
      >
    </div>
    <!-- 商品表格 -->
    <div class="goods">
      <el-table :data="goodsDate" stripe style="width: 100%" height="100%">
        <el-table-column fixed prop="s_ID" label="商品ID" />
        <el-table-column prop="s_name" label="商品名" />
        <el-table-column prop="s_color" label="商品颜色" />
        <el-table-column prop="s_price" label="商品价格" />
        <el-table-column prop="s_size" label="商品尺寸" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from "vue";
import { mapState, useStore } from "vuex";
import vuexMap from "../hooks/vuexMap";
export default {
  name: "Home",
  setup() {
    const data = reactive({
      W_name: "",
      S_name: "",
      T_WID: "",
      warehouseData: [],
      goodsDate: [],
      options: [],
    });

    const store = useStore();
    const warehouse = vuexMap(mapState, ["warehouse"]);
    //获取仓库数据
    async function getWarehouseDate(W_name) {
      try {
        await store.dispatch(
          "warehouse/getDateAction",
          W_name == "" ? "" : W_name
        );
        data.warehouseData = warehouse.warehouse.value.warehouse;
        for (let i = 0; i < data.warehouseData.length; i++) {
          data.options[i] = {};
          data.options[i].value = data.warehouseData[i].w_ID;
          data.options[i].label = data.warehouseData[i].w_name;
        }
      } catch (error) {
        alert(error.message);
      }
    }
    //获取商品数据
    async function getGoodsDate(T_WID, S_name) {
      try {
        await store.dispatch("goods/getDateAction", { T_WID, S_name });
        data.goodsDate = store.state.goods.goodsData;
      } catch (error) {
        alert(error.message);
      }
    }
    onMounted(() => {
      getWarehouseDate();
    });
    watch(
      () => data.W_name,
      () => {
        if (data.W_name == "") {
          getWarehouseDate();
        }
      }
    );
    return {
      ...toRefs(data),
      getWarehouseDate,
      getGoodsDate,
    };
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
  margin-left: 20px;
  color: rgb(210, 210, 210);
}
input {
  height: 3vh;
  outline: none;
}
button {
  margin-left: 10px;
  width: 8vh;
  height: 4vh;
  border-radius: 5px;
  color: rgb(99, 99, 99);
  border: none;
}
select {
  outline: none;
  height: 4vh;
  margin-right: 5px;
}
.warehouse,
.goods {
  margin: 0 auto;
  border-radius: 5px;
  width: 95%;
  height: 29vh;
  background-color: rgb(210, 210, 210);
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
}
</style>