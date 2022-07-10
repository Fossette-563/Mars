<template>
  <el-sub-menu
    v-if="item.children && item.children.length > 0"
    :index="item.path"
  >
    <template #title>
      <span>{{ item.meta.title }}</span>
    </template>
    <MenuItem
      v-for="child in item.children"
      :key="child"
      :item="child"
    ></MenuItem>
  </el-sub-menu>
  <el-menu-item v-else :index="item.path">
    <span>{{ item.meta.title }}</span>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped></style>
