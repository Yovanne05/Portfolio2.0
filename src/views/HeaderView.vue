<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import AppTitle from '../components/AppTitle.vue'
import { navigationPages } from '@/data/data';

</script>

<template>
  <div class="header">
    <AppTitle />
    <NavBar :navigationPage="navigationPages" />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  padding: 2.5em;
  justify-content: space-between;
  align-items: center;
  margin-left: 1em;
  margin-right: 1em;
}
</style>
