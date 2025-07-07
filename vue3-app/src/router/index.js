import { createRouter, createWebHistory } from 'vue-router';
import NewsPage from '../views/NewsPage.vue';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import MarketPage from '../views/MarketPage.vue';
import ExchangesPage from '../views/ExchangesPage.vue';
import UserDetailPage from '@/views/UserDetailPage.vue';

const routes = [
  { path: '/', component: NewsPage },
  { path: '/login', component: LoginPage },
  { path: '/profile', component: ProfilePage },
  { path: '/market', component: MarketPage },
  { path: '/exchanges', component: ExchangesPage },
  { path: '/user/:id', component: () => UserDetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
