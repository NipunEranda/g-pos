import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Index from '../views/Index.vue';
import store from '../store';

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
});

router.beforeEach((to, from) => {
  if(!store.state.auth.currentUser && to.name !== "index")
    return '/';
});

export default router;
