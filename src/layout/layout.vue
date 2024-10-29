<script setup>
import { onMounted } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import wechatQR from '../assets/logo/wechatAhaoqi.png'; // 引入二维码图片
import insQR from '../assets/logo/insQR.png'; // 引入二维码图片

onMounted(() => {
  tippy('.tooltip', {
    content: (reference) => {
      const iconType = reference.getAttribute('data-icon');

      // 检查是否为微信图标，显示二维码
      if (iconType === 'wechat') {
        return `<img src="${wechatQR}" alt="微信二维码" style="width: 240px; height: 240px;">`;
      }
      // 检查为ins
      if (iconType === 'linkedin') {
        return `<img src="${insQR}" alt="Ins二维码" style="width: 240px; height: 240px;">`;
      }

      // 其他图标的文字提示
      switch(iconType) {
        case 'bilibili': return '访问我的Bilibili主页';
        case 'email': return '联系我的邮箱';
        case 'github': return '查看我的GitHub';
        case 'linkedin': return '连接我的LinkedIn';
        default: return '更多信息';
      }
    },
    allowHTML: true,  // 允许HTML内容
    placement: 'right',
    theme: 'light',
    arrow: true,
    delay: [200, 100],
  });
});
</script>

<template>
  <div>
    <div class="common-layout">
      <img src="../assets/logo/ilogo_1.png" class="fullscreen-image">
      <ul class="icons-list">
        <li>
          <a href="https://space.bilibili.com/273095233?spm_id_from=333.1007.0.0" class="tooltip" data-icon="bilibili"><img src="../assets/logo/bilibili.svg" alt="Bilibili" class="svg-icon"/></a>
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
          <a href="#" class="tooltip" data-icon="linkedin"><i class="fab fa-linkedin"></i></a>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
/* 原有样式保持不变 */
</style>


<style scoped>
.fullscreen-image {
  position: fixed; /* 固定定位 */
  top: 0;          /* 从顶部开始 */
  left: 0;         /* 从左侧开始 */
  width: 100%;     /* 宽度为100% */
  height: 100%;    /* 高度为100% */
  object-fit: cover; /* 图片填充方式，cover 会裁剪图片以适应容器 */
  z-index: -1;     /* 确保图片在其他内容之下 */
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
  background: #2c3a47;
  z-index: 25;
}

.icons-list {
  position: absolute;
  bottom: 0;       /* 放在底部 */
  left: 0;         /* 放在左边 */
  display: flex;
  flex-direction: column; /* 竖向排列 */
  gap: 18px;       /* 项目之间的间距 */
  padding: 18px;   /* 内边距 */
}

li a {
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

li a:hover {
  text-shadow: 0 0 4px #25ccf7;
}

li a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: #25ccf7;
  transition: 0.6s;
  transform: scale(0.8);
  z-index: -1;
}

li a:hover::before {
  box-shadow: 0 0 14px 2px #25ccf7;
  transform: scale(1.05);
}

/* bilibili */
.svg-icon {
  transition: 0.6s;
  filter: invert(1);
}

li a:hover .svg-icon {
  filter: invert(1) drop-shadow(0 0 2px rgb(37, 204, 247));
}

@media screen and (max-width: 512px) {
  .icons-list {
    gap: 12px;     /* 项目之间的间距 */
    padding: 12px; /* 内边距 */
  }
}
</style>
