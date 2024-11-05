<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const skillId = ref(route.params.id);

// 可以在此使用 skillId 去获取技能的详细信息
onMounted(() => {
  console.log('Skill ID:', skillId.value);
});
</script>

<template>
  <div>
    <h1>Skill Detail</h1>
    <p>Skill ID: {{ skillId }}</p>
    <!-- 在这里可以根据 skillId 获取详细的技能数据 -->
  </div>
</template>

<style scoped>

</style>
