<script setup lang="ts">
import { Card } from '@/components';
import { thoughts } from '@/config';
import { useSocial } from '@/composables';

const { getSocialData } = useSocial();

const socialData = getSocialData();
</script>

<template>
	<div class="columns is-block thoughts">
		<div class="column has-text-left has-text-centered-mobile pb-5 headline">
			<p class="heading">
				My Thoughts<span class="is-hidden-desktop"></span>
        <br />
        <span> and </span>
        <span class="text-highlight">Perspectives</span>
			</p>
		</div>
		<div class="column is-flex-desktop is-flex-wrap-wrap p-0 pl-3">
			<div class="column is-6 pl-0" v-for="thought in thoughts" :key="thought.title">
				<Card :data="thought" :isLink="false" />
			</div>
		</div>
	</div>
</template>