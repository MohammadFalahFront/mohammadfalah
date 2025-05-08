import { createRouter, createWebHashHistory } from 'vue-router'
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
    name: 'Skills',
    component: Skills
  }
]

const router = createRouter({
  history: createWebHashHistory(), // ✅ استخدم hash mode
  routes
})

export default router
