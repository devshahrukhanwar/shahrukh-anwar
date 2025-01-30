<script setup>
import { ref } from "vue";
import menu from '@/config/nav.json'
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
    <ThemeSwitch @is-dark="setTheme" v-if="false"/>
    <div class="columns is-flex-desktop is-block-mobile">
      <div class="column is-one-third" :class="{'is-hidden-mobile': $route.path !== menu.home.path}">
        <Profile />
      </div>
      <div class="column is-full-mobile">
        <router-view v-slot="{ Component }">
          <transition name="slide-fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <div class="column is-one-third is-hidden-desktop" :class="{'is-hidden-mobile': $route.path === menu.home.path}">
        <Profile />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .portfolio {
    position: relative;
    padding: 7.5rem 6rem 3rem;

    .slide-fade-enter-active, .slide-fade-leave-active {
      transition: all 0.5s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to {
      opacity: 0;
      transform: translateY(-30px);
    }

    @media screen and (max-width: 768px) {
      padding: 7.5rem 2rem 2rem;
    }
  }
</style>
