<template>
  <div>
    <a :href="cv" class="cv-button" target="_blank">
      Ouvrir mon CV
    </a>
  </div>
</template>

<script setup lang="ts">
import cv from '../../public/assets/CV_Yovanne_Ponnou.pdf'
</script>

<style scoped>
.cv-button {
  background-color: #534caf;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
}

.cv-button:hover {
  background-color: #383475;
}
</style>
