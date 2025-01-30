<script setup>
import menu from '@/config/nav.json'
</script>

<template>
  <nav class="topnav columns navbar is-inline-flex is-vcentered px-2">
    <div class="column is-narrow pr-1 py-0"
		:key="item.title"
		v-for="item in menu"
	>
		<router-link :to="item.path">
			<span
				class="icon is-clickable"
				:class="{'is-active': $route.path === item.path}"
				:title="item.title"
			>
				<i :class="item.icon"></i>
			</span>
		</router-link>
	</div>
  </nav>
</template>

<style lang="scss" scoped>
	.topnav {
		border-radius: 12px;

		i {
			color: var(--text-color);
			font-size: var(--icon-size);
		}
	}
</style>
