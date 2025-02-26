<template>
  <div class="container-tech">
    <div class="bilan" v-if="infoTech.bilan">
      <h3>Bilan</h3>
      <div class="description">
        <p v-html="infoTech.bilan"></p>
      </div>
    </div>
    <div class="tech-image" v-if="infoTech.skills && infoTech.skills.length">
      <h3>Technologies Utilisées</h3>
      <div class="logos">
        <img v-for="logo in infoTech.skills" :key="logo.path" :src="logo.path" alt="Logo technologie"
          class="tech-logo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechInfo } from '@/types/types';

defineProps<{ infoTech: TechInfo }>();
</script>

<style scoped>
.container-tech {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  gap: 30px;
  border-radius: 20px;
  width: 100%;
  color: #f1f5f9;
  justify-content: center;
  align-content: center;

}

.bilan,
.tech-image {
  justify-items: center;
  align-items: center;
  flex: 1;
  min-width: 320px;
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

h3 {
  margin-bottom: 15px;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 10px;
}

.description {
  flex-grow: 1;
  text-align: center;
  font-size: 1.1em;
  line-height: 1.5;
}

.tech-logo {
  height: 3em;
  border-radius: 15px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}

.tech-logo:hover {
  transform: scale(1.1);
}

@media (max-width: 1024px) {
  .container-tech {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .bilan,
  .tech-image {
    max-width: 90%;
  }

  .tech-logo {
    height: 4em;
  }
}

@media (max-width: 768px) {

  .bilan,
  .tech-image {
    min-width: 100%;
  }

  h3 {
    font-size: 1.3em;
  }

  .description {
    font-size: 1em;
  }

  .tech-logo {
    height: 3.5em;
  }
}

@media (max-width: 480px) {
  h3 {
    font-size: 1.2em;
  }

  .description {
    font-size: 0.9em;
  }

  .tech-logo {
    height: 3em;
  }
}
</style>
