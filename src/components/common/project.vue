<script setup lang="ts">
interface Project {
	title: string;
	subtitle: string;
	banner: string;
}

interface Props {
	project: Project;
}

defineProps<Props>();
</script>

<template>
	<div class="column card is-narrow p-0 is-clickable project">
		<div class="column is-narrow is-align-items-center px-0 pt-0">
			<div class="column banner p-0">
				<img :src="project.banner" :alt="project.title">
			</div>
			<div class="column has-text-left px-4 pt-4 pb-0">
				<div class="title mb-2">{{ project.title }}</div>
				<div class="subtitle">{{ project.subtitle }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.project {
	background-color: var(--card-bg-color);

	.title {
		color: var(--text-color);
		font-size: 28px;
		font-weight: 550;
	}
	.subtitle {
		color: var(--text-color-grey);
		font-size: var(--text-small-font-size);
	}
  .column.banner {
    overflow: hidden;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }
  .banner {    
    width: 100%;
    height: 200px;

    img {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
    }
  }

	&:hover {
    .title {
      color: var(--text-highlight);
		}
    img {
      transform: scaleX(1.05) scaleY(1.05);
    }
	}
}
</style>
