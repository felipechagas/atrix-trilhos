<template lang="pug">
    div
        main-menu
        router-view

</template>

<script>
    import Vue from 'vue';
    import Menu from '../components/layout/Menu.vue';

    Vue.component('main-menu', Menu);

    export default {
        name: 'app'
    }
</script>

<style>
    
</style>