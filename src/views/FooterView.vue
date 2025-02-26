<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <div class="footer">
        <p>Yovanne Ponnou © {{ currentYear }} Tous droits réservés</p>
    </div>
</template>

<style scoped>
.footer {
    display: flex;
    padding: 2.5em;
    align-content: center;
    justify-content: center;
    margin-left: 1em;
    margin-right: 1em;
}
</style>
