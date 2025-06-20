<script setup lang="ts">
import { Card } from '@/components';
import { projects } from '@/config';
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
		<div class="column is-flex-desktop is-flex-wrap-wrap p-0 pl-3">
			<div class="column is-6 pl-0" v-for="project in projects" :key="project.title">
				<Card :data="project" :isLink="false" />
			</div>
		</div>
	</div>
</template>