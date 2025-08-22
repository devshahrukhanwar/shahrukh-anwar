<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
import { nav, profile, socials } from '@/config';

const isDarkMode = ref(true);
const setTheme = (isDarkTheme: boolean): void => {
	isDarkMode.value = isDarkTheme;
};

/**
 * This is loaded explcitly, as this is the first thing that should be shown to user
 */
import {
	Profile
} from '@/components';


/**
 * Rest of the components are loaded asynchronously to improve initial load time
 * This is done to ensure that the initial load is fast and the user can see the content
 * This will greatly improve the user experience and reduce the initial load time
 */
const FAQ = defineAsyncComponent(() => import('@/components/common/FAQ.vue'));
const TopNavbar = defineAsyncComponent(() => import('@/components/TopNav.vue'));
const Collaborate = defineAsyncComponent(() => import('@/components/common/Collaborate.vue'));
const ThemeSwitch = defineAsyncComponent(() => import('@/components/common/ThemeSwitch.vue'));

defineExpose({ setTheme });
</script>

<template>
	<div class="portfolio container is-fluid">
		<TopNavbar />
		<ThemeSwitch @is-dark="setTheme" v-if="false" />
		<div class="columns is-flex-desktop is-block-mobile">
			<div
				class="column is-one-third profile-section"
				:class="{ 'is-hidden-mobile': $route.path !== nav.home.path }"
			>
				<Profile />
			</div>
			<div class="column view is-full-mobile">
				<!-- Common Section Begins -->
				<div class="column p-0 section-margin-top-30-mobile">
					<router-view />
				</div>
				<div class="column p-0">
					<section class="section-margin-top-60 section-margin-top-30-mobile">
						<!-- FAQ Section Begins -->
						<FAQ />
					</section>
					<!-- FAQ Section Ends -->
					<section
						class="section-margin-top-60 section-margin-top-90-mobile"
						v-if="$route.meta.showCollab"
					>
						<!-- Collaborate Section Begins -->
						<Collaborate />
					</section>
					<!-- Collaborate Section Ends -->
				</div>
			</div>
			<!-- Common Section Ends -->
		</div>
		<div class="credit-section p-5">
			Developed by
			<a
				target="_blank"
				rel="noopener noreferrer"
				class="text-highlight"
				:href="`${socials.github.url}/shahrukh-anwar`"
			>
				<span class="has-text-white"><i class="fa-brands fa-github"></i>/</span
				><span>{{ profile.github }}</span>
			</a>
			<p>Built with Vue.js | Hosted on Vercel</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.portfolio {
	position: relative;
	padding: 6.8rem 6rem 3rem;

	.profile-section {
		top: 0;
		height: fit-content;
		position: sticky;
	}
	.view {
		padding-left: 45px;
	}
	.credit-section {
		font-size: 16px;
		padding-bottom: 0 !important;
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
		.credit-section {
			font-size: 16px;
		}
	}
}
</style>
