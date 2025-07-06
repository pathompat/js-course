import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import UserDetailPage from '@/views/UserDetailPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/user/:id', component: () => UserDetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;