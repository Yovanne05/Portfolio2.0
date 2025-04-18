<template>
  <div class="project-card" @click="onNavigation(project)">
    <div class="card-container">
      <div class="image-wrapper">
        <div class="image-gradient"></div>
        <img
          :src="project.image"
          :alt="project.name"
          class="project-image"
          loading="lazy"
          width="400"
          height="300"
        />
        <div class="overlay">
          <h3>{{ project.name }}</h3>
          <p class="truncate">{{ truncatedDescription }}</p>
          <div class="action-button">
            <span>Voir le projet</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="tech-stack">
        <div
          v-for="skill in project.infoTech.skills"
          :key="skill.name"
          class="tech-badge"
        >
          <img :src="skill.path" :alt="skill.name" class="tech-icon" />
          <span class="tech-tooltip">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../types/types';
import { useRouter } from 'vue-router';
import { computed } from 'vue'

const router = useRouter();

const props = defineProps<{
  project: Project;
}>();

function onNavigation(project: Project) {
  router.push(`/project/${project.id}`);
}

const truncatedDescription = computed(() => {
  const description = props.project.description.trim();
  const maxLength = 60;

  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...';
  }

  return description;
});


</script>

<style scoped>
.project-card {
  --card-width: 100%;
  --card-height: 520px;
  --card-radius: 16px;
  --card-padding: 28px;
  --hover-elevation: 0 25px 50px rgba(0, 0, 0, 0.4);
  --primary-gradient: linear-gradient(90deg, #5f7cff, #3a5bff);
  --glass-effect: rgba(255, 255, 255, 0.08);
  --accent-color: 357, 92%, 47%;
  --transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  width: var(--card-width);
  height: var(--card-height);
  margin: 1.5rem;
  cursor: pointer;
  border-radius: var(--card-radius);
  overflow: hidden;
  background: #141414;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: var(--transition);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-card:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.card-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 75%;
  overflow: hidden;
  border-radius: var(--card-radius) var(--card-radius) 0 0;
}

.image-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 30%,
    rgba(0, 0, 0, 0.2) 60%,
    transparent 100%
  );
  z-index: 1;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
  filter: brightness(0.9) contrast(1.1);
  transform-origin: center center;
}

.project-card:hover .project-image {
  filter: brightness(1) contrast(1.2);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--card-padding);
  color: white;
  z-index: 2;
}

.overlay h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  color: white;
}

.overlay p {
  font-size: 1.1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.action-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--primary-gradient);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  width: fit-content;
  box-shadow: 0 4px 12px rgba(73, 73, 73, 0.3);
  transition: var(--transition);
}

.action-button svg {
  transition: transform 0.3s ease;
}

.project-card:hover .action-button:hover {
  background: linear-gradient(90deg, #5f7cff, #3a5bff);
  transform: scale(1.05);
}

.project-card:hover .action-button:hover svg {
  transform: translateX(3px);
}

.truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tech-stack {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: var(--card-padding);
  background: rgba(20, 20, 20, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  height: 25%;
  align-content: center;
  transition: var(--transition);
}

.project-card:hover .tech-stack {
  background: rgba(30, 30, 30, 0.9);
  border-top-color: rgba(255, 255, 255, 0.12);
}

.tech-badge {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-badge:hover {
  transform: translateY(-5px) scale(1.1);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.tech-badge:hover .tech-tooltip {
  opacity: 1;
  transform: translateY(0);
}

.tech-icon {
  width: 26px;
  height: 26px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.4s ease;
}

.tech-badge:hover .tech-icon {
  transform: scale(1.15);
}

.tech-tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  background: rgba(20, 20, 20, 0.95);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: var(--transition);
  backdrop-filter: blur(4px);
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tech-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px;
  border-style: solid;
  border-color: rgba(20, 20, 20, 0.95) transparent transparent transparent;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .project-card {
    --card-width: 380px;
    --card-height: 480px;
  }
}

@media (max-width: 992px) {
  .project-card {
    --card-width: 340px;
    --card-height: 460px;
    margin: 1.25rem;
  }

  .overlay h3 {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .project-card {
    --card-width: 100%;
    --card-height: auto;
    max-width: 500px;
    margin: 1.5rem auto;
  }

  .image-wrapper {
    height: 300px;
  }

  .tech-stack {
    height: auto;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .project-card {
    --card-padding: 1.5rem;
    margin: 1.25rem auto;
  }

  .overlay h3 {
    font-size: 1.6rem;
  }

  .overlay p {
    font-size: 1rem;
  }

  .tech-badge {
    width: 44px;
    height: 44px;
  }

  .action-button {
    padding: 10px 16px;
    font-size: 0.95rem;
  }
}
</style>
