<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Card } from '@/components';
import { misc, projects } from '@/config';
import { usePreload } from '@/composables/usePreload';
import { type GitHubSchema } from '@/stores/misc/schema';

const hoveredRepo = ref<string | null>(null);
const repositories: GitHubSchema[] = misc.github.repositories;

const { preloadImage } = usePreload();

onMounted(async () => {
  try {
		await Promise.allSettled(repositories.map(repo => preloadImage(repo.banner)));
  } catch {
    throw Error('Failed to preload images for GitHub repositories');
  }
});
</script>

<template>
	<div class="columns is-block projects">
		<div class="column has-text-left has-text-centered-mobile pb-5 headline">
			<p class="heading">
				Recent Projects <span class="is-hidden-desktop"></span>
				<br />
				<span> and </span>
				<span class="text-highlight">Achievements</span>
			</p>
		</div>
		<div class="column p-0 pl-3">
			<div class="my-projects column is-block p-0">
				<div class="bullets column has-text-left mb-1 p-0">
					<span class="text-highlight is-clickable"># </span>My Projects
				</div>
				<div class="column is-flex-desktop is-flex-wrap-wrap p-0">
					<div
						class="column is-6 pl-0 pb-0"
						v-for="repo in repositories"
						:key="repo.url"
					>
						<a :href="repo.url" target="_blank" rel="noopener noreferrer">
							<div class="column is-narrow p-0 is-clickable">
								<div class="column is-narrow is-align-items-center p-0">
									<div class="column banner p-0">
										<img
											:class="{'is-hovered': hoveredRepo === repo.url}"
											:src="repo.banner"
											:alt="repo.url"
											@mouseover="hoveredRepo = repo.url"
											@mouseleave="hoveredRepo = null"
										/>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="client-projects column is-block mt-5 p-0">
				<div class="bullets column has-text-left mb-1 p-0">
					<span class="text-highlight is-clickable"># </span>Client Projects
				</div>
				<div class="column is-flex-desktop is-flex-wrap-wrap p-0">
					<div
						class="column is-flex-desktop is-6 pl-0"
						v-for="project in projects"
						:key="project.title"
					>
						<a :href="project.url" target="_blank" rel="noopener noreferrer">
							<Card :data="project" :isLink="true" :tags="true" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.projects {
	.bullets {
		font-size: 20px;
	}

	.my-projects {
		.banner {
			img {
				border-radius: 0.75rem;
				transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			}
		}
	}
	
	&:hover {
		.my-projects {
			.banner {
				.is-hovered {
					transform: scaleX(1.01) scaleY(1.01);
				}
			}
		}
	}

	::v-deep(.card .subtitle) {
		margin-bottom: 10px;
	}
}
</style>
