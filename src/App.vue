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
  <div class="portfolio container is-fluid">
    <TopNav />
    <ThemeSwitch @is-dark="setTheme" />
    <div class="columns is-flex-desktop is-block-mobile">
      <div class="column is-one-third"><Profile /></div>
      <div class="column is-full-mobile"><router-view /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .portfolio {
    padding: 3rem 6rem;
  }
</style>
