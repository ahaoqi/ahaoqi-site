<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import gsap from 'gsap';

const activeIndex = ref('1');
const router = useRouter();
const route = useRoute();
const { locale } = useI18n();

// 显式定义 locale 的类型
type Language = 'en' | 'zh';
const currentLanguage = ref<Language>(locale.value as Language);

// 页面加载时为导航项添加淡入动画
onMounted(() => {


  // 页面加载时为导航项添加淡入动画
  gsap.from('.el-menu-item', {
    opacity: 0,
    y: -20,
    stagger: 0.1,
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
  gsap.to('.el-menu-item.is-active', {
    duration: 0.3,
    x: 10,
    ease: 'power1.out',
    onComplete: () => {
      gsap.to('.el-menu-item.is-active', { x: 0, duration: 0.3 });
    }
  });

  switch (key) {
    case '1': router.push('/layout/siteLayout/home'); break;
    case '2': router.push('/layout/siteLayout/about'); break;
    case '3': router.push('/layout/siteLayout/portfolio'); break;
    case '4': router.push('/layout/siteLayout/contact'); break;
    case '5': router.push('/layout/siteLayout/other'); break;
  }
};

// 切换语言
const toggleLanguage = () => {
  // 切换语言
  locale.value = locale.value === 'en' ? 'zh' : 'en';
  currentLanguage.value = locale.value as Language;

  // 将选择的语言保存到 localStorage
  localStorage.setItem('preferredLanguage', locale.value);

  // 刷新网页
  window.location.reload();
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

      <!-- 切换语言按钮 -->
      <el-menu-item @click="toggleLanguage">
        {{ currentLanguage === 'en' ? '中文' : 'English' }}
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
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(45, 45, 45, 0.6)); /* 高级渐变背景 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* 阴影效果 */
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px 0;
  backdrop-filter: blur(10px); /* 背景模糊效果 */
}


.el-menu-item {
  color: #d4d4d4 !important; /* 柔和的白色文字 */
  font-weight: 600;
  font-size: 1.1em;
  transition: color 0.3s ease;
  position: relative;
  transform: skewX(-10deg); /* 文字倾斜 */
}

.el-menu-item:hover,
.el-menu-item.is-active {
//color: #d7f2e3 !important; /* 悬停和选中时的浅绿色 */
  color: #25ccf7 !important; /* 悬停和选中时的蓝色 */
  background-color: transparent !important; /* 确保背景颜色不改变 */
  transform: skewX(0deg) scale(1.05); /* 恢复并稍微放大 */
}

.el-menu-item::before,
.el-menu-item::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #25ccf7, transparent); /* 渐变下划线 */
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: scaleX(0.8);
}

.el-menu-item::before {
  bottom: -10px; /* 第一条下划线位置稍低 */
  transform: scaleX(0.8);
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
  filter: brightness(0.7); /* 增加暗色滤镜 */
}

/* 响应式调整 */
@media screen and (max-width: 512px) {
  .el-menu-demo {
    gap: 12px;
    padding: 12px;
  }
}
</style>
