import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import authStore from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/expertos',
      name: 'experts',
      component: () => import('../views/ExpertsView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/horarios',
      name: 'schedules',
      component: () => import('../views/SchedulesView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/ayuda',
      name: 'help',
      component: () => import('../views/HelpView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/expert/:name',
      name: 'expertInfo',
      component: () => import('../views/ExpertInfoView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/registroExperto',
      name: 'registroExperto',
      component: () => import('../views/TestingFirebase.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/ClientView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/upcomingAlerts',
      name: 'upcomingAlerts',
      component: () => import('../views/ExpertUpcomingAlerts.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/expert',
      name: 'expert',
      component: () => import('../views/ExpertView.vue'),
      meta: { requiresAuth: true },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, from, next) => {
  const auth = authStore()
  if (to.meta.requiresAuth && !auth.getIsAuth) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
