<script setup>
import { ref } from 'vue'
import Social from './social.vue';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="card profile container is-fluid p-6">
    <div class="info mb-2">
      <div class="photo">
        <img src="@/assets/profile.avif" alt="profile-photo" />
      </div>
      <div class="details mt-3">
        <section class="name">Shahrukh Anwar</section>
        <section class="designation">Full Stack Developer</section>
        <section class="address">Allahabad, India</section>
      </div>
    </div>
    <Social />
    <button class="button">
      Let's Talk
    </button>
  </div>
</template>

<style lang="scss" scoped>
  @import '@/style.scss';
  .profile {
    border-radius: 16px;

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
          color: $text-color-grey;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0em;
        }
      }
    }
    .button {
      padding: 8px 50px;
      margin-top: 70px;
    }
  }
</style>
