<template lang="pug">
    transition(name="custom-classes-transition" enter-active-class="animated slideInLeft fastest" leave-active-class="animated slideOutLeft fastest")
        .col-lg-3.padding-col-ajust(v-show="getVisibility")
                .panel.panel-default
                    ul.layer
                        leaf(v-for="nodeLayer in getNodes" :nodeData="nodeLayer")
</template>

<script>
    import Leaf from "../components/Leaf.vue";

    export default {
        name: "layerLeafs",

        props: {
            layerData: Object,
            tdepth: false
        },

        data: () => ({
            visible: false
        }),

        computed: {
            getNodes: function () {
                var temp_array = [];

                for (var i = 0; i < this.layerData.children.length; i++) {
                    if (this.layerData.children[i].depth == this.tdepth) temp_array.push(this.layerData.children[i]);
                }

                return temp_array;
            },

            getVisibility: function () {
                if(this.tdepth == 0) return true;

                return this.visible;
            }
        },

        components: {
            Leaf
        }
    };
</script>
