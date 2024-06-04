<template>
  <nav class="pagination">
    <ul>
      <li v-if="currentPage > 1">
        <button @click="goToPage(currentPage - 1)">Previous</button>
      </li>
      <li v-for="pageNumber in pagesToShow" :key="pageNumber">
        <button @click="goToPage(pageNumber)" :class="{ active: pageNumber === currentPage }">
          {{ pageNumber }}
        </button>
      </li>
      <li v-if="currentPage < pageCount">
        <button @click="goToPage(currentPage + 1)">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: Number,
  pageCount: Number
})

const emit = defineEmits(['pageChange'])

const pageRange = 5
const pagesToShow = computed(() => {
  const start = Math.max(1, props.currentPage - Math.floor(pageRange / 2))
  const end = Math.min(props.pageCount, start + pageRange - 1)
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
})

const goToPage = (page) => {
  if (page !== props.currentPage && page > 0 && page <= props.pageCount) {
    emit('pageChange', page)
  }
}
</script>

<style scoped>
.pagination ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}
.pagination li {
  margin: 0 5px;
}
.pagination button {
  padding: 5px 10px;
}
.pagination button.active {
  font-weight: bold;
}
</style>
