<!-- Home.vue -->
<script setup lang="ts">
import HomeText from '../components/HomeText.vue'
import ContactCard from '@/components/ContactCard.vue';
import { allContactLogo } from '@/data/contact';
</script>

<template>
  <div class="home-container">
    <div class="content">
      <HomeText class="homeText" :title="'Étudiant Développeur Full Stack'"
        :description="`Passionné par le développement informatique et les nouvelles technologies, j'aime concevoir des solutions innovantes pour résoudre des problèmes. Je crée des projets personnels afin d'approfondir mes compétences et d'explorer de nouvelles idées.`" />
    </div>
    <div class="contact-logo">
      <ContactCard v-for="contact in allContactLogo" :key="contact.path" :contact="contact" class="logo" />
    </div>
  </div>
</template>
<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  text-align: center;
}


.contact-logo {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 20px;
}

.logo {
  width: 2%;
  margin: 0 10px;
}

@media (max-width: 1024px) {
  .logo {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .logo {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .home-container {
    padding: 10px;
  }

  .logo {
    width: 45px;
    height: 30px;
  }
}
</style>
