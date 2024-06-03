<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <footer class="bg-gradient-to-r from-purple-800 via-green-800 to-red-800 mt-5 text-white p-4">
    <div class="flex flex-col items-center space-y-4">
      <router-link to="/404">
        <button class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-600">
          Test 404 Page
        </button>
      </router-link>
      <p class="text-sm text-center">
        Thank you Setemi
        <HeartIcon class="text-red-500 inline-block w-4 h-4" />
        <br />
        For teaching JavaScript and React in the best way!
      </p>
    </div>
  </footer>
</template>
