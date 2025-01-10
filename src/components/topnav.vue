<script setup>
import menu from '@/config/nav.json'
import Home from '@/components/icons/home.vue';

import { defineComponent, ref } from 'vue';

</script>

<template>
  <nav class="topnav columns navbar is-inline-flex is-vcentered px-4">
    <div class="column is-narrow"
			:key="item.title"
			v-for="item in menu"
		>
			<span
				class="icon is-clickable"
				:title="item.title"
			>
				<Home />
			</span>
		</div>
  </nav>
</template>

<style lang="scss" scoped>
	@import '@/style.scss';
	.topnav {
		background-color: $card-bg-color;
		border-radius: 12px;
	}
</style>
