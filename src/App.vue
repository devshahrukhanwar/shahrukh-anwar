<script setup>
import { ref } from "vue";
import Profile from '@/components/profile.vue'
import TopNav from '@/components/topnav.vue';
import ThemeSwitch from '@/components/common/theme-switch.vue';

const isDarkMode = ref(true);
const setTheme = (isDarkTheme) => {
  isDarkMode.value = isDarkTheme
}
</script>

<template>
  <!--  :class="isDarkMode ? 'dark-theme' : 'light-theme'" -->
  <div class="container is-fluid p-6">
    <TopNav />
    <ThemeSwitch @is-dark="setTheme" />
    <div class="columns is-flex">
      <div class="column is-one-third"><Profile /></div>
      <div class="column"><h2>Router View Here</h2></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
