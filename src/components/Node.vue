<template lang="pug">

    li(@click="toggleLayer" v-show="visible")
        | {{nodeData.label}}

</template>

<script>
    export default {
        name: "node",

        props: {
            nodeData: Object
        },

        data: () => ({
            visible: true
        }),
        
        methods: {
            toggleLayer: function () {
                var nextLayer = this.$parent.$parent.$children[this.$parent.tdepth+1];

                if(nextLayer.visible) {
                    for(var i=this.$parent.tdepth+1; i<=3; i++) {
                        this.$parent.$parent.$children[i].visible = false;
                    }
                }
                
                nextLayer.visible = true;
                this.$parent.openNode = this.id_layer;

                this.updateLayer();
            },

            updateLayer: function () {
                var reference = this.$parent.$parent.$children[this.$parent.tdepth+1].$children;
                console.log(reference);
                for(var i=0; i<reference.length; i++) {
                    if(reference[i].nodeData.id_parent == this.nodeData.id_layer) reference[i].visible = true;
                    else reference[i].visible = false;
                }
            }
        },
    };
</script>