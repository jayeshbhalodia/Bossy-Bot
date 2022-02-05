import { createRouter, createWebHashHistory, VueRouter } from 'vue-router'
import Home from './views/home.vue'

export default () => createRouter({
  mode: 'hash',
  history: createWebHashHistory(),
  hash: true,
  routes: [
    {
      path: '/onboarding',
      name: 'onboarding',
      component: () => import('./views/onboarding.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/contact.vue')
    },
  ]
});
