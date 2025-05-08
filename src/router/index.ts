import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/expertos',
      name: 'experts',
      component: () => import('../views/ExpertsView.vue'),
    },
    {
      path: '/horarios',
      name: 'schedules',
      component: () => import('../views/SchedulesView.vue'),
    },
    {
      path: '/ayuda',
      name: 'help',
      component: () => import('../views/HelpView.vue'),
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/expertoInfo',
      name: 'expertInfo',
      component: () => import('../views/ExpertInfoView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/tsfb',
      name: 'testingFirebase',
      component: () => import('../views/TestingFirebase.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
