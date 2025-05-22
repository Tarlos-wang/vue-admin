<template>
  <div class="sidebar-container">
    <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
      <!-- 导航一：包含多级子菜单 -->
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>销售管理</span>
        </template>
        <!-- 分组一 -->
        <el-menu-item index="1-1" router.push="{ name: 'salesDashboard' }">销售仪表盘</el-menu-item>
        <el-menu-item index="1-2">订货单</el-menu-item>
        <el-menu-item index="1-3">销售出货</el-menu-item>


      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>

          <span>生产管理</span>
        </template>
        <!-- 分组一 -->
        <el-menu-item index="1-1">销售仪表盘</el-menu-item>
        <el-menu-item index="1-2">订货单</el-menu-item>
        <el-menu-item index="1-3">销售出货</el-menu-item>


      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>

          <span>采购管理</span>
        </template>
        <!-- 分组一 -->
        <el-menu-item index="1-1">销售仪表盘</el-menu-item>
        <el-menu-item index="1-2">订货单</el-menu-item>
        <el-menu-item index="1-3">销售出货</el-menu-item>


      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>

          <span>质检管理</span>
        </template>
        <!-- 分组一 -->
        <el-menu-item index="1-1">销售仪表盘</el-menu-item>
        <el-menu-item index="1-2">订货单</el-menu-item>
        <el-menu-item index="1-3">销售出货</el-menu-item>


      </el-sub-menu>

      <!-- 导航二：默认选中的菜单项 -->

    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

// 处理菜单打开事件
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 处理菜单关闭事件
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.sidebar-container {
  width: 200px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  border-right: solid 1px var(--el-menu-border-color);
}

.el-menu-vertical {
  height: 100%;
  border-right: none;
}

:deep(.el-menu) {
  border-right: none;
}
</style>
