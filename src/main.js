import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import ar from './locales/ar.json';
import './style.css'

const i18n = createI18n({
    messages: {
      en,
      ar
    }
  });

const app = createApp(App);
app.use(router)
app.use(i18n);
app.mount('#app')
