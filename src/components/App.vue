<template lang="pug">
    div
        main-menu
        router-view
</template>

<script>
    import Vue from 'vue';
    import Menu from '../components/layout/Menu.vue';
    import Home from '../components/Home.vue';

    Vue.component('main-menu', Menu);
    Vue.component('trilhos-arvore', Home);

    export default {
        name: 'app'
    }
</script>
 
<style>
    
</style>