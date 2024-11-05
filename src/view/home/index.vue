<script setup lang="ts">
import {getSkillList, PersonalSkill} from "../../api/personalSkill.ts";
import {ref, onMounted} from "vue";
import {ElCard, ElAvatar, ElTag} from 'element-plus';
import gsap from "gsap";
import router from "../../router";
import Swiper from "swiper";
import {useI18n} from 'vue-i18n';

const {t} = useI18n();


const name = ref(t('name'));

const title = ref( t("title") );
const birthday = ref("2 July 2004");
const description = ref( t("description"));
const isAvatarHovered = ref(false);
// 技能数组
let personalSkillList = ref<PersonalSkill[]>([]);


getSkillList().then(res => {
  personalSkillList.value = res.data.list;
})

const goToSkillDetail = (id: number) => {
  router.push({name: 'SkillDetail', params: {id: id}})
}


onMounted(() => {

  let swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: false,
    mousewheel: {
      invert: false,
    },

    pagination: {
      el: '.blog-slider_pagination',
      clickable: true,
    }
  });


  // GSAP 动画：为卡片增加淡入效果
  gsap.from(".blog-slider", {opacity: 0, y: -20, duration: 0.6, ease: "power2.out"});


});
</script>

<template>
  <div class="container">
    <!-- 卡片设计 -->
    <div class="blog-slider">
      <div class="blog-slider_wrp swiper-wrapper">

        <div class="blog-slider_item swiper-slide">
          <div class="blog-slider_img">
            <img src="https://ahaoqi-site.oss-cn-beijing.aliyuncs.com/logo/tset.jpg" alt="">
          </div>
          <div class="blog-slider_content">
            <span class="blog-slider_code">{{ birthday }}</span>
            <div class="blog-slider_title">{{ name }}</div>
            <div class="blog-slider_text">
              {{ title }}
            </div>
            <div class="blog-slider_text">
              {{ description }}
            </div>
            <h3>Skills:</h3>
            <div class="skills">
              <el-tag
                  v-for="(skill, index) in personalSkillList"
                  :key="index" type="info"
                  effect="dark"
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


    <!--备案信息-->
    <div class="fixed-footer">
      <img src="../../assets/logo/备案图标.png" alt="备案图标">
      <a href="https://beian.mps.gov.cn/#/query/webSearch?code=42108302240066" rel="noreferrer" target="_blank">
        鄂公网安备42108302240066
      </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 20px;
}

.blog-slider {
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all 0.3s;
}

@media screen and (max-width: 992px) {
  .blog-slider {
    max-width: 680px;
    height: 400px;
  }
}

@media screen and (max-width: 768px) {
  .blog-slider {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
}

@media screen and (max-height: 500px) and (min-width: 992px) {
  .blog-slider {
    height: 350px;
  }
}

.blog-slider_item {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .blog-slider_item {
    flex-direction: column;
  }
}

.blog-slider_item.swiper-slide-active .blog-slider_img img {
  opacity: 1;
  transition-delay: 0.3s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > * {
  opacity: 1;
  transform: none;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(1) {
  transition-delay: 0.3s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(2) {
  transition-delay: 0.4s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(3) {
  transition-delay: 0.5s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(4) {
  transition-delay: 0.6s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(5) {
  transition-delay: 0.7s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(6) {
  transition-delay: 0.8s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(7) {
  transition-delay: 0.9s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(8) {
  transition-delay: 1s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(9) {
  transition-delay: 1.1s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(10) {
  transition-delay: 1.2s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(11) {
  transition-delay: 1.3s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(12) {
  transition-delay: 1.4s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(13) {
  transition-delay: 1.5s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(14) {
  transition-delay: 1.6s;
}

.blog-slider_item.swiper-slide-active .blog-slider_content > *:nth-child(15) {
  transition-delay: 1.7s;
}

.blog-slider_img {
  width: 300px;
  flex-shrink: 0;
  height: 300px;
  background-image: linear-gradient(147deg, #7e71f3 0%, #8bb5f3 74%);
  box-shadow: 4px 13px 30px 1px rgba(11, 39, 100, 0.2);
  border-radius: 20px;
  transform: translateX(-80px);
  overflow: hidden;
}

.blog-slider_img:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(147deg, #7e71f3 0%, #8bb5f3 74%);
  border-radius: 20px;
  opacity: 0.2;
}

.blog-slider_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.3s;
}

@media screen and (max-width: 768px) {
  .blog-slider_img {
    transform: translateY(-50%);
    width: 90%;
  }
}

@media screen and (max-width: 576px) {
  .blog-slider_img {
    width: 95%;
  }
}

@media screen and (max-height: 500px) and (min-width: 992px) {
  .blog-slider_img {
    height: 270px;
  }
}

.blog-slider_content {
  padding-right: 25px;
}

@media screen and (max-width: 768px) {
  .blog-slider_content {
    margin-top: -80px;
    text-align: center;
    padding: 0 30px;
  }
}

@media screen and (max-width: 576px) {
  .blog-slider_content {
    padding: 0;
  }
}

.blog-slider_content > * {
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.4s;
}

.blog-slider_code {
  color: #7b7992;
  margin-bottom: 15px;
  display: block;
  font-weight: 500;
}

.blog-slider_title {
  font-size: 24px;
  font-weight: 700;
  color: #0d0925;
  margin-bottom: 20px;
}

.blog-slider_text {
  color: #4e4a67;
  margin-bottom: 30px;
  line-height: 1.5em;
}

.blog-slider_button {
  display: inline-flex;
  background-image: linear-gradient(147deg, #7e71f3 0%, #8bb5f3 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(11, 39, 100, 0.2);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
}

@media screen and (max-width: 576px) {
  .blog-slider_button {
    width: 100%;
  }
}

.blog-slider .swiper-container-horizontal > .swiper-pagination-bullets, .blog-slider .swiper-pagination-custom, .blog-slider .swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}

.blog-slider_pagination {
  position: absolute;
  z-index: 21;
  right: 20px;
  width: 11px !important;
  text-align: center;
  left: auto !important;
  top: 50%;
  bottom: auto !important;
  transform: translateY(-50%);
}

@media screen and (max-width: 768px) {
  .blog-slider_pagination {
    transform: translateX(-50%);
    left: 50% !important;
    top: 205px;
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.blog-slider_pagination.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 8px 0;
}

@media screen and (max-width: 768px) {
  .blog-slider_pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }
}

.blog-slider_pagination .swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  display: block;
  border-radius: 10px;
  background: #062744;
  opacity: 0.2;
  transition: all 0.3s;
}

.blog-slider_pagination .swiper-pagination-bullet-active {
  opacity: 1;
  background: #7e71f3;
  height: 30px;
  box-shadow: 0px 0px 20px rgba(11, 39, 100, 0.2);;
}

@media screen and (max-width: 768px) {
  .blog-slider_pagination .swiper-pagination-bullet-active {
    height: 11px;
    width: 30px;
  }
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
  transform: scale(1.1);
  color: #7e71f3;
  background-color: #e4eaff;
}

.fixed-footer {
  position: fixed;
  bottom: 10px; /* 距离底部的距离，可根据需要调整 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8); /* 半透明背景 */
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  color: #333;
  z-index: 9999;
}

.fixed-footer img {
  height: 20px; /* 图标高度 */
  margin-right: 8px; /* 图标与文字间距 */
}

.fixed-footer a {
  color: #007BFF;
  text-decoration: none;
}

.fixed-footer a:hover {
  text-decoration: underline;
}
</style>
