<script setup>
import { ref } from 'vue';

import { Tooltip } from '@/components';
import { nav } from '@/config';

const isHovering = ref({});
</script>

<template>
	<nav class="topnav columns navbar is-inline-flex is-vcentered px-2">
		<div
			class="column is-narrow is-flex is-justify-content-center pr-1 py-0"
			:key="item.title"
			v-for="item in nav"
		>
			<router-link
				class="link"
				:to="item.path"
				@mouseenter="isHovering[item.title] = true"
				@mouseleave="isHovering[item.title] = false"
			>
				<span
					class="icon is-clickable"
					:class="{ 'is-active': $route.path === item.path }"
				>
					<i :class="item.icon"></i>
				</span>
			</router-link>
			<Tooltip
				class="is-hidden-mobile"
				:content="item.title"
				v-if="isHovering[item.title]"
			/>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.topnav {
	top: 40px;
	z-index: 9;
	transform: translate(-50%);
	position: absolute;
	border-radius: 12px;

	i {
		color: var(--text-color);
		font-size: var(--icon-size);
	}

	.tooltip {
		bottom: -25px;
		position: absolute;
	}

	@media screen and (max-width: 768px) {
		position: fixed;
		transform: translate(-46%);
	}
}
</style>
