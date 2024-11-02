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
  }, 1000);

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
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
/* 修改后的样式 */
.fullscreen-image {
  position: fixed; /* 固定定位 */
  bottom: 0; /* 从底部开始 */
  left: 0; /* 从左侧开始 */
  width: auto; /* 自动宽度 */
  height: auto; /* 自动高度 */
  max-width: 100%; /* 最大宽度为100% */
  max-height: 100%; /* 最大高度为100% */
  object-fit: contain; /* 图片填充方式，contain 会保持图片比例 */
  z-index: -1; /* 确保图片在其他内容之下 */
}

body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

ul,
li {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 25;
}

ul.icons-list {
  position: fixed; /* 固定定位 */
  bottom: 0; /* 从底部开始 */
  left: 0; /* 从左侧开始 */
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中 */
  gap: 18px; /* 项目之间的间距 */
  padding: 18px; /* 内边距 */
  border-radius: 10px 10px 0 0; /* 圆角 */
  z-index: 10; /* 确保在其他内容之上 */
}

ul.icons-list li a {
  position: relative;
  display: block;
  color: white;
  width: 64px;
  height: 64px;
  font-size: 36px;
  text-align: center;
  line-height: 66px;
  border-radius: 50%;
  background: #2c3a47;
  transition: 0.6s;
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
  transition: 0.6s;
  filter: invert(1);
}

ul.icons-list li {
  overflow: hidden;
}

ul.icons-list li a:hover .svg-icon {
  filter: invert(1) drop-shadow(0 0 2px rgb(37, 204, 247));
}

@media screen and (max-width: 512px) {
  ul.icons-list {
    flex-direction: column;
  }

  ul.icons-list li {
    margin: 18px 0;
  }
}
</style>
