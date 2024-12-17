import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import MapView from '@/views/MapView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/map', component: MapView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
