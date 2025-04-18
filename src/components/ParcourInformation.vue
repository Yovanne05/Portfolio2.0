<template>
  <div class="parcour-card">
    <div class="card-glare"></div>

    <div class="parcour-header">
      <h1 class="parcour-title">
        <span class="title-text">{{ parcour.infoGeneral.name.toLocaleUpperCase() }}</span>
        <span class="title-line"></span>
      </h1>

      <div class="parcour-period">
        <div class="period-badge">{{ parcour.dateDebut }}</div>
        <div class="period-connector">
          <div class="connector-line"></div>
          <div class="connector-dot"></div>
        </div>
        <div class="period-badge">{{ parcour.dateFin }}</div>
      </div>
    </div>

    <p class="parcour-description">{{ parcour.infoGeneral.description }}</p>

    <a
      v-if="parcour.infoGeneral.redirection"
      :href="parcour.infoGeneral.redirection"
      target="_blank"
      class="parcour-link"
    >
      <span>Explorer</span>
      <div class="link-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M15 3H21V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M10 14L21 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Parcour } from '@/types/types';

defineProps<{
  parcour: Parcour
}>();
</script>

<style scoped>
.parcour-card {
  --primary: #3b82f6;
  --primary-hover: #60a5fa;
  --card-bg: #151515;
  --card-border: rgba(255, 255, 255, 0.05);
  --text-main: #f8fafc;
  --text-secondary: #94a3b8;

  position: relative;
  padding: 2.5rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.card-glare {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 60%);
  opacity: 0;
  transition: opacity 0.6s ease;
}

.parcour-header {
  margin-bottom: 2rem;
}

.parcour-title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 0 1.5rem 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  position: relative;
}

.title-text {
  position: relative;
  z-index: 2;
  letter-spacing: 0.05em;
}

.title-line {
  height: 2px;
  width: 60px;
  background: linear-gradient(90deg, var(--primary), transparent);
  opacity: 0.7;
}

.parcour-period {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.period-badge {
  padding: 0.5rem 1rem;
  background: rgba(30, 58, 138, 0.3);
  color: var(--primary-hover);
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(4px);
}

.period-connector {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  height: 1px;
}

.connector-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg,
  rgba(59, 130, 246, 0.4),
  rgba(59, 130, 246, 0.1));
}

.connector-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 8px var(--primary);
}

.parcour-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 0 2rem 0;
  font-size: 1.05rem;
}

.parcour-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
}

.parcour-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.parcour-link:hover {
  color: var(--primary-hover);
}

.parcour-link:hover::after {
  width: 100%;
}

.link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.parcour-link:hover .link-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .parcour-card {
    padding: 1.75rem;
  }

  .parcour-title {
    font-size: 1.5rem;
  }

  .parcour-period {
    flex-wrap: wrap;
  }

  .period-connector {
    display: none;
  }
}
</style>
