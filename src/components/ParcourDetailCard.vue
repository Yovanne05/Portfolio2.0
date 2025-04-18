<template>
  <article class="card">
    <div class="card-media">
      <img
        :src="parcourinformation.image"
        :alt="parcourinformation.title"
        class="card-image"
        loading="lazy"
      />
      <div class="card-overlay"></div>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ parcourinformation.title }}</h3>
      <p class="card-description">{{ parcourinformation.description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Information } from '@/types/types';

defineProps<{
  parcourinformation: Information
}>();
</script>

<style scoped>
.card {
  --card-radius: 16px;
  --image-height: 180px;
  --card-padding: 1.25rem;
  --card-gap: 0.75rem;
  --min-width: 280px;
  --min-height: 300px;

  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--card-radius);
  overflow: hidden;
  background: #1E1E1E;
  min-width: var(--min-width);
  min-height: var(--min-height);
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-media {
  position: relative;
  width: 100%;
  height: var(--image-height);
  min-height: var(--image-height);
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%);
  opacity: 0.8;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: var(--card-gap);
  padding: var(--card-padding);
  flex-grow: 1;
  min-height: calc(var(--min-height) - var(--image-height));
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.4;
}

.card-description {
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

@media (max-width: 1024px) {
  .card {
    --image-height: 160px;
    --card-padding: 1rem;
    --min-width: 240px;
    --min-height: 320px;
  }
}

@media (max-width: 768px) {
  .card {
    --image-height: 140px;
    --card-gap: 0.5rem;
    --min-width: 200px;
    --min-height: 300px;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-description {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .card {
    --card-radius: 12px;
    --min-width: 160px;
    --min-height: 280px;
  }
}
</style>
