import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import MapView from '@/views/MapView.vue'
import ReportView from '@/views/ReportView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/map', component: MapView },
  { path: '/report', component: ReportView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
