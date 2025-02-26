<template>

  <div class="container-all-parcour">
    <div class="container-parcours" v-for="parcour in allExperiences" :key="parcour.infoGeneral.id">
      <CardParcours :parcour="parcour" />
    </div>
  </div>

</template>
<script setup lang="ts">
import CardParcours from '@/components/CardParcours.vue';
import { allExperiences } from '@/data/experience';

</script>
<style scoped>
.container-parcours {
  margin-left: 2em;
  margin-right: 2em;
}
</style>
