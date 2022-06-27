<template>
  <div class="content">
    <div>
      <div class="search">&nbsp&nbsp&nbsp角色管理</div>
      <div class="info">
        <el-table :data="roleInfo" stripe style="width: 100%" height="100%">
          <el-table-column fixed prop="r_ID" label="角色ID" />
          <el-table-column prop="r_name" label="角色名" />
          <el-table-column prop="r_Usub" label="用户禁用权限">
          </el-table-column>
          <el-table-column prop="r_Ushow" label="用户查询权限">
          </el-table-column>
          <el-table-column prop="r_Uchange" label="用户修改权限">
          </el-table-column>
          <el-table-column prop="r_Ssub" label="商品禁用权限">
          </el-table-column>
          <el-table-column prop="r_Sshow" label="商品查询权限">
          </el-table-column>
          <el-table-column prop="r_Schange" label="商品修改权限">
          </el-table-column>
          <el-table-column prop="r_Cadd" label="入库单添加权限">
          </el-table-column>
          <el-table-column prop="r_Cshow" label="入库单查询权限">
          </el-table-column>
          <el-table-column prop="r_Cchange" label="入库单修改权限">
          </el-table-column>
          <el-table-column prop="r_Oadd" label="出库单添加权限">
          </el-table-column>
          <el-table-column prop="r_Oshow" label="出库单查询权限">
          </el-table-column>
          <el-table-column prop="r_Ochange" label="出库单修改权限">
          </el-table-column>
          <el-table-column prop="operation" label="权限修改">
            <template v-slot="scope">
              <el-button @click="updateRole(scope.row)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { getRole } from "../api";
import { useRouter } from "vue-router";
export default {
  name: "Goods",
  setup() {
    let data = reactive({
      roleInfo: [],
    });
    async function getDate() {
      let result = await getRole();
      data.roleInfo = result.data;
    }
    const router = useRouter();
    function updateRole(row) {
      router.push({
        name: "updateRole",
        params: row,
      });
    }
    onMounted(() => {
      getDate();
    });
    return { ...toRefs(data), updateRole };
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
  width: 100%;
  height: 5vh;
  margin-left: 5px;
}
</style>