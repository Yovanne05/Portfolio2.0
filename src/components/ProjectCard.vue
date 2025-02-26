<template>
  <a @click="onNavigation(project)" class="card">
    <ProjectInfomration :project="project" class="project" />
    <img :src="project.image" alt="image project" />
  </a>
</template>

<script setup lang="ts">
import type { Project } from '../types/types';
import { useRouter } from 'vue-router';
import ProjectInfomration from '../components/ProjectInfomration.vue';

const router = useRouter();

defineProps<{
  project: Project;
}>();

function onNavigation(project: Project) {
  router.push(`/project/${project.id}`);
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  width: 100%;
  height: 250px;
  background-color: #181818;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px);
}

.project {
  color: #a5a5a5;
  flex: 1;
}

img {
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 1024px) {
  .card {
    max-width: 90%;
    height: 220px;
  }

  img {
    width: 35%;
  }
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    align-items: center;
    height: auto;
    text-align: center;
    padding: 15px;
  }

  img {
    width: 100%;
    height: 200px;
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  .card {
    max-width: 100%;
    padding: 10px;
  }

  img {
    height: 180px;
  }
}
</style>
