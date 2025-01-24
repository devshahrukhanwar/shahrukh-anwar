<script lang="ts" setup>
import socials from '@/config/socials.json'
</script>

<template>
  <div class="social py-3">
    <div class="inline-flex is-size-5">
      <span class="icon is-clickable mx-2" v-for="social in socials" :key="social.icon">
        <img
          :src="`icons/${social.icon}.svg`"
          :alt="social.title"
          :title="social.title"
        />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  // 
</style>