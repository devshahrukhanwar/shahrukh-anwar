<template>
  <div>
    <h1>Hello, {{ name }}!</h1>
    <p><b>Email: </b>{{ email }}</p>
    <p><b>Message: </b>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Sender } from 'src/notifications';

const props = defineProps<Sender>();
</script>

<style scoped>
/* Add any styles here */
</style>