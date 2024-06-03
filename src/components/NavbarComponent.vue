<template>
  <nav
    className="bg-gradient-to-r from-purple-800 via-green-800 to-red-800 p-4 flex flex-wrap items-center justify-between"
  >
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-2 text-white"
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

      <h1 className="text-white text-lg font-bold sm:mb-1 mb:4  ">victorvictoria-maker</h1>
    </div>

    <div className="flex items-center justify-between w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search repo..."
        className="px-4 py-2 bg-gray-100 text-black rounded-md focus:outline-none focus:bg-gray-100  mr-4"
        required
        aria-required="true"
      />
    </div>
  </nav>
</template>

<script setup></script>

<style lang="css" scoped></style>
