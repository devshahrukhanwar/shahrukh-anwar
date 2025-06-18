<script setup lang="ts">
import { Project } from '@/components';
import { projects } from '@/config';
</script>

<template>
	<div class="columns is-block projects">
		<div class="column has-text-left has-text-centered-mobile pb-5 headline">
			<p class="heading">
				Recent Projects <span class="is-hidden-desktop">and</span>
        <br />
        <span class="is-hidden-mobile"> and </span>
        <span class="text-highlight">Achievements</span>
			</p>
		</div>
		<div class="column is-inline-flex is-flex-wrap-wrap p-0 pl-3">
			<div class="column is-6 pl-0" v-for="project in projects" :key="project.title">
				<Project :project="project" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.projects {
	.headline {
		.heading {
			font-size: 68px;
			font-weight: 550;
			line-height: 1.1em;
		}
	}

	@media screen and (max-width: 768px) {
		.headline {
			padding-left: 0;
			padding-right: 0;

			.heading {
				font-size: 48px;
			}
		}
	}
}
</style>
