import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';


import app from './components/app.vue';
import mainPage from './components/mainPage.vue';
import about from './components/about.vue';
import contact from './components/contacts.vue';

const routes = [
    { path: '/', component: mainPage },
    { path: '/about', component: about },
    { path: '/contacts', component: contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(app).use(router).mount('#app')
