<script setup lang="ts">
import { Tool } from '@/components';
import { tools } from '@/config';
</script>

<template>
	<div class="columns is-block tools">
		<div class="column has-text-left has-text-centered-mobile pb-5 headline">
			<p class="heading">
				Top-Tier Tech for Exceptional
				<span class="text-highlight">Results</span>
			</p>
		</div>
		<div class="column is-inline-flex is-flex-wrap-wrap p-0 pl-3">
			<div class="column is-6 pl-0" v-for="tool in tools" :key="tool.name">
				<a :href="tool.url" target="_blank" rel="noopener noreferrer">
					<Tool :tool="tool" />
				</a>
			</div>
		</div>
	</div>
</template>
