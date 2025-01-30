<script lang="ts" setup>
import socials from '@/config/socials.json'
</script>

<template>
  <div class="social py-3">
    <div class="inline-flex is-size-5">
      <a 
        class="is-inline-flex"
        target="_blank" 
        rel="noopener noreferrer"
        :href="social.url"
        v-for="social in socials" :key="social.icon"
      >
        <span class="icon is-clickable">
          <img
            :src="`icons/${social.icon}.svg`"
            :alt="social.title"
            :title="social.title"
          />
        </span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .social {
    .icon {
      margin: 0 2px;
    }
  }
</style>