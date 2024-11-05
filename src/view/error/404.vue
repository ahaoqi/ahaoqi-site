<script setup lang="ts">
import { getSkillList, PersonalSkill } from "../../api/personalSkill.ts";
import { ref, onMounted } from "vue";
import { ElTag } from 'element-plus';
import gsap from "gsap";
import router from "../../router";
import Swiper from "swiper";

const name = ref("Ahaoqi");
const title = ref("Full-Stack Developer");
const birthday = ref("2 July 2004");
//我是一个充满激情的开发人员，在前端和后端技术方面都有经验。熟练掌握springBoot + Vue.js进行程序设计开发。
const description = ref(
    "I am a passionate developer with experience in both front-end and back-end technology. " +
    "Proficient in springBoot + Vue.js program design and development.");
const personalSkillList = ref<PersonalSkill[]>([]);

// 获取技能列表
getSkillList().then(res => {
  personalSkillList.value = res.data.list;
});

// 跳转技能详情
const goToSkillDetail = (id: number) => {
  router.push({ name: 'SkillDetail', params: { id: id } });
};

onMounted(() => {
  // 初始化 Swiper 3D 效果
  const swiper = new Swiper('.blog-slider', {
    effect: 'coverflow',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.blog-slider_pagination',
      clickable: true,
    },
  });

  // GSAP 动画
  gsap.from(".blog-slider", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });
});
</script>

<template>
  <div class="container">
    <div class="blog-slider">
      <div class="blog-slider_wrp swiper-wrapper">
        <div class="blog-slider_item swiper-slide">
          <div class="blog-slider_img">
            <img src="https://ahaoqi-site.oss-cn-beijing.aliyuncs.com/logo/tset.jpg" alt="Profile">
          </div>
          <div class="blog-slider_content">
            <span class="blog-slider_code">{{ birthday }}</span>
            <div class="blog-slider_title">{{ name }}</div>
            <div class="blog-slider_text">{{ title }}</div>
            <div class="blog-slider_text">{{ description }}</div>
            <h3>Skills:</h3>
            <div class="skills">
              <el-tag
                  v-for="(skill, index) in personalSkillList"
                  :key="index" type="info" effect="dark"
                  @click="goToSkillDetail(skill.id)"
                  class="skill-tag"
              >
                {{ skill.name }}
              </el-tag>
            </div>
          </div>
        </div>
      </div>
      <div class="blog-slider_pagination"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 20px;
  justify-content: center;
}

.blog-slider {
  width: 100%;
  max-width: 800px;
  position: relative;
  background: #fff;
  padding: 25px;
  border-radius: 25px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.blog-slider_item {
  display: flex;
  align-items: center;
}

.blog-slider_img {
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  flex-shrink: 0;
}

.blog-slider_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
}

.blog-slider_content {
  padding: 20px;
  text-align: left;
}

.blog-slider_title {
  font-size: 24px;
  font-weight: 700;
  color: #0d0925;
}

.blog-slider_code,
.blog-slider_text {
  color: #4e4a67;
  margin-bottom: 20px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;
}


.skill-tag:hover {
  transform: scale(1.5);
  color: #7e71f3;
  background-color: #e4eaff;
}

.blog-slider_pagination {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.blog-slider_pagination .swiper-pagination-bullet {
  background: #7e71f3;
  opacity: 0.5;
  transition: opacity 0.3s;
}
.blog-slider_pagination .swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
