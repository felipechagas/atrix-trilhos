<template lang="pug">
    .menu
        nav.navbar.navbar-default.menu-bar
            .navbar-header
                button.navbar-toggle
                    span Toggle navigation
                    span.icon-bar
                    span.icon-bar
                    span.icon-bar
                a.navbar-brand.alinh-isp.logo Trilhos  
            //.container-fluid
                .collapse.navbar-collapse
                    ul.nav.navbar-nav.alinhar
                        li: router-link(to="/") item

</template>

<script>
    export default {
        name: 'main-menu'
    }
</script>