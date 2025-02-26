<template>

  <div class="container-all-parcour">
    <div class="container-parcours" v-for="parcour in allFormation" :key="parcour.infoGeneral.id">
      <CardParcours :parcour="parcour" />
      <ButttonOpenMyCV class="boutton" />
    </div>
  </div>

</template>
<script setup lang="ts">
import CardParcours from '@/components/CardParcours.vue';
import { allFormation } from '@/data/formation';
import ButttonOpenMyCV from '../components/ButttonOpenMyCV.vue';

</script>
<style scoped>
.boutton {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
