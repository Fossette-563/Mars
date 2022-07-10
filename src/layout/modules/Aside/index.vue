<template>
  <div>
    <div class="login-box">
      <img
        src="http://manager.9yuecloud.com/img/logo.384b81fb.png"
        class="logo"
      />
      <h3>Manager</h3>
    </div>
    <Menu></Menu>
  </div>
</template>

<script setup>
import Menu from './Menu.vue'
</script>

<style lang="scss" scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  .logo {
    width: 32px;
    height: 32px;
    margin-right: 20px;
  }
  h3 {
    color: #fff;
    font-weight: 200;
  }
}
.el-menu {
  border-right: none;
}
</style>
