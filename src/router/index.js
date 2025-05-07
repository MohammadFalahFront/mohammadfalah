import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Skills from '../pages/skills.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router