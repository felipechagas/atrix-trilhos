import Vue from 'vue';
import VueRouter from 'vue-router';
import TrilhosArvore from '../../components/TrilhosArvore.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: TrilhosArvore}
];

export default new VueRouter({
    routes
});