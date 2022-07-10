<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      default-active=""
      text-color="#fff"
      unique-opened
      router
    >
      <MenuItem v-for="item in menuList" :key="item" :item="item"></MenuItem>
    </el-menu>
  </div>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
import { filterRouters, generateMenus } from '@/utils/route'
import { removeChindren } from '@/utils/removeChindren'
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

const router = useRouter()
const { getRoutes } = router
const menuList = computed(() => {
  const filter = generateMenus(filterRouters(getRoutes()).reverse())
  return removeChindren(filter)
})
</script>

<style lang="scss" scoped>
.el-menu {
  width: 100%;
  border-right: none;
}
</style>
