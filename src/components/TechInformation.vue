<template>
  <div class="tech-section">
    <div class="section-title-container">
      <h2 class="section-title">TECH STACK</h2>
      <div class="title-line"></div>
    </div>

    <div class="skills-grid">
      <div
        v-for="skill in infoTech.skills"
        :key="skill.name"
        class="skill-card"
      >
        <div class="skill-icon-container">
          <img
            :src="skill.path"
            :alt="skill.name"
            class="skill-icon"
            loading="lazy"
          />
        </div>
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-hover-indicator"></div>
      </div>
    </div>

    <div class="tech-summary glass-card">
      <h3 class="summary-title">
        <span class="highlight"></span>
        <span>Bilan</span>
      </h3>
      <div class="summary-content">
        <p>{{ infoTech.bilan }}</p>
      </div>
      <div class="corner-decoration"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechInfo } from '../types/types';

defineProps<{
  infoTech: TechInfo;
}>();

</script>

<style scoped>
.tech-section {
  margin: 5rem 0;
  padding: 0 1.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.section-title-container {
  margin-bottom: 4rem;
  position: relative;
  text-align: center;
}

.section-title {
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
}

.title-line {
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, #5f7cff, #3a5bff);
  margin: 0 auto;
  border-radius: 2px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.skill-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  background: rgba(30, 30, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
}

.skill-card:hover {
  transform: translateY(-5px);
  background: rgba(40, 40, 40, 0.8);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.skill-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.skill-card:hover::before {
  opacity: 0.15;
}

.skill-icon-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
}

.skill-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.4s ease;
}

.skill-card:hover .skill-icon {
  filter: grayscale(0%) brightness(1.1) opacity(1);
  transform: scale(1.15);
}

.skill-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  transition: all 0.3s ease;
}

.skill-card:hover .skill-name {
  color: #fff;
  font-weight: 600;
}

.skill-hover-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-card:hover .skill-hover-indicator {
  transform: scaleX(1);
}

.glass-card {
  position: relative;
  margin-top: 4rem;
  padding: 3rem;
  background: rgba(30, 30, 30, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.tech-summary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(95, 124, 255, 0.05), transparent);
  pointer-events: none;
}

.summary-title {
  position: relative;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.highlight {
  display: inline-block;
  width: 8px;
  height: 30px;
  background: linear-gradient(to bottom, #5f7cff, #3a5bff);
  border-radius: 4px;
}

.summary-content p {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  white-space: pre-line;
}

.corner-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 50%;
  background: linear-gradient(135deg, rgba(95, 124, 255, 0.1), transparent);
}

@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .section-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }

  .skill-card {
    padding: 1.25rem 0.5rem;
  }

  .skill-icon-container {
    width: 36px;
    height: 36px;
  }

  .skill-name {
    font-size: 0.8rem;
  }

  .tech-summary {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .skill-icon-container {
    width: 32px;
    height: 32px;
  }

  .tech-summary {
    padding: 1.5rem;
  }

  .summary-content p {
    font-size: 1rem;
  }
}
</style>
