import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Index from '../views/Index.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
