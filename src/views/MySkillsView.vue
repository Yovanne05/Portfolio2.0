<template>
  <div class="container">
    <div v-for="logo in allSkillsLogo" :key="logo.path" class="container-logo">
      <LogoCard :logo="logo" class="logo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoCard from '@/components/LogoCard.vue';
import { allSkillsLogo } from '@/data/skills';
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  gap: 25px;
  margin: 0 2em;
}

.container-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 80px;
  height: 80px;
}

@media (max-width: 1024px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }

  .logo {
    width: 90px;
    height: 90px;
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 1em;
  }

  .logo {
    width: 80px;
    height: 100px;
  }
}

@media (max-width: 480px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 0 0.5em;
  }

  .logo {
    width: 80px;
    height: 90px;
  }
}

@media (max-width: 320px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
  }

  .logo {
    width: 70px;
    height: 80px;
  }
}
</style>
