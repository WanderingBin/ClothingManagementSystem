<template>
  <div class="content">
    <div class="search">
      <label for="">入库查询：</label>
      <el-input
        type="text"
        placeholder="请输入入库单号"
        v-model="I_item"
        clearable
      />
      <el-button type="primary" @click="findInbound(I_item)" plain
        >查询</el-button
      >
      <router-link to="/inBound">
        <el-button type="primary" plain>添加入库</el-button></router-link
      >
    </div>
    <div class="inbound">
      <el-table :data="inboundData" stripe style="width: 100%" height="100%">
        <el-table-column fixed prop="i_item" label="入库单编号" />
        <el-table-column prop="i_WID" label="仓库ID" />
        <el-table-column prop="i_UID" label="用户ID" />
        <el-table-column prop="i_time" label="入库日期" />
        <el-table-column prop="i_come" label="来源" />
      </el-table>
    </div>
    <div class="search">
      <label for="">出库查询：</label>
      <el-input
        type="text"
        v-model="O_item"
        clearable
        placeholder="请输入出库单号"
      />
      <el-button type="primary" @click="findOutbound(O_item)" plain
        >查询</el-button
      >
      <router-link to="/outBound"
        ><el-button type="primary" plain>添加出库</el-button></router-link
      >
    </div>
    <div class="outbound">
      <el-table :data="outboundDate" stripe style="width: 100%" height="100%">
        <el-table-column fixed prop="o_item" label="入库单编号" />
        <el-table-column prop="o_WID" label="仓库ID" />
        <el-table-column prop="o_UID" label="用户ID" />
        <el-table-column prop="o_time" label="入库日期" />
        <el-table-column prop="o_come" label="来源" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "Inventory",
  setup() {
    const data = reactive({
      I_item: "",
      O_item: "",
      inboundData: [],
      outboundDate: [],
    });
    const store = useStore();
    async function getInbound() {
      try {
        await store.dispatch("inventory/getInboundActions", "");
        data.inboundData = store.state.inventory.inboundData;
      } catch (error) {
        alert(error);
      }
    }
    async function findInbound(I_item) {
      try {
        await store.dispatch(
          "inventory/findInboundActions",
          `I_item=${I_item}`
        );
        data.inboundData = store.state.inventory.inboundData;
      } catch (error) {
        alert(error);
      }
    }
    async function getOutbound() {
      try {
        await store.dispatch("inventory/findOutboundActions", "");
        data.outboundDate = store.state.inventory.outboundData;
      } catch (error) {
        alert(error);
      }
    }
    async function findOutbound(O_item) {
      try {
        await store.dispatch(
          "inventory/findOutboundActions",
          `O_item=${O_item}`
        );
        data.outboundDate = store.state.inventory.outboundData;
      } catch (error) {
        alert(error);
      }
    }
    onMounted(() => {
      getInbound();
      getOutbound();
    });
    watch(
      () => data.I_item,
      () => {
        getInbound();
      }
    );
    watch(
      () => data.O_item,
      () => {
        getOutbound();
      }
    );
    return { ...toRefs(data), findInbound, findOutbound };
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
.inbound,
.outbound {
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
a {
  text-decoration: none;
}
</style>