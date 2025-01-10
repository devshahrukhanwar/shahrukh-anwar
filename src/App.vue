<script setup>
import Profile from '@/components/profile.vue'
import TopNav from '@/components/topnav.vue';
</script>

<template>
  <div class="container is-fluid p-6 dark-theme">
    <TopNav />
    <div class="columns is-flex">
      <div class="column is-one-third"><Profile /></div>
      <div class="column"><h2>Router View Here</h2></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
