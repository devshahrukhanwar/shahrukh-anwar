<script setup lang="ts">
import { Introduction } from '@/components';
import { Tools, Projects } from '@/views';
</script>

<template>
	<section>
		<Introduction />
		<Projects class="mt-6 section-margin-top-0-mobile" />
		<Tools />
	</section>
</template>

<style lang="scss" scoped>

::v-deep(.tools) {
	margin-top: 3rem;
}

::v-deep(.tools .headline .heading),
::v-deep(.projects .headline .heading) {
	font-size: 58px !important;
	font-weight: 500 !important;
	text-shadow: 0.03em 0 0 currentColor;

	@media screen and (max-width: 768px) {
		font-size: var(--h2-mobile-size) !important;
	}
}
</style>
