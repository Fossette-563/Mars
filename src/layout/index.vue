<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Aside></Aside></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><Main></Main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from './modules/Aside'
import Header from './modules/Header'
import Main from './modules/Main'
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
    }
    .el-aside {
      background-color: #001529;
    }
    .el-main {
      background-color: #eef0f3;
    }
  }
}
</style>
