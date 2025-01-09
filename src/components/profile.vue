<script setup>
import { ref } from 'vue'
import Social from './social.vue';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="card profile">
    <div class="photo">
      <img src="@/assets/profile.avif" alt="profile-photo" />
    </div>
    <div class="details">
      <p> Aabraham James </p>
      <p> Product Designer & Developer </p>
      <p> Istanbul, Turkey </p>
      <Social />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .profile {
    // width: 344px;
    // height: 640px;
    .photo {
      border-radius: inherit;
    }
  }
</style>
