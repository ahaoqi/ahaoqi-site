<script setup lang="ts">
import { onMounted, ref } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import gsap from 'gsap';
import wechatQR from '../assets/logo/wechatAhaoqi.png';
import insQR from '../assets/logo/insQR.png';
import Nav from "./nav.vue";

const iconsListRef = ref(null);

onMounted(() => {
  // 初始化 tippy
  tippy('.tooltip', {
    content: (reference) => {
      const iconType = reference.getAttribute('data-icon');
      if (iconType === 'wechat') {
        return `<img src="${wechatQR}" alt="Wechat QR code" style="width: 240px; height: 240px;">`;
      }
      if (iconType === 'instagram') {
        return `<img src="${insQR}" alt="Ins QR code" style="width: 240px; height: 240px;">`;
      }
      switch (iconType) {
        case 'bilibili':
          return 'Visit my Bilibili homepage';
        case 'email':
          return 'Contact me by email';
        case 'github':
          return 'Visit my GitHub';
        case 'instagram':
          return 'Visit my Ins';
        default:
          return '更多信息';
      }
    },
    allowHTML: true,
    placement: 'right',
    theme: 'light',
    arrow: true,
    delay: [200, 100],
  });

  // 15秒后向左移动一半隐藏所有图标
  setTimeout(() => {
    gsap.to(iconsListRef.value.children, {
      x: '-60%',
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.1,
    });
  }, 5000);

  // 为每个图标 li 元素添加悬停事件
  Array.from(iconsListRef.value.children).forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(<gsap.TweenTarget>icon, {
        x: '0%', // 滑动出来
        duration: 0.5,
        ease: 'power2.out',
      });
    });

    icon.addEventListener('mouseleave', () => {
      gsap.to(<gsap.TweenTarget>icon, {
        x: '-50%', // 恢复到隐藏一半的位置
        duration: 0.5,
        ease: 'power2.out',
      });
    });
  });
});
</script>

<template>
  <div>
    <div class="common-layout">
      <ul class="icons-list" ref="iconsListRef">
        <li>
          <a href="https://space.bilibili.com/273095233?spm_id_from=333.1007.0.0" class="tooltip" data-icon="bilibili">
            <img src="../assets/logo/bilibili.svg" alt="Bilibili" class="svg-icon"/>
          </a>
        </li>
        <li>
          <a href="https://web.wechat.com/" class="tooltip" data-icon="wechat"><i class="fab fa-weixin"></i></a>
        </li>
        <li>
          <a href="mailto:3080980768@qq.com?subject=联系我&body=你好！" class="tooltip" data-icon="email"><i class="fas fa-envelope"></i></a>
        </li>
        <li>
          <a href="https://github.com/ahaoqi/ahaoqi-site" class="tooltip" data-icon="github"><i class="fab fa-github"></i></a>
        </li>
        <li>
          <a href="#" class="tooltip" data-icon="instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="centered-router-view">
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
/* 缩小后的样式 */
ul.icons-list {
  position: fixed;
  bottom: 10px; /* 调整边距 */
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px; /* 缩小间距 */
  padding: 10px;
  border-radius: 10px;
  z-index: 10;
  transform: scale(0.8); /* 缩小整体尺寸 */

}

li {
  list-style: none;
}

ul.icons-list li a {
  position: relative;
  display: block;
  color: white;
  width: 48px; /* 缩小图标尺寸 */
  height: 48px;
  font-size: 24px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  background: #2c3a47;
  transition: 0.4s;
}

ul.icons-list li a:hover {
  text-shadow: 0 0 4px #fff;
}

ul.icons-list li a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: #fff;
  transition: 0.6s;
  transform: scale(0.8);
  z-index: -1;
}

ul.icons-list li a:hover::before {
  box-shadow: 0 0 14px 2px #fff;
  transform: scale(1.05);
}

/* bilibili */
.svg-icon {
  width: 24px; /* 缩小图标 */
  height: 24px;
  transition: 0.4s;
  filter: invert(1);
}

ul.icons-list li a:hover .svg-icon {
  filter: invert(1) drop-shadow(0 0 2px rgb(37, 204, 247));
}

@media screen and (max-width: 512px) {
  ul.icons-list {
    flex-direction: column;
    transform: scale(0.7); /* 更小比例 */
  }

  ul.icons-list li {
    margin: 12px 0;
  }
}

/* 向下滑动的动画效果CSS */
.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* 应用容器和内容容器样式 */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-container {
  flex: 1;
  margin-top: 60px; /* 根据需要调整布局 */
}
</style>
