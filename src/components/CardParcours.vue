<template>
  <a @click="onNavigation(parcour)" class="container-card">
    <div class="info-general">
      <h2>{{ parcour.infoGeneral.name }} | {{ parcour.dateDebut }} à {{ parcour.dateFin }}</h2>
      <p>{{ parcour.infoGeneral.description }}</p>
    </div>
    <div class="logo">
      <img :src="parcour.infoGeneral.image" alt="Logo parcours">
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Parcour } from '@/types/types';
import { useRouter } from 'vue-router';

defineProps<{ parcour: Parcour }>();

const router = useRouter();

function onNavigation(parcour: Parcour) {
  if (parcour.type === 'experience') {
    router.push(`/experience/${parcour.infoGeneral.id}`);
  } else {
    router.push(`/formation/${parcour.infoGeneral.id}`);
  }
}
</script>

<style scoped>
.container-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  background-color: #181818;
  border-radius: 10px;
  padding: 20px;
  height: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  gap: 1.5em;
}

.container-card:hover {
  transform: translateY(-5px);
}

.info-general {
  color: #a5a5a5;
  flex: 1;
}

.info-general h2 {
  font-size: 1.3em;
  margin-bottom: 0.5em;
}

.info-general p {
  font-size: 1em;
  line-height: 1.4;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  max-width: 150px;
  height: 100%;
  overflow: hidden;
}

.logo img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .container-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  }

  .info-general h2 {
    font-size: 1.2em;
  }

  .info-general p {
    font-size: 0.95em;
  }

  .logo {
    width: 40%;
    max-width: 120px;
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
  .container-card {
    flex-direction: column;
    padding: 15px;
    text-align: center;
    gap: 1em;
  }

  .info-general h2 {
    font-size: 1.1em;
  }

  .info-general p {
    font-size: 0.9em;
  }

  .logo {
    width: 50%;
    max-width: 100px;
  }
}

@media (max-width: 480px) {
  .info-general h2 {
    font-size: 1em;
  }

  .info-general p {
    font-size: 0.85em;
  }

  .logo {
    width: 60%;
    max-width: 90px;
  }
}
</style>
