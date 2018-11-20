<template lang="pug">
    transition(name="custom-classes-transition" enter-active-class="animated slideInLeft fastest" leave-active-class="animated slideOutLeft fastest")
        .col-lg-3.padding-col-ajust(v-show="getVisibility")
                .panel.panel-default(@click="toggleLayer")
                    ul.layer.root-tree-box
                        li.root-tree.text-center(v-for="node in getNodes") 
                            | {{ node.label }}
                        img(src="/modules/addons/trilhos/www/images/atendimento-prime-home.png")
</template>

<script>
export default {
    name: "layerRoot",

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

            temp_array.push(this.layerData);

            return temp_array;
        },

        getVisibility: function () {
            return true;
        }
    },

    methods: {
        toggleLayer: function () {
            if(this.$parent.$children[this.tdepth+1].visible) {
                for(var i=this.tdepth+1; i<=3; i++) {
                    this.$parent.$children[i].visible = false;
                }
            }
            
            this.$parent.$children[this.tdepth+1].visible = true;
        },
    }
};
</script>
