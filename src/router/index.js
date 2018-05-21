import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import LandingPage from '@/components/LandingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
