<script setup>
import { defineProps, computed } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { capitalizeText, formatDate } from '../utils/formatter.js'

const props = defineProps(['repo'])
const { repo } = props

const truncatedRepoName = computed(() => {
  const name = capitalizeText(repo.name)
  return name.length > 17 ? name.slice(0, 25) + '...' : name
})
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-purple-600 p-6 m-2"
    :key="repo.created_at"
  >
    <header>
      <h2 class="text-3xl font-bold text-black mb-4">
        {{ truncatedRepoName }}
      </h2>
    </header>
    <section class="mt-2">
      <p class="text-xl mb-1">Main Language: {{ repo.language || 'None' }}</p>
      <p class="text-xl mb-1">Last Updated: {{ formatDate(repo.updated_at) }}</p>
      <p class="text-xl mb-1">{{ capitalizeText(repo.visibility) }} repo</p>
      <div class="flex justify-between items-center mt-6">
        <router-link :to="`/repo/${repo.name}`">
          <button class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-600">
            More details <ArrowRightIcon class="w-4 h-4 ml-2 inline-block" />
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>
