<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router';
import gsap from 'gsap';

const activeIndex = ref('1');
const router = useRouter();
const route = useRoute();

onMounted(() => {
  // 页面加载时为导航项添加淡入动画
  gsap.from('.el-menu-item', {
    opacity: 0,
    y: -20,
    stagger: 0.1, // 每个导航项延迟出现
    duration: 0.5,
    ease: 'power2.out',
  });
});

// 监听路由变化并更新 activeIndex
watch(route, (newRoute) => {
  const path = newRoute.path;
  if (path === '/layout/siteLayout/home') {
    activeIndex.value = '1';
  } else if (path === '/layout/siteLayout/about') {
    activeIndex.value = '2';
  } else if (path === '/layout/siteLayout/portfolio') {
    activeIndex.value = '3';
  } else if (path === '/layout/siteLayout/contact') {
    activeIndex.value = '4';
  } else if (path === '/layout/siteLayout/other') {
    activeIndex.value = '5';
  }
}, { immediate: true });

const handleSelect = (key: string, keyPath: string[]) => {
  // 切换导航项时添加滑动效果
  gsap.to('.el-menu-item.is-active', {
    duration: 0.3,
    x: 10,
    ease: 'power1.out',
    onStart: () => {
    },
    onUpdate: () => {
    },
    onComplete: () => {
      gsap.to('.el-menu-item.is-active', { x: 0, duration: 0.3 });
    }
  });

  switch (key) {
    case '1':
      router.push('/layout/siteLayout/home');
      break;
    case '2':
      router.push('/layout/siteLayout/about');
      break;
    case '3':
      router.push('/layout/siteLayout/portfolio');
      break;
    case '4':
      router.push('/layout/siteLayout/contact');
      break;
    case '5':
      router.push('/layout/siteLayout/other');
      break;
    default:
      console.log(key, keyPath);
  }
};
</script>


<template>
  <div>
    <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :default-active="activeIndex"
        @select="handleSelect"
    >

      <el-menu-item index="1">
        <router-link to="/layout/siteLayout/home" @click.stop style="text-decoration: none; color: inherit;">
          Home
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/layout/siteLayout/about" @click.stop style="text-decoration: none; color: inherit;">
          About
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/layout/siteLayout/portfolio" @click.stop style="text-decoration: none; color: inherit;">
          Portfolio
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/layout/siteLayout/contact" @click.stop style="text-decoration: none; color: inherit;">
          Contact Me
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/layout/siteLayout/other" @click.stop style="text-decoration: none; color: inherit;">
          Other
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
/* 导航栏样式 */
.el-menu-demo {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 半透明背景 */
  z-index: 10;
  display: flex;
  justify-content: center; /* 将菜单项居中 */
  gap: 30px; /* 控制菜单项间距 */
  padding: 10px 0;
}

.el-menu-item {
  color: #ffffff !important; /* 强制将文本颜色设为白色 */
  font-weight: bold;
  transition: color 0.3s ease;
}

.el-menu-item:hover,
.el-menu-item.is-active {
  color: #25ccf7 !important; /* 悬停和选中时的蓝色 */
  background-color: transparent !important; /* 确保背景颜色不改变 */
}

/* 背景图片样式 */
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* 响应式调整 */
@media screen and (max-width: 512px) {
  .icons-list {
    gap: 12px;
    padding: 12px;
  }
}
</style>


