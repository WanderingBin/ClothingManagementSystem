<template>
  <div class="content">
    <div>
      <div class="search">
        <label for="">选择仓库</label>
        <el-select v-model="W_name" clearable placeholder="请选择仓库">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click="getWareDate(W_name)"
          />
        </el-select>
      </div>
      <div class="info">
        <el-table
          :data="warehouseData"
          stripe
          style="width: 100%"
          height="100%"
        >
          <el-table-column fixed prop="w_ID" label="仓库ID" width="100%" />
          <el-table-column prop="w_name" label="仓库名" width="200%" />
          <el-table-column prop="w_address" label="仓库地址" />
          <el-table-column prop="w_size" label="仓库大小" width="100%" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, watch } from "vue";
import { useStore, mapState } from "vuex";
import vuexMap from "../hooks/vuexMap";
export default {
  name: "Warehouse",
  setup() {
    const data = reactive({
      W_name: "",
      options: [],
      warehouseData: [],
    });
    const store = useStore();
    const warehouse = vuexMap(mapState, ["warehouse"]);
    // 获取仓库数据
    async function getDate() {
      try {
        await store.dispatch("warehouse/getDateAction");
        data.warehouseData = warehouse.warehouse.value.warehouse;
        for (let i = 0; i < data.warehouseData.length; i++) {
          data.options[i] = {};
          data.options[i].value = data.warehouseData[i].w_name;
          data.options[i].label = data.warehouseData[i].w_name;
        }
      } catch (error) {
        alert(error.message);
      }
    }
    async function getWareDate(W_name) {
      try {
        await store.dispatch("warehouse/getDateAction", W_name);
        data.warehouseData = warehouse.warehouse.value.warehouse;
      } catch (error) {
        alert(error.message);
      }
    }
    watch(
      () => data.W_name,
      () => {
        if (data.W_name == "") {
          getDate();
        }
      }
    );
    onMounted(() => {
      getDate();
    });
    return { ...toRefs(data), getDate, getWareDate };
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
</style>