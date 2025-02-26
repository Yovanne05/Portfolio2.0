<template>
  <div class="container-info">
    <div class="container-left">
      <h2>{{ parcourinformation.title }}</h2>
      <p>{{ parcourinformation.description }}</p>
    </div>
    <div class="container-right">
      <img :src="parcourinformation.image" alt="image">
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Information } from '@/types/types';

defineProps<{
  parcourinformation: Information
}>();
</script>

<style scoped>
.container-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #181818;
  border-radius: 2em;
  height: auto;
  min-width: 100%;
  overflow: hidden;
  padding: 20px;
}

.container-left {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  justify-content: center;
  align-items: flex-start;
  padding: 2em;
  flex: 1;
  min-width: 50%;
}

.container-left h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

.container-left p {
  font-size: 1em;
  line-height: 1.4;
}

.container-right {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-right img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 2em;
}

@media (max-width: 1024px) {
  .container-info {
    flex-direction: row;
  }

  .container-left,
  .container-right {
    width: 50%;
    text-align: left;
    padding: 1.5em;
  }

  .container-left h2 {
    font-size: 1.4em;
  }

  .container-left p {
    font-size: 1.1em;
  }

  .container-right img {
    width: 100%;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .container-info {
    flex-direction: column;
    align-items: center;
  }

  .container-left,
  .container-right {
    width: 100%;
    text-align: left;
    padding: 1em;
  }

  .container-left h2 {
    font-size: 1.2em;
  }

  .container-left p {
    font-size: 1em;
  }

  .container-right img {
    width: 90%;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .container-left h2 {
    font-size: 1em;
  }

  .container-left p {
    font-size: 0.9em;
  }

  .container-right img {
    width: 100%;
    height: 200px;
  }
}
</style>
