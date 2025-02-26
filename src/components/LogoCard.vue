<template>
  <div class="container-logo">
    <img :src="logo.path" alt="logo image" class="logo-image">
    <p>{{ logo.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Logo } from '@/types/types';
defineProps<{
  logo: Logo
}>();
</script>

<style scoped>
.container-logo {
  padding: 0.5em;
  text-align: center;
  gap: 0.5em;
  margin: 0;
  width: 17%;
}

.logo-image {
  width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>
