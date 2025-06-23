<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { socials } from '@/config';
import { useThoughtsStore } from '@/stores';
import { Card, TwitterCard } from '@/components';

const thoughtsStore = useThoughtsStore();
const { socialData } = storeToRefs(thoughtsStore);

const twitterURL = socials.twitter.url;

onMounted(async () => {
	await thoughtsStore.fetchSocialData();
});
</script>

<template>
	<div class="thoughts columns is-block">
		<div class="column has-text-left has-text-centered-mobile pb-5 headline">
			<p class="heading">
				My Thoughts<span class="is-hidden-desktop"></span>
        <br />
        <span> and </span>
        <span class="text-highlight">Perspectives</span>
			</p>
		</div>
		<div>
			<div class="twitter-section column has-text-left pr-0">
				<div class="bullets mb-5">
					<span><span class="text-highlight is-clickable"># </span>My Thoughts</span>
				</div>
				<div class="column p-0 pl-3">
					<a
						target="_blank"
						rel="noopener noreferrer"
						:href="twitterURL"
					>
						<TwitterCard
							:tweets="socialData.twitter.tweets"
							:user="socialData.twitter.user"
							v-if="socialData"
						/>
					</a>
				</div>
			</div>
			<div class="blog-section column has-text-left mt-5 pr-0">
				<div class="bullets mb-1">
					<span><span class="text-highlight is-clickable"># </span>My Blogs</span>
				</div>
				<div class="column is-flex-desktop is-flex-wrap-wrap p-0">
					<div class="column is-6 pl-0" v-for="blog in socialData?.blogs" :key="blog.title">
						<a :href="blog.url" target="_blank" rel="noopener noreferrer">
							<Card
								:data="blog"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.thoughts {
	.bullets {
		font-size: 20px;
	}

	.blog-section {
		::v-deep(.card .banner) {
			height: 170px;
		}
		::v-deep(.card .banner img) {
			width: 100%;
			height: 170px;
			object-fit: cover;
		}
	}

	@media screen and (max-width: 768px) {
		.blog-section {
			padding-right: var(--bulma-column-gap) !important;

			.pl-0 {
				padding-right: 0;
			}
		}
  }
}
</style>