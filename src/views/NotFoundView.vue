<script setup>
const goHome = () => {
  window.location.href = '/'
}
</script>

<template>
  <div class="h-screen flex items-center justify-center text-center">
    <div>
      <img src="@/assets/error.png" alt="Page Not Found" width="350px" class="px-10" />
      <h1 class="text-3xl text-purple-600 mt-8 mb-4">Oops! Page Not Found</h1>
      <p class="text-xl mb-8">The page you are looking for does not exist.</p>
      <button
        @click="goHome"
        class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Go Home
      </button>
    </div>
  </div>
</template>
