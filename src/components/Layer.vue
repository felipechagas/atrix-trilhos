<template lang="pug">
    transition(name="custom-classes-transition" enter-active-class="animated slideInLeft fastest" leave-active-class="animated slideOutLeft fastest")
        .col-lg-3.padding-col-ajust(v-show="getVisibility")
            .panel.panel-default
                ul.layer
                    .input-group.searchTree
                        span.input-group-addon
                            i.glyphicon.glyphicon-search
                        input.form-control(type="text" v-model="searchNode" placeholder="Pesquisar Ação")
                    node(v-for="nodeLayer in getNodes" :nodeData="nodeLayer")
</template>

<script>

    import Node from "../components/Node.vue";

    export default {
        name: "layer",

        props: {
            layerData: Object,
            tdepth: false
        },

        data: () => ({
            visible: false,
            searchNode: "",

        }),

        computed: {
            getNodes: function () {
                var temp_array = [];

                for (var i = 0; i < this.layerData.children.length; i++) {
                    if (this.layerData.children[i].depth == this.tdepth) temp_array.push(this.layerData.children[i]);
                }

                return temp_array.filter((node) => {
                    return node.label.match(this.searchNode);
                });
            },

            getVisibility: function () {
                if(this.tdepth == 0) return true;

                return this.visible;
            }
        },

        components: {
            Node
        }
    };
</script>
