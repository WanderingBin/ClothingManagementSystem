<template>
  <div class="aside">
    <div class="logo">
      <a href="#"><img src="../../public/images/logo.png" alt="" /></a>
    </div>
    <el-menu router class="el-menu-demo" background-color="rgb(80, 80, 80)">
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="warehouse">仓库管理</el-menu-item>
      <el-menu-item index="goods">商品管理</el-menu-item>
      <el-menu-item index="user">用户管理</el-menu-item>
      <el-menu-item index="inventory">库存管理</el-menu-item>
      <el-menu-item index="character">角色管理</el-menu-item>
      <el-menu-item index="auxiliary">辅助管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  setup() {
    return {};
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.aside {
  width: 15%;
  height: 93vh;
  margin: auto 30px;
  margin-top: 30px;
  float: left;
  background-color: rgb(80, 80, 80);
  border-radius: 5px;
}
.aside:hover {
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
}
.logo {
  width: 100%;
}
.logo img {
  margin-top: 30px;
  width: 15vw;
}
::v-deep.el-menu {
  border-right: 1px solid rgb(80, 80, 80);
}
::v-deep.el-menu-item {
  font-size: 2vh;
  padding-left: 4vw !important;
}
</style>