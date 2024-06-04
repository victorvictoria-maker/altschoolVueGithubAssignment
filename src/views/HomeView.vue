<script setup>
import Navbar from '../components/NavbarComponent.vue'
import EachRepoCard from '../components/EachRepoCard.vue'
import Footer from '../components/FooterComponent.vue'
import Pagination from '../components/PaginationComponent.vue'
import Loading from '../components/LoaderComponent.vue'
import NoMoreRepoComponent from '../components/NoMoreRepoComponent.vue'

import { ref, computed, onMounted } from 'vue'
import api from '@/services/fetchData'

const loading = ref(true)
const repos = ref([])
const filteredRepos = ref([])
const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = 6

const pageCount = computed(() => Math.ceil(filteredRepos.value.length / pageSize))

const paginatedRepos = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return filteredRepos.value.slice(start, end)
})

const handleSearch = (query) => {
  searchQuery.value = query
  currentPage.value = 1
  filterRepos()
}

const filterRepos = () => {
  filteredRepos.value = repos.value.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
}

const navigateToPage = (page) => {
  currentPage.value = page
}

onMounted(async () => {
  try {
    const response = await api.getAllRepos()
    repos.value = response.data
    filterRepos()
    loading.value = false
  } catch (error) {
    console.error('Error fetching repositories:', error)
  }
})
</script>

<template>
  <main>
    <Navbar @search="handleSearch" />
    <div v-if="!loading">
      <div class="container mx-auto p-4 mt-5">
        <div v-if="paginatedRepos.length <= 0"><NoMoreRepoComponent /></div>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <EachRepoCard v-for="repo in paginatedRepos" :key="repo.id" :repo="repo" />
        </div>
      </div>
      <Pagination
        :current-page="currentPage"
        :page-count="pageCount"
        @pageChange="navigateToPage"
      />
    </div>
    <div v-else>
      <Loading />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.pagination button {
  padding: 8px 16px;
  margin: 0 4px;
  background-color: #f3f3f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #e0e0e0;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
}

.pagination button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
