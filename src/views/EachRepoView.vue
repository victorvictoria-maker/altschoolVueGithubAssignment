<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/services/fetchData'
import NotFoundView from './NotFoundView.vue'
import Loading from '../components/LoaderComponent.vue'

const repoName = ref(null)
const languages = ref([])
const repositoryData = ref(null)
const repositoryCommits = ref([])
const isLoading = ref(true)

const route = useRoute()

onMounted(async () => {
  repoName.value = route.params.repoName

  try {
    const {
      repositoryData: repoData,
      languages: langs,
      commits
    } = await api.getEachRepoData(repoName.value)
    repositoryData.value = repoData
    languages.value = langs
    repositoryCommits.value = commits
  } catch (error) {
    console.error('Error fetching repository data:', error)
    repositoryData.value = null
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
      <Loading />
    </div>
    <div v-else>
      <div
        v-if="repositoryData"
        class="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-r from-purple-800 via-green-400 to-red-500"
      >
        <div class="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 text-left">
          <div class="flex justify-between items-center mb-6">
            <h1
              class="text-xl sm:text-2xl font-bold text-gray-800 flex items-center flex-wrap sm:flex-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.21.66-.47v-1.68c-2.78.61-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85.01 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.16.56.67.47A10.014 10.014 0 0022 12c0-5.52-4.48-10-10-10z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="w-full sm:w-auto">{{ repoName }}</span>
            </h1>
          </div>
          <div v-if="languages.length" class="flex flex-wrap mb-4">
            <span
              v-for="(lang, index) in languages"
              :key="index"
              class="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded mr-2 mb-2"
            >
              {{ lang }}
            </span>
          </div>
          <p class="text-sm text-gray-500 mb-2">Public repository</p>
          <p class="text-sm text-gray-500 mb-2">Main Language: {{ repositoryData.language }}</p>
          <p class="text-sm text-gray-500 mb-2">
            Default Branch: {{ repositoryData.default_branch }}
          </p>
          <p class="text-sm text-gray-500 mb-2">Last Updated: {{ repositoryData.updated_at }}</p>
          <p class="text-sm text-gray-500 mb-4">Created At: {{ repositoryData.created_at }}</p>
          <p class="text-sm text-gray-500 mb-2">
            Last Commit Message: {{ repositoryCommits[0]?.commit?.message }}
          </p>
          <p class="text-sm text-gray-500 mb-6">
            Last Committed: {{ repositoryCommits[0]?.commit?.author?.date }}
          </p>
          <div class="flex flex-wrap justify-between mb-3">
            <p class="text-sm text-gray-500 mb-2 md:mb-0">
              No of Commits: {{ repositoryCommits.length }}
            </p>
            <p class="text-sm text-gray-500 mb-2 md:mb-0">Size: {{ repositoryData.size }} KB</p>
            <p class="text-sm text-gray-500 mb-2 md:mb-0">
              Forks: {{ repositoryData.forks_count }}
            </p>
            <p class="text-sm text-gray-500 mb-2 md:mb-0">
              Subscribers: {{ repositoryData.subscribers_count }}
            </p>
            <p class="text-sm text-gray-500 mb-2 md:mb-0">
              Watchers: {{ repositoryData.watchers_count }}
            </p>
          </div>
          <div class="flex justify-between flex-wrap">
            <a
              :href="repositoryData.html_url"
              target="_blank"
              class="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 mb-2"
            >
              View on Github
            </a>
            <router-link
              to="/"
              class="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-900 mb-2"
            >
              See other repositories
            </router-link>
          </div>
        </div>
      </div>
      <NotFoundView v-else />
    </div>
  </div>
</template>
