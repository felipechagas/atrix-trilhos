<template lang="pug">
    
    .tree
        ul.tree-list
            node-tree(:node="treeData" class="depth")
            
</template>

<script>
    import NodeTree from "../components/NodeTree.vue";

    export default {
        props: {
            treeData: Object
        },
        components: {
            NodeTree
        }
    };
</script>
