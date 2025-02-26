<template>
  <div class="container" v-if="projectDetail">
    <div class="information-project">
      <ProjectInfomration :project="projectDetail.project" />
      <a :href="projectDetail.project.redirection" target="_blank">Voir le repository</a>
    </div>
    <div class="carousel">
      <button @click="prevCard()" class="arrow left" :disabled="currentIndex === 0">❮</button>
      <div class="information-card">
        <InformationCard :projectInformation="projectDetail.information[currentIndex]" />
      </div>
      <button @click="nextCard()" class="arrow right"
        :disabled="currentIndex === projectDetail.information.length - 1">❯</button>
    </div>
    <div class="tech">
      <TechInformation :infoTech="projectDetail.project.infoTech" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { ProjectInformations } from '../types/types';
import { ProjectService } from '../services/ProjectService';
import InformationCard from '../components/InformationCard.vue';
import ProjectInfomration from '@/components/ProjectInfomration.vue';
import TechInformation from '@/components/TechInformation.vue';

const route = useRoute();
const id = ref<number | null>(null);
const projectService = new ProjectService();
const projectDetail = ref<ProjectInformations | null>(null);
const currentIndex = ref(0);

onMounted(() => {
  if (route.params.id) {
    id.value = Number(route.params.id);
    projectDetail.value = projectService.findProjectDetailsById(id.value);
  }
});

const nextCard = () => {
  if (projectDetail.value && currentIndex.value < projectDetail.value.information.length - 1) {
    currentIndex.value++;
  }
};

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style scoped>
a {
  display: inline-block;
  text-decoration: none;
  color: #5f7cff;
  font-weight: bold;
  margin: 1em;
}

.information-project {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}


.container {
  margin: 2em;
  text-align: center;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
  margin: 0 auto;
}

.information-card {
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
  width: 100%;
}

.arrow {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5em;
  color: white;
}

.arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.left {
  position: absolute;
  left: -2em;
}

.right {
  position: absolute;
  right: -2em;
}

.tech {
  justify-items: center;
  align-items: center;
}
</style>
