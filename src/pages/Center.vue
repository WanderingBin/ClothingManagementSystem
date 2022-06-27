<template>
  <div class="content">
    <div class="search">&nbsp;&nbsp;&nbsp;个人中心</div>
    <div class="center">
      <ul>
        <li>姓名：{{ u_name }}</li>
        <li>邮箱：{{ u_email }}</li>
        <li>电话：{{ u_Tel }}</li>
        <li>状态：{{ u_state == 1 ? "启用" : "禁用" }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { mapState, useStore } from "vuex";
import vuexMap from "../hooks/vuexMap";
export default {
  setup() {
    const person = reactive({
      u_name: "",
      u_email: "",
      u_Tel: "",
      u_password: "",
      u_state: "",
    });
    function getDate() {
      person.u_name = sessionStorage.getItem("u_name");
      person.u_email = sessionStorage.getItem("u_email");
      person.u_Tel = sessionStorage.getItem("u_Tel");
      person.u_state = sessionStorage.getItem("u_state");
    }

    onMounted(() => {
      getDate();
    });
    return { ...toRefs(person) };
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
.center {
  margin: 0 auto;
  border-radius: 5px;
  width: 95%;
  height: 68vh;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
}
::v-deep.el-button {
  float: right;
  margin-top: 1vh;
  margin-right: 3vh;
}
ul {
  width: 50%;
  margin: 0 auto;
  padding-top: 50px;
}
li {
  list-style: none;
  padding-top: 30px;
}
</style>