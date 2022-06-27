<template>
  <div class="app">
    <Aside></Aside>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>


<script>
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Aside, Header },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom right,
    rgb(0, 195, 255),
    rgb(0, 255, 234)
  );
}
.content {
  overflow: hidden;
  height: 80vh;
  margin-top: 3vh;
  margin-right: 30px;
  border-radius: 5px;
  background-color: #fff;
}
.content:hover {
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
}
.el-table th {
  background: rgb(210, 210, 210) !important;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: rgb(210, 210, 210) !important;
}
</style>
