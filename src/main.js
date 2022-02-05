import { createApp } from 'vue';
import App from './App.vue';
import createRouter from './router';
import './index.css'

const router = createRouter();

router.beforeEach((to, from) => {
    if (to.name === 'onboarding') {
        return true;
    }

    if (!window.user) {
        router.push('onboarding');
        return false;
    }
    return true;
});

// 
createApp(App)
  .use(router)
  .mount('#app');
