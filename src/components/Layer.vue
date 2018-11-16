<template lang="pug">
    transition(name="custom-classes-transition" enter-active-class="animated slideInLeft fastest" leave-active-class="animated slideOutLeft fastest")
        .col-lg-3.padding-col-ajust(v-if="getVisibility")
                .panel.panel-default
                    ul.layer
                        li(v-for="node in getNodes" @click="toggleLayer") 
                            | {{ node.label }}
                        img(v-if="isRoot" src="/modules/addons/trilhos/www/images/temp_image.jpeg")
</template>

<script>
export default {
    name: "layer",

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

            if (this.tdepth == 0) {
                temp_array.push(this.layerData);
                return temp_array;
            }

            for (var i = 0; i < this.layerData.children.length; i++) {
                if (this.layerData.children[i].depth == this.tdepth) temp_array.push(this.layerData.children[i]);
            }

            return temp_array;
        },

        getVisibility: function () {
            if(this.tdepth == 0) return true;

            return this.visible;
        },

        isRoot: function () {
            if(this.tdepth == 0) return true;

            return false;
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
