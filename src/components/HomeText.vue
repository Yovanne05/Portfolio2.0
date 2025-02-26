<script setup lang="ts">
defineProps({
  title: String,
  description: String
});
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}


</style>
