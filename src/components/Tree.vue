<template lang="pug">

    .row.padding-row-ajust
        layer(:layerData="treeData" :tdepth="0" :visible_prop="true" style="z-index: 5;")

        layer(:layerData="treeData" :tdepth="1" style="z-index: 4;")

        layer(:layerData="treeData" :tdepth="2" style="z-index: 3;")

        layer(:layerData="treeData" :tdepth="3" style="z-index: 2;")

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
