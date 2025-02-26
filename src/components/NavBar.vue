<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { NavigationPage } from '@/types/types';
import { RouterLink } from 'vue-router';

defineProps<{ navigationPage: NavigationPage[] }>();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>


<template>
  <div class="nav-container">
    <button class="menu-button" @click="toggleMenu">
      ☰ Menu
    </button>

    <ul :class="{ 'mobile-menu': true, 'open': isMenuOpen }">
      <li v-for="navigation in navigationPage" :key="navigation.urlName">
        <router-link :to="`/${navigation.urlName}`" class="route" @click="isMenuOpen = false">
          {{ navigation.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.nav-container {
  position: relative;
}

.menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 1.5em;
  color: white;
  cursor: pointer;
}

ul {
  display: flex;
  justify-content: space-between;
}

li {
  list-style-type: none;
  font-size: 15px;
  margin-right: 1em;
}

.route {
  text-decoration: none;
  color: #fff;
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .mobile-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    padding: 2em;
  }

  .mobile-menu.open {
    display: flex;
  }

  .mobile-menu li {
    text-align: center;
    margin: 10px 0;
  }
}
</style>
