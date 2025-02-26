<template>
  <div class="card-wrapper">
    <div class="card-container">
      <div class="text-content">
        <h3 class="title">{{ projectInformation.title.toLocaleUpperCase() }}</h3>
        <p class="description">{{ projectInformation.description }}</p>
      </div>
      <div class="image-container">
        <img :src="projectInformation.image" alt="image project" @click="openImage(projectInformation.image)"
          class="image-card" />
      </div>
    </div>
  </div>

  <div v-if="isImageOpen" class="overlay" @click="closeImage">
    <img :src="selectedImage" class="full-image" alt="Expanded image" />
  </div>
</template>

<script setup lang="ts">
import type { Information } from '../types/types';
import { ref } from 'vue';

defineProps<{ projectInformation: Information }>();

const isImageOpen = ref(false);
const selectedImage = ref('');

const openImage = (imageSrc: string) => {
  selectedImage.value = imageSrc;
  isImageOpen.value = true;
};

const closeImage = () => {
  isImageOpen.value = false;
};
</script>

<style scoped>
.card-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1em;
}

.card-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #181818;
  padding: 2em;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 100%;
}

.text-content {
  padding: 1em;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 0.2em;
}

.description {
  flex-grow: 1;
  text-align: center;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  width: 50%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.image-card {
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.image-card:hover {
  transform: scale(1.02);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.full-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.full-image:hover {
  transform: scale(1.02);
}

@media (max-width: 1024px) {
  .card-container {
    flex-direction: column;
    padding: 1.5em;
  }

  .text-content,
  .image-container {
    width: 100%;
  }

  .title {
    font-size: 1.3em;
  }

  .description {
    font-size: 0.9em;
  }

  .image-card {
    max-height: 220px;
  }
}

@media (max-width: 768px) {
  .card-wrapper {
    padding: 0.5em;
  }

  .card-container {
    padding: 1em;
  }

  .title {
    font-size: 1.2em;
  }

  .description {
    font-size: 0.85em;
  }

  .image-card {
    max-height: 200px;
  }
}

@media (max-width: 480px) {
  .card-container {
    padding: 0.8em;
  }

  .title {
    font-size: 1.1em;
  }

  .description {
    font-size: 0.8em;
  }

  .image-card {
    max-height: 180px;
  }
}
</style>
