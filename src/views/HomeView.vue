<script setup>
import Navbar from '../components/NavbarComponent.vue'
import EachRepoCard from '../components/EachRepoCard.vue'
import Footer from '../components/FooterComponent.vue'
import Loading from '../components/LoaderComponent.vue'

import { onMounted, reactive } from 'vue'
import api from '@/services/fetchData'
const myGithubData = reactive({
  details: null,
  repos: []
  // links: null,
  // totalPages: 0,
  // currentPage: 1
})

onMounted(() => {
  api.getMyData().then((response) => {
    myGithubData.details = response.data
    // console.log(myGithubData.details)
  })

  api
    .getAllRepos()
    .then((response) => {
      myGithubData.repos = response.data
      // console.log(myGithubData.repos)
    })
    .catch((error) => {
      console.log(error)
      // if (error.response && error.response.status == 404) {
      //   router.push({
      //     name: '404Resource',
      //     params: { resource: 'repo' }
      //   })
      // } else {
      //   router.push({ name: 'NetworkError' })
      // }
    })
})

if (myGithubData) {
  console.log(myGithubData)
}
</script>

<template>
  <main>
    <Navbar />
    <div v-if="!myGithubData">
      <Loading />
    </div>
    <div v-if="myGithubData">
      <div class="container mx-auto p-4 mt-5">
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <EachRepoCard v-for="repo in myGithubData.repos" :key="repo.id" :repo="repo" />
        </div>
      </div>
      <!-- <CardListComponent :repos="myGithubData.repos" /> -->
    </div>
    <Footer />
  </main>
</template>
