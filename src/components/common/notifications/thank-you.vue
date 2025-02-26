<template>
	<div>
		<p>Hello, {{ name }}!</p>
		<p>
			Thank you for contacting me. It's great to hear from you. I will get back
			to you shortly.
		</p>
		<p>Let's connect and collaborate!</p>
		<span>Have a great day!</span>
		<br />
		<p>Thanks & regards,</p>
		<span>{{ profile.name }}</span>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import { profile } from '@/config';
import { type Contact } from '@/notifications';

const props = defineProps<Contact>();
</script>

<style scoped>
/* Add any styles here */
</style>
