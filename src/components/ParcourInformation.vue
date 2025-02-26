<template>
  <div class="container-parcour">
    <v-if></v-if>
    <h1>{{ parcour.infoGeneral.name.toLocaleUpperCase() }}</h1>
    <p>{{ parcour.dateDebut }} à {{ parcour.dateFin }}</p>
    <p>{{ parcour.infoGeneral.description }}</p>
    <a v-if="parcour.infoGeneral.redirection" :href="parcour.infoGeneral.redirection" target="_blank">
      Voir le site
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
.container-parcour {
  justify-items: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.2em;
}

a {
  text-decoration: none;
  color: #5f7cff;
}
</style>
