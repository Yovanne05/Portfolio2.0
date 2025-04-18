<template>
  <div class="project-detail" v-if="projectDetail">
    <section class="project-hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="project-title">{{ projectDetail.project.name }}</h1>
          <p class="project-description">{{ projectDetail.project.description }}</p>
          <div class="hero-actions">
            <a :href="projectDetail.project.redirection" target="_blank" class="repo-link">
              <span>Voir le repository</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6H6V18H18V14" stroke="currentColor" stroke-width="2"/>
                <path d="M14 4H20V10" stroke="currentColor" stroke-width="2"/>
                <path d="M20 4L10 14" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="hero-image">
          <img :src="projectDetail.project.image" :alt="projectDetail.project.name" loading="lazy" />
          <div class="image-frame"></div>
        </div>
      </div>
    </section>

    <section class="project-gallery" v-if="displayedImages.length > 0">
      <div class="section-header">
        <h2 class="section-title">GALERIE DU PROJET</h2>
        <div class="title-divider"></div>
      </div>

      <div class="gallery-container">
        <div
          v-for="(info, index) in displayedImages"
          :key="index"
          class="gallery-card"
          @click="openImage(info.image, info.title)"
        >
          <div class="card-image">
            <img :src="info.image" :alt="info.title" loading="lazy" />
            <div class="card-overlay">
              <h3>{{ info.title }}</h3>
              <p>{{ truncateDescription(info.description) }}</p>
              <div class="zoom-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 15L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/>
                  <path d="M10 7V10H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="card-info">
            <h3>{{ info.title }}</h3>
            <p>{{ info.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <TechInformation :infoTech="projectDetail.project.infoTech" />

    <div v-if="isImageOpen" class="image-modal" @click="closeImage">
      <div class="modal-container" @click.stop>
        <img :src="selectedImage" :alt="'Zoom de ' + selectedImageTitle" />
        <div class="modal-info">
          <h3>{{ selectedImageTitle }}</h3>
          <button class="modal-close" @click="closeImage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { ProjectInformations } from '../types/types';
import { ProjectService } from '../services/ProjectService';
import TechInformation from '@/components/TechInformation.vue';

const route = useRoute();
const projectService = new ProjectService();
const projectDetail = ref<ProjectInformations | null>(null);
const isImageOpen = ref(false);
const selectedImage = ref('');
const selectedImageTitle = ref('');

const displayedImages = computed(() => {
  return projectDetail.value?.information || [];
});

onMounted(() => {
  if (route.params.id) {
    const id = Number(route.params.id);
    projectDetail.value = projectService.findProjectDetailsById(id);
  }
});

const truncateDescription = (desc: string) => {
  return desc.length > 100 ? desc.substring(0, 100) + '...' : desc;
};

const openImage = (imageSrc: string, title: string = '') => {
  selectedImage.value = imageSrc;
  selectedImageTitle.value = title;
  isImageOpen.value = true;
};

const closeImage = () => {
  isImageOpen.value = false;
};
</script>

<style scoped>
.project-detail {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  color: #fff;
}

.project-hero {
  padding: 5rem 0;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.project-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #fff, #aaa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.project-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
}

.hero-actions {
  margin-top: 2rem;
}

.repo-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #5f7cff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.75rem 1.5rem;
  background: rgba(95, 124, 255, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(95, 124, 255, 0.3);
}

.repo-link:hover {
  color: #3a5bff;
  background: rgba(95, 124, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(95, 124, 255, 0.2);
}

.repo-link svg {
  transition: transform 0.3s ease;
}

.repo-link:hover svg {
  transform: translate(3px, -3px);
}

.hero-image {
  flex: 1;
  position: relative;
  max-width: 600px;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.image-frame {
  position: absolute;
  top: -20px;
  right: -20px;
  bottom: 20px;
  left: 20px;
  border: 2px solid rgba(95, 124, 255, 0.5);
  border-radius: 16px;
  z-index: 0;
  transition: all 0.5s ease;
}

.hero-image:hover .image-frame {
  top: -15px;
  right: -15px;
  bottom: 15px;
  left: 15px;
}

.project-gallery {
  padding: 5rem 0;
}

.section-header {
  margin-bottom: 4rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.title-divider {
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, #5f7cff, #3a5bff);
  margin: 0 auto;
  border-radius: 2px;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.gallery-card {
  background: rgba(30, 30, 30, 0.5);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.gallery-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(95, 124, 255, 0.3);
}

.card-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  cursor: zoom-in;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-overlay p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
}

.zoom-indicator {
  align-self: flex-end;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.gallery-card:hover .zoom-indicator {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.card-info {
  padding: 1.5rem;
}

.card-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.card-info p {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: zoom-out;
}

.modal-container {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.modal-container img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
}

.modal-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-info h3 {
  font-size: 1.2rem;
  color: white;
}

.modal-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;
}

.modal-close:hover {
  transform: rotate(90deg);
}

@media (max-width: 1200px) {
  .project-title {
    font-size: 3rem;
  }

  .hero-content {
    gap: 3rem;
  }
}

@media (max-width: 992px) {
  .hero-content {
    flex-direction: column;
  }

  .hero-text {
    max-width: 100%;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image {
    margin-top: 3rem;
  }

  .gallery-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .project-detail {
    padding: 0 1.5rem;
  }

  .project-title {
    font-size: 2.5rem;
  }

  .project-description {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .gallery-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .project-title {
    font-size: 2rem;
  }

  .project-hero {
    padding: 3rem 0;
  }

  .project-gallery {
    padding: 3rem 0;
  }

  .repo-link {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>
