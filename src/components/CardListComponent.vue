<script setup>
import EachRepoCard from './EachRepoCard.vue'

const props = defineProps(['repos'])
const { repos } = props
// console.log(repos)
</script>

<template>
  <div class="container mx-auto p-4 mt-5">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      <EachRepoCard v-for="repo in repos" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>
