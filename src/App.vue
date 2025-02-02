<script lang="ts" setup>
import { ref } from 'vue';

import ThemeSwitch from '@/components/common/theme-switch.vue';
import Profile from '@/components/profile.vue';
import TopNav from '@/components/topnav.vue';
import menu from '@/config/nav.json';

const isDarkMode = ref(true);
const setTheme = (isDarkTheme: boolean): void => {
	isDarkMode.value = isDarkTheme;
};

defineExpose({ setTheme });
</script>

<template>
	<div class="portfolio container is-fluid">
		<TopNav />
		<ThemeSwitch @is-dark="setTheme" v-if="false" />
		<div class="columns is-flex-desktop is-block-mobile">
			<div
				class="column is-one-third"
				:class="{ 'is-hidden-mobile': $route.path !== menu.home.path }"
			>
				<Profile />
			</div>
			<div class="column view is-full-mobile">
				<router-view />
			</div>
			<div
				class="column is-one-third is-hidden-desktop"
				:class="{ 'is-hidden-mobile': $route.path === menu.home.path }"
				v-if="0"
			>
				<Profile />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.portfolio {
	position: relative;
	padding: 7.5rem 6rem 3rem;

	.view {
		padding-left: 45px;
	}

	@media screen and (max-width: 768px) {
		padding: 7.5rem 2rem 2rem;

		.view {
			padding-left: 0;
			padding-right: 0;
		}
	}
}
</style>
