<template>
  <div class="information-text">
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
  </div>
</template>
<script setup lang="ts">
import type { Project } from '@/types/types';

defineProps<{
  project: Project;
}>();

</script>
<style scoped>
.information-text {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
