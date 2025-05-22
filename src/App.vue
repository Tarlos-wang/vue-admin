<template>
  <div class="app-container">
    <SideBar />
    <div class="main-container">
      <!-- 主内容区域 -->
      <TopBar />
      <!-- 这里可以放主内容 -->
       <div class="content-container">
        <router-view />
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopBar from './components/layout/TopBar.vue'
import SideBar from './components/layout/SideBar.vue'
</script>

<style>
.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
}

.main-container {
  flex: 1;
  text-align: left;
  min-width: 0;
  display: flex;
  flex-direction: column;
  margin-left: 200px;
}



/* 重置一些基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>