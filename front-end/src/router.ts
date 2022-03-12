import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage, children: []},
    ]
})

export default router