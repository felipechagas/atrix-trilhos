import Vue from 'vue';
import VueRouter from 'vue-router';
import Tree from '../../components/Tree.vue'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Tree}
];

export default new VueRouter({
    routes
});