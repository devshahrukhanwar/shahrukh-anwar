<script setup>
import { ref } from 'vue'
import Social from './social.vue';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="card container is-fluid p-6 profile">
    <div class="info">
      <div class="photo">
        <img src="@/assets/profile.avif" alt="profile-photo" />
      </div>
      <div class="details">
        <section class="name">Shahrukh Anwar</section>
        <section class="designation">Full Stack Developer</section>
        <section class="address">Allahabad, India</section>
      </div>
    </div>
    <Social />
    <button class="button">
      Let's talk bussiness
    </button>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style.scss';
  .profile {
    border-radius: 16px;
    background-color: $in-bg-color;

    .info {
      .photo {
        img {
          border-radius: 16px;
        }
      }
      .details {
        color: $text-color;
        letter-spacing: -0.01em;

        .name {
          font-size: 36px;
          font-weight: 700;
        }

        .designation, .address {
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0em;
        }
      }
    }
    .button {
      margin-top: 70px;
    }
  }
</style>
