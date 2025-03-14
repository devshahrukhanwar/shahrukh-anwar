<script setup lang="ts">
import { Tool } from '@/components';
import { tools } from '@/config';
</script>

<template>
  <div class="columns is-block tools">
    <div class="column has-text-left has-text-centered-mobile pb-5 headline">
			<p class="heading">
				Top-Tier Tech for Exceptional <span class="text-highlight">Results</span>
			</p>
    </div>
    <div class="column is-inline-flex is-flex-wrap-wrap p-0 pl-3">
      <div class="column is-6 pl-0" v-for="tool in tools" :key="tool.name">
        <Tool :tool="tool" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tools {
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
