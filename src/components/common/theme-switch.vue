<template>
    <div class="dark-light-switcher">
			<Sun class="is-clickable" @click="toggleTheme" v-if="isDarkMode"/>
			<Moon class="is-clickable" @click="toggleTheme" v-else/>
    </div>
  </template>
  
  <script setup>
	import Sun from "@/components/icons/sun.vue";
	import Moon from "@/components/icons/moon.vue";
  import { ref, computed, onMounted } from "vue";
  
  const isDarkMode = ref(true);
  const addClass = computed(() => isDarkMode.value ? 'dark' : 'light');
  const emit = defineEmits();
  
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('theme', addClass.value);
		document.documentElement.setAttribute('data-theme', addClass.value);

    emit("is-dark", isDarkMode.value);
  };
  </script>
  
  <style scoped>
  .dark-light-switcher {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
  }
  
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .button.is-light {
    color: #4a4a4a;
    background-color: #f5f5f5;
  }
  
  .button.is-dark {
    color: #ffffff;
    background-color: #363636;
  }
  
  .button i {
    font-size: 1.2rem;
  }
  </style>
  