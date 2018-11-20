<template lang="pug">

    .row.padding-row-ajust
        layerRoot(:layerData="treeData" :tdepth="0" style="z-index: 5;")

        layer(:layerData="treeData" :tdepth="1" style="z-index: 4;")

        layer(:layerData="treeData" :tdepth="2" style="z-index: 3;")

        layerLeafs(:layerData="treeData" :tdepth="3" style="z-index: 2;")

</template>

<script>
    import Layer from "../components/Layer.vue";
    import LayerRoot from "../components/LayerRoot.vue";
    import LayerLeafs from "../components/LayerLeafs.vue";

    export default {
        name: "tree",

        props: {
            treeData: Object
        },

        components: {
            Layer,
            LayerRoot,
            LayerLeafs
        }
    };
</script>
