<script setup>
import menu from '@/config/nav.json'
import Home from '@/components/icons/home.vue';
</script>

<template>
  <nav class="topnav columns navbar is-inline-flex is-vcentered px-4">
    <div class="column is-narrow"
			:key="item.title"
			v-for="item in menu"
		>
		<router-link :to="item.path">
			<span
				class="icon is-clickable"
				:title="item.title"
			>
				<Home />
			</span>
		</router-link>
		</div>
  </nav>
</template>

<style lang="scss" scoped>
	.topnav {
		border-radius: 12px;
	}
</style>
