<template>
  <div class="container-all-info" v-if="parcourDetail">
    <div class="container-info">
      <ParcourInformation :parcour="parcourDetail.parcour" />
    </div>
    <div class="container-details" v-for="parcouinfo in parcourDetail.information" :key="parcouinfo.image">
      <ParcourDetailCard :parcourinformation="parcouinfo" />
    </div>
    <div class="tech">
      <TechInformation :infoTech="parcourDetail.parcour.infoGeneral.infoTech" />
    </div>
  </div>


</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { DetailedParcour } from '../types/types';
import { ParcourService } from '@/services/ParcourService';
import ParcourInformation from '@/components/ParcourInformation.vue';
import ParcourDetailCard from '@/components/ParcourDetailCard.vue';
import TechInformation from '@/components/TechInformation.vue';

const route = useRoute();
const id = ref<number | null>(null);
const parcourService = new ParcourService();
const parcourDetail = ref<DetailedParcour | null>(null);

onMounted(() => {
  if (route.params.id) {
    id.value = Number(route.params.id);
    parcourDetail.value = parcourService.findParcourDetailsById(id.value);
  }
});

</script>
<style scoped>
.container-details {
  justify-items: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
}

.tech {
  justify-items: center;
  align-items: center;
}
</style>
