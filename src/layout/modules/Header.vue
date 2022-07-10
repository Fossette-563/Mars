<template>
  <div class="Hearder-box">
    <div class="left">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-icon class="tang"><Lollipop /></el-icon>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userInfo.userName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>邮箱：{{ userInfo.userEmail }}</el-dropdown-item>
            <el-dropdown-item @click="layout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Lollipop } from '@element-plus/icons-vue'

const router = useRouter()
const store = useStore()
const userInfo = store.getters.userInfo
// console.log(userInfo, 'info')

const layout = () => {
  store.dispatch('user/getlayout')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.Hearder-box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tang {
    margin-right: 10px;
  }
}
</style>
