<template>
  <div class="content">
    <div>
      <div class="search">
        <label for="">选择仓库</label>
        <el-select v-model="T_WID" clearable placeholder="请选择仓库">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-input
          type="text"
          placeholder="请输入商品名"
          clearable
          v-model="S_name"
        />
        <el-button type="primary" plain @click="getGoodsDate(T_WID, S_name)"
          >查询</el-button
        >
        <router-link to="addGoods"
          ><el-button type="primary" plain>添加商品</el-button></router-link
        >
      </div>
      <div class="info">
        <el-table :data="goodsDate" stripe style="width: 100%" height="100%">
          <el-table-column fixed prop="s_ID" label="商品ID" />
          <el-table-column prop="s_name" label="商品名" />
          <el-table-column prop="s_color" label="商品颜色" />
          <el-table-column prop="s_price" label="商品价格" />
          <el-table-column prop="s_size" label="商品尺寸" />
          <el-table-column prop="s_status" label="商品状态" />
          <el-table-column prop="updateGoods" label="商品修改">
            <template v-slot="scope">
              <el-button @click="updateGoods(scope.row)">{{
                scope.row.s_status ? "修改" : "修改"
              }}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="商品禁用/启用">
            <template v-slot="scope">
              <el-button @click="trigger(scope.row)">{{
                scope.row.s_status == 0 ? "点击启用" : "点击禁用"
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import vuexMap from "../hooks/vuexMap";
import { mapState, useStore } from "vuex";
import { useRouter } from "vue-router";
import { forbiddenGood, enableGood } from "../api";
export default {
  name: "Goods",
  setup() {
    const data = reactive({
      S_name: "",
      T_WID: "",
      goods: "",
      options: [],
      goodsDate: [],
    });
    const store = useStore();
    const router = useRouter();
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
    async function getGoodsDate(T_WID, S_name) {
      try {
        await store.dispatch("goods/getDateAction", { T_WID, S_name });
        data.goodsDate = store.state.goods.goodsData;
      } catch (error) {
        alert(error.message);
      }
    }
    async function updateGoods(row) {
      router.push({
        name: "updateGoods",
        params: {
          s_ID: row.s_ID,
          s_name: row.s_name,
          s_color: row.s_color,
          s_price: row.s_price,
          s_size: row.s_size,
        },
      });
    }
    function trigger(row) {
      if (row.s_status == 1) {
        forbiddenGood({
          s_name: row.s_name,
          s_color: row.s_color,
          s_size: row.s_size,
        });
        getGoodsDate(data.T_WID);
      } else
        enableGood({
          s_name: row.s_name,
          s_color: row.s_color,
          s_size: row.s_size,
        });
      getGoodsDate(data.T_WID);
    }
    onMounted(() => {
      getWarehouseDate();
      updateGoods;
    });
    return { ...toRefs(data), getGoodsDate, updateGoods, trigger };
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