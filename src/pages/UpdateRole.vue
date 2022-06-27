<template>
  <div class="content">
    <div>
      <div class="search">
        <label for="">修改权限</label>
      </div>
      <div class="info">
        <ul>
          <li>
            <label for="">用户禁用权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Usub" />
          </li>
          <li>
            <label for="">用户查询权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Ushow" />
          </li>
          <li>
            <label for="">用户修改权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Uchange" />
          </li>
          <li>
            <label for="">商品禁用权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Ssub" />
          </li>
          <li>
            <label for="">商品查询权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Sshow" />
          </li>
          <li>
            <label for="">商品修改权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Schange" />
          </li>
          <li>
            <label for="">商品添加权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Sadd" />
          </li>
          <li>
            <label for="">入库单添加权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Cadd" />
          </li>
          <li>
            <label for="">入库单查询权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Cshow" />
          </li>
          <li>
            <label for="">入库单修改权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Cchange" />
          </li>
          <li>
            <label for="">出库单添加权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Oadd" />
          </li>
          <li>
            <label for="">出库单查询权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Oshow" />
          </li>
          <li>
            <label for="">出库单修改权限</label>
            <input type="checkbox" name="" id="" v-model="roleInfo.r_Ochange" />
          </li>
          <li>
            <el-button type="primary" @click="change()" plain>确认</el-button>
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
import { ElMessage } from "element-plus";
import { changeRole } from "../api";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const data = reactive({
      roleInfo: route.params,
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
    function cancel() {
      router.push("/character");
    }

    function change() {
      changeRole(data.roleInfo);
      success();
      router.push("/character");
    }
    return { ...toRefs(data), success, warning, cancel, change };
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
}
li {
  list-style: none;
  text-align: right;
  padding: 5px;
  padding-right: 10vw;
}
</style>