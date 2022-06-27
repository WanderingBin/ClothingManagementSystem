<template>
  <div class="header">
    <ul>
      <li class="help">帮助</li>
      <router-link to="/login"><li class="login">登录</li></router-link>
      <router-link to="/center"><li>个人中心</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.header {
  height: 10vh;
  margin-top: 30px;
  margin-right: 30px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.header:hover {
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
}
ul {
  height: 10vh;
}
li {
  float: left;
  list-style: none;
  padding: 0 30px;
  line-height: 10vh;
  font-size: 2vh;
}
li:hover {
  background-color: rgb(214, 214, 214);
  color: #3366cc;
}
</style>