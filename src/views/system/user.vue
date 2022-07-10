<template>
  <div class="user-page">
    <el-card class="box-card">
      用户ID：
      <el-input v-model="input" placeholder="请输入用户ID" />
      用户名称：
      <el-input v-model="input" placeholder="请输入用户名" />
      状态：
      <el-select v-model="select" placeholder="所有" style="width: 200px">
        <el-option label="所有" value="1" />
        <el-option label="在职" value="2" />
        <el-option label="离职" value="3" />
        <el-option label="试用期" value="4" />
      </el-select>
      <span class="btn">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </span>
    </el-card>
    <!-- 表格card -->
    <el-card class="box-card" style="margin-top: 20px">
      <el-button type="primary">新增</el-button>
      <el-button type="danger">批量删除</el-button>
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="date" type="selection" />
        <el-table-column prop="date" label="用户ID" />
        <el-table-column prop="name" label="用户名" />
        <el-table-column prop="name" label="用户邮箱" />
        <el-table-column prop="name" label="用户角色" />
        <el-table-column prop="name" label="用户状态" />
        <el-table-column prop="name" label="注册时间" />
        <el-table-column prop="name" label="用户登录时间" />
        <el-table-column prop="name" label="操作" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.el-input {
  width: 200px;
}
.btn {
  margin-left: 10px;
}
</style>
