import { createRouter, createWebHashHistory } from 'vue-router';
import MapView from './views/MapView.vue';
import LoginView from './views/LoginView.vue';

const routes = [
    { path: '/mapView', component: MapView },
    { path: '/loginView', component: LoginView },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
