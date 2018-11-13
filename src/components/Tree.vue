<template lang="pug">

    .row
        .col-lg-3
            layer(:layerData="treeData")

        .col-lg-3
            layer(:layerData="treeData")

        .col-lg-3
            layer(:layerData="treeData")

        .col-lg-3
            layer(:layerData="treeData")

</template>

<script>
    import Layer from "../components/Layer.vue";

    export default {
        name: "tree",

        props: {
            treeData: Object
        },

        components: {
            Layer
        }
    };
</script>
