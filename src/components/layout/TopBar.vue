<template>
  <div class="top-bar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.top-bar {
  padding: 10px 20px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
}
</style>