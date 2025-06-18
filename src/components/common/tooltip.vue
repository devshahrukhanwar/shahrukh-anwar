<script lang="ts" setup>
interface Props {
	content: string;
}

defineProps<Props>();
</script>

<template>
	<div class="tooltip">
		<div class="tooltip-content">
			{{ content }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
.tooltip {
	padding: 2px 5px;
	font-size: 12px;
	border-radius: 5px;
	background-color: var(--card-bg-color);
}
</style>