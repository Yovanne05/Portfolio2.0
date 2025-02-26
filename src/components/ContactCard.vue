<template>
  <div class="container">
    <a :href="contact.redirectTo" target="_blank" class="button-card">
      <img :src="contact.path" alt="contact logo" class="button-img" />
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from '@/types/types';
defineProps<{
  contact: Contact
}>();
</script>

<style scoped>
.container {
  margin-top: 1em;
  margin-right: 0.5em;
  margin-left: 0.5em;
}

.button-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.button-img {
  width: 100%;
  height: auto;
}

p {
  text-decoration: none;
  color: #fff;
}
</style>
