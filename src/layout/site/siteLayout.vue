<script setup>
import Nav from "../nav.vue";
</script>

<template>
  <div class="app-container">
    <Nav></Nav>
    <div class="content-container">
      <!-- 滑动路由 -->
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>

/* 应用容器样式 */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 占满整个视口高度 */
}

/* 导航栏样式 */
.nav {
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

/* 内容容器样式 */
.content-container {
  margin: 70px auto; /* 水平居中 */
  box-sizing: border-box;
}

/* 大显示器样式 */
@media (min-width: 1200px) {
  .content-container {
    max-width: 1200px; /* 大显示器的宽度 */
    width: 1200px;
  }
}

/* 普通笔记本样式 */
@media (min-width: 768px) and (max-width: 1199px) {
  .content-container {
    max-width: 800px; /* 普通笔记本的宽度 */
    width: 800px;
  }
}

/* 小屏幕设备样式 */
@media (max-width: 767px) {
  .content-container {
    max-width: 100%; /* 小屏幕设备的宽度 */
    margin: 70px 15px; /* 调整左右边距 */
  }
}

/* 定义滑动效果的CSS */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
