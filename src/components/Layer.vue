<template lang="pug">

    ul
        li(v-for="node in getNodes") 
            | {{ node.label }}

</template>

<script>
    export default {
        name: "layer",

        props: {
            layerData: Object
        },

        computed: {
            getNodes: function () {
                var temp_array = []

                if(this.layerData.depth == 0) {
                    temp_array.push(this.layerData);
                    return temp_array;
                }

                for(var i; i<this.layerData.children.lenght; i++) {
                    {
                        if(this.layerData.children[i].depth == 1) temp_array.push(this.layerData.children[i]);
                        if(this.layerData.children[i].depth == 2) temp_array.push(this.layerData.children[i]);
                        if(this.layerData.children[i].depth == 3) temp_array.push(this.layerData.children[i]);
                        if(this.layerData.children[i].depth == 4) temp_array.push(this.layerData.children[i]);
                        if(this.layerData.children[i].depth == 5) temp_array.push(this.layerData.children[i]);
                        if(this.layerData.children[i].depth == 6) temp_array.push(this.layerData.children[i]);
                        if(this.layerData.children[i].depth == 7) temp_array.push(this.layerData.children[i]);
                        if(this.layerData.children[i].depth == 8) temp_array.push(this.layerData.children[i]);
                        if(this.layerData.children[i].depth == 9) temp_array.push(this.layerData.children[i]);
                    }
                }
                
                return temp_array;
            }
        }
    };
</script>