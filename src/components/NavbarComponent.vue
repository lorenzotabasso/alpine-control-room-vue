<script setup lang="ts">
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'

const state = reactive({
  isMenuOpen: false,
})
</script>

<template>
  <nav class="bg-cyan-500 p-4 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white text-xl font-semibold">
        <RouterLink to="/">Alpine Control Room</RouterLink>
      </div>

      <!-- Centered Navbar links -->
      <div class="flex space-x-6 hidden md:flex">
        <RouterLink to="/" class="text-white hover:text-gray-300">Webcams</RouterLink>
        <RouterLink to="/map" class="text-white hover:text-gray-300">Map</RouterLink>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          id="menu-button"
          class="text-white"
          v-on:click="state.isMenuOpen = !state.isMenuOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <div
    id="mobile-menu"
    :class="{ hidden: !state.isMenuOpen, block: state.isMenuOpen }"
    class="md:hidden bg-cyan-500 text-white space-y-4 p-4"
  >
    <RouterLink to="/" class="block text-white hover:text-gray-300">Webcams</RouterLink>
    <RouterLink to="/map" class="block text-white hover:text-gray-300">Map</RouterLink>
  </div>
</template>
