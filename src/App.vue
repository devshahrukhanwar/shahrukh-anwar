<script lang="ts" setup>
import { ref } from 'vue';

import menu from '@/config/nav.json';
import { Collaborate, FAQ, Profile, TopNavbar, ThemeSwitch } from '@/components';

const isDarkMode = ref(true);
const setTheme = (isDarkTheme: boolean): void => {
	isDarkMode.value = isDarkTheme;
};

defineExpose({ setTheme });
</script>

<template>
	<div class="portfolio container is-fluid">
		<TopNavbar />
		<ThemeSwitch @is-dark="setTheme" v-if="false" />
		<div class="columns is-flex-desktop is-block-mobile">
			<div
				class="column is-one-third profile-section"
				:class="{ 'is-hidden-mobile': $route.path !== menu.home.path }"
			>
				<Profile />
			</div>
			<div class="column view is-full-mobile pb-5"> <!-- Common Section Begins -->
				<div class="column p-0"><router-view /></div>
				<div class="column p-0">
					<section class="section-margin-top-60 section-margin-top-30-mobile">
						<!-- FAQ Section Begins -->
						<FAQ />
					</section>
					<!-- FAQ Section Ends -->
					<section class="section-margin-top-60 section-margin-top-90-mobile" v-if="$route.meta.showCollab">
						<!-- Collaborate Section Begins -->
						<Collaborate />
					</section>
					<!-- Collaborate Section Ends -->
				</div>
			</div> <!-- Common Section Ends -->
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

	.profile-section {
		top: 0;
    height: fit-content;
    position: sticky;
	}
	.view {
		padding-left: 45px;
	}

	@media screen and (max-width: 768px) {
		padding: 7.5rem 2rem 2rem;

		.profile-section {
			position: unset;
		}
		.view {
			padding-left: 0;
			padding-right: 0;
		}
	}
}
</style>
