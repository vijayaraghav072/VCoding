// RECONSTRUCTED FILE — original was lost on 2026-05-26.
// Minimal Vue 3 bootstrap: router + unhead + global styles + svg sprite.
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@unhead/vue/client'
import 'virtual:svg-icons-register'

import App from './App.vue'
import { routes } from '@/router/routes'

import './styles/Variable.css'
import './styles/Global.css'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

const app = createApp(App)
app.use(router)
app.use(createHead())
app.mount('#app')
