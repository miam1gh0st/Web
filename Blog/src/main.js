import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import AboutMe from './components/AboutMe.vue'
import MainPage from './components/MainPage.vue'
import TechSupport from './components/TechSupport.vue'
import LoginSheet from './components/LoginSheet.vue'
import LifeStyle from './components/LifeStyle.vue'
import TeamMember from './components/TeamMember.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/AboutMe', component: AboutMe },
    { path: '/TechSupport', component: TechSupport },
    { path: '/LoginSheet', component: LoginSheet },
    { path: '/LifeStyle', component: LifeStyle },
    { path: '/TeamMember', component: TeamMember },
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

createApp(App).use(router).mount('#app')
