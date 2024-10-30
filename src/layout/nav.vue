<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from 'vue-router';

const activeIndex = ref('1');
const router = useRouter();

const handleSelect = (key: string, keyPath: string[]) => {
  if (key === '/user') {
    router.push('/user');
  } else {
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
        <router-link to="/user" style="text-decoration: none; color: inherit;">
          Home
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about" style="text-decoration: none; color: inherit;">
          About
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/portfolio" style="text-decoration: none; color: inherit;">
          Portfolio
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/contact" style="text-decoration: none; color: inherit;">
          Contact Me
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/other" style="text-decoration: none; color: inherit;">
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
