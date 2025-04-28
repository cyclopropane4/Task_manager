import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TaskCreaterView from '../views/TaskCreatorView.vue'
import TaskDestroyerView from '../views/TaskDestroyerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/TaskCreator',
      name: 'taskCreator',
      component: TaskCreaterView,
    },
    {
      path: '/TaskDestroyer',
      name: 'taskDestroyer',
      component: TaskDestroyerView,
    },
  ],
})

export default router
