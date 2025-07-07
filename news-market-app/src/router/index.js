import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Will be the NewsView later
import LoginView from '../views/LoginView.vue';
import UserProfileView from '../views/UserProfileView.vue';
import MarketView from '../views/MarketView.vue';
import ExchangesView from '../views/ExchangesView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView, // This will display Thai-Cambodia news
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfileView,
  },
  {
    path: '/market',
    name: 'Market',
    component: MarketView,
  },
  {
    path: '/exchanges',
    name: 'Exchanges',
    component: ExchangesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
