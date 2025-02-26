<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from './views/HeaderView.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <div class="app-container">
    <HeaderView />
    <div class="route">
      <RouterView />
    </div>
    <FooterView class="footer" />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.route {
  flex: 1;
  justify-content: center;
  align-content: center;
  margin-left: 17em;
  margin-right: 17em;
}

.footer {
  margin-top: auto;
}

@media (max-width: 1200px) {
  .route {
    margin-left: 5em;
    margin-right: 5em;
  }
}

@media (max-width: 768px) {
  .route {
    margin-left: 3em;
    margin-right: 3em;
  }
}

@media (max-width: 480px) {
  .route {
    margin-left: 1em;
    margin-right: 1em;
  }

  .app-container {
    padding: 10px;
  }
}
</style>
