<template>

  <div v-for="project in allProject" :key="project.id" class="container">
    <ProjectCard :project="project" />
  </div>

</template>
<script setup lang="ts">

import ProjectCard from '../components/ProjectCard.vue';
import { ProjectService } from '../services/ProjectService';
import type { Project } from '../types/types';

const projectService = new ProjectService();
const allProject: Project[] = projectService.getAllProject();

</script>
<style scoped>
.container {
  margin-top: 2em;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  text-align: left;
}

a {
  text-decoration: none;
}
</style>
