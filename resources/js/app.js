import { createApp } from 'vue';
import { store } from './store'
import { createRouter, createWebHashHistory } from 'vue-router';


import app from './components/app.vue';
import mainPage from './components/mainPage.vue';
import about from './components/about.vue';
import contact from './components/contacts.vue';
import login from './components/login.vue';
import dashboard from './components/dashboard.vue';
import create from './components/dashcomps/WorkerCreate.vue';
import edit from './components/dashcomps/WorkerEdit.vue';
import watch from './components/dashcomps/WorkerWatch.vue';
import workerCard from './components/workerside/WorkerCard.vue';

const routes = [
    { path: '/', name: 'HomePage', component: mainPage },
    { path: '/about', component: about },
    { path: '/contacts', component: contact },
    { path: '/login', component: login },
    { path: '/:id/card', name: "WorkerCard", component: workerCard, props: true },
    { path: '/dashboard', name: 'WorkerIndex', component: dashboard },
    { path: '/create', component: create },
    { path: '/:id/edit', name: 'WorkerEdit', component: edit, props: true },
    { path: '/:id/watch', name: 'WorkerWatch', component: watch, props: true },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export { router }
createApp(app).use(router).use(store).mount('#app')
